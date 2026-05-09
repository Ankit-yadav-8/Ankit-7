import { useEffect, useRef } from 'react';
import * as THREE from 'three';
 
interface ParticleTextProps {
  text?: string;
  subText?: string;
}
 
export default function ParticleText({ text = 'THINK INDIA', subText = 'IIT ROORKEE' }: ParticleTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef  = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef     = useRef<number>(0);
  const mouseRef     = useRef({ x: 0, y: 0 });
  const scrollRef    = useRef(0);
 
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
 
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 90;
 
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;
 
    const offCanvas = document.createElement('canvas');
    const offCtx    = offCanvas.getContext('2d')!;
    const fontSize  = 22;
    offCtx.font     = `bold ${fontSize}px sans-serif`;
    const lines     = [text, subText];
    const lineH     = fontSize * 2.2;
    const maxW      = Math.max(...lines.map(l => offCtx.measureText(l).width));
    offCanvas.width  = Math.ceil(maxW) + 60;
    offCanvas.height = lines.length * lineH + 60;
    offCtx.fillStyle    = '#ffffff';
    offCtx.font         = `bold ${fontSize}px sans-serif`;
    offCtx.textAlign    = 'center';
    offCtx.textBaseline = 'middle';
    lines.forEach((l, i) => offCtx.fillText(l, offCanvas.width / 2, 30 + i * lineH + fontSize / 2));
 
    const imgData = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height);
    const px      = imgData.data;
    type PPos = { ox: number; oy: number };
    const ppos: PPos[] = [];
    const step = 2;
    for (let y = 0; y < offCanvas.height; y += step)
      for (let x = 0; x < offCanvas.width; x += step)
        if (px[((y * offCanvas.width + x) * 4) + 3] > 128)
          ppos.push({ ox: (x - offCanvas.width / 2) * 0.46, oy: -(y - offCanvas.height / 2) * 0.46 });
 
    const N        = ppos.length;
    const tPos     = new Float32Array(N * 3);
    const tCol     = new Float32Array(N * 3);
    const tSz      = new Float32Array(N);
    const tVel     = new Float32Array(N * 3);
    const tTarget  = new Float32Array(N * 3);
 
    const palette = [
      new THREE.Color('#ff6b00'),
      new THREE.Color('#ffb830'),
      new THREE.Color('#38bdf8'),
      new THREE.Color('#a78bfa'),
      new THREE.Color('#fb7185'),
    ];
 
    for (let i = 0; i < N; i++) {
      tPos[i*3]   = (Math.random() - .5) * 300;
      tPos[i*3+1] = (Math.random() - .5) * 200;
      tPos[i*3+2] = (Math.random() - .5) * 150;
 
      tTarget[i*3]   = ppos[i].ox;
      tTarget[i*3+1] = ppos[i].oy;
      tTarget[i*3+2] = 0;
 
      tVel[i*3]   = (Math.random() - .5) * .4;
      tVel[i*3+1] = (Math.random() - .5) * .4;
      tVel[i*3+2] = (Math.random() - .5) * .4;
 
      const t  = Math.random();
      const ci = Math.floor(t * (palette.length - 1));
      const c  = palette[ci].clone().lerp(palette[Math.min(ci + 1, palette.length - 1)], (t * (palette.length - 1)) % 1);
      tCol[i*3] = c.r; tCol[i*3+1] = c.g; tCol[i*3+2] = c.b;
      tSz[i]    = Math.random() * 2.8 + 0.6;
    }
 
    const tGeo = new THREE.BufferGeometry();
    tGeo.setAttribute('position', new THREE.BufferAttribute(tPos, 3));
    tGeo.setAttribute('aColor',   new THREE.BufferAttribute(tCol, 3)); // ✅ renamed
    tGeo.setAttribute('size',     new THREE.BufferAttribute(tSz,  1));
 
    const tMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime:      { value: 0 },
        uScroll:    { value: 0 },
        uMouse:     { value: new THREE.Vector2() },
        uPR:        { value: renderer.getPixelRatio() },
        uAssembled: { value: 0 },
      },
      vertexShader: `
        attribute float size;
        attribute vec3  aColor;
        varying   vec3  vColor;
        varying   float vAlpha;
        uniform   float uTime;
        uniform   float uScroll;
        uniform   vec2  uMouse;
        uniform   float uPR;
        uniform   float uAssembled;
 
        void main(){
          vColor = aColor;
          vec3 p = position;
          float id = float(gl_VertexID);

          float pulse = sin(uTime*1.8 + p.x*.12 + p.y*.1) * .45 * uAssembled;
          p.x += pulse * cos(uTime*.6 + id*.003);
          p.y += pulse * sin(uTime*.5 + id*.004);

          float ex = uScroll * 160.0;
          p.x += sin(p.y*.18 + uTime*1.1 + id*.015) * ex * .7;
          p.y += cos(p.x*.18 + uTime*.9  + id*.018) * ex * .5;
          p.z += sin(uTime*.5 + id*.022)             * ex * 1.1;

          vec4  wp   = modelMatrix * vec4(p, 1.0);
          vec2  toM  = wp.xy - uMouse * 95.0;
          float dist = length(toM);
          if(dist < 40.0){
            float f   = pow((40.0 - dist)/40.0, 2.0);
            vec2 rep  = normalize(toM) * f * 22.0;
            vec2 swrl = vec2(-toM.y, toM.x) * f * .45;
            p.xy += rep + swrl;
            p.z  += f * 10.0;
          }

          p.y += sin(uTime*.7  + id*.045) * .7 * uAssembled;
          p.x += cos(uTime*.55 + id*.033) * .4 * uAssembled;

          vAlpha = .7 + sin(uTime*2.5 + id*.13) * .3;

          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = size * uPR * (95.0 / -mv.z);
          gl_Position  = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying vec3  vColor;
        varying float vAlpha;
        void main(){
          vec2  uv   = gl_PointCoord - .5;
          float d    = length(uv);
          if(d > .5) discard;
          float a    = (1.0 - smoothstep(.15, .5, d)) * vAlpha;
          float g1   = 1.0 - smoothstep(.0,  .18, d);
          float g2   = 1.0 - smoothstep(.1,  .42, d);
          vec3  col  = vColor;
          col = mix(col, vec3(1.0, .95, .7), g1 * .7);
          col = mix(col, vColor * 1.6,       g2 * .25);
          gl_FragColor = vec4(col, a);
        }
      `,
      transparent: true,
      depthWrite:  false,
      blending:    THREE.AdditiveBlending,
      vertexColors: false, // ✅ must be false when using custom aColor attribute
    });
 
    const tPoints = new THREE.Points(tGeo, tMat);
    scene.add(tPoints);
 
    /* ── Layer 1 – Deep ambient cloud ──────────────────────────────────── */
    const A  = 600;
    const aP = new Float32Array(A * 3);
    const aC = new Float32Array(A * 3);
    for (let i = 0; i < A; i++) {
      aP[i*3]   = (Math.random() - .5) * 320;
      aP[i*3+1] = (Math.random() - .5) * 200;
      aP[i*3+2] = (Math.random() - .5) * 120;
      const c   = palette[0].clone().lerp(palette[2], Math.random());
      aC[i*3] = c.r*.5; aC[i*3+1] = c.g*.5; aC[i*3+2] = c.b*.5;
    }
    const aGeo = new THREE.BufferGeometry();
    aGeo.setAttribute('position', new THREE.BufferAttribute(aP, 3));
    aGeo.setAttribute('aColor',   new THREE.BufferAttribute(aC, 3)); // ✅ renamed
    const aMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uPR: { value: renderer.getPixelRatio() } },
      vertexShader: `
        attribute vec3  aColor;
        varying   vec3  vColor;
        varying   float vA;
        uniform   float uTime;
        uniform   float uPR;
        void main(){
          vColor = aColor;
          vec3 p  = position;
          float id = float(gl_VertexID);
          p.x += sin(uTime*.28 + id*.08) * 5.0;
          p.y += cos(uTime*.22 + id*.06) * 4.0;
          p.z += sin(uTime*.18 + id*.10) * 3.0;
          vA = .25 + sin(uTime*1.6 + id*.22) * .18;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = 1.6 * uPR * (80.0 / -mv.z);
          gl_Position  = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying vec3  vColor;
        varying float vA;
        void main(){
          float d = length(gl_PointCoord - .5);
          if(d > .5) discard;
          float a = (1.0 - smoothstep(.1, .5, d)) * vA;
          float g = 1.0 - smoothstep(.0, .3, d);
          gl_FragColor = vec4(mix(vColor, vec3(1.), g*.5), a);
        }
      `,
      transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending, vertexColors: false, // ✅
    });
    scene.add(new THREE.Points(aGeo, aMat));
 
    /* ── Layer 2 – Orbiting ellipse ring ───────────────────────────────── */
    const R  = 200;
    const rP = new Float32Array(R * 3);
    const rC = new Float32Array(R * 3);
    for (let i = 0; i < R; i++) {
      const ang = (i / R) * Math.PI * 2;
      const rad = 60 + Math.random() * 20;
      rP[i*3]   = Math.cos(ang) * rad;
      rP[i*3+1] = Math.sin(ang) * rad * .35;
      rP[i*3+2] = (Math.random() - .5) * 30;
      const c   = palette[1].clone().lerp(palette[3], i / R);
      rC[i*3] = c.r; rC[i*3+1] = c.g; rC[i*3+2] = c.b;
    }
    const rGeo = new THREE.BufferGeometry();
    rGeo.setAttribute('position', new THREE.BufferAttribute(rP, 3));
    rGeo.setAttribute('aColor',   new THREE.BufferAttribute(rC, 3)); // ✅ renamed
    const rMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uPR: { value: renderer.getPixelRatio() } },
      vertexShader: `
        attribute vec3  aColor;
        varying   vec3  vColor;
        varying   float vA;
        uniform   float uTime;
        uniform   float uPR;
        void main(){
          vColor = aColor;
          vec3  p   = position;
          float id  = float(gl_VertexID);
          float spd = .12 + mod(id, 7.0) * .018;
          float ang = atan(p.y/.35, p.x) + uTime * spd;
          float r   = length(vec2(p.x, p.y/.35));
          p.x = cos(ang) * r;
          p.y = sin(ang) * r * .35;
          p.z += sin(uTime*.6 + id*.12) * 4.0;
          vA = .45 + sin(uTime*2.2 + id*.35) * .3;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = 1.8 * uPR * (80.0 / -mv.z);
          gl_Position  = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying vec3  vColor;
        varying float vA;
        void main(){
          float d = length(gl_PointCoord - .5);
          if(d > .5) discard;
          float a = (1.0 - smoothstep(.0, .5, d)) * vA;
          gl_FragColor = vec4(vColor * 1.8, a);
        }
      `,
      transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending, vertexColors: false, // ✅
    });
    const rPoints = new THREE.Points(rGeo, rMat);
    scene.add(rPoints);
 
    /* ── Layer 3 – Shooting-star streaks ───────────────────────────────── */
    const SS  = 80;
    const ssP = new Float32Array(SS * 3);
    const ssC = new Float32Array(SS * 3);
    const ssSpd = new Float32Array(SS);
    for (let i = 0; i < SS; i++) {
      ssP[i*3]   = (Math.random() - .5) * 280;
      ssP[i*3+1] = (Math.random() - .5) * 160;
      ssP[i*3+2] = (Math.random() - .5) * 60;
      const c    = palette[Math.floor(Math.random() * palette.length)];
      ssC[i*3] = c.r; ssC[i*3+1] = c.g; ssC[i*3+2] = c.b;
      ssSpd[i]   = .3 + Math.random() * .8;
    }
    const ssGeo = new THREE.BufferGeometry();
    ssGeo.setAttribute('position', new THREE.BufferAttribute(ssP, 3));
    ssGeo.setAttribute('aColor',   new THREE.BufferAttribute(ssC, 3)); // ✅ renamed
    const ssMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uPR: { value: renderer.getPixelRatio() } },
      vertexShader: `
        attribute vec3  aColor;
        varying   vec3  vColor;
        varying   float vA;
        uniform   float uTime;
        uniform   float uPR;
        void main(){
          vColor = aColor;
          vec3  p  = position;
          float id = float(gl_VertexID);
          float spd = .3 + mod(id, 5.0) * .16;
          float t  = mod(uTime * spd + id * .13, 1.0);
          p.x = mix(-150.0, 150.0, t);
          p.y = position.y + sin(id * .7) * 20.0;
          vA  = sin(t * 3.14159) * .8;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = (2.5 + sin(id) * .8) * uPR * (80.0 / -mv.z);
          gl_Position  = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying vec3  vColor;
        varying float vA;
        void main(){
          vec2  uv = gl_PointCoord - .5;
          float d  = length(vec2(uv.x * .4, uv.y));
          if(d > .5) discard;
          float a  = (1.0 - smoothstep(.0, .5, d)) * vA;
          gl_FragColor = vec4(vColor * 2.0, a);
        }
      `,
      transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending, vertexColors: false, // ✅
    });
    scene.add(new THREE.Points(ssGeo, ssMat));
 
    /* ── Layer 4 – DNA-helix spine ─────────────────────────────────────── */
    const DNA  = 120;
    const dnaP = new Float32Array(DNA * 3);
    const dnaC = new Float32Array(DNA * 3);
    for (let i = 0; i < DNA; i++) {
      const t   = (i / DNA) * Math.PI * 6;
      dnaP[i*3]   = Math.cos(t) * 45;
      dnaP[i*3+1] = (i / DNA - .5) * 130;
      dnaP[i*3+2] = Math.sin(t) * 15;
      const c   = palette[i % palette.length];
      dnaC[i*3] = c.r; dnaC[i*3+1] = c.g; dnaC[i*3+2] = c.b;
    }
    const dnaGeo = new THREE.BufferGeometry();
    dnaGeo.setAttribute('position', new THREE.BufferAttribute(dnaP, 3));
    dnaGeo.setAttribute('aColor',   new THREE.BufferAttribute(dnaC, 3)); // ✅ renamed
    const dnaMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uPR: { value: renderer.getPixelRatio() } },
      vertexShader: `
        attribute vec3  aColor;
        varying   vec3  vColor;
        varying   float vA;
        uniform   float uTime;
        uniform   float uPR;
        void main(){
          vColor = aColor;
          vec3  p  = position;
          float id = float(gl_VertexID);
          float t  = id / 120.0 * 3.14159 * 6.0;
          float ang = t + uTime * .3;
          p.x = cos(ang) * 45.0;
          p.z = sin(ang) * 15.0;
          p.y += sin(uTime*.4 + id*.05) * 1.5;
          vA  = .5 + sin(uTime*1.8 + id*.2) * .35;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = 2.2 * uPR * (80.0 / -mv.z);
          gl_Position  = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying vec3  vColor;
        varying float vA;
        void main(){
          float d = length(gl_PointCoord - .5);
          if(d > .5) discard;
          float a = (1.0 - smoothstep(.0, .5, d)) * vA;
          float g = 1.0 - smoothstep(.0, .25, d);
          gl_FragColor = vec4(mix(vColor, vec3(1.), g*.6), a);
        }
      `,
      transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending, vertexColors: false, // ✅
    });
    scene.add(new THREE.Points(dnaGeo, dnaMat));
 
    const onScroll    = () => { scrollRef.current = Math.min(window.scrollY / window.innerHeight, 1); };
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x =  (e.clientX / window.innerWidth)  * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('scroll',    onScroll,    { passive: true });
    window.addEventListener('mousemove', onMouseMove);
 
    const clock = new THREE.Clock();
    let assembled = 0;
    const allUniforms = [tMat, aMat, rMat, ssMat, dnaMat];
 
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
 
      assembled = Math.min(assembled + .006, 1);
      const disp = scrollRef.current;
      const asmF = assembled * (1 - disp);
 
      allUniforms.forEach(m => { m.uniforms.uTime.value = t; });
      tMat.uniforms.uScroll.value    = disp;
      tMat.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
      tMat.uniforms.uAssembled.value = asmF;
 
      const posAttr  = tGeo.attributes.position as THREE.BufferAttribute;
      const posArr   = posAttr.array as Float32Array;
      const lr       = .022;
      const scatter  = 1 - asmF;
      for (let i = 0; i < N; i++) {
        const ix = i * 3, iy = ix + 1, iz = ix + 2;
        const tx = tTarget[ix]   * asmF + (tTarget[ix]   + Math.sin(i*.14 + t*.35) * 90) * scatter;
        const ty = tTarget[iy]   * asmF + (tTarget[iy]   + Math.cos(i*.12 + t*.28) * 90) * scatter;
        const tz = tTarget[iz]   * asmF + (Math.sin(i*.09 + t*.15) * 55) * scatter;
        posArr[ix] += (tx - posArr[ix]) * lr;
        posArr[iy] += (ty - posArr[iy]) * lr;
        posArr[iz] += (tz - posArr[iz]) * lr;
      }
      posAttr.needsUpdate = true;
 
      camera.position.x = Math.sin(t * .07) * 4;
      camera.position.y = Math.cos(t * .10) * 2.5;
      camera.lookAt(0, 0, 0);
 
      rPoints.rotation.x = Math.sin(t * .04) * .25;
      rPoints.rotation.z = t * .008;
 
      renderer.render(scene, camera);
    };
    animate();
 
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      const pr = renderer.getPixelRatio();
      allUniforms.forEach(m => { m.uniforms.uPR.value = pr; });
    };
    window.addEventListener('resize', onResize);
 
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('scroll',    onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize',    onResize);
      renderer.dispose();
      [tGeo, aGeo, rGeo, ssGeo, dnaGeo].forEach(g => g.dispose());
      [tMat, aMat, rMat, ssMat, dnaMat].forEach(m => m.dispose());
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, [text, subText]);
 
  return (
    <div
      ref={containerRef}
      style={{ position: 'absolute', inset: 0, zIndex: 1 }}
    />
  );
}
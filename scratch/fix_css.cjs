const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf-8');

// Replace all orange with coral
css = css.replace(/24, 95%, 53%/g, '16, 100%, 66%');
css = css.replace(/24 95% 53%/g, '16 100% 66%');

// Revert logoGlow
css = css.replace(/@keyframes logoGlow \{[\s\S]*?\}/, `@keyframes logoGlow {
  0%, 100% { filter: drop-shadow(0 0 6px hsla(24, 95%, 53%, 0.5)); }
  50%       { filter: drop-shadow(0 0 18px hsla(24, 95%, 53%, 0.9)) drop-shadow(0 0 36px hsla(24, 95%, 53%, 0.4)); }
}`);

// Revert gradient-text
css = css.replace(/\.gradient-text \{[\s\S]*?\}/, `.gradient-text {
  background: linear-gradient(135deg, hsl(24, 95%, 53%) 0%, hsl(35, 100%, 60%) 50%, hsl(24, 95%, 53%) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`);

// Revert logo-hover
css = css.replace(/\.logo-hover:hover \{[\s\S]*?\}/, `.logo-hover:hover { filter: drop-shadow(0 0 8px hsla(24, 95%, 53%, 0.4)); }`);

fs.writeFileSync('src/index.css', css);
console.log("CSS updated!");

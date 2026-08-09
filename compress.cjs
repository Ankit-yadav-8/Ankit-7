const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directories = [
  path.join(__dirname, 'src', 'assets', 'events'),
  path.join(__dirname, 'src', 'assets', 'posters_extracted')
];

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (stat.isFile() && /\.(jpe?g|png)$/i.test(file)) {
      try {
        const metadata = await sharp(fullPath).metadata();
        const MAX_WIDTH = 1200;
        
        // Use a temporary file to avoid in-place read/write conflicts
        const tempPath = fullPath + '.tmp';
        
        let img = sharp(fullPath);
        
        if (metadata.width > MAX_WIDTH) {
          img = img.resize({ width: MAX_WIDTH, withoutEnlargement: true });
        }
        
        // Re-encode with 80% quality
        if (/\.png$/i.test(file)) {
          img = img.png({ quality: 80, compressionLevel: 8 });
        } else {
          img = img.jpeg({ quality: 80, mozjpeg: true });
        }
        
        await img.toFile(tempPath);
        
        // Replace original file with compressed file
        fs.unlinkSync(fullPath);
        fs.renameSync(tempPath, fullPath);
        
        const newStat = fs.statSync(fullPath);
        console.log(`Optimized: ${file} (Original: ${(stat.size/1024/1024).toFixed(2)}MB, New: ${(newStat.size/1024/1024).toFixed(2)}MB)`);
      } catch (err) {
        console.error(`Failed to process ${file}:`, err.message);
      }
    }
  }
}

async function main() {
  console.log('Starting compression...');
  for (const dir of directories) {
    if (fs.existsSync(dir)) {
      await processDirectory(dir);
    }
  }
  console.log('Compression complete!');
}

main();

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = getAllFiles('./src/assets');
let processed = 0;
let total = files.filter(f => f.match(/\.(jpg|jpeg|png)$/i)).length;
let savedBytes = 0;

async function processFiles() {
  console.log(`Found ${total} images to optimize.`);
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const ext = path.extname(file);
      const tempFile = file + '.tmp' + ext;
      const originalSize = fs.statSync(file).size;
      try {
        let pipeline = sharp(file).resize({ width: 1200, withoutEnlargement: true });
        
        if (ext.toLowerCase().match(/jpg|jpeg/)) {
            pipeline = pipeline.jpeg({ quality: 75, progressive: true });
        } else if (ext.toLowerCase() === '.png') {
            // using pngquant like settings
            pipeline = pipeline.png({ quality: 75, compressionLevel: 8 });
        }
        
        await pipeline.toFile(tempFile);
        
        const newSize = fs.statSync(tempFile).size;
        if (newSize < originalSize) {
          fs.renameSync(tempFile, file);
          savedBytes += (originalSize - newSize);
          console.log(`Optimized: ${file} (Saved ${(originalSize - newSize) / 1024 / 1024 | 0} MB)`);
        } else {
          fs.unlinkSync(tempFile);
        }
      } catch (err) {
        console.error('Error on', file, err);
      }
    }
  }
  console.log(`Total saved space: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);
}

processFiles();

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoryToScan = 'src/assets';

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        console.log(`Processing: ${fullPath} - size: ${(stat.size / 1024 / 1024).toFixed(2)} MB`);
        
        // Only process if larger than 150KB to avoid reprocessing or degrading small images
        if (stat.size > 150 * 1024) {
          const tempPath = fullPath + '.tmp';
          
          try {
            const metadata = await sharp(fullPath).metadata();
            let pipeline = sharp(fullPath);
            
            // Resize if too large
            if (metadata.width > 1200) {
              pipeline = pipeline.resize(1200, null, { withoutEnlargement: true });
            }
            
            if (ext === '.jpg' || ext === '.jpeg') {
              pipeline = pipeline.jpeg({ quality: 70, progressive: true });
            } else if (ext === '.png') {
              pipeline = pipeline.png({ quality: 70, compressionLevel: 9 });
            }
            
            await pipeline.toFile(tempPath);
            fs.renameSync(tempPath, fullPath);
            console.log(`Saved optimized: ${fullPath}`);
          } catch (error) {
            console.error(`Error processing ${fullPath}:`, error);
          }
        } else {
          console.log(`Skipped (already small enough)`);
        }
      }
    }
  }
}

processDirectory(directoryToScan).then(() => console.log('Done!'));

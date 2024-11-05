fs = require('fs');
path = require('path');

const galleryDir = path.join(__dirname, '..', 'public', 'images', 'gallery');
const outputFile = path.join(galleryDir, 'images.txt');

fs.readdir(galleryDir, (err, files) => {
  if (err) {
    console.error('Error reading gallery directory:', err);
    process.exit(1);
  }

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext);
  }).map(file => `/images/gallery/${file}`);

  fs.writeFile(outputFile, imageFiles.join('\n'), err => {
    if (err) {
      console.error('Error writing images.txt:', err);
      process.exit(1);
    }
  });
});
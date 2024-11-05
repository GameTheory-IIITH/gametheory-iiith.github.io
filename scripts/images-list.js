const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '..', 'public', 'images', 'gallery');
const outputFile = path.join(galleryDir, 'images.txt');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

fs.readdir(galleryDir, (err, files) => {
  if (err) {
    console.error('Error reading gallery directory:', err);
    process.exit(1);
  }

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
  const imageFiles = files
    .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
    .map(file => `/images/gallery/${file}`);

  const shuffledImages = shuffleArray(imageFiles);

  fs.writeFile(outputFile, shuffledImages.join('\n'), err => {
    if (err) {
      console.error('Error writing images.txt:', err);
      process.exit(1);
    }
    console.log('Images list written in random order');
  });
});
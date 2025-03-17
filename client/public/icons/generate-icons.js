const fs = require('fs');
const { createCanvas } = require('canvas');

function generateIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#1e40af';
  ctx.fillRect(0, 0, size, size);

  // Text
  ctx.fillStyle = '#ffffff';
  ctx.font = `${size/4}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Awras', size/2, size/2);

  return canvas.toBuffer();
}

// Create icons directory if it doesn't exist
if (!fs.existsSync('./public/icons')) {
  fs.mkdirSync('./public/icons', { recursive: true });
}

// Generate icons
[192, 512].forEach(size => {
  const buffer = generateIcon(size);
  fs.writeFileSync(`./public/icons/icon-${size}x${size}.png`, buffer);
  console.log(`Generated ${size}x${size} icon`);
}); 
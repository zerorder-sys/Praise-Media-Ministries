const fs = require('fs');

const imgBuffer = fs.readFileSync('public/logo.png');
const base64Img = imgBuffer.toString('base64');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <clipPath id="circleClip">
      <circle cx="256" cy="256" r="256" />
    </clipPath>
  </defs>
  <image width="512" height="512" href="data:image/png;base64,${base64Img}" clip-path="url(#circleClip)" preserveAspectRatio="xMidYMid slice" />
</svg>`;

fs.writeFileSync('src/app/icon.svg', svgContent);
if (fs.existsSync('src/app/icon.png')) {
  fs.unlinkSync('src/app/icon.png');
}
console.log('Successfully created round icon.svg');

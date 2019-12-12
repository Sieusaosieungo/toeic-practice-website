const shortid = require('shortid');
const fs = require('fs');
const path = require('path');

const uploadAudio = async (audioFile, relativePath) => {
  let audioLink;
  try {
    const absolutePath = path.join(__dirname, '../../static', relativePath);

    fs.mkdirSync(absolutePath, {
      recursive: true,
    });

    const fileName = audioFile.name.trim();
    const indexOfDot = fileName.lastIndexOf('.');
    const temp =
      fileName.slice(0, indexOfDot) +
      shortid.generate() +
      fileName.slice(indexOfDot, fileName.length);
    const newName = temp.split(' ').join('-');
    const filePath = `${absolutePath}/${newName}`;

    await audioFile.mv(filePath);

    audioLink = `${relativePath}/${newName}`;
  } catch (err) {
    throw new Error(`Can't store audio + ${audioFile.name}`);
  }
  return audioLink;
};

module.exports = uploadAudio;

import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFolder, randomIndex } from '../utils/utils.js';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const usbPath = `E:/`;
const seasonsPath = path.join(usbPath, 'Adventure Time Seasons');
const seasons = readFolder(seasonsPath);
const randomSeason = randomIndex(seasons);
const randomSeasonEpisodes = readFolder(path.join(seasonsPath, randomSeason));
const getRandomEpisode = randomIndex(randomSeasonEpisodes);
const episodePath = path.join(seasonsPath, randomSeason, getRandomEpisode);
const filename = path.basename(getRandomEpisode);

// TODO
// * Figure out best way for file management, pull from usb or store files on server
// * Create Random Episode Path
// * Create Custom Episode Path
// * Streaming Path
// *

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, 'public');
// Middleware
// Serve Files
// app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(seasonsPath));
// Read the file from the usb

app.get('/random', (req, res) => {

  fs.readFile(episodePath, (err, data) => {
    if (err) return console.log(err, 0);
    const fileName = path.basename(episodePath);
    const filePath = path.join(publicPath, 'episodes', path.basename(fileName));

    // Then write
    fs.writeFile(filePath, data, (err) => {
      if (err) return console.log(err, 1);
      console.log('Success!');
    });
  });

  //? https://stackoverflow.com/questions/31461358/can-i-use-res-sendfile-and-res-json-together
  // You cant send a file and json at the same time
  // so yo send a header that contains the info needed
  const options = {
    headers: {
      path: episodePath,
    },
  };
  // res.json({ episode: `./episodes/${randomEpisode}` });
  // res.send(`<video src=${episodePath} ></video>`)
  res.sendFile(path.join(__dirname, 'public/index.html'), options);
});

app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`);
});

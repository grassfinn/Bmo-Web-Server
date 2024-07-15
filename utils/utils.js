import fs from 'fs';
// https://www.geeksforgeeks.org/node-js-fs-readdirsync-method/
export function readFolder(path) {
  return fs.readdirSync(path);
}

export function randomIndex(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// fetch('http://localhost:3000/')
//   .then((res) => res.json())
//   .then((data) => document.querySelector('video').src = data.episode);

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getResponseHeader
const client = new XMLHttpRequest();
client.open('GET', document.location, false);
// Need to send
client.send();

const episodePath = client.getResponseHeader('path');
console.log(episodePath)
document.querySelector('video').src = episodePath;
// Next js
// Helper functions for testing

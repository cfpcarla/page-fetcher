const fs = require('fs');
const request = require('request');

const myArgs = process.argv.slice(2);

request(myArgs[0], (_error, _response, body) => {
  fs.writeFile(myArgs[1], body,  (err) => {
    if (err) {
      return console.log(err);
    }
    const stats = fs.statSync(myArgs[1]);
    const fileSizeInBytes = stats["size"];
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${myArgs[1]}`);
  });
});
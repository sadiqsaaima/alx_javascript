#!/usr/bin/node

onst request = require('request');
const url = process.argv[2];

if (!url) {
  console.log('code: <status code>');
  process.exit(1);
}

request(url, (error, response) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});

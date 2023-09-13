#!/usr/bin/node

onst request = require('request');
const url = process.argv[2];

if (!url) {
  console.log('Usage: node get_status_code.js <URL>');
  process.exit(1);
}

request(url, (error, response) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});

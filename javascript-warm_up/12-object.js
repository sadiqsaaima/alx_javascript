const favlang = ["C is fun", "Python is cool", "JavaScript is amazing"];

for (let i = 0; i < favlang.length; i++) {
  if (favlang[i].includes('12')) {
    favlang[i] = favlang[i].replace('12', '89');
  }
  console.log(favlang[i]);
}

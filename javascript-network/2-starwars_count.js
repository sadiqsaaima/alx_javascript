#!/usr/bin/node
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    try {
      const filmsData = JSON.parse(body);
      const filmsWithWedge = filmsData.results.filter(film =>
        film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
      );
      console.log(`Number of movies with Wedge Antilles: ${filmsWithWedge.length}`);
    } catch (parseError) {
      console.error(`Error parsing JSON: ${parseError.message}`);
    }
  }
});

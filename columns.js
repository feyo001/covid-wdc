fetch("https://covid19.who.int/who-data/vaccination-data.json")
  .then(response => response.json())
  .then(data => {
    const columns = new Set();
    data.who_vaccination_data.forEach(d => {
      Object.keys(d).forEach(key => columns.add(key));
    });
    console.log(Array.from(columns));
  })
  .catch(error => console.error(error));

const fs = require("fs");
const csv = require("csv-parser");

const FILEPATH = "convertcsv.csv";
const json = {};

fs.createReadStream(FILEPATH)
  .pipe(csv())
  .on("data", (row) => {
    const { title, category, description, value } = row;
    const object = {
      [title]: {
        category: category,
        description: description,
        value: value,
      },
    };
    Object.assign(json, object);
  })
  .on("end", () => {
    console.log(json);
  });

// Export JSON file

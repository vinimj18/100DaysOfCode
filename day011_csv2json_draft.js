// Import CSV file

const json = {};

function csv2jason(csv, separator) {
  for (line of csv) {
    const [title, category, description, value] = line.split(separator);
    const object = {
      [title]: {
        category: category,
        description: description,
        value: value,
      },
    };
    Object.assign(json, object);
  }
}

// Export JSON file

const test = [
  `title 1,category1,description1,value1`,
  `title 2,category2,description2,value2`,
  `title 3,category3,description3,value3`,
];

csv2jason(test, ",");
console.log(json);

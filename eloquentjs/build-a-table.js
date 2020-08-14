/* Instructions
An HTML table is built with the following tag structure:

<table>
  <tr>
    <th>name</th>
    <th>height</th>
    <th>place</th>
  </tr>
  <tr>
    <td>Kilimanjaro</td>
    <td>5895</td>
    <td>Tanzania</td>
  </tr>
</table>

For each row, the <table> tag contains a <tr> tag. Inside of these <tr> tags, we can put cell elements: either heading cells (<th>) or regular cells (<td>).

Given a data set of mountains, an array of objects with name, height, and place properties, generate the DOM structure for a table that enumerates the objects. It should have one column per key and one row per object, plus a header row with <th> elements at the top, listing the column names.

Write this so that the columns are automatically derived from the objects, by taking the property names of the first object in the data.

Add the resulting table to the element with an id attribute of "mountains" so that it becomes visible in the document.

Once you have this working, right-align cells that contain number values by setting their style.textAlign property to "right".
*/

const MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

// create table
let table = document.createElement("table");
// extract keys
let mountain = MOUNTAINS[0];
let keys = Object.keys(mountain); // array iterator
// create heading row
let tr = document.createElement("tr");
// iterate over keys
keys.forEach((key, i) => {
  // create cells, add cells to row
  const cell = document.createElement("th");
  cell.innerHTML = key;
  tr.appendChild(cell);
});
  //add heading row to table
table.appendChild(tr);

// iterate through items
MOUNTAINS.forEach((mountain, i) => {
  // create tr
  tr = document.createElement("tr");
  keys.forEach((key, i) => {
    //create cell
    const cell = document.createElement("td");
    //alter innerHTML
    cell.innerHTML = mountain[key];
    if (typeof mountain[key] === 'number'){
      cell.style.textAlign = 'right';
    }
    //add to tr
    tr.appendChild(cell);
  });
// add tr to table
table.appendChild(tr);
});

  // append row for each, with their cells
// append table as child of the element with id mountains
document.getElementById('mountains').appendChild(table);

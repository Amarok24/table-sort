/**
  * @description Demonstration of table data sorting.
  * @version 0.1
  * @author Jan Prazak
  * @website https://github.com/Amarok24/
  * @license MPL 2.0
  This Source Code Form is subject to the terms of the Mozilla Public License,
  v. 2.0. If a copy of the MPL was not distributed with this file, you can
  obtain one at http://mozilla.org/MPL/2.0/.
*/

import * as jHelpers from "./jHelpers.mjs";

let _tbody = document.getElementById("tableBody");
let _sortedArrOfObj = [];
let _internalSwapiObj = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    hair_color: "blond",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    gender: "female"
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    gender: "female"
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    gender: "male"
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    hair_color: "blond",
    gender: "male"
  },
  {
    name: "Chewbacca",
    height: 228,
    mass: 112,
    hair_color: "brown",
    gender: "male"
  },
  {
    name: "Han Solo",
    height: 180,
    mass: 80,
    hair_color: "brown",
    gender: "male"
  },
  {
    name: "Greedo",
    height: 173,
    mass: 74,
    hair_color: "n/a",
    gender: "male"
  },
  {
    name: "Jabba Desilijic Tiure",
    height: 175,
    mass: 1358,
    hair_color: "n/a",
    gender: "hermaphrodite"
  },
  {
    name: "Wedge Antilles",
    height: 170,
    mass: 77,
    hair_color: "brown",
    gender: "male"
  },
  {
    name: "Jek Tono Porkins",
    height: 180,
    mass: 110,
    hair_color: "brown",
    gender: "male"
  },
  {
    name: "Yoda",
    height: 66,
    mass: 17,
    hair_color: "white",
    gender: "male"
  },
  {
    name: "Palpatine",
    height: 170,
    mass: 75,
    hair_color: "grey",
    gender: "male"
  }
];


// @desc Adds <tr></tr> and its <td> children (with 'rowData' texts) to given 'tbody'.
// Not a pure function, manipulates given 'tbody' node directly.
function addTableRow(tbody, ...rowData) {
  const tr = document.createElement("tr");
  let trRef = tbody.appendChild(tr);

  for (let text of rowData) {
    let td = document.createElement("td");
    td.innerText = text;
    trRef.appendChild(td);
  }
}


function recreateTable(fromObj) {
  jHelpers.removeChildrenOf(_tbody);
  for (let i = 0; i < fromObj.length; i++) {
    addTableRow(_tbody,
      fromObj[i].name,
      fromObj[i].height,
      fromObj[i].mass,
      fromObj[i].hair_color,
      fromObj[i].gender
    );
  }
}


function headingClick(ev) {
  const relAttrValue = ev.target.attributes.rel.value;
  let headings = document.querySelectorAll("#mainTable thead th");
  let previouslySorted = false;
  let prevDirectionAsc = false;

  previouslySorted = ev.target.classList.contains("sorted");
  prevDirectionAsc = ev.target.classList.contains("ascending");

  for (let i=0; i<headings.length; i++) {
    headings[i].classList.remove("sorted");
    // css class 'sorted' will be always assigned only to one <th> element
    // and should show a proper icon based on existence of class 'ascending'
  }

  if (previouslySorted && prevDirectionAsc) {
    // apply DESCending sort
    _sortedArrOfObj = jHelpers.sortArrayOfObjects(_internalSwapiObj, relAttrValue, false);
    ev.target.classList.remove("ascending"); // may or may not exist
  } else {
    _sortedArrOfObj = jHelpers.sortArrayOfObjects(_internalSwapiObj, relAttrValue, true);
    ev.target.classList.add("ascending");
  }

  ev.target.classList.add("sorted"); // classes 'sorted+ascending' should show ASC icon,
  // but class 'sorted' without 'ascending' should show a DESC icon

  recreateTable(_sortedArrOfObj);
}


function tbodyClick(ev) {
  const rowName = ev.target.parentNode.childNodes[0].innerText;

  _sortedArrOfObj = _sortedArrOfObj.filter(x => x.name !== rowName);
  _internalSwapiObj = _internalSwapiObj.filter(x => x.name !== rowName);
  recreateTable(_sortedArrOfObj);
}


function addEvents() {
  const headings = document.querySelectorAll("#mainTable thead th");
  const tbody = document.getElementById("tableBody");

  for (let i=0; i<headings.length; i++) {
    headings[i].addEventListener("click", headingClick);
  }

  tbody.addEventListener("click", tbodyClick);
}


function main() {
  _sortedArrOfObj = [..._internalSwapiObj];
  recreateTable(_sortedArrOfObj);
  addEvents();
}


main();

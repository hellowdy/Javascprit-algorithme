'use strict';
for (let i = 0; i < 6; i += 1) {
  let row = '';
  if (i % 2 === 0) {
    for (let j = 0; j < 7; j += 1) {
      if (j % 2 === 0) {
        row += '_';
      } else {
        row += '#';
      }
    }
  } else {
    for (let j = 0; j < 7; j += 1) {
      if (j % 2 === 0) {
        row += '#';
      } else {
        row += '_';
      }
    }
  }
  console.log(row);
}

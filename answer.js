const ROWS = 5; // number of rows in the pattern
let num = 1;

for (let i = 1; i <= ROWS; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += num + " ";
        num++;
    }

    console.log(row.trim());
}
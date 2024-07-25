//Pascal Triangle
const genPascal = (rowNum) => {

let arr = rowNum ? [[1]] : [];

for (let row = 1; row < rowNum; row++) {
    let currentRow = [1];
   for(let col = 1; col < row; col++){
   
    currentRow.push(arr[row-1] [col-1] + arr[row-1] [col]);
   }
   currentRow.push(1);
   arr.push(currentRow);

   }
   return arr };


   document.getElementById('btn').addEventListener('click', () => {
    const inputArea = document.getElementById('inputArea');
    const rowNum = parseInt(inputArea.value, 10); // Parse the input value to an integer
    const pascal = genPascal(rowNum);
    const output = document.getElementById('output');

    output.textContent = pascal.map(row => row.join(' ')).join('\n');
});


  
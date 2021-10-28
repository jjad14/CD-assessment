const min = 1;
const max = 9;
let currentCell = 'cell-5';

$(document).ready(function () {
	$('#btn-text').click(function () {
		// generate random number
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

		// keep track of previous cell with text node
		let previousCell = document.getElementById(currentCell);
		// get the new cell
		let newCell = document.getElementById(`cell-${randomNumber}`);
		// create text node
		let cellText = document.createTextNode('Text Here');

		// remove child node from previous cell
		previousCell.removeChild(previousCell.lastChild);

		// add text node to new cell
		newCell.appendChild(cellText);

		// update current cell
		currentCell = `cell-${randomNumber}`;
	});
});

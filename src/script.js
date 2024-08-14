document.body.appendChild(document.createElement('div'));
document.body.lastElementChild.setAttribute('class', 'container');

document.querySelector('.container').appendChild(document.createElement('div'));
document.querySelector('.container').firstElementChild.setAttribute('class', 'ticTacToe');

document.querySelector('.ticTacToe').appendChild(document.createElement('div'));
document.querySelector('.ticTacToe').firstElementChild.setAttribute('class', 'ticTacToeTable');

document.querySelector('.ticTacToe').appendChild(document.createElement('div'));
document.querySelector('.ticTacToe').children[1].setAttribute('class', 'ticTacToeScore');

document.querySelector('.ticTacToe').appendChild(document.createElement('div'));
document.querySelector('.ticTacToe').lastElementChild.setAttribute('class', 'ticTacToeButton');

/*---table creator---*/

document.querySelector('.ticTacToeScore').appendChild(document.createElement('div'));
document.querySelector('.ticTacToeScore').firstElementChild.setAttribute('class', 'ticTacToeScoreBlockValue');
document.querySelector('.ticTacToeScore').firstElementChild.innerText = "X Scores:"

document.querySelector('.ticTacToeScore').appendChild(document.createElement('div'));
document.querySelector('.ticTacToeScore').lastElementChild.setAttribute('class', 'ticTacToeScoreBlockValue');
document.querySelector('.ticTacToeScore').lastElementChild.innerText = "O Scores:"

let tableClickCounter = 0;
let crossesWons = 1;
let noughtsWons = 1;

/*---table---*/

tableCreator();

function tableCreator(){

	let table = document.createElement('table');
	table.setAttribute('class', 'table');
	table.disabled = false;

	let tr1 = document.createElement('tr');
	let tr2 = document.createElement('tr');
	let tr3 = document.createElement('tr');

	for(let i = 0; i < 3; i++){
		let th = document.createElement('th');
		tr1.appendChild(th);
		tr1.children[i].setAttribute('id', 'id1' + i );
	}

	for(let i = 0; i < 3; i++){
		let th = document.createElement('th');
		tr2.appendChild(th);
		tr2.children[i].setAttribute('id', 'id2' + i );
	}

	for(let i = 0; i < 3; i++){
		let th = document.createElement('th');
		tr3.appendChild(th);
		tr3.children[i].setAttribute('id', 'id3' + i );
	}

	table.appendChild(tr1);
	table.appendChild(tr2);
	table.appendChild(tr3);

	document.querySelector('.ticTacToeTable').appendChild(table);

	document.querySelector('.table').addEventListener('click', function(el){
		if(document.querySelector('.table').disabled == false){
			let elemId = '#' + el.target.id;
		if(((tableClickCounter % 2) == 0) && document.querySelector(elemId).outerText == '') {
			document.querySelector(elemId).innerText = 'X';
			document.querySelector(elemId).value = 'X';
			tableClickCounter += 1;
		}
		else if(((tableClickCounter % 2) == 1)&& document.querySelector(elemId).outerText == '') {
			document.querySelector(elemId).innerText = 'O';
			tableClickCounter += 1;
		}

	chekHorizontal();
	chekVertical();
	checkDiagonalleft();
	checkDiagonalRight();
	nobodyWon();
	}
})
}

/*---restart button---*/

document.querySelector('.ticTacToeButton').appendChild(document.createElement('div'));
document.querySelector('.ticTacToeButton').lastElementChild.setAttribute('class', 'restart');

document.querySelector('.restart').innerText = "Restart";

document.querySelector('.restart').addEventListener('click', restart);
	
function restart(){
	if (document.querySelector('.ticTacToeTable').childElementCount === 2){
		document.querySelector('.ticTacToeTable').removeChild(document.querySelector('.ticTacToeTable').firstElementChild);
	}
	if(document.body.lastElementChild = document.querySelector('.win')){
		document.body.removeChild(document.querySelector('.win'));
	}
	document.querySelector('.ticTacToeTable').removeChild(document.querySelector('.ticTacToeTable').firstElementChild);
	tableCreator();

	tableClickCounter = 0;
}

/*---functions---*/

function chekHorizontal(){
	let table = document.querySelector('.table');
	for(let i = 0, j = 0; j < 3; j++){
		if((table.rows[j].cells[i].outerText  == 'X') && (table.rows[j].cells[i+1].outerText  == 'X') && (table.rows[j].cells[i+2].outerText  == 'X')){
			win('crosses');
		}
		else if((table.rows[j].cells[i].outerText  == 'O') && (table.rows[j].cells[i+1].outerText  == 'O') && (table.rows[j].cells[i+2].outerText  == 'O')){
			win('noughts');
		}
	}
}

function chekVertical(){
	let table = document.querySelector('.table');
	for(let i = 0, j = 0; j < 3; j++){
		if((table.rows[i].cells[j].outerText  == 'X') && (table.rows[i+1].cells[j].outerText  == 'X') && (table.rows[i+2].cells[j].outerText  == 'X')){
			win('crosses');
		}
		else if((table.rows[i].cells[j].outerText  == 'O') && (table.rows[i+1].cells[j].outerText  == 'O') && (table.rows[i+2].cells[j].outerText  == 'O')){
			win('noughts');
		}
	}
}

function checkDiagonalleft(){
	let table = document.querySelector('.table');
	if((table.rows[0].cells[0].outerText  == 'X') && (table.rows[1].cells[1].outerText  == 'X') && (table.rows[2].cells[2].outerText  == 'X')){
			win('crosses');
	}
	if((table.rows[0].cells[0].outerText  == 'O') && (table.rows[1].cells[1].outerText  == 'O') && (table.rows[2].cells[2].outerText  == 'O')){
			win('noughts');
	}

}
function checkDiagonalRight(){
	let table = document.querySelector('.table');
	if((table.rows[0].cells[2].outerText  == 'X') && (table.rows[1].cells[1].outerText  == 'X') && (table.rows[2].cells[0].outerText  == 'X')){
			win('crosses');
	}
	if((table.rows[0].cells[2].outerText  == 'O') && (table.rows[1].cells[1].outerText  == 'O') && (table.rows[2].cells[0].outerText  == 'O')){
			win('noughts');
	}
}

function win(e){
	document.querySelector('.table').disabled = true;

	document.body.appendChild(document.createElement('div'));
	document.body.lastElementChild.setAttribute('class', 'win');

	if (e != "nobody") {
		if (e === "Crosses") {document.querySelector('.ticTacToeScore').firstElementChild.innerText = "X Scores:"+ crossesWons; crossesWons += 1;}
		if (e === "Noughts") {document.querySelector('.ticTacToeScore').lastElementChild.innerText = "O Scores:"+ noughtsWons; noughtsWons += 1;}
	}

	document.querySelector('.win').innerText = e + " won";
}

function nobodyWon(){
	let table = document.querySelector('.table');

	if (tableClickCounter === 9) {
		win("Nobody");
	}
}
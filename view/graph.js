/*

Tic-Tac-Toe

Simple Tic-Tac-Toe game written in
Javascript.

AUTHOR: Pedro J. Martínez

graph.js

*/

// TO-DO
// Code and split up controller from graph
// Disable panel when winning

class View {
	/*
	Class for handling View
	elements.

	ATTRIB:
	 - CurrentPlayer: player obj whose turn is.
	*/

	constructor() {
		this.currentPlayer = player1;
	}

	changePlayer() {
		/*
		Take player's turn.
		*/
		if (this.currentPlayer.id == player1.id) {
			this.currentPlayer = player2;
		} else if (this.currentPlayer.id == player2.id) {
			this.currentPlayer = player1;
		}
	}

	trackRound() {
		/*
		Calls Tracker to handle the game events
		such as winning.
		*/
		if (t.checkPlayer(myGame, this.currentPlayer)){
			alert(`Player${this.currentPlayer.id} has won!`);
		}
	}

	play(n, element_id) {
		/*
		Event Function : Clicking on elements.
		Condition: Cell is empty.

		Change element's icon according to
		user choice.

		callback: trackRound(), changePlayer()
		*/
		if (myGame.isEmpty(element_id)){
			var element = document.getElementById(n);
			element.innerHTML = this.currentPlayer['icon'];

			myGame.play(this.currentPlayer, element_id);

			this.trackRound();
			this.changePlayer();

		} else {
			alert("Choose a free cell!");
		}

	}

}

window.onload = function(){
	/*
	Initializer.
	*/
	player1 = new Player(1, 'X');
	player2 = new Player(2, 'O');
	myGame = new Game();
	t = new Tracker();

	view = new View();

}



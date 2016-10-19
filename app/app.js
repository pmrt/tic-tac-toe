/*

API:
	
	INSTANCING A NEW GAME:
	myGame = new Game()

	=====================

	STARTING A NEW GAME:
	myGame.start(player)

	Where:

		- player can be 1 or 2 (the 
		  player number) for handling turns,
		  by default:1

	=====================

	NEW GAME TURN:
	myGame.play(player, ncell)

	Where:

		- player can be 1 or 2.
		- cell can be any value among 1 to 9.

*/

class Game {
	/*
	Stands for each game
	which user plays.

	ATTRIB:
	Cell: JSON Object with the
	cell numbers and chosen
	positions.
	*/
	constructor(){
		this.cell = {
					1: 0,
					2: 0,
					3: 0,
					4: 0,
					5: 0,
					6: 0,
					7: 0,
				    8: 0,
				    9: 0
				}

	start(player=1){

	}

	play(player, ncell) {
		/*
		Set the 'ncell' of cell chosen
		by 'player'.
		@Return: undefined
		*/
		this.cell[ncell] = player;
	}

	isEmpty(ncell) {
		/*
		Checks if a cell is empty,
		That is not played before.
		Returns True if it does.
		@Return: boolean
		*/
		return this.cell[ncell] == 0;
	}

}

class Tracker() {
	constructor () {
		const this.winnerComb = [
					[1,2,3],
					[1,5,9],
					[7,5,3],
					[1,4,7],
					[2,5,8],
					[3,6,9],
					[4,5,6],
					[7,8,9] 
					]
	}

	static check(game) {
		/*
		Checks for all possible winner combinations.

		Where:
			- If a player1 got one of this
			combinations in any order and
			the player2 got no one of those,
			player1 will win.
			- The easy way it's to check for
			each of this 3-combinations.

		*/
		for (combination of this.winnerComb) {
			for (ncell of combination) {
				if (game.cell[ncell] = 1)
			}
		}

	}

}

// TO-DO
class Player(){

}
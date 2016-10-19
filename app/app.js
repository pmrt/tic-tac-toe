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
	}

	play(player, ncell) {
		/*
		Set the 'ncell' (int) of cell chosen
		by 'player' (object).
		@Return: undefined
		*/
		this.cell[ncell] = player.id;
	}

	isEmpty(ncell) {
		/*
		Checks if a ncell (int) of cell is empty,
		That is not played before.
		Returns True if it does.
		@Return: boolean
		*/
		return this.cell[ncell] == 0;
	}

}

class Tracker {
	/*
	Class for handling the
	game events each round.
	*/
	constructor () {
		this.winnerComb = [
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

	isCombinationOf(combination, game, player){
		/*
		Checks if each player of the passed
		'combination' which is an array is
		equal to player.
		If it does, return true.
		@Return: boolean
		*/
		return combination.every(function(item){
			return game.cell[item] == player.id;
		});
	}


	checkPlayer(game, player) {
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
		for (let combination of this.winnerComb) {
			if (this.isCombinationOf(combination,game,player)){
				console.log('Un jugador tiene una combinación')
			}
		}

	}

}

class Player {
	/*
	Game players.
	*/
	constructor(id){
		this.id = id;
	}
}

// TESTING ZONE

// Creating new player
player1 = new Player();

// Creating new Game
myGame = new Game();

// Playing (winning test)
myGame.play(player1, 1);
myGame.play(player1, 3);
myGame.play(player1, 2);

// Creating new Tracker
t = new Tracker();

// Test for winner in Game: myGame with player: player1
t.checkPlayer(myGame, player1);

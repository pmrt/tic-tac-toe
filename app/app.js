/*

Tic-Tac-Toe

Simple Tic-Tac-Toe game written in
Javascript.

AUTHOR: Pedro J. Martínez

APP.js

[API]

	SUMMARY:
			myGame = new Game();
			player1 = new Player(1, 'X');
			player2 = new Player(2, 'O')
			myGame.play(player1, 3);
			t = new Tracker()
			t.checkPlayer(myGame, player1);
			t.checkPlayer(myGame, player2);



	STARTING A NEW GAME:
	myGame = new Game();

	==========================================

	CREATING A NEW PLAYER:
	player1 = new Player(<playerid>, <player icon>)

	Where:

		- playerid must be 1 or 2 (the
		  player number) for handling turns.
		- player icon must be 'X' or 'O'.

	==========================================

	NEW GAME TURN:
	myGame.play(<player obj>, <cell number>)

	Where:

		- player can be 1 or 2.
		- cell can be any value among 1 to 9.

	==========================================

	CREATING A TRACKER:
	t = new Tracker();

	Note. The tracker must be used
	for tracking the game each round.

	==========================================

	CHECKING IF A PLAYER HAVE WON WITH THE TRACKER:
	t.checkPlayer(<game>, <player-to-check>);

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
		*/
		this.cell[ncell] = player.id;
	}

	isEmpty(ncell) {
		/*
		//TO-USE
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

	ATTRIB:
	winnerComb : JSON Object with
	the winner possible combinations
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

	hasCombination(combination, game, player){
		/*
		Checks if a 'player' (object) got
		a whole 'combination' (array), that is
		player got each value of a given
		combination.

		If he does, return true.
		@Return: boolean
		*/
		return combination.every(function(item){
			return game.cell[item] == player.id;
		});
	}

	hasAnyValueCombination(combination, game, player){
		/*
		DEPRECATED: NOT NEEDED.

		Checks if a 'player' (object) got a
		value of a given 'combination' (array),
		Note: not the whole combination, that is
		player did NOT get each value of a given
		combination.

		Note: Hell yeah. I'm reversing the return result
		for reversing it again within the task of
		checking player inside checkPlayer().
		It's just a semantic thing you can do it
		otherwise.

		If he does, return true.
		@Return: boolean
		*/
		return combination.every(function(item){
			return !(game.cell[item] != player.id);
		});
	}


	checkPlayer(game, player) {
		/*
		Checks all possible winner combinations
		for player against its rival. That said,

		- checkPlayer(myGame, player1).
		Will check if player1 won against player2.
		- checkPlayer(myGame, player2).
		Will check if player2 won against player1.

		Where:
			- If a player1 got one of this
			combinations in any order and
			the player2 got no one of those,
			player1 will win.
			- The easy way it's to check for
			each of this 3-combinations.

		If player have won it will return true,
		otherwise it will return false.
		@Return: boolean
		*/
		for (let combination of this.winnerComb) {
			if (this.hasCombination(combination,game,player)) {
				return true;
			}
		}
		return false;
	}

}

class Player {
	/*
	Game players.
	*/
	constructor(id, icon){
		this.id = id;
		this.icon = icon;
	} // TO-DO check id,icon.
}

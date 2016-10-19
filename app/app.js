/*

Tic-Tac-Toe

Simple Tic-Tac-Toe game written in
Javascript.

AUTHOR: Pedro J. Martínez

[API]
	
	STARTING A NEW GAME:
	myGame = new Game();

	==========================================

	CREATING A NEW PLAYER:
	player1 = new Player(<playerid>)

	Where:

		- playerid must be 1 or 2 (the 
		  player number) for handling turns.

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
	t.checkPlayer(<game>, <player-to-check>, <rival-player>);

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
		TO-USE
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
		Checks if a 'player' (object) got a
		value of a given 'combination' (array), 
		Note: not the whole combination, that is
		player doesn't got each value of a given
		combination.
		
		Note: Hell yeah. I'm reversing the return result
		for reversing it again wihtin the task of
		checking player inside checkPlayer().
		It's just a semantic thing you can just do it
		otherwise.

		If he does, return true.
		*/
		return combination.every(function(item){
			return !(game.cell[item] != player.id);
		});
	}


	checkPlayer(game, player, rival) {
		/*
		Checks all possible winner combinations
		for player against its rival. That said,

		- checkPlayer(myGame, player1, player2).
		Will check if player1 won against player2.
		- checkPlayer(myGame, player2, player1).
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
		*/
		for (let combination of this.winnerComb) {
			if (this.hasCombination(combination,game,player)) {
				return !this.hasAnyValueCombination(combination, game, rival)
			}
		} 
		return false;
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


// TESTING ZONE ======================================

// Creating new player
player1 = new Player(1);
player2 = new Player(2);

// Creating new Game
myGame = new Game();

// Playing (winning test)
myGame.play(player1, 1);
myGame.play(player1, 3);
myGame.play(player1, 2);

myGame.play(player2, 4);

// Creating new Tracker
t = new Tracker();

// Test for winner in Game: myGame with player: player1
document.write(t.checkPlayer(myGame, player1, player2));

# Tic-Tac-Toe

A simple Tic-Tac-Toe game written in javascript.

Contact | <pedrojmrt@gmail.com>

### app.js API

Want to modify the game GUI? You can do it without coding a single line of Javascript, nothing but the calls to the API!.

### Quick guide without using graph.js

First step, in the <head> section of your html you need to add the needed scripts, just take a look at the following example:

```html
<script type="text/javascript" src="../app/app.js"></script>
<script type="text/javascript" src="../view/graph.js"></script>
```

Next you just need to add the html elements which you want to use as onClick events, you can use whatever you want in my
example i use a simple table.

Keep in mind you gotta add the following attributes to your items:

- ``html id="cell-<id>".``
- ``onClick="view.play('cell-<id>',<id>)"``.

Where you have to replace ``<id>`` with the number of the cell. You must add 9 elements with both
attributes in order to work properly. Here you got an simple example:

```html
		<table id="panel">
			<tr>
				<td id="cell-1" onClick="view.play('cell-1',1)"></td>
				<td id="cell-2" onClick="view.play('cell-2',2)"></td>
				<td id="cell-3" onClick="view.play('cell-3',3)"></td>
			</tr>
			<tr>
				<td id="cell-4" onClick="view.play('cell-4',4)"></td>
				<td id="cell-5" onClick="view.play('cell-5',5)"></td>
				<td id="cell-6" onClick="view.play('cell-6',6)"></td>
			</tr>
			<tr>
				<td id="cell-7" onClick="view.play('cell-7',7)"></td>
				<td id="cell-8" onClick="view.play('cell-8',8)"></td>
				<td id="cell-9" onClick="view.play('cell-9',9)"></td>
			</tr>
		</table>
```

That's it! You can build you simple Tic-tac-toe game for your web with your own html and css.

### Using the API to add new features

Sometimes you just want to go a step further and program
new features re-using the code.

*Work in progress* : To implement - API controller 
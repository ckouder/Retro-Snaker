## Retro Snaker
A small HTML5 Canvas Game with extendible function APIs.

## Warning!!
It will adjcent its height and width to the best fit size.

## Usage:
Game.init(id, [width, height, colorA, colorB]); 
essential:
 - id: id of the canvas element
optional:
 - width: width of canvas element
 - height: height of canvas element
 - colorA: color of the snake
 - colorB: color of the food

Game.addons(event, listener);
essential:
- event: 
  - `Game-init` -> object:
	d(number): the diameter of each ball,
	xCount(number): number of balls each row can hold
	yCount(number): number of balls each col can hold
  (excute after the webpage loaded or the game restarted)
  
  - `directionChange`: Dir-change -> code(number)
  (excute after you press the arrow keys)
  
  - `Game-rendering` -> object:
	f: 2D array of food positions
		[0]: x-coordinate
		[1]: y-coordinate
	s: array of food position
	code: Arrow key hit by users
  (excute after each step the snake takes)
  
  - `Get-score` -> score(number)
  (excute after the snake eats the food)
  
  - `Game-over` ->undefined
  (excute the snake hit the wall or itself)

- listener: handle excutes after the event has happened.

the addons function allow people to develop other functions of this game to make it much fun.
Good Luck.

## License MIT

Copyright (c) 2016 Guo BingJi

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

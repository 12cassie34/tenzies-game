[Here is the Github pages](https://12cassie34.github.io/tenzies-game/) 

## Table of contents

- [Overview](#overview)
  - [What I learned](#what-i-learned)
  - [Links](#links)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview
The exercise is from the course - Learn React for free created by Bob Ziroll from [Scriba](https://scrimba.com/).

In the website, once a new game start, an user can roll ten dices at a time and select the dices with a same value. The selected dices won't be changes when the user click the roll button again. When the ten dices have a same value, the user can win the game.

### What I learned
In this exercise, I learned:
- Use `useState` to create variables, mutate them and let variables reactively change on web page.
- Use `useEffect` to watch on the changes on the values to check if the user wins.
- Use `Array.prototype.every()` to check if the values in the array have a same value.
- Use `display: grid`, `grid-template-columns: repeat(5, 1fr)`, `gap: 18px` to line up the dices.

### Links
- Solution URL: [tenzies-game](https://github.com/12cassie34/tenzies-game)
- Live Site URL: [Live Demo](https://12cassie34.github.io/tenzies-game/)
- The Layout Design URL: [Tenzies](https://www.figma.com/file/FqsxRUhAaXM4ezddQK0CdR/Tenzies)

### Screenshot

![](https://i.imgur.com/iiNp2Qb.png)


## My process

### Built with

- Semantic HTML5 markup
- [React](https://reactjs.org/) - JS library
- Use [nanoid](https://www.npmjs.com/package/nanoid) to generate unique ids for dices
- Use [react-confetti](https://www.npmjs.com/package/react-confetti) to produce the celebration animation

## Author

- Medium - [Cassie，來學]](https://medium.com/@cassiecoding)
- Cake Resume - [@SHANYU LIN](https://www.cakeresume.com/me/shanyu-lin)

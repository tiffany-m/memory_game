# Memory Flip Card Game
Flip the cards two at a time until you find all the matching Shiba cards! 
## Directions
Once you click the "Start Game" button a timer will start counting.  You can flip two cards at a time.  If they are a match they will stay flipped!  If they are not a match they will flip back to face down.  Once you have flipped all the matching cards the timer will stop.  To play again click the "Reset Game" button.
## Build Status
Complete
## Tech/Framework
- HTML
- CSS
- JavaScript
## Known Bug
Game is not completely centered on all mobile devices.  I found this out close to finishing the project.  In the game, the first screen shows a start button and then you slide to a new screen with the game itself.  I wasn't able to find a work around where I could still keep this feature.  This seems to be a big problem on mobile devices and I will keep it in mind for future projects.

Chanind explains the problem and some solutions really well!  Below is a link to his article, a picture and a quick explanation that I copied from his github.

https://chanind.github.io/javascript/2019/09/28/avoid-100vh-on-mobile-web.html

"The core issue is that mobile browsers (I’m looking at you, Chrome and Safari) have a “helpful” feature where the address bar is sometimes visible and sometimes hidden, changing the visible size of the viewport. Rather than adjusting the height of 100vh to be the visible portion of the screen as the viewport height changes, these browsers instead have 100vh set to the height of the browser with address the address bar hidden. The result is that the bottom portion of the screen will be cut off when the address bar is visible, thus defeating the purpose of 100vh to begin with."

![Image showing example of why 100vh doesn't work.](https://chanind.github.io/assets/100vh_problem.png)

## Motivation
Just wanted to make a fun project to practice styling and JavaScript logic.
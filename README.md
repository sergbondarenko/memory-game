# 

The code challenge will require the developer to build a memory game. 



Gameplay Requirements


The user is presented with a grid containing a series of cards totaling 9 rows of 6 cards each (54 total).  Each card will occupy one grid cell.
Each card has an identical initial image or color displayed to the user.
The cards will be assigned one of 27 icons from Material UI and two cards in the series will share the same icon
The order in which the cards are displayed will be random
When the user clicks a card, the card displays one of the Material UI icons and remains visible
The user is then required to click a second card displaying its icon
If the two cards match their icons, they are both hidden from view but all other cards remain in their current position
If the two cards DO NOT share the same icon, they revert to their original state
When all cards have been removed from the board, the game is over. 
The user can reset the game and play it again


Further requirements


The participant will make strict use of Material UI components
The participant will use redux to store and display the following statistics:
Game Number
Time Started
Time Finished
Elapsed Time (real time counter; display only)
Number of clicks
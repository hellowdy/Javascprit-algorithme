# Chessboard


Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

```
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

# Algorithme
![chessboard](03.png)

# Pseudocode
```
Procedure printChessboard
Pour row entre 0 et 6
    si i est paire
        pour column entre 0 et 7
            si j est paire 
                ajoute ''
            sinon
                ajoute '#'
            fin j 
        fin pour
    sinon 
        pour column entre 0 et 7
            si j est paire
                ajoute '#'
            sinon
                ajoute ''
            fin si 
        fin pour
    fin i 
fin pour
```
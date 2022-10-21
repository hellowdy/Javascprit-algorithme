# Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

```js
#
##
###
####
#####
######
#######
```
# Algorigramme

![Algorigramme](01.png)

# Pseudocode

```
Procédure Triangle
variable : chaîne de caractère row
row <- ' ';
Pour (i de 1 à 7; i + 1 ) faire :
row <- row + 1
affiche row
fin Pour
```

# Solution

```JS
let row = '';
for (let i = 0; i < 7; i + 1) {
  row += '#';
  console.log(row);
}
```
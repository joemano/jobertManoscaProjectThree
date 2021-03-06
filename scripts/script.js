const colorBook = {};

colorBook.canvas = [];

// Color indices of all pages in the book
colorBook.pages = [
// Page 1
[
['F','C','F','F','F','C','C','F','F','F','F','C','F','F','B','A','E','E','E','E','A','A','A','A','A','A','A','A','A','A','A','A','A','A','Z','E','E'],
['A','F','C','F','F','F','F','F','F','F','C','F','B','B','A','Z','A','A','E','A','A','A','A','A','A','A','A','A','A','A','A','A','B','B','B','Z','E'],
['Z','A','F','A','A','A','A','A','A','A','F','B','A','A','Z','Z','Z','Z','Z','A','A','A','A','A','A','A','A','A','A','A','A','A','B','B','C','B','Z'],
['Z','Z','A','A','C','C','B','B','C','C','A','A','Z','Z','Z','Z','Z','Z','A','A','A','A','A','Z','A','Z','C','A','C','A','A','B','B','C','C','B','B'],
['Z','Z','Z','Z','A','A','A','A','A','A','Z','Z','Z','Z','Z','Z','Z','Z','A','Z','A','A','A','A','A','A','A','A','A','A','A','B','B','B','B','B','B'],
['Z','Z','Z','A','A','A','Z','A','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','A','A','Z','A','A','A','A','A','A','A','Z','A','A','A','B','B','E','A'],
['Z','Z','A','G','G','A','A','A','A','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','A','A','Z','A','A','A','A','A','A','A','G','Z','A','Z','A','E','F','F'],
['Z','A','G','G','A','C','B','B','C','A','Z','Z','Z','Z','Z','Z','Z','Z','A','A','Z','G','G','G','G','G','G','G','G','G','G','A','A','A','A','F','A'],
['Z','A','A','A','A','A','A','A','A','A','A','A','Z','Z','Z','Z','Z','Z','A','A','A','A','A','A','G','G','G','G','A','A','A','A','G','A','A','F','A'],
['A','F','B','C','F','F','B','C','F','B','C','B','A','Z','Z','Z','Z','Z','A','A','G','A','A','A','G','G','G','G','G','A','A','A','G','A','A','F','F'],
['F','F','C','F','F','F','F','F','C','F','F','C','B','A','Z','Z','Z','A','Z','A','G','A','A','B','G','G','G','G','G','A','A','B','G','A','G','A','F'],
['F','C','F','F','F','F','F','F','F','C','F','F','C','B','A','Z','Z','A','Z','A','G','A','A','A','G','G','G','G','G','A','A','A','G','G','G','C','F'],
['F','C','F','F','F','F','F','F','F','C','F','F','F','C','B','A','A','A','A','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','C','A'],
['F','C','F','F','F','C','F','F','F','C','F','F','F','C','A','B','A','A','A','G','G','G','G','G','G','G','G','G','G','G','G','G','G','A','A','F','A'],
['C','F','F','F','C','F','C','F','F','F','C','F','F','C','A','B','B','B','A','A','G','G','G','G','G','G','A','G','G','G','G','G','A','A','A','F','E'],
['C','F','F','F','F','C','F','F','F','F','C','F','F','F','C','A','B','B','B','Z','A','A','G','G','G','G','G','G','G','G','A','A','A','A','A','A','E'],
['C','F','F','F','C','C','C','F','F','F','C','F','F','F','C','A','B','B','B','B','Z','A','A','A','A','E','E','Z','E','E','A','A','A','A','A','A','E'],
['C','F','C','F','F','C','F','F','C','F','C','F','F','F','C','A','B','B','B','B','C','B','G','A','B','C','E','E','C','C','Z','A','A','A','A','A','E'],
['C','F','F','C','F','C','F','C','F','F','C','F','F','F','C','A','Z','B','B','C','B','G','A','B','B','E','E','C','B','B','E','Z','Z','A','A','A','A'],
['C','Z','F','F','C','C','C','F','F','F','C','Z','F','F','C','A','A','Z','Z','C','G','G','B','E','E','G','G','E','C','B','B','E','G','G','A','A','A'],
['Z','C','Z','F','F','F','F','F','F','C','Z','F','F','F','A','Z','Z','A','A','A','A','A','B','C','E','E','E','C','B','B','B','E','G','G','B','A','Z'],
['Z','C','Z','F','F','F','F','F','F','C','Z','F','A','A','Z','Z','Z','Z','Z','A','A','A','B','B','C','C','C','B','B','B','B','A','B','B','Z','A','Z']
],

// Page 2
[
['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','A','C','C','B','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','C','C','B','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','A','A','C','C','B','B','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
['Z','Z','Z','Z','Z','Z','Z','Z','A','A','C','C','C','C','C','C','C','B','Z','Z','Z','Z','Z','Z','Z','Z','Z','B','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
['Z','Z','Z','Z','Z','Z','Z','A','C','C','C','C','C','C','C','C','C','C','B','Z','Z','Z','Z','Z','Z','Z','Z','Z','C','Z','Z','Z','Z','Z','Z','Z','Z'],
['Z','Z','Z','Z','Z','Z','A','C','C','C','C','C','C','C','C','C','C','C','C','B','Z','Z','Z','Z','Z','Z','Z','Z','B','Z','Z','Z','Z','B','Z','Z','Z'],
['Z','Z','Z','Z','Z','A','C','C','C','C','A','C','C','C','C','C','C','C','A','C','B','Z','Z','Z','Z','B','Z','Z','Z','C','Z','Z','C','Z','Z','Z','Z'],
['Z','Z','Z','Z','Z','A','C','C','C','C','C','A','C','C','C','C','C','A','C','C','B','Z','Z','Z','Z','Z','C','Z','Z','Z','Z','Z','B','Z','Z','Z','Z'],
['Z','Z','Z','Z','A','C','C','C','C','C','C','C','A','C','C','C','A','C','C','C','C','B','Z','Z','Z','Z','Z','B','C','Z','Z','B','Z','Z','Z','Z','Z'],
['Z','Z','Z','A','C','C','C','C','C','C','A','A','C','C','C','C','C','A','A','C','C','B','Z','Z','Z','Z','Z','Z','Z','Z','C','Z','Z','Z','Z','Z','Z'],
['Z','Z','A','C','C','C','C','C','Z','Z','C','C','C','C','F','F','C','C','C','Z','C','B','Z','Z','Z','Z','Z','Z','Z','C','Z','Z','Z','Z','Z','Z','Z'],
['Z','A','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','Z','Z','Z','A','Z','B','B','B','B','Z','Z','Z','Z','Z','Z'],
['Z','A','A','A','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','A','A','Z','Z','F','F','F','F','A','Z','Z','Z','Z','Z'],
['Z','Z','Z','A','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','Z','Z','Z','F','C','C','C','A','Z','Z','Z','Z','Z'],
['Z','Z','Z','A','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','A','Z','Z','Z','Z','F','F','F','F','A','Z','Z','Z','Z','Z'],
['Z','Z','Z','A','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','Z','Z','Z','Z','Z','F','F','F','F','A','Z','Z','Z','Z','Z'],
['Z','Z','Z','A','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','Z','Z','Z','Z','Z','F','F','F','F','F','A','Z','Z','Z','Z','Z'],
['Z','Z','Z','A','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','Z','Z','Z','Z','Z','F','F','F','F','F','A','Z','Z','Z','Z','Z'],
['Z','Z','Z','Z','A','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','Z','Z','Z','Z','Z','F','F','F','F','A','Z','Z','Z','Z','Z','Z'],
['Z','Z','Z','Z','A','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','Z','Z','Z','Z','Z','Z','F','F','F','F','A','Z','Z','Z','Z','Z','Z'],
['Z','Z','Z','Z','Z','A','C','C','C','C','C','C','C','C','C','C','C','C','A','Z','Z','Z','Z','Z','Z','Z','F','C','C','C','A','Z','Z','Z','Z','Z','Z']
],

// Page 3
[
['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','A','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','A','A','A','A','A','A','Z','Z','Z','Z','Z','Z','Z'],
['Z','Z','Z','Z','A','A','A','A','A','A','Z','Z','Z','Z','Z','Z','Z','Z','Z','B','B','A','A','B','B','B','B','B','A','A','A','A','B','B','A','Z','Z'],
['A','A','A','A','F','F','F','C','F','C','A','Z','Z','Z','Z','Z','Z','Z','B','C','C','A','B','A','A','A','A','A','B','B','A','A','C','C','C','A','Z'],
['F','F','F','F','F','F','F','C','F','C','A','Z','Z','Z','Z','Z','A','A','C','C','A','A','A','A','A','A','A','A','A','A','A','A','A','C','C','A','A'],
['F','F','F','F','F','F','A','A','A','A','A','Z','Z','Z','Z','A','A','A','C','A','A','A','A','C','A','C','A','C','A','A','A','A','A','A','C','Z','A'],
['A','A','A','A','A','A','Z','C','A','Z','Z','Z','Z','Z','A','A','A','Z','A','A','A','A','A','A','A','C','A','C','A','A','A','A','A','A','A','A','Z'],
['Z','Z','Z','Z','Z','Z','F','C','A','Z','Z','Z','Z','A','A','Z','Z','Z','A','C','A','A','G','A','A','A','A','A','A','A','A','A','C','A','A','A','Z'],
['F','F','F','F','F','F','F','C','A','Z','Z','Z','A','Z','Z','Z','Z','Z','A','C','A','A','G','G','A','A','A','A','A','G','A','A','C','A','A','A','Z'],
['F','F','F','F','A','F','F','F','C','A','Z','Z','A','Z','Z','Z','Z','Z','A','A','A','A','A','A','A','A','A','A','A','A','G','A','A','A','A','A','Z'],
['F','A','F','A','A','A','F','F','C','A','Z','Z','Z','A','Z','Z','Z','A','A','A','A','A','A','F','G','G','G','G','A','F','G','A','A','A','A','A','Z'],
['F','A','F','F','Z','A','F','F','C','A','Z','Z','Z','A','Z','A','A','Z','A','A','A','G','F','B','G','G','G','G','F','B','G','G','A','A','A','Z','A'],
['A','A','Z','A','A','A','A','F','C','A','Z','Z','Z','Z','A','Z','Z','Z','A','A','A','G','F','F','G','G','G','G','F','F','G','G','A','A','A','Z','A'],
['F','A','F','F','A','Z','F','F','C','A','Z','Z','Z','Z','Z','Z','Z','Z','A','A','A','G','G','G','G','G','G','G','G','G','G','G','A','A','A','Z','Z'],
['F','A','F','A','F','A','A','F','C','A','Z','A','Z','Z','Z','Z','Z','Z','Z','A','A','A','G','G','G','G','F','G','G','G','G','A','A','A','Z','Z','Z'],
['F','F','F','F','F','F','F','F','F','C','A','G','A','Z','Z','A','A','A','A','A','G','G','G','G','G','G','G','G','G','G','G','G','A','Z','Z','Z','Z'],
['F','F','F','Z','A','A','A','F','F','C','A','G','G','A','A','B','B','B','B','B','A','A','Z','Z','Z','A','C','C','A','A','Z','Z','Z','Z','Z','Z','Z'],
['F','F','F','A','F','A','F','F','F','C','A','G','G','A','A','A','B','B','B','B','B','B','A','A','A','E','A','A','A','A','A','A','Z','Z','Z','Z','Z'],
['F','F','F','A','A','A','A','F','F','C','A','A','G','A','A','A','Z','B','B','B','B','B','B','E','E','E','E','E','E','E','B','B','A','Z','Z','Z','Z'],
['C','F','F','F','F','A','F','F','F','C','A','Z','A','A','A','A','A','Z','Z','Z','Z','Z','Z','B','C','C','C','C','G','C','C','B','B','A','A','Z','Z'],
['C','F','A','A','F','A','F','A','F','C','A','Z','Z','A','A','A','A','A','A','A','A','A','A','E','E','B','B','B','C','B','B','Z','B','B','B','A','A'],
['C','F','F','F','F','F','F','F','F','C','A','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','E','Z','B','B','B','B','Z','E','A','B','B','B','B']
],

// Page 4
[
['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','A','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
['Z','Z','Z','Z','Z','Z','Z','A','A','A','A','A','A','A','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
['Z','Z','A','B','B','A','A','A','A','B','B','B','B','B','A','A','B','B','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','A','A','A','A','A','Z','Z','Z','Z'],
['Z','A','C','C','C','A','A','B','B','A','A','A','A','A','B','A','C','C','B','Z','Z','Z','Z','Z','Z','Z','A','C','F','C','F','F','F','A','A','A','A'],
['A','A','C','C','A','A','A','A','A','A','A','A','A','A','A','A','A','C','C','A','A','Z','Z','Z','Z','Z','A','C','F','C','F','F','F','F','F','F','F'],
['A','Z','C','A','A','A','Z','A','Z','F','A','F','A','F','A','A','A','C','C','A','A','A','Z','Z','Z','Z','A','A','A','A','A','F','F','F','F','F','F'],
['Z','A','A','A','Z','A','Z','Z','Z','F','A','F','A','A','A','A','A','A','C','Z','A','A','A','Z','Z','Z','Z','Z','A','C','Z','A','A','A','A','A','A'],
['Z','A','A','A','B','Z','Z','A','A','A','A','A','A','A','G','A','A','F','A','Z','Z','Z','A','A','Z','Z','Z','Z','A','C','F','Z','Z','Z','Z','Z','Z'],
['Z','A','A','A','B','A','A','G','A','A','A','A','A','G','G','A','A','F','A','Z','Z','Z','Z','Z','A','Z','Z','Z','A','C','F','F','F','F','F','F','F'],
['Z','A','A','A','A','A','G','A','A','A','A','A','A','A','A','A','A','A','A','Z','Z','Z','Z','Z','A','Z','Z','A','C','F','F','F','F','F','F','F','F'],
['Z','A','A','A','A','A','G','A','F','G','G','G','G','A','F','A','A','A','A','A','Z','Z','Z','A','Z','Z','Z','A','C','F','F','A','F','F','Z','A','A'],
['Z','A','A','A','A','G','G','F','B','G','G','G','G','F','B','G','A','A','A','Z','A','A','Z','A','Z','Z','Z','A','C','F','A','A','A','F','A','F','F'],
['Z','Z','A','A','A','G','G','F','F','G','G','G','G','F','F','G','A','A','A','Z','Z','Z','A','Z','Z','Z','Z','A','C','F','Z','A','Z','F','A','A','A'],
['A','Z','A','A','A','G','G','G','G','G','G','G','G','G','G','G','A','A','A','Z','Z','Z','Z','Z','Z','Z','Z','A','C','F','A','A','A','F','A','Z','A'],
['A','Z','Z','A','A','A','G','G','G','G','F','G','G','G','G','A','A','A','Z','Z','Z','Z','Z','Z','Z','A','Z','A','C','F','A','A','A','F','A','F','A'],
['A','Z','Z','Z','A','G','G','G','G','G','G','G','G','G','G','G','G','A','A','A','A','A','Z','Z','A','G','A','C','F','F','F','A','F','F','F','F','A'],
['Z','A','Z','Z','Z','Z','Z','A','A','C','C','A','Z','Z','Z','A','A','B','B','B','B','B','A','A','G','G','A','C','F','F','F','F','F','A','F','F','F'],
['Z','A','Z','Z','Z','A','A','A','A','A','A','F','A','A','A','B','B','B','B','B','B','A','A','A','G','G','A','C','F','F','F','A','A','A','A','A','F'],
['Z','Z','Z','Z','A','B','B','C','C','E','C','C','F','F','B','B','B','B','B','B','Z','A','A','A','G','A','A','C','F','F','F','Z','A','A','Z','F','F'],
['Z','Z','A','A','B','B','A','A','G','A','A','A','C','B','Z','Z','Z','Z','Z','Z','A','C','A','C','A','Z','A','C','F','F','A','A','A','A','A','A','C'],
['A','A','B','B','B','Z','C','A','A','C','C','C','F','F','A','A','A','A','A','A','A','A','A','A','Z','Z','A','C','F','F','F','A','A','A','A','F','C'],
['B','B','B','B','Z','F','F','C','C','F','F','F','F','A','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','C','F','F','A','A','Z','Z','A','A','C']
],

// Page 5
[
['Z','Z','Z','Z','A','F','F','F','A','Z','Z','A','D','D','D','B','A','Z','Z','D','Z','Z','A','D','D','B','A','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
['Z','Z','Z','Z','Z','A','F','A','Z','Z','Z','A','D','D','B','A','A','A','D','A','A','A','D','D','D','B','A','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
['Z','Z','A','Z','Z','Z','A','Z','Z','A','A','D','D','D','D','D','D','D','D','D','A','D','D','D','D','B','A','Z','Z','Z','Z','Z','Z','Z','A','Z','Z'],
['Z','A','F','A','Z','Z','Z','Z','A','B','B','A','D','D','D','D','D','B','D','D','B','D','D','B','D','B','A','Z','Z','Z','Z','Z','Z','A','F','A','Z'],
['A','F','C','A','Z','Z','Z','Z','Z','A','A','D','D','D','B','D','D','B','B','D','D','B','D','B','B','B','D','A','Z','Z','Z','Z','A','C','F','F','A'],
['F','F','C','F','A','Z','Z','Z','A','B','A','D','D','D','D','D','D','D','D','D','D','D','D','D','B','B','B','A','Z','Z','Z','Z','A','F','C','F','F'],
['F','C','F','F','F','A','Z','Z','A','A','D','D','D','Z','Z','D','D','D','D','Z','D','D','D','D','D','B','D','A','Z','Z','Z','A','F','F','F','C','C'],
['C','F','F','F','F','A','Z','Z','A','D','D','D','A','A','A','G','D','D','D','A','A','A','A','D','D','D','D','A','Z','Z','Z','A','F','F','F','F','F'],
['F','F','C','F','F','F','A','Z','A','D','A','D','Z','Z','Z','G','G','D','D','Z','Z','Z','G','D','D','D','D','A','Z','Z','Z','A','F','F','C','F','F'],
['F','C','F','C','F','F','A','A','D','D','A','Z','C','Z','B','G','G','G','D','C','Z','B','G','D','D','D','D','A','Z','Z','A','F','F','C','F','C','F'],
['F','F','C','F','F','A','A','A','D','D','A','G','C','C','C','G','G','G','G','C','C','C','G','D','D','D','D','A','Z','A','A','F','F','F','C','F','F'],
['F','F','F','F','A','C','C','C','A','A','F','G','G','G','G','G','G','G','G','G','G','G','F','F','D','D','D','D','A','B','C','A','F','F','F','F','F'],
['A','F','F','A','C','C','C','A','B','A','G','G','G','G','G','G','G','G','G','G','G','G','G','D','D','D','D','A','B','C','C','C','A','F','F','F','F'],
['Z','A','F','A','C','C','C','A','B','A','G','G','G','G','G','A','A','G','G','G','G','G','G','A','D','A','A','B','A','C','C','C','A','A','F','F','A'],
['Z','Z','A','A','C','C','C','C','B','B','A','A','G','G','G','G','G','G','G','G','G','G','A','D','A','Z','B','B','A','C','C','C','A','D','A','A','Z'],
['Z','Z','Z','A','C','C','C','A','B','B','B','Z','A','A','A','A','A','A','A','A','A','A','Z','A','Z','B','B','B','C','C','C','C','A','D','A','Z','Z'],
['Z','Z','Z','A','C','C','A','A','B','B','B','B','Z','A','B','F','C','C','F','A','B','A','B','B','B','B','B','B','A','C','C','C','A','D','A','Z','Z'],
['Z','Z','Z','A','C','C','A','A','B','B','B','B','B','B','A','F','F','G','F','B','A','Z','B','B','B','B','B','B','A','A','C','C','C','A','A','Z','Z'],
['Z','Z','Z','Z','A','C','A','C','C','Z','B','B','B','B','A','B','G','G','A','A','Z','B','B','B','B','Z','Z','Z','Z','A','C','C','C','A','Z','Z','Z'],
['Z','Z','Z','Z','Z','A','A','A','A','A','Z','Z','B','B','B','A','A','A','A','B','B','B','B','Z','Z','A','A','A','A','A','A','A','A','Z','Z','Z','A'],
['Z','Z','Z','Z','Z','Z','Z','Z','A','D','A','A','Z','B','B','B','A','B','B','B','B','B','B','A','A','D','D','D','A','Z','Z','Z','Z','Z','Z','A','F'],
['Z','Z','Z','Z','Z','Z','Z','Z','A','D','D','A','Z','B','A','B','B','B','A','B','B','B','Z','A','D','D','D','D','A','Z','Z','Z','Z','Z','A','F','F']
],

// Page 6
[
['Z','Z','Z','Z','A','A','A','A','F','B','B','B','A','Z','Z','Z','Z','A','F','F','F','F','B','F','A','A','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
['Z','Z','Z','A','F','F','F','F','F','F','B','B','B','A','Z','Z','A','E','B','B','F','F','B','F','B','B','A','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
['Z','Z','Z','A','F','F','F','F','B','B','B','F','F','B','A','Z','A','E','F','F','B','B','F','F','B','F','B','A','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
['Z','Z','A','F','F','B','B','B','F','F','B','F','F','F','B','A','Z','A','E','F','F','F','B','B','F','B','B','A','Z','Z','A','A','Z','Z','Z','Z','Z'],
['Z','Z','A','B','B','F','F','F','F','F','B','F','F','B','A','Z','Z','A','E','F','F','F','B','F','B','B','B','A','Z','A','F','F','A','A','Z','Z','Z'],
['Z','A','E','E','F','B','F','F','F','B','F','F','B','A','Z','Z','Z','Z','A','E','F','B','F','F','F','B','A','Z','A','F','F','C','F','F','A','A','Z'],
['Z','Z','A','A','E','F','B','F','F','B','F','B','A','Z','Z','Z','Z','Z','A','E','F','B','F','F','B','A','A','A','A','A','A','C','F','F','F','F','A'],
['Z','Z','Z','Z','A','E','F','B','F','F','B','A','Z','Z','Z','Z','A','A','A','A','E','F','B','B','A','F','F','F','A','B','B','A','Z','F','F','F','F'],
['Z','A','A','A','A','A','E','F','F','B','A','Z','Z','Z','Z','Z','Z','A','A','A','A','B','A','A','F','F','A','B','B','B','B','B','A','Z','F','F','F'],
['A','A','A','A','A','A','A','E','F','A','Z','Z','Z','Z','Z','Z','Z','Z','A','F','F','A','F','F','A','B','B','B','B','B','B','F','F','A','Z','F','F'],
['Z','Z','A','A','A','A','A','A','A','Z','Z','Z','Z','Z','A','A','A','A','A','F','F','F','A','B','B','B','B','B','B','F','F','F','F','F','A','C','F'],
['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','A','F','F','F','A','F','F','A','A','B','B','B','B','B','B','F','F','F','F','F','F','F','A','C'],
['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','C','F','F','F','F','A','A','A','B','B','B','B','B','B','F','F','F','F','F','F','F','F','F','F','A'],
['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','Z','C','F','F','A','A','B','B','B','B','B','B','F','F','F','F','C','C','F','F','F','F','F','F','F'],
['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','Z','F','C','C','A','B','B','B','B','B','F','F','F','F','F','C','F','F','C','F','F','F','F','F','F'],
['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','Z','F','F','F','A','B','B','B','B','F','F','F','F','F','F','C','C','F','C','F','F','F','C','F','F'],
['Z','Z','Z','Z','Z','Z','Z','Z','A','A','A','A','Z','F','F','F','F','A','B','F','F','F','F','F','F','F','F','F','C','C','C','C','F','C','F','F','C'],
['Z','Z','Z','Z','A','A','A','A','A','A','A','A','Z','F','F','F','F','C','A','Z','F','F','F','F','F','F','F','F','F','F','F','C','C','F','F','C','C'],
['Z','Z','Z','A','A','A','A','A','A','A','A','A','A','Z','F','F','F','C','F','A','Z','F','F','F','F','F','F','F','F','F','C','F','C','F','F','F','C'],
['Z','Z','Z','Z','A','A','A','A','A','A','A','A','A','Z','F','F','F','F','C','C','A','Z','F','F','F','F','F','F','F','C','F','F','F','C','F','F','C'],
['Z','Z','Z','Z','Z','Z','A','A','A','A','A','A','A','Z','F','F','F','F','F','C','F','A','Z','F','F','F','F','F','F','F','F','C','F','F','C','F','C'],
['Z','Z','Z','Z','Z','Z','Z','A','A','A','A','A','A','Z','F','F','C','C','C','C','C','C','A','Z','F','F','F','F','F','C','C','C','C','C','C','C','C']
],

// Page 7
[
['Z','Z','Z','Z','Z','Z','Z','Z','Z','A','C','A','F','E','E','A','A','C','C','C','A','A','Z','Z','A','A','Z','A','A','Z','Z','Z','Z','Z','Z','Z','Z'],
['Z','Z','Z','Z','Z','Z','Z','Z','A','A','A','E','E','B','B','B','A','A','A','A','Z','Z','Z','A','C','C','A','C','C','A','Z','A','Z','Z','Z','Z','Z'],
['Z','Z','Z','Z','Z','Z','Z','Z','A','A','A','F','B','B','A','A','B','A','A','A','A','Z','A','A','A','C','A','A','A','C','A','C','A','Z','Z','Z','Z'],
['Z','Z','Z','Z','Z','Z','Z','A','A','A','A','F','B','B','A','A','B','A','A','A','A','A','F','F','C','F','F','F','F','F','A','A','C','A','A','Z','Z'],
['Z','A','A','A','A','Z','Z','A','A','Z','F','F','A','B','B','B','A','A','F','B','C','F','B','F','B','F','B','B','C','B','F','F','A','A','C','A','A'],
['A','F','F','F','Z','A','A','Z','Z','F','F','F','F','A','A','A','F','F','B','F','F','C','F','C','F','F','F','F','C','F','F','B','C','F','A','C','C'],
['A','F','F','F','F','F','F','F','F','F','F','F','F','F','F','F','F','B','A','E','E','B','C','F','C','F','F','C','F','C','F','C','F','F','C','A','A'],
['Z','A','F','F','F','D','F','D','F','D','F','D','F','F','F','F','F','A','E','E','B','F','C','F','C','F','C','F','F','F','C','F','F','B','F','F','A'],
['Z','A','F','D','D','B','D','B','D','B','D','B','D','D','F','F','A','A','B','B','F','C','F','F','F','C','F','F','F','C','F','F','F','C','F','C','F'],
['Z','Z','A','A','B','A','B','A','B','A','B','A','B','A','D','F','F','F','A','E','E','B','F','F','F','C','F','F','F','C','F','F','A','A','F','B','F'],
['Z','Z','Z','A','A','A','A','A','A','A','A','A','A','A','D','F','F','A','E','E','B','A','F','A','A','A','A','A','A','A','F','A','C','C','A','F','B'],
['Z','Z','Z','Z','A','Z','A','Z','A','Z','A','A','A','D','F','F','A','A','E','B','A','A','A','A','C','C','C','C','C','A','A','C','C','C','A','Z','F'],
['Z','Z','Z','Z','Z','Z','Z','Z','Z','A','A','B','B','F','F','F','F','A','A','A','C','C','A','C','C','C','C','C','A','C','C','C','C','A','F','F','Z'],
['Z','Z','Z','Z','Z','Z','Z','A','A','B','B','A','F','F','F','F','A','A','C','C','C','C','A','C','C','C','C','C','A','C','C','C','C','A','Z','Z','F'],
['Z','Z','Z','Z','Z','A','A','B','B','A','F','F','F','F','F','Z','A','A','C','C','C','Z','C','C','F','F','C','C','C','C','Z','C','C','A','F','F','Z'],
['Z','Z','Z','A','A','B','B','A','F','F','F','F','F','F','Z','A','A','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','F','Z','F'],
['Z','Z','Z','A','F','F','F','F','F','F','F','F','F','Z','A','A','A','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','F','F','A'],
['Z','Z','Z','A','A','F','F','F','F','F','F','F','Z','A','A','A','A','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','A','A','A'],
['Z','Z','Z','Z','Z','A','C','C','F','F','Z','A','A','A','A','A','A','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','A','A','A'],
['Z','Z','Z','Z','Z','Z','A','A','C','Z','A','A','A','Z','Z','A','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','A','A','A'],
['Z','Z','Z','Z','Z','Z','Z','A','A','A','Z','Z','Z','Z','Z','A','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','A','A','Z'],
['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','A','Z','Z']
],

//Page 8
[
['Z','A','Z','F','A','A','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','Z','F','F','F','F','A','Z','Z','Z','A','Z','F','F','A','Z','Z','Z','Z','Z','Z'],
['A','Z','F','F','F','C','A','Z','Z','A','A','A','A','A','A','A','A','A','Z','F','F','F','F','A','A','A','A','A','A','F','F','A','Z','Z','Z','Z','Z'],
['A','Z','F','C','C','B','A','A','A','Z','F','F','F','F','F','C','C','F','A','Z','F','F','F','F','F','A','C','A','A','A','F','F','A','Z','Z','Z','Z'],
['Z','A','C','B','B','F','F','F','F','F','C','F','F','F','C','F','F','A','F','F','F','F','F','F','F','F','A','C','C','A','F','A','A','Z','Z','Z','Z'],
['A','C','B','F','C','C','F','F','C','C','F','C','C','C','F','F','A','F','F','B','B','B','F','F','F','F','F','A','A','F','F','B','A','Z','Z','Z','Z'],
['A','F','F','F','F','F','C','C','F','F','F','F','F','F','F','C','A','F','B','A','B','B','B','B','B','F','F','F','B','B','B','B','B','A','Z','Z','Z'],
['A','C','C','F','F','F','F','F','F','C','F','F','F','F','C','F','A','B','B','A','A','A','A','A','A','A','F','E','C','C','B','A','A','A','Z','Z','Z'],
['F','F','F','C','F','F','F','C','C','F','C','F','F','C','F','A','F','C','C','C','A','B','C','A','B','A','F','E','E','C','C','B','C','B','A','Z','Z'],
['F','F','F','F','C','C','C','F','F','F','F','C','C','F','F','A','F','F','C','C','A','B','C','C','C','A','F','F','E','E','E','B','C','C','A','Z','Z'],
['A','F','F','A','A','F','F','F','F','F','F','F','A','F','F','A','F','F','F','F','C','A','B','B','A','E','F','F','F','F','F','A','B','A','A','Z','Z'],
['A','A','A','C','C','A','Z','A','A','A','A','A','A','F','F','F','A','F','F','F','F','C','A','A','E','F','F','F','F','F','F','E','A','C','A','Z','Z'],
['A','A','A','C','C','C','A','A','C','C','C','C','A','F','F','F','F','A','F','F','F','F','E','E','F','F','F','F','A','C','A','F','E','A','Z','Z','Z'],
['A','A','A','A','C','C','C','C','A','C','C','C','A','F','F','F','F','C','A','F','F','F','F','F','F','F','F','C','C','C','C','F','F','F','A','Z','Z'],
['A','A','A','A','C','C','C','C','A','C','C','C','C','A','F','C','C','C','F','A','F','F','F','F','F','B','B','A','A','A','B','F','F','F','A','Z','Z'],
['A','A','A','A','C','C','C','Z','C','C','C','F','F','A','C','F','F','C','F','A','B','F','F','B','B','A','A','B','B','B','A','B','F','F','A','A','Z'],
['A','A','A','A','C','C','C','C','C','C','C','C','C','C','A','C','F','F','C','C','A','B','B','A','A','B','B','C','C','C','B','A','B','B','A','A','Z'],
['A','A','A','A','C','C','C','C','C','C','C','C','C','C','A','F','C','C','C','F','A','B','A','C','C','C','C','C','C','C','C','C','A','B','A','A','A'],
['Z','A','A','A','C','C','C','C','C','C','C','C','C','C','A','C','F','F','C','F','F','A','F','F','B','B','B','B','B','B','B','B','F','A','A','A','A'],
['Z','A','A','A','C','C','C','C','C','C','C','C','C','C','A','F','C','F','F','B','B','A','A','A','F','F','F','F','F','F','F','F','A','A','A','A','A'],
['Z','Z','A','A','C','C','C','C','C','C','C','C','C','C','C','A','F','F','B','A','A','A','Z','Z','A','A','A','A','A','A','A','A','A','A','A','A','Z'],
['Z','Z','A','A','C','C','C','C','C','C','C','C','C','C','C','A','B','B','A','A','C','A','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','A','A','A','Z','Z'],
['Z','Z','Z','A','C','C','C','C','C','C','C','C','C','C','C','C','A','A','A','C','C','A','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z','Z']
]

];

// Array that holds the user's progress
colorBook.progress = [];

// Dimensions of the canvas
colorBook.sizeX = 37;
colorBook.sizeY = 22;

// Pixel contains vital information for the logic of the app
class Pixel {
  constructor(rowIndex = 0, columnIndex = 0, colorIndex = 0, isFilled = true){
    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
    this.colorIndex = colorIndex;
    this.isFilled = isFilled;
  }
}

// Build the model for the app to work with.
colorBook.buildColorBook = function() {

  // This messy nested for loop is for constructing the pages in the color book
  this.pages.forEach(function(page){
    // This is the array that will hold the information of the pixels
    // A new array is made for every page from colorBook.pages, the color index
    let pageArray = [];
    for(let i = 0; i < colorBook.sizeY; i++) {
      // This will create a new row the loop to work with
      pageArray.push([]);
      for(let j = 0; j < colorBook.sizeX; j++) {
        // "Z" represents a blank color, showing the default background color of the canvas.
        // Such pixels will be treated as having already been filled.
        if(page[i][j] === 'Z'){
          pageArray[i].push(new Pixel(j, i, page[i][j], true));
        } else {
          // All other pixels are not filled by default.
          // We use the loop's index numbers to assign indices to every pixel on the page.
          pageArray[i].push(new Pixel(j, i, page[i][j], false));
        }
      }
    }

    // The purpose of this object is to be copied into the global array which holds the user's progress.
    // The boolean will be used to determine whether or not the user has completed the page.
    const progressPage = {
      // slice() is used just in case since arrays are passed by reference.
      // slice() will return a copy of the array we made with the loops
      page: pageArray.slice(),
      isCompleted: false
    };

    // Add a copy of the object created to the global array
    colorBook.progress.push(Object.assign({}, progressPage));
  });
};

// Build the user's initial progress
colorBook.buildInitProgress = function() {
  this.pages.forEach(function(page) {
    colorBook.assignPage(page);
    colorBook.progress.push([...colorBook.canvas]);
  });
};

// This function builds the bridge for the model and the interface that the user can see.
colorBook.drawCanvas = function() {
  this.canvas.forEach(function(row) {
    row.forEach(function(pixel) {
      // Put the pixels on the canvas with their appropriate indices for position and color.
      $(".canvas").append(`<div class="pixel ${pixel.colorIndex} notFilled" data-rowIndex=${pixel.rowIndex} data-columnIndex=${pixel.columnIndex}><p>${pixel.colorIndex}</p></div>`);
    })
  });

  // This hides the text for pixels with a blank(represented as 'Z') color index.
  $(".Z p").addClass("sr-only").text("blank");
};

// This function is used to reassign indices to the interface whenever there's a change to the canvas model
colorBook.redrawCanvas = function() {
  colorBook.canvas.forEach(function(row) {
    row.forEach(function(pixel) {
      const $pixel = $(`.pixel[data-rowIndex=${pixel.rowIndex}][data-columnIndex=${pixel.columnIndex}]`);

      // Reset the pixel's CSS classes
      $pixel.attr("class", "pixel").addClass(`${pixel.colorIndex}`).find("p").removeClass().text(`${pixel.colorIndex}`);
      // Give the pixel on the DOM a class to give it the default background color.
      // The blank "Z" is a special case in which it must have the background color 
      // but be treated as having been filled.
      if(!pixel.isFilled || pixel.colorIndex === 'Z'){
        $pixel.addClass("notFilled");
      }

      // Hide the text if the pixel is already filled.
      if(pixel.isFilled) {
        $pixel.find("p").addClass("hidden");
      }
    })
  });
};

// Modified flood fill algorithm  to better suit the functionality of the app
colorBook.fill = function(x, y, selectedColor) {

  // Check if the target pixel is outside the boundaries of the canvas
  if(x < 0 || y < 0 || x >= colorBook.sizeX || y >= colorBook.sizeY) {
    return;
  }

  // Check if the user's selected color matches the color index of the selected pixel.
  // Also check if that pixel has already been filled.
  if(this.canvas[y][x].colorIndex !== selectedColor || this.canvas[y][x].isFilled){
    return;
  }

  // Fill the target pixel and hide the text
  this.canvas[y][x].isFilled = true;
  const $selectedPixel = $(`.pixel[data-rowIndex=${x}][data-columnIndex=${y}]`);

  $selectedPixel.removeClass("notFilled");
  $selectedPixel.find("p").addClass("hidden");

  // Call the function again for adjacent pixels.
  // Checks in 8 directions
  this.fill(x - 1, y, selectedColor); // left
  this.fill(x - 1, y - 1, selectedColor); // top left
  this.fill(x, y - 1, selectedColor); // top
  this.fill(x + 1, y - 1, selectedColor); // top right
  this.fill(x + 1, y, selectedColor); // right
  this.fill(x + 1, y + 1, selectedColor); // bottom right
  this.fill(x, y + 1, selectedColor); // bottom
  this.fill(x - 1, y + 1, selectedColor); // bottom left
};

// Check for matching colors
colorBook.matchColor = function(x, y, color, currentPage) {
  // A boolean for the purpose of checking if the user successfully matched the colors
  let successfulMatch = false;
  
  // Check if there is a successful match
  if(colorBook.canvas[y][x].colorIndex === color && !colorBook.canvas[y][x].isFilled){
    successfulMatch = true;
  }

  // Attempt to fill the selected pixel with the selected color.
  colorBook.fill(x, y, color);

  // Only check for page completion when there's a successful match.
  // Though there is a conditional in the recursive function for this check,
  // I didn't wan't to call the check in there for obvious reasons.
  if(successfulMatch) {
    if(colorBook.checkPageComplete()){
      const alertString = "We've successfully completed this page, Commander.";
      colorBook.progress[currentPage].isCompleted = true;
      $(`input[name="page"][value=${currentPage + 1}] + .page`).removeClass("locked");
      alert(alertString);
    }
  }
};

// Check if all pixels on the page are filled.
colorBook.checkPageComplete = function() {
  // Get an array of the number of filled pixels in each row
  const allFills = this.canvas.map(function(row) {
    const filledPixels = row.filter(function(pixel) {
      return pixel.isFilled;
    });
    return filledPixels.length;
  });

  // Get the total number of filled pixels on the page
  const numberOfFilled = allFills.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  // Check if all the pixels are filled
  if(numberOfFilled === (this.sizeX * this.sizeY)) {
    return true;
  }
};

// Put everything together
colorBook.init = function() {
  
  // cached variables
  const $window = $(window);
  const $modal = $(".modal");
  const $body = $("body");
  
  // check if the window is tiny and wait for 2 seconds to fade the modal automatically
  if($window.width() <= 470 || $window.height() < 460) {
    setTimeout(function() {
      $modal.fadeOut();
    }, 2000);
  } else {
    // Playing around with jQuery animations
    $(".azurLaneLogo").hide().fadeIn(2000);
    $(".dev").animate(
      {
        left: 0,
        opacity: 1
      }, 2000, function() {
        // wait for logos to pop before showing text
        $(".disclaimerText").animate({opacity: 1});
      });
  }

  // Add event listener to the modal. Fades when clicked.
  $modal.click(function() {
    $(this).fadeOut();
  });

  // Build the coloring book and draw the first page by default.
  this.buildColorBook();
  this.canvas = this.progress[0].page;
  this.drawCanvas();

  // This will make these radio buttons the default even after a refresh.
  $("#page1").prop("checked", true);
  $("#a").prop("checked", true);

  let currentPage = parseInt($("input[name='page']:checked").val());

  ///////////////////////////////////////////////////////////
  // A11Y check
  //////////////////////////////////////////////////////////

  const $colorBook = $(".colorBook");
  const $pixel = $(".pixel");

  // Run this function when user starts tabbing
  const usingTab = function(e) {
    if (e.keyCode === 9) { //tab
      $body.addClass("isTabbing");

      $window.unbind("keydown", usingTab);
      $window.bind("mousedown", usingMouse);
    }
  }

  // Run this function when user goes back to the mouse
  const usingMouse = function(e) {
    $body.removeClass("isTabbing");
    
    $window.unbind("mousedown", usingMouse);
    $window.bind("keydown", usingTab);

    // Remove tab index from pixels and make the app container tab-able again
    $pixel.removeAttr("tabindex");
    $colorBook.attr("tabindex", 0);
  }

  // Listen for tabs by default
  $window.keydown(usingTab);

  // Logic for keyboard controls
  const usingKeys = function(e) {
    // Pressing enter while focus is on the app will get rid of tabindex and put it on the pixels
    if($colorBook.is(":focus") && e.keyCode === 13) {// enter
      $colorBook.removeAttr("tabindex");
      $pixel.attr("tabindex", 0);
      // 0,0 is the default position of the cursor
      $(".pixel[data-rowIndex=0][data-columnIndex=0]").focus();
    }

    if($pixel.is(":focus")) {
      const $selectedX = parseInt($(":focus").attr("data-rowIndex"));
      const $selectedY = parseInt($(":focus").attr("data-columnIndex"));
      const $selectedColor = $("input[name='palette']:checked").val();
      
      switch (e.keyCode) {
        case 13: //Enter
          colorBook.matchColor($selectedX, $selectedY, $selectedColor, currentPage);
          break;
        case 87: // W
          if($selectedY - 1 >= 0) {// Conditions like these prevent the focus ring from leaving the boundaries of the app
            $(`.pixel[data-rowIndex=${$selectedX}][data-columnIndex=${$selectedY - 1}]`).focus();
          }
          break;
        case 65: // A
          if($selectedX - 1 >= 0) {
            $(`.pixel[data-rowIndex=${$selectedX - 1}][data-columnIndex=${$selectedY}]`).focus();
          }
          break;
        case 83: // S
          if($selectedY + 1 < colorBook.sizeY) {
            $(`.pixel[data-rowIndex=${$selectedX}][data-columnIndex=${$selectedY + 1}]`).focus();
          }
          break;
        case 68: // D
          if($selectedX + 1 < colorBook.sizeX) {
            $(`.pixel[data-rowIndex=${$selectedX + 1}][data-columnIndex=${$selectedY}]`).focus();
          }
          break;
        default:
          break;
      }
    }

    // Number keys 1 to 7 select the color
    switch (e.keyCode) {
      case 49:
        $("#a").prop("checked", true);
        break;
      case 50:
        $("#b").prop("checked", true);
        break;
      case 51:
        $("#c").prop("checked", true);
        break;
      case 52:
        $("#d").prop("checked", true);
        break;
      case 53:
        $("#e").prop("checked", true);
        break;
      case 54:
        $("#f").prop("checked", true);
        break;
      case 55:
        $("#g").prop("checked", true);
        break;
        
        // Left and Right arrows select the page
      case 37: //Left arrow
        if(currentPage > 0) {
          currentPage--;
          $(`input[name='page'][value=${currentPage}]`).prop("checked", true);
          colorBook.canvas = colorBook.progress[currentPage].page;
          colorBook.redrawCanvas();
        }
        break;
      case 39: //Right arrow
        if(currentPage + 1 < 8){
          if(colorBook.progress[currentPage].isCompleted) {
            currentPage++;
            $(`input[name='page'][value=${currentPage}]`).prop("checked", true);
            colorBook.canvas = colorBook.progress[currentPage].page;
            colorBook.redrawCanvas();
          } else {
            const alertString = `You must complete Page ${currentPage + 1} before you can view this page.`;
    
            // Makes sure that the selected tab doesn't get checked anyway
            $(`input[name='page'][value=${currentPage}]`).prop("checked", true);
            
            alert(alertString);
          }
        }
        break;
      default:
        break;
    }
  };

  $(".colorBook").bind("keydown", usingKeys);
  ////////////////////////////////////////////////////////////////

  // When a pixel is clicked, call the fill method using the selected indices.
  $(".pixel").click(function() {

    
    // parseInt() is used because attr() is returning a string when it needs a number.
    const $selectedX = parseInt($(this).attr("data-rowIndex"));
    const $selectedY = parseInt($(this).attr("data-columnIndex"));
    const $selectedColor = $("input[name='palette']:checked").val();
    
    colorBook.matchColor($selectedX, $selectedY, $selectedColor, currentPage);

  });

  // Draw the page onto the canvas when the user clicks on another page.
  $("input[name='page']").click(function() {
    const selectedPage = parseInt($(this).val());
    if(currentPage !== selectedPage){
      // Check if the previous page is finished
      if(selectedPage === 0 || colorBook.progress[selectedPage - 1].isCompleted){
        colorBook.canvas = colorBook.progress[selectedPage].page;
        colorBook.redrawCanvas();
        currentPage = selectedPage;
      } else {
        const alertString = `You must complete Page ${selectedPage} before you can view this page.`;

        // Makes sure that the selected tab doesn't get checked anyway
        $(`input[name='page'][value=${currentPage}]`).prop("checked", true);
        
        alert(alertString);
      }
    }
  });
};

$(function() {
  colorBook.init();
});
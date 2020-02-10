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

// Build a canvas model for the app to work with.
colorBook.buildColorBook = function() {
  this.pages.forEach(function(page){
    let pageArray = [];
    for(let i = 0; i < colorBook.sizeY; i++) {
      pageArray.push([]);
      for(let j = 0; j < colorBook.sizeX; j++) {
        if(page[i][j] === 'Z'){
          pageArray[i].push(new Pixel(j, i, page[i][j], true));
        } else {
          pageArray[i].push(new Pixel(j, i, page[i][j], false));
        }
      }
    }

    const progressPage = {
      page: pageArray.slice(),
      isCompleted: false
    };

    colorBook.progress.push(Object.assign({}, progressPage));
  });
  console.log(this.progress);
};

colorBook.buildCanvas = function() {
  for(let i = 0; i < this.sizeY; i++) {
    // Y axis represents how many rows the canvas will have.
    // On the construction of the canvas we're putting in a new array to represent each row.
    this.canvas.push([]);
    for(let j = 0; j < this.sizeX; j++) {
      // X axis represents how many columns the canvas will have.
      // Here we assign a pixel to the row for every column the canvas has.
      // this.canvas[i].push(Object.assign({}, this.pixel));
      this.canvas[i].push(new Pixel(j, i));
      // This assigns the position of each pixel as it goes through the loop.
      // this.canvas[i][j].rowIndex = j;
      // this.canvas[i][j].columnIndex = i;
    }
  }
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
  $(".Z p").addClass("hidden");
};

// // This function is used to reassign indices to the interface whenever there's a change to the canvas model
// colorBook.redrawCanvas = function() {
//   colorBook.canvas.forEach(function(row) {
//     row.forEach(function(pixel) {
//       $(`.pixel[data-rowIndex=${pixel.rowIndex}][data-columnIndex=${pixel.columnIndex}]`).attr("class", "pixel").addClass(`${pixel.colorIndex} notFilled`).find("p").removeClass().text(`${pixel.colorIndex}`);
//     })
//   });

//   // Again, hide the text for blank indices.
//   $(".Z p").addClass("hidden");
// };

// This function is used to reassign indices to the interface whenever there's a change to the canvas model
colorBook.redrawCanvas = function() {
  colorBook.canvas.forEach(function(row) {
    row.forEach(function(pixel) {
      const $pixel = $(`.pixel[data-rowIndex=${pixel.rowIndex}][data-columnIndex=${pixel.columnIndex}]`);
      $pixel.attr("class", "pixel").addClass(`${pixel.colorIndex}`).find("p").removeClass().text(`${pixel.colorIndex}`);
      if(!pixel.isFilled || pixel.colorIndex === 'Z'){
        $pixel.addClass("notFilled");
      }

      if(pixel.isFilled) {
        $pixel.find("p").addClass("hidden");
      }
    })
  });

  // Again, hide the text for blank indices.
  $(".Z p").addClass("hidden");
};
// Basic flood fill algorithm
// colorBook.fill = function(x, y, colorToChange, newColor) {
//   if(x < 0 || y < 0 || x >= colorBook.sizeX || y >= colorBook.sizeY) {
//     return;
//   }

//   if(this.canvas[y][x].colorIndex !== colorToChange || newColor === colorToChange){
//     return;
//   }

//   this.canvas[y][x].colorIndex = newColor;
//   const $selectedPixel = $(`.pixel[data-rowIndex=${x}][data-columnIndex=${y}]`);

//   $selectedPixel.removeClass(colorToChange);
//   $selectedPixel.addClass(this.canvas[y][x].colorIndex);

//   this.fill(x - 1, y, colorToChange, newColor);
//   this.fill(x - 1, y - 1, colorToChange, newColor);
//   this.fill(x, y - 1, colorToChange, newColor);
//   this.fill(x + 1, y - 1, colorToChange, newColor);
//   this.fill(x + 1, y, colorToChange, newColor);
//   this.fill(x + 1, y + 1, colorToChange, newColor);
//   this.fill(x, y + 1, colorToChange, newColor);
//   this.fill(x - 1, y + 1, colorToChange, newColor);
// };

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
  this.fill(x - 1, y, selectedColor);
  this.fill(x - 1, y - 1, selectedColor);
  this.fill(x, y - 1, selectedColor);
  this.fill(x + 1, y - 1, selectedColor);
  this.fill(x + 1, y, selectedColor);
  this.fill(x + 1, y + 1, selectedColor);
  this.fill(x, y + 1, selectedColor);
  this.fill(x - 1, y + 1, selectedColor);
};

// Assigns the color indices to the canvas with the selected page
colorBook.assignPage = function(page) {
  page.forEach(function(row, i) {
    row.forEach(function(pageColorIndex, j) {
      colorBook.canvas[i][j].colorIndex = pageColorIndex;
      // Make blanks treated as being already filled.
      if(pageColorIndex === 'Z') {
        colorBook.canvas[i][j].isFilled = true;
      } else {
        colorBook.canvas[i][j].isFilled = false;
      }
    })
  });
};

// Build the user's initial progress
colorBook.buildInitProgress = function() {
  this.pages.forEach(function(page) {
    colorBook.assignPage(page);
    colorBook.progress.push([...colorBook.canvas]);
  });
  console.log(this.progress);
};

// Check if all pixels on the canvas are filled.
colorBook.checkPageComplete = function() {
  const allFills = this.canvas.map(function(row) {
    const filledPixels = row.filter(function(pixel) {
      return pixel.isFilled;
    });
    return filledPixels.length;
  });

  const numberOfFilled = allFills.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  console.log(numberOfFilled, "out of " + (this.sizeX * this.sizeY));
  if(numberOfFilled === (this.sizeX * this.sizeY)) {
    return true;
  }
};

// Put everything together
colorBook.init = function() {
  this.buildColorBook();
  // Build the default canvas and draw it. Starts at the first page by default.
  // this.buildCanvas();
  // this.buildInitProgress();
  // this.assignPage(this.pages[0]);
  this.canvas = this.progress[0].page;
  this.drawCanvas();

  // This will make these radio buttons the default even after a refresh.
  $("#page1").prop("checked", true);
  $("#a").prop("checked", true);

  // console.log(this.canvas);

  // When a pixel is clicked, call the fill method using the selected indices.
  $(".pixel").click(function() {

    let successfulMatch = false;

    // parseInt() is used because attr() is returning a string when it needs a number.
    const $selectedX = parseInt($(this).attr("data-rowIndex"));
    const $selectedY = parseInt($(this).attr("data-columnIndex"));
    const $selectedColor = $("input[name='palette']:checked").val();

    console.log($selectedX, $selectedY, $selectedColor);

    if(colorBook.canvas[$selectedY][$selectedX].colorIndex === $selectedColor && !colorBook.canvas[$selectedY][$selectedX].isFilled){
      successfulMatch = true;
    }

    colorBook.fill($selectedX, $selectedY, $selectedColor);

    if(successfulMatch) {
      if(colorBook.checkPageComplete()){
        alert("This image be done.");
      }
    }

  });

  // Draw the page onto the canvas when the user clicks on another page.
  $("input[name='page']").change(function() {
    const selectedPage = parseInt($(this).val());
    // colorBook.assignPage(colorBook.pages[selectedPage]);
    colorBook.canvas = colorBook.progress[selectedPage].page;
    colorBook.redrawCanvas();
  });
};

$(function() {
  colorBook.init();
});
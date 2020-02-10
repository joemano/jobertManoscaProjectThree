const colorBook = {};

colorBook.canvas = [];
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

colorBook.sizeX = 37;
colorBook.sizeY = 22;

colorBook.pixel = {
  rowIndex: 0,
  columnIndex: 0,
  colorIndex: 0,
  isFilled: true
}

colorBook.buildCanvas = function() {
  for(let i = 0; i < this.sizeY; i++) {
    this.canvas.push([]);
    for(let j = 0; j < this.sizeX; j++) {
      this.canvas[i].push(Object.assign({}, this.pixel));
      this.canvas[i][j].rowIndex = j;
      this.canvas[i][j].columnIndex = i;
      this.canvas[i][j].colorIndex = Math.floor(Math.random() * 3);
    }
  }
};

colorBook.drawCanvas = function() {
  colorBook.canvas.forEach(function(row) {
    row.forEach(function(pixel) {
      $(".canvas").append(`<div class="pixel ${pixel.colorIndex} notFilled" data-rowIndex=${pixel.rowIndex} data-columnIndex=${pixel.columnIndex}><p>${pixel.colorIndex}</p></div>`);
    })
  });

  $(".Z p").addClass("hidden");
};

colorBook.redrawCanvas = function() {
  colorBook.canvas.forEach(function(row) {
    row.forEach(function(pixel) {
      $(`.pixel[data-rowIndex=${pixel.rowIndex}][data-columnIndex=${pixel.columnIndex}]`).attr("class", "pixel").addClass(`${pixel.colorIndex} notFilled`).find("p").removeClass().text(`${pixel.colorIndex}`);
    })
  });

  $(".Z p").addClass("hidden");
};

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

colorBook.fill = function(x, y, selectedColor) {
  if(x < 0 || y < 0 || x >= colorBook.sizeX || y >= colorBook.sizeY) {
    return;
  }

  if(this.canvas[y][x].colorIndex !== selectedColor || this.canvas[y][x].isFilled){
    return;
  }

  this.canvas[y][x].isFilled = true;
  const $selectedPixel = $(`.pixel[data-rowIndex=${x}][data-columnIndex=${y}]`);

  $selectedPixel.removeClass("notFilled");
  $selectedPixel.find("p").addClass("hidden");

  this.fill(x - 1, y, selectedColor);
  this.fill(x - 1, y - 1, selectedColor);
  this.fill(x, y - 1, selectedColor);
  this.fill(x + 1, y - 1, selectedColor);
  this.fill(x + 1, y, selectedColor);
  this.fill(x + 1, y + 1, selectedColor);
  this.fill(x, y + 1, selectedColor);
  this.fill(x - 1, y + 1, selectedColor);
};

colorBook.assignPage = function(page) {
  page.forEach(function(row, i) {
    row.forEach(function(pageColorIndex, j) {
      colorBook.canvas[i][j].colorIndex = pageColorIndex;
      if(pageColorIndex === 'Z') {
        colorBook.canvas[i][j].isFilled = true;
      } else {
        colorBook.canvas[i][j].isFilled = false;
      }
    })
  });
}

colorBook.init = function() {
  this.buildCanvas();
  this.assignPage(this.pages[0]);
  this.drawCanvas();

  console.log(this.canvas);

  $(".pixel").click(function() {
    const $selectedX = parseInt($(this).attr("data-rowIndex"));
    const $selectedY = parseInt($(this).attr("data-columnIndex"));
    const $selectedColor = $("input[name='palette']:checked").val();

    console.log($selectedX, $selectedY, $selectedColor);

    colorBook.fill($selectedX, $selectedY, $selectedColor);

  });

  $("input[name='page']").change(function() {
    const selectedPage = parseInt($(this).val());
    colorBook.assignPage(colorBook.pages[selectedPage]);
    colorBook.redrawCanvas();
  });
};

$(function() {
  colorBook.init();
});
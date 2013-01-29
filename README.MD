# Most Common
Given an array of regex patterns and a block of text, find the input pattern with the most matches in the text

# Usage
```
var inputs = [
  'a1',
  'a2',
  'a3',
  'a4'
];

var text = 'Lorem a1 ipsum a1 dolor a1 sit a2 amet, a2 consectetur a3 adipiscing'

// max should be 'a1'
var max = mostcommon(inputs, text);
```

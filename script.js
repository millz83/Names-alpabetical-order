const names = prompt('Enter a list of comma-seperated names.');
const namesArray = names.split(',');
const alphaNames = namesArray.sort().join(',');
alert(`The names in alphabetical order are: ${alphaNames}`);
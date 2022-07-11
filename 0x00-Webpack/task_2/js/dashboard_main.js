import $ from "jquery";

const _ = require('lodash');

$('body').append('<div id="logo"></div>')
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>")
$('body').append('<p>Copyright - Holberton School</p>');


let count = 0
function updateCounter() {
  count += 1;
  $('p#count').text(`${count} clicks on the button`);
}

$('body').on('click', 'button', _.debounce(updateCounter, 2000));

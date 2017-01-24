console.log('module 1');

const $ = require('jquery');

$(document).ready(() => {
  $('#flip').click(() => {
    $('#panel').toggle('slow');
  });
});


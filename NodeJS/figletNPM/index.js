const figlet = require('figlet');
const colors = require('colors');

figlet('Welcome to F-Society !!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.green)
});
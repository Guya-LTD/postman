const newman = require('newman');

// Vars
const COLLECTION_DIR = __dirname + '/../collections';
const FAKER_DIR = __dirname + '/../../faker';
const ENVIRONMENT_DIR = __dirname + '/../environments';

var collections = COLLECTION_DIR + '/' + 'Guya-LTD.postman_collection.json' //require('Guya LTD.postman_collection.json');
var environments = ENVIRONMENT_DIR + '/' + 'Guya-LTD Environment.postman_environment.json' //require('Guya LTD Environment.postman_environment.json');

// 3. users
newman.run({
    collection: collections,
    reporters: ['cli', 'htmlextra', 'progress', 'emojitrain'],
    reporter : { htmlextra : { export : './results/users-post.html'} },
    folder: "users - post",
    environment: environments,
    iterationData: FAKER_DIR + '/' + 'users.json'
}, function (err) {
    if (err) { throw err; }
    console.log('\`\/api\/v1\/users\` run complete!');
});
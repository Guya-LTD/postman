const newman = require('newman');

// Vars
const COLLECTION_DIR = __dirname + '/../collections';
const FAKER_DIR = __dirname + '/../../faker';
const ENVIRONMENT_DIR = __dirname + '/../environments';

var collections = COLLECTION_DIR + '/' + 'Guya-LTD.postman_collection.json' //require('Guya LTD.postman_collection.json');
var environments = ENVIRONMENT_DIR + '/' + 'Guya-LTD Environment.postman_environment.json' //require('Guya LTD Environment.postman_environment.json');

// 1. permissions
var permissions_iterationData = FAKER_DIR + '/' + 'permissions.json' //require('permissions.json');
newman.run({
    collection: collections,
    reporters: ['cli', 'htmlextra', 'progress', 'emojitrain'],
    reporter : { htmlextra : { export : './results/permissions-post.html'} },
    folder: "permissions - post",
    environment: environments,
    iterationData: permissions_iterationData
}, function (err) {
    if (err) { throw err; }
    console.log('\`\/api\/v1\/permissions\` run complete!');
});
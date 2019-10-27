let db = require('../util/database');

// Add a single individual to the database
function addPeople() {
    // add code which insert a single people to the people table
}

// Gets all the individuals in the database
function getAllPeople() {
    // db.execute('Select * from people')
    // .then((data) => console.log(data))
    // .catch((error) => console.log(error));
    // return all people from the people table
}

// Gets a specific individual from the database
function getPeople(id) {
    // return a people with the provided id
}

module.exports = {
    add : addPeople,
    getall : getAllPeople,
    getpeople: getPeople 
}
const database = {};

function nextId() {
    let id;
    do {
        id = ('00000000' + (Math.random() * 9999999 | 0).toString(16)).slice(-8);
    }
    while (database[id] != undefined)

    return id;
}

function addItem(item) {
    database[nextId()] = item;
}

function deleteItem(item) {
    delete database[id];
}

module.exports = {
    addItem,
    deleteItem,
    database
};
// Save a key-value pair to local storage
const saveToLocalStorage = (key, value) => localStorage.setItem(key, value);

// Retrieve a value from local storage by its key
const getFromLocalStorage = key => localStorage.getItem(key);

// Generate a random number between two given numbers
const getRandomNumber = (from, to) => Math.floor(Math.random() * (to - from + 1)) + from;

function searchQueries(searchInput, queries) {
    let results = [];
    for(let i = 0; i < queries.length; i++) {
        if(queries[i].toLowerCase().includes(searchInput.toLowerCase())) {
            results.push(queries[i]);
        }
    }
    return results;
}

function getInnerHTMLArray(Elements) {
    let innerHTMLArray = Array.from(Elements).map(element => element.innerHTML);
    return innerHTMLArray;
}
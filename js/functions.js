// Save a key-value pair to local storage
const saveToLocalStorage = (key, value) => localStorage.setItem(key, value);

// Retrieve a value from local storage by its key
const getFromLocalStorage = key => localStorage.getItem(key);

// Generate a random number between two given numbers
const getRandomNumber = (from, to) => Math.floor(Math.random() * (to - from + 1)) + from;



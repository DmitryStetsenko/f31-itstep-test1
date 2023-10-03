const doc = document;
const mainApi = `http://localhost:3000`;

const api ={
   todos :`${mainApi}/todos/1`,
}





console.dir(getData(api.todos));



// -------functions---------

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
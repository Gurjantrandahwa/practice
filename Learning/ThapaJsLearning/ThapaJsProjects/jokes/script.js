//GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')


// with fetch method promises
// const generateJokes = () => {
//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }
//     fetch("https://icanhazdadjoke.com", setHeader)
//         .then((res) =>
//             res.json()
//         )
//         .then((data) => {
//             jokes.innerHTML = data.joke;
//             console.log(data)
//         }).catch((e) => console.log(e))
// }
const generateJokes = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        const res = await fetch("https://icanhazdadjoke.com", setHeader)
        const data = await res.json()
        jokes.innerHTML = data.joke;
    } catch (e) {
        console.log(e)
    }

}
jokeBtn.addEventListener('click', generateJokes);

generateJokes();
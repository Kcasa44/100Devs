//document.querySelector(#button).addEventListener('click',hide)

//function hide(){
 // document.querySelector('#grumpyCat').style.display = 'none'
  //document.querySelector('#catLaughing').style.display = 'none'
//}

document.querySelector('#button').addEventListener('click', laugh)

function laugh(){
  grumpyCat.classList.add('hidden')
  laughingCat.toggle('hidden')
}
const url = 'https://v2.jokeapi.dev/joke/Misc,Programming?&safe-mode?&type=single'

const getJoke = document.querySelector("#button")
getJoke.addEventListener("click", getFetch)

function getFetch() {
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    displayJoke(data) // #1
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
}

function displayJoke(data) {
  const joke = data.joke
  const jokeDiv = document.getElementById('laughs').innerText = joke; // #2
}

document.getElementById('image')


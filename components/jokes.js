//  1 call the api using Axios

const API_URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=twopart";

function fetchJokes() {
  return axios
    .get(API_URL)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

// 2. Create a component/function to display the data from the API

function createJokeCard(joke) {
  // main div aan ku xireeno
  const mainDiv = document.querySelector(".joke-container");
  mainDiv.innerHTML = "";

  // joke card main div
  const mainKJokeDiv = document.createElement("div");
  mainKJokeDiv.className = "joke-card";

  // joke setup <P></P>
  const setUp = document.createElement("p");
  setUp.className = "joke-setup";
  setUp.textContent = joke.setup;

  // delevery p tag
  const delevery = document.createElement("p");
  delevery.className = "joke-delivery";
  delevery.textContent = joke.delivery;

  //isku wada xir

  mainDiv.append(mainKJokeDiv);
  mainKJokeDiv.append(setUp, delevery);

  return mainDiv;
}

// 3 connect two above functions and then connect the html

function displayJoke() {
  fetchJokes().then((joke) => {
    createJokeCard(joke);
  });
}

const jokeButton = document.querySelector(".new-joke-btn");
// event listener
jokeButton.addEventListener("click", displayJoke);

// displayJoke();

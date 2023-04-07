Template.Home.onRendered(function() {
    const displayJoke = () => {
      fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          const jokeElement = document.querySelector('#joke');
          jokeElement.innerHTML = data.joke;
        })
        .catch(error => console.error(error));
    };
    displayJoke(); // display joke immediately
    setInterval(displayJoke, 900000); // fetch a new joke every 15 minutes (900000 ms)
  });
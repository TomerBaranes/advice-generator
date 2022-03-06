const id = document.getElementById("advice-id");
const text = document.getElementById("advice-text");
const diceButton = document.getElementById("dice-button");

const fetchAdvice = async () => {
  console.time("FETCHING");

  diceButton.classList.add("dice-button-loading");

  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    id.innerHTML = "Advice # " + data.slip.id;
    text.innerHTML = '"' + data.slip.advice + '"';
    console.timeEnd("FETCHING");
    diceButton.classList.remove("dice-button-loading");
  } catch (err) {
    console.error(err);
    id.innerHTML = "Error";
    text.innerHTML = "Something went wrong :(";
  }
};

fetchAdvice();

document.getElementById("dice-button").addEventListener("click", fetchAdvice);

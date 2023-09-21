const btnEl = document.querySelector('.button');
const paraEl = document.querySelector('.para');

const apiURL = "https://api.adviceslip.com/advice";

const option = {
  method: "GET",
}

async function getAdvice(){
  try {
    const response = await fetch(apiURL,option)
    const data = await response.json();
    const content = data.slip.advice;
    paraEl.innerText = content;
    } catch(error){
     console.error('There was an error:', error);
    paraEl.innerText = "Error,please try again after 2 sec";
  }
}

btnEl.addEventListener('click');
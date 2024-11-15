/*2 - hobbies.js
Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.
Esporta la funzione dal fil*e.*/

function choiceHobbies(hobbyOne, hobbyTwo, hobbyThree) {
  const pastTime = {
    hobby: (hobbies = [hobbyOne, hobbyTwo, hobbyThree]),
  };

  return pastTime;
}

const resultHobby = choiceHobbies("hobbyOne", "hobbyTwo", "hobbyThree");
console.log(resultHobby);

module.exports = studentHobby;

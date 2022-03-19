console.log("Included");
const newColor = () => {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 1000) % 256;
  let c = Math.floor(Math.random() * 1000) % 256;
  return `rgb(${a},${b},${c})`;
};

const check = (i, boxID, answerColor) => {
  if (i != boxID) {
    // document.getElementsByClassName("square")[i].style.opacity = "0";
    document.getElementsByClassName("square")[i].style.visibility = "hidden";
  } else {
    document.getElementsByClassName("top")[0].style.backgroundColor =
      answerColor;
    document.getElementById("correct").style.visibility = "visible";

    for (let i = 0; i < 3; i++) {
      document.getElementsByClassName("square")[i].style.backgroundColor =
        answerColor;
      document.getElementsByClassName("square")[i].style.visibility = "visible";
    }
  }

  document.getElementById("play-again").innerHTML = "Play again";
};

function initialize() {
  let answerColor = newColor();
  //   let boxColor1 = newColor();
  //   let boxColor2 = newColor();
  //   let boxColor3 = newColor();

  let boxID = `${Math.floor(Math.random() * 3)}`;

  //   document.getElementsByClassName("square")[0].style.backgroundColor =
  //     boxColor1;
  //   document.getElementsByClassName("square")[1].style.backgroundColor =
  //     newColor();
  //   document.getElementsByClassName("square")[2].style.backgroundColor =
  //     boxColor3;

  for (let i = 0; i < 3; i++) {
    document.getElementsByClassName("square")[i].style.backgroundColor =
      newColor();
    document.getElementsByClassName("square")[i].onclick = check.bind(
      null,
      i,
      boxID,
      answerColor
    );
    document.getElementsByClassName("square")[i].style.visibility = "visible";
  }

  document.getElementById("answerColor").innerHTML = answerColor.toUpperCase();
  document.getElementById(boxID).style.backgroundColor = answerColor;
  document.getElementById("correct").style.visibility = "hidden";
  document.getElementsByClassName("top")[0].style.backgroundColor = "blue";
  document.getElementById("play-again").innerHTML = "New Colors";
}

initialize();
document.getElementById("play-again").onclick = initialize;

// let obj = {
//   firstName: "Mukul",
//   lastName: "Kumar",
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// let newObj = {
//     firstName:"Krishna",
//     lastName :"Bagaria"
// }

// let getName = obj.getFullName.bind(newObj);

// console.log(getName());

// var pokemon = {
//   firstname: "Pika",
//   lastname: "Chu ",
//   getPokeName: function () {
//     var fullname = this.firstname + " " + this.lastname;
//     return fullname;
//   },
//   outer: {
//     firstname: "bal",
//     lastname: "basor",
//     getPokeName: function () {
//       return this.firstname + " " + this.lastname;
//     },
//     inner: {
//       firstname: "Pika",
//       lastname: "Chu",
//       getPokeName: function () {
//         return this.firstname + " " + this.lastname;
//       },
//     },
//   },
// };

// let newFun = function () {
//   return this.firstname + " " + this.lastname;
// };

// let fun = newFun.bind(pokemon.outer.inner);
// console.log(fun());

// // console.log(pokemon.outer.inner.getPokeName());

// var pokemonName = function () {
//   console.log(this.firstname + "I choose you!");
// };

// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
// pokemonName();
// logPokemon(); // 'Pika Chu I choose you!'

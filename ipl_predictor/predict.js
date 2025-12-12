let teamsOfIpl = [
  {
    team: "csk",
    primary: "yellow",
    secondary: "green",
  },
  {
    team: "mi",
    primary: "blue",
    secondary: "gold",
  },
  {
    team: "rcb",
    primary: "red",
    secondary: "black",
  },
  {
    team: "dc",
    primary: "blue",
    secondary: "red",
  },
  {
    team: "kkr",
    primary: "purple",
    secondary: "gold",
  },
  {
    team: "rr",
    primary: "pink",
    secondary: "blue",
  },
  {
    team: "srh",
    primary: "orange",
    secondary: "black",
  },
  {
    team: "pbks",
    primary: "red",
    secondary: "saffron",
  },
  {
    team: "gt",
    primary: "rgb(17, 2, 99)",
    secondary: "gold",
  },
  {
    team: "lsg",
    primary: "blue",
    secondary: "aqua",
  },
];

let btn = document.querySelector("#predict-btn");
let box = document.querySelector("#predictor-box");

btn.addEventListener("click", () => {
  let objectOfTeam = teamsOfIpl[Math.floor(Math.random() * teamsOfIpl.length)];
  let randomTeam = objectOfTeam.team.toUpperCase();
  console.log(randomTeam);
  box.innerHTML = `<h1>${randomTeam}</h1>`;
  box.style.backgroundColor = objectOfTeam.primary;
  box.style.color = objectOfTeam.secondary;
});

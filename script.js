var btn = document.getElementById("myButton");
 var check = document.querySelector(".check");  

 var quotes =[
  {
    "team_name": "Chennai Super Kings",
    "captain": "Ruturaj Gaikwad",
    "team_color": "#FFFF00",
    "cups_won": 5
  },
  {
    "team_name": "Mumbai Indians",
    "captain": "Hardik Pandya",
    "team_color": " #0000FF;",
    "cups_won": 5
  },
  {
    "team_name": "Kolkata Knight Riders",
    "captain": "Shreyas Iyer",
    "team_color": "#49004B",
    "cups_won": 2
  },
  {
    "team_name": "Royal Challengers Bengaluru",
    "captain": "Rajat Patidar",
    "team_color": "#CB0D13",
    "cups_won": 0
  },
  {
    "team_name": "Delhi Capitals",
    "captain": "Axar Patel",
    "team_color": "#ADD8E6",
    "cups_won": 0
  }
]
 btn.addEventListener("click", function(){
    
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    check.style.backgroundColor = randomQuote.team_color;
    check.style.fontSize = "45px";


    check.innerHTML = `
    <p>${randomQuote.team_name} ${<span> </span>}   </p> -> 
    <p>Captain: ${randomQuote.captain}</p>

    <p>Cups Won: ${randomQuote.cups_won }</p>`;
    
 } )
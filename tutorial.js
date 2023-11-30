/*let min=2
let max=11
let game;
let firstcard=Math.floor(Math.random()*(max-min+1)+min)
let secondcard=Math.floor(Math.random()*(max-min+1)+min)
let sum=firstcard +secondcard;*/
function blackjack(sum){
    let min=2
let max=11
let game;
let firstcard=Math.floor(Math.random()*(max-min+1)+min)
let secondcard=Math.floor(Math.random()*(max-min+1)+min)
    document.getElementById("drawn").innerText="cards drawn "+firstcard+" and " +secondcard
    sum=firstcard +secondcard;
    document.getElementById("sum").innerText="Sum "+sum
    
    if(sum==21)
       game="black jack"
   if(sum<21)
      game="still in the game"
   if(sum>21)
     game="u lose"
     document.getElementById("result").innerText=game
 return game
}
document.getElementById("result").innerText=game






    
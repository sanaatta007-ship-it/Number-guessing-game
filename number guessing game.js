let  secretnumber=(Math.floor(Math.random()*100)+1)
let guess;
let attempt=0;

while(guess!==secretnumber){
        let input=prompt("enter a guess number");
        if(guess===null){
            alert("game canceled")
            break;
        }
        else{
         guess=Number(input)
         attempt++
        }
        if(isNaN(guess)||guess<1||guess>100){
            alert("please enter a number between 1 and 100")
            continue;
        }
        if(secretnumber==guess){
            alert(`congratulation.you won this game in ${attempt} attempts`)
        }
        else if(guess>secretnumber){
            alert("too high.guess again")
        }
        else {
            alert("too low.guess again")
        }
        

    }


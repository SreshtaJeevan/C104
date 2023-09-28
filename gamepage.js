// generation of random value
var y = Math.floor(Math.random()*10 + 1);
var guess = 1;
function submit() {
    var x = document.getElementById("guessFeild").value;
    if(x == y)
    {
        alert("CONGRATULATIONS!!!" + "YOU GUESSED IT RIGHT IN"
                   + guess + "GUESS");
        guess = 1;           
    }
    else if(x > y)
    {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else
    {
        guess++
        alert("OOPS SORRY!! TRY A GREATER NUMBER");
    }
}
function playAgain() {
    y = math.floor(Math.random()* 10 + 1);
}

// count of attempts
// until hit
  
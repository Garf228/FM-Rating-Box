const ratingsBar = document.querySelector("ul");
const ratings = document.querySelectorAll("li");
const scoreButtons = document.querySelector(".userScore");
const submitButton = document.querySelector(".button");

let userScore;


console.log(ratings);

function clearSelection(){
    ratings.forEach((element) =>{
        element.style.background="#262E38";
    })
};

//listeners

ratings.forEach((element) => {
    element.addEventListener('click', function(){
        clearSelection();
        element.style.background="hsl(25, 97%, 53%)";
        element.style.color="white";
        userScore = element.innerText;
        scoreButtons.innerText = `You selected a rating of ${userScore} out of 5`;
        

    })
});

/// On submit, we show the score and the thank you message and hide all other elements

submitButton.addEventListener('click',function(){
    scoreButtons.style.display ="block";
    submitButton.style.display="none";
    ratingsBar.style.display="none";
    document.querySelector(".intro").style.display="none";
    document.querySelector(".star").style.display="none";
    document.querySelector('.thankYou').style.display="block";
    document.querySelector('h1').style.display="none";
});


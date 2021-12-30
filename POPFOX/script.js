window.onload = function(){
    var img = document.getElementById("popfox1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("foxpop.mp3");

    img.addEventListener('mousedown',function(){
        increaseScore();
        img.src = 'popfox2.png';
        audio.play();
    });

    img.addEventListener('mouseup',function(){
        img.src = 'popfox1.png';
});

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}
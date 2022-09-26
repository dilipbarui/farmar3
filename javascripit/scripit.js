let counter = document.querySelectorAll(".counter");
let arr = Array.from(counter);
arr.map((time)=>{
    let count = time.innerHTML;
    time.innerHTML = "";
    let countNumber= 0;


    function counterUp(){
        time.innerHTML= countNumber++;
        if ( countNumber > count ) {
            clearInterval(stop);
        }
    }

    let stop = setInterval(() => {
        counterUp();
    },time.dataset.speed/count );

});

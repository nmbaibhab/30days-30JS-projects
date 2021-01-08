window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors =['#0af775d2','#e01d1d','#1d7eda','#9e195c','#c8e428','#72cada'];

    pads.forEach((element, index) => {
        element.addEventListener("click", function() {
          sounds[index].currentTime = 0;
          sounds[index].play();
          Bubbles(index);
        });
      });




    // for (let index = 0; index < pads.length; index++) {
    //     pads[index].addEventListener("click",function () {
    //             sounds[index].currentTime = 0;
    //             sounds[index].play();
    //             console.log(index);

    //           Bubbles(index);   //calling bubble function
    //         });
        
    // }

    const Bubbles = index => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 2s ease";
        bubble.addEventListener("webkitAnimationEnd", function() {
            visual.removeChild(this);
          });
    }
});
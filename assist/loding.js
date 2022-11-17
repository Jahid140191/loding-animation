setInterval(anim,500);

function anim(){
    // loading-1
    let dots=document.querySelector("#dot");
    console.log(dots)

    if(dots.innerHTML.length < 5){
        dots.innerHTML+=".";
    }
    else{
        dots.innerHTML="";
    }


    // loading-2
    const dotContainer=document.querySelector(".dot-container");
    let dotDiv=document.createElement("div");
    dotDiv.classList.add("dot");

    if(dotContainer.childNodes.length === 6){
        
        dotContainer.innerHTML ="";
        dotContainer.appendChild(dotDiv);
       
    }
    else{
        dotContainer.appendChild(dotDiv);
    }

}
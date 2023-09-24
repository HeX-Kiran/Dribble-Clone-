//Navigation menu
let menuButton = document.querySelector('.btn-menu');
let headerEl = document.querySelector("header");
menuButton.addEventListener("click",()=>{
headerEl.classList.toggle("trigger");
})

//code to close the navigation bar when a link is clicked

let links = document.querySelectorAll(".main-nav-link");

links.forEach((value)=>{
    value.addEventListener("click",()=>{
        headerEl.classList.toggle("trigger");
    })
})



//Checking Intersection Observer

let card = document.querySelector(".person-card");

let howObserver = new IntersectionObserver((entry)=>{
    let ent = entry[0];
  
    if(ent.isIntersecting){
        
        card.style.transform = `translate(0,-10%)`
    }
    else{
        card.style.transform = `translate(0,10%)`
    }
    
  },{
    
    threshold:0.3,
  });

howObserver.observe(card);


window.sr = ScrollReveal();
//Projects divs

sr.reveal('#p1',{
    duration:4000,
    origin:'right',
    distance:'400px'
});
sr.reveal('#p2',{
    duration:3000,
    origin:'right',
    distance:'300px'
});
sr.reveal('#p3',{
    duration:2000,
    origin:'right',
    distance:'200px'
});
sr.reveal('#p4',{
    duration:1000,
    origin:'right',
    distance:'100px'
});
sr.reveal('#p5',{
    duration:5000,
    origin:'bottom',
    distance:'400px'
});
sr.reveal('#p6',{
    duration:5000,
    origin:'bottom',
    distance:'400px'
});



let select = document.getElementById('selector1');
let option1 = document.getElementById("p1");
let option2 = document.getElementById("p2");
let option3 = document.getElementById("p3");
let option4 = document.getElementById("p4");
let option5 = document.getElementById("p5");
let option6 = document.getElementById("p6");

select.addEventListener('change',
  function(){
    let selectedOption = select.value;
    console.log(selectedOption);
    
    if (selectedOption == "On Creation") {
        option1.style.display= "none";
        option2.style.display= "none";
        option3.style.display= "none";
        option4.style.display= "block";
        option5.style.display= "block";
        option6.style.display= "none";
        

    }else if (selectedOption == "Finished") {
        option4.style.display= "none";
        option5.style.display= "none";
        option1.style.display= "block";
        option2.style.display= "block";
        option3.style.display= "block";
        option6.style.display= "block";
    }else{
        option1.style.display= "block";
        option2.style.display= "block";
        option3.style.display= "block";
        option4.style.display= "block";
        option5.style.display= "block";
        
    }
    
  });

  function comingSoon() {
      alert("Coming soon...");
  }
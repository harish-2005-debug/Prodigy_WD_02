var sideNavBar=document.querySelector(".sidenavbar");
var menuIcon=document.querySelector(".fa-bars");
var closeIcon=document.querySelector(".fa-xmark");

if(menuIcon&& sideNavBar){
    menuIcon.addEventListener("click", function () {
        sideNavBar.classList.add("sidenav-active");
    })
  }


if(closeIcon && sideNavBar){
    closeIcon.addEventListener("click", function () {
        sideNavBar.classList.remove("sidenav-active");
    })
}



var skillBtn=document.querySelector(".skill-btn");
var eduBtn=document.querySelector(".edu-btn");
var expBtn=document.querySelector(".exp-btn")
var skillSection=document.getElementById("skillsection")
var educationSection=document.getElementById("Educationsection");
var experienceSection=document.getElementById("Experiencesection");


function reset(){
     skillBtn.style.color="white"
    skillBtn.style.backgroundColor="#292626"
    eduBtn.style.color="white"
    eduBtn.style.backgroundColor="#292626"
    expBtn.style.color="white"
    expBtn.style.backgroundColor="#292626"
      skillSection.style.display="none"
     educationSection.style.display="none"
    experienceSection.style.display="none"
}

skillBtn.addEventListener("click" , function(){
    reset()
    skillBtn.style.color="#292626";
    skillBtn.style.backgroundColor="#00ff99";
      skillSection.style.display="block";
})

eduBtn.addEventListener("click" , function(){
    reset()
    eduBtn.style.color="#292626"
    eduBtn.style.backgroundColor="#00ff99"
    educationSection.style.display="block"
})

expBtn.addEventListener("click" , function(){
    reset()
    expBtn.style.color="#292626"
    expBtn.style.backgroundColor="#00ff99"
    experienceSection.style.display="block";
})

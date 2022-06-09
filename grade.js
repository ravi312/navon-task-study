const grade1=document.getElementById('grade-1');
const grade2=document.getElementById('grade-2');
const grade3=document.getElementById('grade-3');

function whichGrade(){
    if( (document.getElementById("grade-1").checked===true)){
        console.log("ravi");
        window.localStorage.setItem("grade", grade1.value);
        window.open("./navon-intro-practice.html","_self");
      
    }
    if( (document.getElementById("grade-2").checked===true)){
        console.log("ravi2");
        window.localStorage.setItem("grade", grade2.value);
        window.open("./navon-intro-practice.html","_self");
      
    }
    if( (document.getElementById("grade-3").checked===true)){
        console.log("ravi3");
        window.localStorage.setItem("grade", grade3.value);
        window.open("./navon-intro-practice.html","_self");
      
    }
}
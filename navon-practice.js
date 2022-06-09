const navonCard=document.getElementById('navonImg');
const navonPara= document.getElementById('navonPara');

let counter=0;
let promptId=[0,3,4,9,10]; // this generates the random index
let promptAnswer=['z', 'm','m','z','z'];
let promptExplain=[
'For letter H, keyboard letter "z" needs to be pressed', 
'For letter e, keyboard letter "m" needs to be pressed',
'For letter E, keyboard letter "m" needs to be pressed',
'For letter h, keyboard letter "z" needs to be pressed', 
'For letter h, keyboard letter "z" needs to be pressed', 
];

function startNavon(){
    showPrompt(promptId);
    console.log(promptId);
}

function showPrompt(imgId) {
    navonPara.innerText=" Which key? z or m ?";
    navonCard.src="./img/practice/"+imgId[counter]+".png";
    navonCard.style.height = '550px';
    navonCard.style.width = '550px';
    console.log(navonPara.innerText);
}

document.addEventListener('keypress', e =>{
    switch (e.key){
        case 'z':
            console.log("key is pressed and counter value is "+counter);
            checkAnswerZ();
            break;
        case 'm':
            console.log("key is pressed and counter value is "+counter);
             checkAnswerM();
             break;
     }

});

function checkAnswerZ(){
    if (counter==0 || counter ==3 || counter==4){
        console.log(counter);
        navonCard.style.border = "10px solid green";
    }
    else {
        navonCard.style.border = "10px solid red";
    }
    navonPara.innerText=promptExplain[counter];

}

function checkAnswerM(){
    if (counter==1 || counter ==2 ){
        console.log(counter);
        navonCard.style.border = "10px solid green";
    }
    else {
        navonCard.style.border = "10px solid red";
    }
    navonPara.innerText=promptExplain[counter];

    
}


function nextPrompt(){
    navonCard.style.border = "0px solid red";
    counter++;
    if(counter>4){
        window.open("./navon-intro.html","_self");
    }
    showPrompt(promptId);
}
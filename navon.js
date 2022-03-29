const navonCard=document.getElementById('navonImg');

let counter=0;
let sTime;
let diff;


let promptId=shuffleImgId(); // this generates the random index
console.log(promptId);

let preNavon;

function startNavon(){
    initializePreNavon(preNavon);
    showPrompt(promptId);
    console.log(promptId);
}

function initializePreNavon(){
    preNavon=[
        [0,'','',''],
        [1,'','',''],
        [2,'','',''],
        [3,'','',''],
        [4,'','',''],
        [5,'','',''],
        [6,'','',''],
        [7,'','',''],
        [8,'','',''],
        [9,'','',''],
        [10,'','',''],
        [11,'','','']
    ];

}


function showPrompt(imgId) {
    navonCard.src="./img/"+imgId[counter]+".png";
    preNavon[counter][1]=imgId[counter];
    console.log("preNavon here it is: "+ preNavon[counter][1]);
    startTimer();
    console.log("Navon Task Prompt:"+ imgId[counter]);
    console.log("The counter value is: "+counter);
    navonCard.style.height = '550px';
    navonCard.style.width = '550px';
}

document.addEventListener('keypress', e =>{
    switch (e.key){
        case 'z':
            if (counter<11){
                preNavon[counter][2]=e.key;
                stopTimer();
                logValues();
                displayValues();
                console.log("z key is pressed");
                console.log("------------------------ ");
                counter++;
                showPrompt(promptId); //call the next image
                break;
            }
        else{
                preNavon[counter][2]=e.key;
                stopTimer();
                logValues();
                displayValues();
                window.open("./reading.html","_self");
            }
    case 'm':
        if (counter<11){
            preNavon[counter][2]=e.key;
            stopTimer();
            logValues();
            displayValues();
            console.log("m key is pressed");
            console.log("------------------------ ");
            counter++;
            showPrompt(promptId); //call the next image
            break;
        }
    else{
            preNavon[counter][2]=e.key;
            stopTimer();
            logValues();
            displayValues();
            window.open("./reading.html","_self");
        }
        
    }
});

function startTimer(){
    sTime = Date.now(); 
}

function stopTimer(){
   diff=Date.now()-sTime;
   preNavon[counter][3]=diff;
    
}

function logValues(){
    let preNavonToString=JSON.stringify(preNavon);
    window.localStorage.setItem("preNavon", preNavonToString);
}

function displayValues(){
    console.log("The reaction time was:"+diff);
}



function shuffleImgId(){
    let imgId= [0, 1, 2,3,4,5,6,7,8,9,10,11];
    let newId= [];
    while (imgId.length!==0){
        let randomIndex=Math.floor(Math.random()*imgId.length );
        newId.push(imgId[randomIndex]);
        imgId.splice(randomIndex,1);
    }
    imgId=newId;
    return imgId;    
}




function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages(["./img/0.png,./img/1.png", "./img/2.png", "./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png","./img/11.png","./img/12.png","./img/fixation.png"]);


const navonCard=document.getElementById('navonImg');

let counter=0;
let sTime;
let diff;


let promptId=shuffleImgId(); // this generates the random index
console.log(promptId);

let postNavon;

function startNavon(){
    initializepostNavon(postNavon);
    showPrompt(promptId);
    console.log(promptId);
}

function initializepostNavon(){
    postNavon=[
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
    postNavon[counter][1]=imgId[counter];
    console.log("postNavon here it is: "+ postNavon[counter][1]);
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
                postNavon[counter][2]=e.key;
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
                postNavon[counter][2]=e.key;
                stopTimer();
                logValues();
                displayValues();
                window.open("./feedback.html","_self");
            }
    case 'm':
        if (counter<11){
            postNavon[counter][2]=e.key;
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
            postNavon[counter][2]=e.key;
            stopTimer();
            logValues();
            displayValues();
            window.open("./feedback.html","_self");
        }
        
    }
});

function startTimer(){
    sTime = Date.now(); 
}

function stopTimer(){
   diff=Date.now()-sTime;
   postNavon[counter][3]=diff;
    
}

function logValues(){
    let postNavonToString=JSON.stringify(postNavon);
    window.localStorage.setItem("postNavon", postNavonToString);
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




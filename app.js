const myImg = document.getElementById('prompt');
const log1 = document.getElementById('log1');
const log2 = document.getElementById('log2');

document.getElementById('copyText').style.visibility = 'hidden';
document.getElementById('download').style.visibility = 'hidden';
document.getElementById('log1').style.visibility = 'visible';

myImg.style.height = '220px';
myImg.style.width = '720px';

let count =0;
let sTime=0;
let showingFixation=0;
let counter=0;
let k;

let sessionActive=0;

let fileName = "username";

let coordinates= new Array();
let csvOutput= new Array();
let keyPressed;
let totalScore=0;

let promptDesc = [
    {name: '1',  level: 'G', target: 'H',  answer: 'z', score:0, reactTime:0},
    {name: '2',  level: 'L', target: 'E',  answer: 'm', score:0, reactTime:0},
    {name: '3',  level: 'L', target: 'E',  answer: 'm', score:0, reactTime:0},
    {name: '4',  level: 'L', target: 'E',  answer: 'm', score:0, reactTime:0},
    {name: '5',  level: 'G', target: 'E',  answer: 'm', score:0 , reactTime:0},
    {name: '6',  level: 'G', target: 'E',  answer: 'm', score:0, reactTime:0},
    {name: '7',  level: 'G', target: 'E',  answer: 'm', score:0, reactTime:0},
    {name: '8',  level: 'G', target: 'H',  answer: 'z', score:0, reactTime:0},
    {name: '9',  level: 'G', target: 'H',  answer: 'z', score:0, reactTime:0},
    {name: '10',  level: 'L', target: 'H',  answer: 'z', score:0, reactTime:0},
    {name: '11',  level: 'L', target: 'H',  answer: 'z', score:0, reactTime:0},
    {name: '12',  level: 'L', target: 'H',  answer: 'z', score:0, reactTime:0},
];

const promptLog = promptDesc.slice();

let imgId= [1, 2, 3,4,5,6,7,8,9,10,11,12];
shuffleImgId();



// For outputs
let scoreCorrect=0;
let scoreIncorrect=0;
let avgRT=0;
let avgGE=0;
let avgLE=0;
let avgGH=0;
let avgLH=0;
let avgL=0;
let avgG=0;
let readableOutput;


window.addEventListener('keypress', e =>{
    switch (e.key){
        case 'z':
            if (showingFixation==1 || sessionActive==0) {
                break;
            }
            else{
            keyPressed='z';
            logPrompt();
            }
            break;
        case 'm':
            if (showingFixation==1 || sessionActive==0) {
                break;
            }
            else{
                keyPressed='m';
            logPrompt();  
            }
    }
});


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// step 1: show the fixation for x ms
async function fixation(){
    
    myImg.src = "./img/fixation.png";
    myImg.style.height = '420px';
    myImg.style.width = '420px';
    sessionActive=1;
   
    document.getElementById("start").disabled = true;
    document.getElementById('log1').style.visibility = 'hidden';
    document.getElementById('designedBy').style.visibility = 'hidden';
    document.getElementById('navon').style.visibility = 'hidden';
    showingFixation=1;// system stops accepting input
   // console.log("Fixation starts:");
    await sleep(0);
 //   console.log("Fixation ends");
    showingFixation=0; //system will  start accepting keyboard input
    showPrompt();
}


  // step 2: prompt1 shows up; timer starts
function showPrompt(){
    sTime = Date.now(); 
   if(counter>11){
       taskOver();
   } 
   else{
       myImg.src = "./img/"+imgId[counter]+".png"; 
   }

}


// step 3: wait for the key press, as soon as it is pressed, log the reaction time
function logPrompt(){
    console.log(keyPressed);
    k=imgId[counter]-1;
    if (counter>11){
        taskOver();
    }
    else{
        let diff=Date.now()-sTime;
        coordinates.push("("+diff + ","+ k+ ")"); 
       // console.log("value of k"+k);
        //console.log("value of diff"+diff);
        promptLog[k].reactTime=diff;
        //console.log("Previous Reaction Time:"+promptLog[k].reactTime);
        if(promptLog[k].answer===keyPressed){
            promptDesc[k].score=1;
            totalScore+=promptDesc[k].score;
        }
       // for logging value continuously
       //log1.innerHTML=coordinates;
        // this calls the next prompt after showing fixation for x
        counter++;
        fixation();
    }
    
}


function taskOver(){
    console.log("Thanks for participating");
    console.log("Total Score"+totalScore);
    console.log(promptLog);
    myImg.style.height = '220px';
    myImg.style.width = '720px';
    myImg.src = "./img/keyboard.png"; 
    sessionActive=0;
    document.getElementById('copyText').style.visibility = 'visible';
    document.getElementById('download').style.visibility = 'visible';
    document.getElementById('designedBy').style.visibility = 'visible';
    calOutput();
}

function shuffleImgId(){
    let newId= [];
    while (imgId.length!==0){
        let randomIndex=Math.floor(Math.random()*imgId.length );
        newId.push(imgId[randomIndex]);
        imgId.splice(randomIndex,1);
    }
    imgId=newId;
}




function toDisplay(){
    for(let i=0;i<12;i++){
        csvOutput.push(promptLog[i].name + ","+imgId[i]+","+ promptLog[i].level+ ","+ promptLog[i].target+ ","+ promptLog[i].answer+ ","+ promptLog[i].score+","+ promptLog[i].reactTime+";"); 
    }

}


function generateCSV() {

    toDisplay();
    let csv_data=csvOutput;
    downloadCSV(csv_data);

}


function downloadCSV(csv_data) {

    // Create CSV file object 
    CSVFile = new Blob([csv_data], {
        type: "text/csv"
    });

    // Create to temporary link to initiate download process
    var temp_link = document.createElement('a');

    // Download csv file
 let t= moment().format('YYYY-MM-DD-HHmm-ss');
  temp_link.download = t+"-"+fileName+".csv";
var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    // Automatically click the link to trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
}

function copyMyText(id) {
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy")
}

function calOutput(){

    for(let i=0;i<12;i++){
        if(promptLog[i].score==1){
            scoreCorrect+=promptDesc[i].score;
        }
        avgRT+=promptDesc[i].reactTime;
        if(promptLog[i].level==='G' && promptLog[i].target==='E') {
            avgGE+=promptDesc[i].reactTime;
        }
        if(promptLog[i].level==='G' && promptLog[i].target==='H') {
            avgGH+=promptDesc[i].reactTime;
        }
        if(promptLog[i].level==='L' && promptLog[i].target==='E') {
            avgLE+=promptDesc[i].reactTime;
        }
        if(promptLog[i].level==='L' && promptLog[i].target==='H') {
            avgLH+=promptDesc[i].reactTime;
        }
        if(promptLog[i].level==='L') {
            avgL+=promptDesc[i].reactTime;
        }
        if(promptLog[i].level==='G' ) {
            avgG+=promptDesc[i].reactTime;
        }
    }
    scoreIncorrect=12-scoreCorrect;
  
    avgRT=Math.round((avgRT/12),0);
    avgL=Math.round((avgL/6),0);
    avgG=Math.round((avgG/6),0);
    avgGE=Math.round((avgGE/3),0);
    avgGH=Math.round((avgGH/3),0);
    avgLE=Math.round((avgLE/3),0);
    avgLH=Math.round((avgLH/3),0);
   


    console.log("Total Correct "+scoreCorrect);
    console.log("Incorrect "+scoreIncorrect);
    console.log("Average Reaction Time "+avgRT);
    console.log("Average Global Reaction Time "+avgG);
    console.log("Average Local Reaction Time "+avgL);
    console.log("Average Global E Reaction Time "+avgGE);
    console.log("Average Local E Reaction Time "+avgLE);
    console.log("Average Global H Reaction Time "+avgGH);
    console.log("Average Local H Reaction Time "+avgLH);

    readableOutput= 
        "Total Correct: "+scoreCorrect + ","+ "<br>"+
        "Incorrect "+scoreIncorrect +","+ "<br>"+
        "Average Reaction Time: "+avgRT+ ","+ "<br>"+
        "Average Global Reaction Time: "+avgG + ","+ "<br>"+
        "Average Local Reaction Time: "+avgL + ","+ "<br>"+
        "Average Global E Reaction Time: "+avgGE + ","+ "<br>"+
         "Average Local E Reaction Time: "+avgLE + ","+ "<br>"+
        "Average Global H Reaction Time: "+avgGH + ","+ "<br>"+
        "Average Local H Reaction Time: "+avgLH;  + "<br>";

        console.log(readableOutput);
        log2.innerHTML=readableOutput;

  }

 
/*
  function preloadImage()
{
    var img=new Image();
    for(var z=1; z<13;z++){
        img.src="./img/"+z+".png"; 
    }
   
}
*/

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

preloadImages(["./img/1.png", "./img/2.png", "./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png","./img/11.png","./img/12.png","./img/fixation.png"]);


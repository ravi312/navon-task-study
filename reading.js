const readingCard=document.getElementById('readingTask');
const readingIntro=document.getElementById('readingIntro');
const btnShowPassage=document.getElementById('btnShowPassage');
const btnCompRead=document.getElementById('btnCompRead');
readingCard.style.visibility = "hidden";
btnCompRead.style.visibility = "hidden";
let grade = window.localStorage.getItem("grade");

let passageText = [ 
    [ "6-0 Photosynthesis: The opening and closing of stomata (CBSE class 10th)We had talked about stomata which are tiny pores present on the surface of the leaves. Massive amounts of gaseous exchange takes place in the leaves through these pores for the purpose of photosynthesis. But it is important to note here that exchange of gases occurs across the surface of stems, roots and leaves as well. Since large amounts of water can also be lost through these stomata, the plant closes these pores when it does not need carbon dioxide for photosynthesis. The opening and closing of the pore is a function of the guard cells. The guard cells swell when water flows into them, causing the stomatal pore to open. Similarly the pore closes if the guard cells shrink."],
     ["6-1 We had talked about tiny pores present on the surface of the leaves called stomata. Through these pores in the leaves massive amounts of gases are exchanged, during photosynthesis. These gases are also exchanged across the surface of stems, roots and leaves as well. Since the plant can also lose large amounts of water through these stomata, when it does not need carbon dioxide for photosynthesis it closes these pores. The pores open and close because of the guard cells. When water flows into the guard cells, they swell and the stomatal pore opens. Similarly (when water flows out of them) the guard cells shrink and the pore closes."],
     ["7-2 The eye is generally compared with a camera. For example, the eye and camera have a lens. The lens divides the eye into two unequal chambers, namely aqueous chamber and vitreous chamber. The aqueous chamber is located between the cornea and the lens. It is smaller in size and is filled with a water-like substance, called aqueous humor. The vitreous chamber is located between the lens and the retina. It is filled with a jelly like protein, called vitreous humor. These fluids help in holding the lens at its appropriate place and in proper shape. They also allow enough flexibility for the occurrence of accommodation — a process through which the lens changes its shape in order to focus the objects at varying distances. This process is regulated by ciliary muscles, which are attached to the lens. These muscles flatten the lens to focus the distant objects and thicken it to focus the near objects. Like a camera, the eye also has a mechanism to control the amount of light entering into it. The iris serves this purpose. It is a disc-like coloured membrane lying between the cornea and the lens. It controls the amount of light entering the eye by regulating pupil dilation. In dim light the pupil dilates; in bright light it contracts. "],
     ["7-3 The eye is generally compared with a camera. For example, both the camera and the eye have a lens. The lens of the eye divides it into two chambers of unequal sizes. The first chamber is a smaller chamber that is located between the outermost layer of the eye (cornea) and the lens and is called aqueous chamber. The second chamber is a larger chamber that is located between the innermost layer of the eye (retina) and the lens and is called vitreous chamber. The aqueous chamber is filled with a water-like substance called aqueous humor. Similarly, the vitreous chamber is filled with a jelly-like protein called vitreous humor. Together, the aqueous humor and the vitreous humor help in holding the lens at its appropriate place and in proper shape. They also allow enough flexibility in the lens for it to change its shape to focus the objects at varying distances — a process we call accommodation. A specialised set of muscles that are attached to the lens called ciliary muscles, enable the lens to flatten itself to focus on the distant objects and thicken itself to focus on the near objects. These muscles can hence be considered to regulate the process of accommodation. Like a camera, the eye also has a mechanism to control the amount of light entering it. Specifically, a disc-like coloured membrane lying between the cornea and the lens called the iris serves this purpose. The iris controls the amount of light entering the eye by regulating pupil dilation. In dim light the pupil dilates; in bright light, it contracts."],
     ["8-4 Adrenaline is secreted directly into the blood and carried to different parts of the body. The target organs or the specific tissues on which it acts include the heart. As a result, the heart beats faster, resulting in supply of more oxygen to our muscles. The blood to the digestive system and skin is reduced due to contraction of muscles around small arteries in these organs. This diverts the blood to our skeletal muscles. The breathing rate also increases because of the contractions of the diaphragm and the rib muscles. All these responses together enable the animal body to be ready to deal with the situation."],
     ["8-5 The blood carries the adrenaline secreted directly into it to different parts of the body. It acts on the target organs or specific tissues like the heart. The heart beats faster, as a result and supplies more oxygen to our muscles. Muscles around small arteries in the digestive system and skin contract and reduce the blood supply to them. The blood to our skeletal muscles is diverted. The diaphragm and the rib muscles contract causing the rate of breathing to increase. The animal body is ready to deal with the situation because of these responses. "]
 ];

 let passageCode;
 let passageId=shufflePassageId(); // this generates the random index
 
//readingCard.innerText=passageText[passageId[0]];
//passageCode=passageId[0];

function random(a, A) {
    return Math.floor(Math.random() * (A - a + 1)) + a;
}
 


function gradeBasedPassage(){
    let gradeId;
    if(grade==='6'){
        gradeId = random(0, 1);
        console.log(gradeId);
        readingCard.innerText=passageText[gradeId];
        passageCode=gradeId;
    }
    if(grade==='7'){
        gradeId = random(2, 3);
        readingCard.innerText=passageText[gradeId];
        passageCode=gradeId;
    }
    if(grade==='8'){
        gradeId = random(4, 5);
        readingCard.innerText=passageText[gradeId];
        passageCode=gradeId;
    }
}

gradeBasedPassage();


function showReadingCard() {
    readingCard.style.visibility = "visible";
    btnCompRead.style.visibility = "visible";
    readingIntro.style.display = "none";
    btnShowPassage.style.display = "none";
    startTimer();
  }

 function completedReadingCard(){
     stopTimer();
     displayTime();
     window.open("./navon-intro2.html","_self");
 } 

 function startTimer(){
    sTime = Date.now(); 
}

let diff;

function stopTimer(){
    diff=Date.now()-sTime;
    window.localStorage.setItem("reading", diff);
    window.localStorage.setItem("reading-passageCode", passageCode);
}


function displayTime(){
    console.log("The reaction time was:"+diff);
}



function shufflePassageId(){
    let imgId= [0, 1, 2,3,4,5];
    let newId= [];
    while (imgId.length!==0){
        let randomIndex=Math.floor(Math.random()*imgId.length );
        newId.push(imgId[randomIndex]);
        imgId.splice(randomIndex,1);
    }
    imgId=newId;
    return imgId;    
}
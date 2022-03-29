const btnNext=document.getElementById('btn-intro');
btnNext.style.visibility = "hidden";
const consent = document.getElementById('consent').value;
// get the elements
function displayInConsole(){
    localStorage.clear();
    removeFromLocal();
    const userName = document.getElementById('userName').value;
    const studyDate= document.getElementById('studyDate').value;
    const consent = document.getElementById('consent').value;
    const userId=Date.now();
    console.log(userId);
    storeIntro(userName, studyDate, consent, userId);
}

function storeIntro(userName, studyDate, consent, userId){
    window.localStorage.setItem("userName", userName);
    window.localStorage.setItem("studyDate", studyDate );
    window.localStorage.setItem("consent", consent);
    window.localStorage.setItem("userId", userId);
    displayFromLocal();
}

function displayFromLocal(){
    let userName = window.localStorage.getItem("userName");
    let studyDate = window.localStorage.getItem("studyDate");
    let consent = window.localStorage.getItem("consent");
    console.log(userName);
    console.log(studyDate);
    console.log(consent);
    window.location.href="grade.html";
}

function removeFromLocal(){
    window.localStorage.removeItem('userName');
    window.localStorage.removeItem('studyDate');
    window.localStorage.removeItem('consent');
}

function showNextButton() {
    btnNext.style.visibility = "visible";
   
  };
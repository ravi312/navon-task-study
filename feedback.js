// get the elements
function displayInConsole(){
    removeFromLocal();
    const q1 = document.getElementById('q1').value;
    const q2= document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;
    const q4 = document.getElementById('q4').value;
    storeIntro(q1, q2, q3, q4);
}

function storeIntro(q1, q2, q3, q4){
    window.localStorage.setItem("q1", q1);
    window.localStorage.setItem("q2", q2 );
    window.localStorage.setItem("q3", q3);
    window.localStorage.setItem("q4", q4);
    displayFromLocal();
}

function displayFromLocal(){
    let q1 = window.localStorage.getItem("q1");
    let q2 = window.localStorage.getItem("q2");
    let q3 = window.localStorage.getItem("q3");
    let q4 = window.localStorage.getItem("q4");
    console.log(q1);
    console.log(q2);
    console.log(q3);
    console.log(q4);
    window.location.href="thankyou.html";
}

function removeFromLocal(){
    window.localStorage.removeItem('q1');
    window.localStorage.removeItem('q2');
    window.localStorage.removeItem('q3')
    window.localStorage.removeItem('q4');;
}
let contact = document.getElementById('contact');
let popup = document.getElementById('popup');
let closepopup = document.getElementById('closepopup');

contact.onclick = function(){
    popup.style.display = 'block';
}

closepopup.onclick = function(){
    popup.style.display= 'none';
}

window.onclick = function(event){
    if (event.target == popup){
        popup.style.display = 'none';
    }
}



const hideContent = document.getElementById("B-para1-7");
const moreBTN = document.getElementById("more");
const second1 = document.getElementById("second1");
const second2 = document.getElementById("second2");
 

moreBTN.addEventListener('click', function(){
    if (hideContent.style.display === "none"){
        hideContent.style.display = "inline";
        moreBTN.textContent = "Less";
        moreBTN.style.marginTop = "107rem"
        second1.style.height = "150rem";
        second2.style.height = "150rem";
    }
    else{
        hideContent.style.display = "none";
        moreBTN.textContent = "More";
        moreBTN.style.marginTop = "90rem"
        second1.style.height = "95rem";
        second2.style.height = "95rem";

    }
    
})
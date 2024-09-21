const labels = document.querySelectorAll('.form label');

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style = "transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})

 
function show() {
    let character = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789';
    let com = '';

    for (i = 0; i < 6; i++) {
        let store = character.charAt(Math.floor(Math.random() * character.length));
        com = com + store;
    }
    document.getElementById("cap").innerText = com;
     

}

function refresh() {
    show();
}
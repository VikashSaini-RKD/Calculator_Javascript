let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (this.innerHTML == '=') {
                display.innerHTML = eval(display.innerHTML);
         } else if (this.innerHTML == 'C') {
                display.innerHTML = "";
         } else if (this.innerHTML == 'D') {
                display.innerHTML = display.innerHTML.slice(0, -1)
         } else if (this.innerHTML == 'X') {
                display.innerHTML += '*';
         } else {
                 display.innerHTML += this.innerHTML
        }
    })
}

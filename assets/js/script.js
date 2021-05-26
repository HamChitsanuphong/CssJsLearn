const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

let alertClick = document.getElementById('iconMenu');

menuToggle.addEventListener("click", () => {
    // toggle มองเหมือน switch ไฟ
    menuToggle.classList.toggle("active");
    showcase.classList.toggle("active");
})




/*
// getByCssSelector , selectorAll . , #
let message = document.querySelector('.message');
message.innerHTML = 'ไม่ต้องห่วงฉัน';

// Contructor
function Rabbit(name, color) {
    this.name = name;
    this.color = color;
    this.talk = function(){
        console.log(this.name + 'Talking, oung oung!');
    }
}

//  Arrow function
alertClick.addEventListener("click", function() {
    alert("YOUR CLICK");
})
// expert arrow function
alertClick.addEventListener("click", () => {
    alert("YOUR CLICK");
})
*/

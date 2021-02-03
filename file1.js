// console.log("hello"); //※反映されているかテスト

// var
// cursor = $(".cursor"),
// follower = $(".follower");
// cWidth = 8,
// fWidth = 40,
// delay = 10,
// mouseX = 0,
// mouseY = 0,
// posX = 0;
// posY = 0;

// TweenMax.to({}, .001,{
//   repeat: -1,
//   onRepeat: function(){
//     posX += (mouseX - posX) / delay;
//     posY += (mouseY - posY) / delay;
//   TweenMax.set(follower,{
//     css:{
//       left : posX - (fWidth / 2),
//       top : posY - (fWidth/2) 
//     }
//   });
//   TweenMax.set(cursor),{
//     css:{
//       left: mouseX - (cWidth / 2),
//       top : mouseY - (cWidth / 2)
//     }
//   }
//   }
// });

let mouseX=window.innerWidth/2,
    mouseY=window.innerHeight/2;
const element =document.querySelector('#follwer')

const circle = {
    el:element,
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    w: 80,
    h: 80,
    update: function () {
        console.log(this.el.style.transform);
        console.log(this.x);
        let l = this.x - this.w / 2;
        let t = this.y - this.h / 2;
        this.el.style.transform = `translate3d(${l}px, ${t}px, 0)`;
    }
}

setInterval (move,1000/60)

function move(){
    circle.x = lerp(circle.x, mouseX, 0.1);
    circle.y = lerp(circle.y, mouseY, 0.1);
    circle.update()
}

window.addEventListener('mousemove',(e)=>{
    mouseX = e.clientX;
    mouseY = e.clientY;
})

function lerp(start, end, amt){
    return (1-amt)*start+amt*end
}
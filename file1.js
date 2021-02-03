
    console.log("hello"); //※反映されているかテストしたら反映されていました

    $(window).mousemove (function(e){
        mouseX = e.clientX;
        mouseY = e.clientY;
      　console.log(mouseX,mouseY);
      })
var mouseX=window.innerWidth/2,
mouseY=window.innerHeight/2;
var circle = { 
     el:$('#circle'),
     x:window.innerWidth/2, 
     y:window.innerHeight/2, 
     w:80, 
     h:80, 
     update:function(){
                   l = this.x-this.w/2; 
                   t = this.y-this.h/2; 
                   this.el.css({ 
                            'transform':
                            'translate3d('+l+'px,'+t+'px, 0)' }); 
                           }
}

setInterval (move,1000/60)
function move(){
  circle.x = lerp (circle.x, mouseX, 0.1);
  circle.y = lerp (circle.y, mouseY, 0.1);
  circle.update() 
}
function lerp (start, end, amt){
  return (1-amt)*start+amt*end
}



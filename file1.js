console.log("hello"); //※反映されているかテスト

var
cursor = $(".cursor"),
follower = $(".follower");
cWidth = 8,
fWidth = 40,
delay = 10,
mouseX = 0,
mouseY = 0,
posX = 0;
posY = 0;

TweenMax.to({}, .001,{
  repeat: -1,
  onRepeat: function(){
    posX += (mouseX - posX) / delay;
    posY += (mouseY - posY) / delay;
  TweenMax.set(follower,{
    css:{
      left : posX - (fWidth / 2),
      top : posY - (fWidth/2) 
    }
  });
  TweenMax.set(cursor),{
    css:{
      left: mouseX - (cWidth / 2),
      top : mouseY - (cWidth / 2)
    }
  }
  }
});
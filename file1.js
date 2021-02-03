// console.log("hello"); //※反映されているかテスト
/* ------------------------------------------------------------------------- */
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
/* ------------------------------------------------------------------------- */
// let mouseX=window.innerWidth/2,
//     mouseY=window.innerHeight/2;
// const element =document.querySelector('#follwer')

// const circle = {
//     el:element,
//     x: window.innerWidth / 2,
//     y: window.innerHeight / 2,
//     w: 80,
//     h: 80,
//     update: function () {
//         console.log(this.el.style.transform);
//         console.log(this.x);
//         let l = this.x - this.w / 2;
//         let t = this.y - this.h / 2;
//         this.el.style.transform = `translate3d(${l}px, ${t}px, 0)`;
//     }
// }

// setInterval (move,1000/60)

// function move(){
//     circle.x = lerp(circle.x, mouseX, 0.1);
//     circle.y = lerp(circle.y, mouseY, 0.1);
//     circle.update()
// }

// window.addEventListener('mousemove',(e)=>{
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// })

// function lerp(start, end, amt){
//     return (1-amt)*start+amt*end
// }
/* ------------------------------------------------------------------------- */
// /マウスストーカー用のdivを取得
// const stalker = document.getElementById('stalker');

// //aタグにホバー中かどうかの判別フラグ
// let hovFlag = false;

// //マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
// document.addEventListener('mousemove', function (e) {
//     if (!hovFlag) {
//     stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
//     }
// });

// //リンクへ吸い付く処理
// const linkElem = document.querySelectorAll('a:not(.no_stick_)');
// for (let i = 0; i < linkElem.length; i++) {
//     //マウスホバー時
//     linkElem[i].addEventListener('mouseover', function (e) {
//         hovFlag = true;

//         //マウスストーカーにクラスをつける
//         stalker.classList.add('hov_');

//         //マウスストーカーの位置をリンクの中心に固定
//         let rect = e.target.getBoundingClientRect();
//         let posX = rect.left + (rect.width / 2);
//         let posY = rect.top + (rect.height / 2);

//         stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

//     });
//     //マウスホバー解除時
//     linkElem[i].addEventListener('mouseout', function (e) {
//         hovFlag = false;
//         stalker.classList.remove('hov_');
//     });
// }
/* ------------------------------------------------------------------------- */
// $(function() {
//   let style;
//   $(window).mousemove(function(e) {
//     style = "ellipse(100px 100px at " + e.clientX + "px " + e.clientY + "px)";
//     console.log(style);
//     $(".cursor").css("clip-path", style);
//   });
// });
/* ------------------------------------------------------------------------- */
// $(function() {

  //      HTML SCSS JSResult
  // EDIT ON
//   var
//     cursor = $(".cursor"),
//     follower = $(".follower"),
//     cWidth = 8, 
//     fWidth = 40, 
//     delay = 10, 
//     mouseX = 0, 
//     mouseY = 0, 
//     posX = 0, 
//     posY = 0; 

//   TweenMax.to({}, .001, {
//     repeat: -1,
//     onRepeat: function() {
//       posX += (mouseX - posX) / delay;
//       posY += (mouseY - posY) / delay;

//       TweenMax.set(follower, {
//         css: {
//           left: posX - (fWidth / 2),
//           top: posY - (fWidth / 2)
//         }
//       });

//       TweenMax.set(cursor, {
//         css: {
//           left: mouseX - (cWidth / 2),
//           top: mouseY - (cWidth / 2)
//         }
//       });
//     }
//   });

//   $(document).on("mousemove", function(e) {
//     mouseX = e.pageX;
//     mouseY = e.pageY;
//   });

//   $("a").on({
//     "mouseenter": function() {
//       cursor.addClass("is-active");
//       follower.addClass("is-active");
//     },
//     "mouseleave": function() {
//       cursor.removeClass("is-active");
//       follower.removeClass("is-active");
//     }
//   });
// });
/* ------------------------------------------------------------------------- */
// if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
//   $(function(){
//       var body = document.body;
//       var cursor = document.createElement("div");
//       var stalker = document.createElement("div");
//       cursor.id = "cursor";
//       stalker.id = "stalker";
//       body.appendChild(cursor);
//       body.appendChild(stalker);
//       body.addEventListener("mousemove", function(e) {
//             cursor.style.left = e.clientX + "px";
//             cursor.style.top = e.clientY + "px";
//             stalker.style.left = e.clientX + "px";
//             stalker.style.top = e.clientY + "px";
//       }, false);

//       $("a").on("mouseenter", function() {
//           $('#cursor').addClass("active");
//           $('#stalker').addClass("active");
//       });

//       $("a").on("mouseleave", function() {
//           $('#cursor').removeClass("active");
//           $('#stalker').removeClass("active");
//       });
//   });
// }
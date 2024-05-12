//-----------------------------to active list icon-----------------------------------------
list=document.querySelector(".list");
list.onclick=function() {
    nav=document.querySelector("#nav");
    nav.classList.toggle("active");
}
//---------------------change background color of nav while scroll-------------------------
document.addEventListener('scroll',() =>{
    const head=document.querySelector('#header');
    if(window.scrollY > 0){
        head.classList.add('scrolled');
    }else{
        head.classList.remove('scrolled');
    }
})
//---------------------------product details images change-----------------------------
var big_image=document.getElementById("big-image");
var small_image=document.getElementsByClassName("sm-image");

        small_image[0].onclick = function(){
            big_image.src=small_image[0].src;
        }
        small_image[1].onclick = function(){
            big_image.src=small_image[1].src;
        }
        small_image[2].onclick = function(){
            big_image.src=small_image[2].src;
        }
        small_image[3].onclick = function(){
            big_image.src=small_image[3].src;
        }
//--------------------------night mood for product details --------------------------------
        function night_mood_product_deatails(){
          document.querySelector("body").style.backgroundColor ="#1f2123";
          const pro = document.querySelectorAll(".pro");
          for (let i = 0; i < pro.length; i++) {
            pro[i].style.border="none";
            pro[i].style.boxShadow="none";
            pro[i].style.backgroundColor="#2c2e31";
          }
          const h2 = document.querySelectorAll("h2");
          for (let i = 0; i < h2.length; i++) {
            h2[i].style.color="#7e8a8f";
          }
          const h4 = document.querySelectorAll("h4");
          for (let i = 0; i < h4.length; i++) {
            h4[i].style.color="#3894a3";
          }
          const h5 = document.querySelectorAll("h5");
          for (let i = 0; i < h5.length; i++) {
            h5[i].style.color="#fff";
          }
          const dd=document.querySelectorAll("#product h2");
            for (let i = 0; i < dd.length; i++) {
                dd[i].style.color = "rgb(255 255 255 / 35%)";
              }
          const carr = document.querySelectorAll(".pro a i");
            for (let i = 0; i < carr.length; i++) {
              carr[i].style.backgroundColor="#2f414f";
            }
              const dd5=document.querySelectorAll("#product .container .pro .description h5 ,#product .container .pro .description span");
            for (let i = 0; i < dd5.length; i++) {
                dd5[i].style.color = "rgb(255 255 255 / 70%)";
              }
          const btn=document.querySelector("#newsletter button");
              btn.style.background="linear-gradient(201deg, #5b5a5a, #1f2123)";

              const newh4=document.querySelector("#newsletter h4");
              newh4.style.color="white";

              const delspan=document.querySelector("#details .right span");
                delspan.style.color="#b9b7b7";

              const h6=document.querySelector("#details .right h6");
                h6.style.color="#b9b7b7";

          const car = document.querySelectorAll(".pro a i");
          for (let i = 0; i < car.length; i++) {
            car[i].style.backgroundColor="#rgb(47 65 79 / 63%)";
          }
          document.querySelector("#newsletter").style.backgroundColor ="rgb(36 37 38)";

        }
//--------------------------about night mood-----------------------------------------------
        function night_mood_about(){
          document.querySelector("body").style.backgroundColor ="#1f2123";

          const fe = document.querySelectorAll(".feat-box");
        for (let i = 0; i < fe.length; i++) {
          fe[i].style.backgroundColor = "#2c2e31";
          fe[i].style.border="none";
        }
        const h2=document.querySelector("#about-body div h2").style.color="#3894a3";

        }
//------------------------------contact night mood-----------------------------------------
        function night_mood_contact(){
          document.querySelector("body").style.backgroundColor ="#1f2123";

          const p=document.querySelector("section.left .contactTitle p").style.color="#b8babc";
          const span=document.querySelectorAll(".iconsclass .details span:nth-child(2)")
          for (let i = 0; i < span.length; i++) {
            span[i].style.color = "rgb(164 166 167)";
          }

        }
//-----------------------------cart dark mood----------------------------------------------
        function night_mood_cart(){
          document.querySelector("body").style.backgroundColor ="#1f2123";

          const td=document.querySelectorAll("#cart table thead td");
          for (let i = 0; i < td.length; i++) {
            td[i].style.color = "white";
          }

          const tdd=document.querySelectorAll("#cart table tbody tr td");
          for (let i = 0; i < tdd.length; i++) {
            tdd[i].style.color = "white";
          }

          const input=document.querySelectorAll("#cart table input");
          for (let i = 0; i < input.length; i++) {
            input[i].style.color = "white";
            input[i].style.backgroundColor = "rgb(56 59 63)";
            input[i].style.border = "none";
          }

          const btn=document.querySelector("#coupon .form button");
          btn.style.background="linear-gradient(201deg, #5b5a5a, #1f2123)";

        }
//-------------------------------login dark mood-------------------------------------------
        function night_mood_login(){
          document.querySelector("body").style.backgroundColor ="#1f2123";

          const img=document.querySelector(".big_container img");
          img.src="images/Mobile login-pana (1).png";

          const p1=document.querySelector(".big_container .container");
          p1.style.backgroundColor="#171717";

          const p2=document.querySelectorAll(".big_container input");
          for (let i = 0; i < p2.length; i++) {
            p2[i].style.backgroundColor="#2C2E31";
          }
          
          const p3=document.querySelector(".loging");
          p3.style.backgroundColor="rgb(38 38 38)";

          const p4=document.querySelector(".loging label");
          p4.style.color="white";
          
          const p5=document.querySelector("button[name='btn']");
          p5.style.backgroundColor="transparent";
          
          const p6=document.querySelectorAll(".loging input");
          for (let i = 0; i < p6.length; i++) {
            p6[i].style.border="#4e4f4f7d";
          }


        }
//-----------------------------------------------------------------------------------------
function myFunction() {
  var element = document.body;
/*in main page class left */ 
element.classList.toggle("dark-body");

  element.classList.toggle("d");
  element.classList.toggle("h2");
  element.classList.toggle("p");
  element.classList.toggle("h1");

  /* -----------------------------fetures---------------------------------------- */
  element.classList.toggle("fb");

  /*-------------------------------product card       ---------------------------*/
  element.classList.toggle("pr");
  element.classList.toggle("h5");
  element.classList.toggle("prand");
  element.classList.toggle("car");

/*----------------------------------last section                  ---------------- */

  element.classList.toggle("bg");

  /*----------------------------------lorem in about us page                  ---------------- */

  element.classList.toggle("lo");
/**/
  
element.classList.toggle("kl");

/* button*/
element.classList.toggle("bttn");
element.classList.toggle("btop");

}

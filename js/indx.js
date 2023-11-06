$(".liet a").click(function(){
  $(".liet a").css("color", "red !important");
})
$(".itemopen").click(function() {
  let itevwidithnav=$(".itemnav").innerWidth();

  if( $(".itemnav").css("left") == "0px"){
    $(".itemnav").animate({left:-itevwidithnav} ,1000)
  }
  else{
    $(".itemnav").animate({left:'0px'} ,1000)

  }


})

//  انا حولت في دي مش عارف اخلي كل ما ادوس علي وحد  لي وحديه ترفع
// $(".itemh3").click(function(eventInfo6){
// let heightitemh3=$(eventInfo6.target).css("height");
// $("heightitemh3").animate(function(){
//   let heightitempp=$("itempp");
//   if(heightitempp.css("height") == "0px"){
//     heightitempp.animate({height:-heightitemh3} ,1000);
//   }
  
//   else{
//     heightitempp.animate({height:"0px"} ,1000);
//   }
  
// })
 



// })
function scrolleh3(){
  $(".itemh3").click(function(){

    $(".itempp").toggle(1000)
  })

  $(".itemh31").click(function(){

    $(".itempp1").toggle(1000)
  })

  $(".itemh32").click(function(){

    $(".itempp2").toggle(1000)
  })

  $(".itemh33").click(function(){

    $(".itempp3").toggle(1000)
  })

  $("#itemxx").click(function(){
    $(".itemnav").hide(1000)
  })
  
}
scrolleh3()

function gettime(){

//the end of the year date
// gettime();الوقت بل ثواني 
// new Date(). بتجيب الوقت 
// 1000 =1sc
let cuntDownDate = new Date("Dec 31,2023 23:59:59").getTime();


let counter = setInterval(()=>{
  
  // get date now 
  let datenow=new Date().getTime();

  // كده بيقولي فرق الثواني بين دلوقتي و وفقت الايفين 
  let dataDiff=cuntDownDate - datenow;
// git time  units
// let daye=Math.floor(dataDiff / 1000 /60 /60/ 24); 
let daye=Math.floor(dataDiff /(1000 * 60 * 60 * 24) ); 
let hours=Math.floor(dataDiff %(1000 * 60 * 60 * 24) / (1000*60*60)) ;
let minutes=Math.floor(dataDiff%(1000 * 60 * 60 ) /(1000*60));
let second=Math.floor(dataDiff%(1000 * 60 ) /(1000));

$(".anav").click(function(){
  $(".anav").css("color","red")
})

$(".daye").html("<span>" + daye + "</span>")

document.querySelectorAll(".hours").innerHTML =  `<h2>`+hours  +"hours"+`</h2>`;
document.querySelectorAll(".minutes").innerHTML = `<h2>`+ minutes +"minutes" +`</h2>`;
document.querySelectorAll(".second").innerHTML = `<h2>`+second +"second" +`</h2>`;

},1000)

}
gettime()




function TextTrackCue(){
  let maxtex=$("textarea").attr("maxlength");
$(".massage").html("<span>" + maxtex + "</span>")
$("textarea").keyup(function(){
  let textlenthe =$(this).val().length;
  console.log(textlenthe);
  remText= textlenthe - maxtex
  $(".massage").html("<span>" + remText + "</span> Characyer Reamining")
$(".massage").css("color","red")


if(remText == 0){
  $(".massage").html("<span>" + remText +  "</span> your available character finished")


}

})

}
TextTrackCue()
let scetineDuration=$("#Durationscroll").offset().top;

$(window).scroll(function(){

  $("#Duration").click(function(){
    let scetineDuration=$("#Durationscroll").offset().top;
    console.log(scetineDuration);
    $("body").animate({scrollTop:scetineDuration},1000)

  })

  $("#Details").click(function(){
    let scetineDuration=$("#Detailsscroll").offset().top;
    console.log(scetineDuration);
    $("body").animate({scrollTop:scetineDuration},1000)

  })
  $("#Contact").click(function(){
    let scetineDuration=$(".Contactscroll").offset().top;
    console.log(scetineDuration);
    $("body").animate({scrollTop:scetineDuration},1000)

  })

})


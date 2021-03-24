var imagepath1 = "pictures/" + 1 + ".jpg";
var imagepath2 = "pictures/" + 2 + ".jpg";
var imagepath3 = "pictures/" + 3 + ".jpg";
var hotelname1 = "Rixos Borovoe Hotel";
var hotelname2 = "Konfor Hotel Burabay";
var hotelname3 = "Green Which Tourist BOROVOE";
var blackcircle = "&#9679;";
var circle = "&#9675;";
var halfcircle = "&#9680;";
var price;
$(".btn").click(function() {
  document.getElementById('name').innerHTML=hotelname1;
  book();
});
document.querySelector("#hotel1").addEventListener('click', function() {
  $('#hotelimg').attr("src", imagepath1);
  document.querySelector("h3").innerHTML=hotelname1;
  document.getElementById("hprice").innerHTML = "58500";
  document.querySelector(".rating5").innerHTML=circle;
  hname(hotelname1);
  book();
});
document.querySelector("#hotel2").addEventListener('click', function() {
  $('#hotelimg').attr("src", imagepath2);
  document.querySelector("h3").innerHTML=hotelname2;
  document.querySelector(".rating5").innerHTML=halfcircle;
  document.getElementById("hprice").innerHTML = "24990";
  hname(hotelname2);
  book();
});
document.querySelector("#hotel3").addEventListener('click', function() {
  $('#hotelimg').attr("src", imagepath3);
  document.querySelector("h3").innerHTML=hotelname3;
  document.querySelector(".rating5").innerHTML=halfcircle;
  document.getElementById("hprice").innerHTML = "20000";
  hname(hotelname3);
  book();
});
function hname(n) {
  $(".btn").click(function() {
    document.getElementById('name').innerHTML=n;
    price = document.getElementById("hprice").value;
  });
}

function book(){
  $(".booknow").click(function() {
    alert("Have a nice rest!!")
  });
}

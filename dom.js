//document.getElementById("bio").innerHTML
//= "Fatma Nur Kılıçkaya"

// var intro1 = document.getElementById("intro1");
// var mesaj = document.getElementById("mesaj");
// mesaj.innerHTML = intro1.innerHTML;

// var tumliste = document.getElementsByTagName("ul");
// var sehirler = tumliste[0];
// var sehir = sehirler.getElementsByTagName("li");
// for (var i = 0; i < sehir.length; i++) {
//   alert(sehir[i].innerHTML);
// }

// var classElement =
// document.querySelectorAll(p.intro1);
// alert(classElement.length);

// var isim = document.getElementsByName("ogrenciAdi");
// alert(isim[0].value);

//var isim = document.getElementById("bilgisayar")
//.addEventListener("mousemove", renkDegistir);
// var isim = document.getElementById("bilgisayar")
// .addEventListener("click", renkDegistir);
// function renkDegistir(){
//   document.getElementById("div1")
//   .style.background= "red";
//   var isimDegistir = 
//   document.getElementsByName("ogrenciAdi");
//   isimDegistir[0].value = "fatmanur";
// }

// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);
var baslik = document.createElement("h3");
var node = document.createTextNode("Merhaba javascript")
baslik.appendChild(node);

var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");
div1.insertBefore(baslik,p2);
alert("p2 siliniyor");
div1.removeChild(p2);
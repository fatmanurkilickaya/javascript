// for(i=1; i<=10; i++){
//     console.log(i);
// }
// console.log("sayım bitti");

var sehirler  = ["ankara","istanbul","kayseri","ankara","istanbul","kayseri"]
for(i=0; sehirler.length; i++){
    console.log(sehirler[i])
}

var i=1;
while(i<10){
    console.log(i);
    i++;
}

var i=1;
do{
    console.log(i);
    i++;
}while( i>11)


var sehirler  = ["ankara","istanbul","kayseri","ankara","istanbul","kayseri"]
sehirler.forEach(function(sehir){
    console.log(sehir)
})


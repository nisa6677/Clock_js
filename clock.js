function adını_sor(){
    var isim = prompt("Adınız nedir?");
    document.getElementById("benimAdım").innerText = isim;
}

function zamanı_göster(){
    var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var gün = date.getDay();

   if (gün == 1){
       gün = "Pazartesi";
   }else if (gün == 2){
       gün == "Salı";
   }else if ( gün == 3){
       gün = "Çarşamba";
   }else if ( gün == 4){
       gün = "Perşembe";
   }else if (gün == 5){
       gün = "Cuma";
   }else if (gün == 6){
       gün = "Cumartesi";
   }else if ( gün == 7){
       gün = "Pazar";

   }

   h = h < 10 ? "0" + h :h;
   m = m < 10 ? "0" + m :m;
   s = s < 10 ? "0" + s :s ;

   var zaman = h +":" + m + ":" + s + "" + gün;
   document.getElementById("Saat").innerText = zaman;
   document.getElementById("Saat").textContent = zaman;
     setTimeout (zamanı_göster,1000);
}
adını_sor();
zamanı_göster();
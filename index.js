var kullanicilar = [
  { email: "fatmanur@kayseri.edu.tr", sifre: "123" },
  { email: "derya@kayseri.edu.tr", sifre: "12345" },
];
var tivitler = [
  { email: "fatmanur@kayseri.edu.tr", tivit: "Bugün hava güzel" },
  { email: "derya@kayseri.edu.tr", tivit: "saat geç oldu" },
];
var email = prompt("email ?");
var sifre = prompt("sifre ?");
function giris() {
  if (
    (email == kullanicilar[0].email && kullanicilar[0].sifre) ||
    (email == kullanicilar[1].email && kullanicilar[1].sifre)
  ) {
    console.log(tivitler);
  } else {
    alert("kullanıcı adı veya şifresi hatalı!");
  }
}

giris(email, sifre);

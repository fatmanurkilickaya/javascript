class Ogrenci{
    constructor(ad,soyad){
        this.isim = ad;
        this.isim = soyad;

    }
    kaydet(){
        console.log("öğrenci kaydedildi.")
    }
    dersSec(){ console.log("ders kaydedildi.")    }
}

const ogrenci = new Ogrenci();
ogrenci.dersSec();
ogrenci.kaydet();
ogrenci.isim ="fatmanur";

#Case
##Dosyayı Vscode'da açtığınız da Terminale sırasıyla şu işlemleri uygulayınız.
1 => npm install
2 => ng serve
3 => json-server --watch api/db.json
Sonrasında localhost:4200 ile siteye ulaşabilirsiniz.

#Anasayfa
=> Json serverimizden çektiğimiz kategorilerin "başlık, içerik ve iconu çekilerek yazdırıldı.
=> Kategorilerden birine tıklarsanız o kategorideki postların olduğu sayfaya yönelinirsiniz.

##Kategori
=> Kategoriye ait postları kendi yaptığum custom pipe ile tarihe göre yakında uzağa şekilde sıraladım.
=> En üste o kategoriye ait bilgileri çekerek yazdırdım, Kategori başlığının yanında parantez içersinde de o kategoriye ait kaç tane post olduğunu bastırdım.
=> Postları istenilen formatta bastırdım.
=> Postların içerikleri maksimum 280 karakter içeriyor, postun tamamnına erişmek için başlık veya read me'ye tıklayabilirsiniz.

##Pos Detay
=> Postu istenilen şekilde bastırdım

##Arama Sonuç
=> Headerda bulunan arama kutusundan arama yapıldığında, postun başlığında veya açıklamasında arama metninin geçtiği tüm postlar bu sayfada listeleniyor.
=> Postları kendi yaptığum custom pipe ile tarihe göre yakında uzağa şekilde sıraladım.

#EK KENDİ YAPTIKLARIM

#Giriş Ekranı
=> sağ yukarıdaki tuşa basarak login ekranına ulaşabilirsiniz
=> Giriş yaparken JSON serverinde üyeliğinizin kayıtlı olması gerekiyor, eğer üye değilseniz snack bar ile birlikte hata verir. Üyesiniz ama şifrenizi yanlış girdiniz şifre yanlış hatası verir.
=> Kullancı adı ve Şifre JSON serverinde kontrol ediliyor.
=> Doğru formatta mail veya 8 karakterden az şifre girince kutucklar hata verir ve giriş yap butonu disable moddan çıkmaz.
=> Başarılı giriş yaparsanız anasayfaya yönlendirilirsiniz ve giriş bilgileriniz LocalStorage'e kaydedilir, böylece sitede başka sayfaya gittiğinizde veya yenilediğinizde tekrar giriş yapmak zorunda kalmazsınız.

#Kayıt Ol Ekranı
=> Login tuşunun solunda sign up diyerek kayıt ol ekranına ulaşabilirsiniz
=> Buradaki bilgileri girerken doğru formatlarda girmezseniz hata verir ve kayıt ol butonu disable moddan çıkmaz.
=> Kayıt olurken kulladığınız mail JSON serverinde kontrol edilir, eğer böyle bir mail yoksa kayıt olabilirsiniz yoksa hata alırsınız.
=> Başarılı giriş yapınca giriş yap sayfasına yönlendirilirsiniz

#Üyelik girişinden sonra
=> Üyelik giriş yaptığınızda yukarıdaki login butonu gider ve Logout ve My Post butonları gelir.
=> My post'a tıklarsanız sizin üyeliğinize ait postları LocalStorage sayesinde JSON serverinden çağırarak postlarım sayfasına basılır.
=> Buradan bütün postlarınızı görebilirsiniz ve bunları silebilirsiniz.
=> Buradan Yeni Post ekle ile dialog açılır ve başlık içerik ve kategorileri doldurduğunuzda JSON servere kaydolur, arama yaptığınızda veya postu attığınız kategoriye gderseniz postunuzun basıldığını görürsünüz.
=> Logout ile çıkış yaparsanız, üyelik bilgilerinizi LocalStorage'dan siler ve Anasayfaya yönlendirir.

=> Bu siteyi yaparken Angular material ve boostrap gibi özellikleri kullanarak yaptım.
=> Aşağıdaki linkten özellikleri gösteren videoma ulaşabilirsiniz :
https://www.youtube.com/watch?v=vHHgBMAdYqE

# Case
## Dosyayı Vscode'da açtığınız da Terminale sırasıyla şu işlemleri uygulayınız.
1 => npm install <br/>
2 => ng serve<br/>
3 => json-server --watch api/db.json<br/>
Sonrasında localhost:4200 ile siteye ulaşabilirsiniz.<br/>

## Anasayfa
=> Json serverimizden çektiğimiz kategorilerin "başlık, içerik ve iconu çekilerek" yazdırıldı.<br/>
=> Kategorilerden birine tıklarsanız o kategorideki postların olduğu sayfaya yönelinirsiniz.<br/>

## Kategori
=> Kategoriye ait postları kendi yaptığum custom pipe ile tarihe göre yakında uzağa şekilde sıraladım.<br/>
=> En üste o kategoriye ait bilgileri çekerek yazdırdım, Kategori başlığının yanında parantez içersinde de o kategoriye ait kaç tane post olduğunu bastırdım.<br/>
=> Postları talimatlardaki istenilen formatta bastırdım.<br/>
=> Postların içerikleri maksimum 280 karakter içeriyor, postun tamamına erişmek için başlık veya read me'ye tıklayabilirsiniz.<br/>

## Post Detay
=> Postları talimatlarda istenilen şekilde bastırdım<br/>

## Arama Sonuç
=> Headerda bulunan arama kutusundan arama yapıldığında, postun başlığında veya açıklamasında arama metninin geçtiği tüm postlar bu sayfada listeleniyor.<br/>
=> Bu postların tamamına erişmek için başlık veya read me'ye tıklayarak gidebilirsiniz.<br/>
=> Postları kendi yaptığım custom pipe ile tarihe göre yakında uzağa şekilde sıraladım.<br/>

# EK KENDİ YAPTIKLARIM

# Giriş Ekranı
=> Sağ yukarıdaki tuşa basarak login ekranına ulaşabilirsiniz<br/>
=> Giriş yaparken JSON serverinde üyeliğinizin kayıtlı olması gerekiyor, eğer üye değilseniz snack bar ile birlikte hata verir. Üyesiniz ama şifrenizi yanlış girdiniz şifre yanlış hatası verir.<br/>
=> Doğru formatta mail veya 8 karakterden az şifre girince kutucklar hata verir ve giriş yap butonu disable moddan çıkmaz.<br/>
=> Başarılı giriş yaparsanız anasayfaya yönlendirilirsiniz ve giriş bilgileriniz LocalStorage'e kaydedilir, böylece sitede başka sayfaya gittiğinizde veya yenilediğinizde tekrar giriş yapmak zorunda kalmazsınız.<br/>

# Kayıt Ol Ekranı
=> Login tuşunun solunda sign up diyerek kayıt ol ekranına ulaşabilirsiniz<br/>
=> Buradaki bilgileri girerken doğru formatlarda girmezseniz hata verir ve kayıt ol butonu disable moddan çıkmaz.<br/>
=> Kayıt olurken kulladığınız mail JSON serverinde kontrol edilir, eğer böyle bir mail yoksa kayıt olabilirsiniz yoksa hata alırsınız.<br/>
=> Başarılı giriş yapınca giriş yap sayfasına yönlendirilirsiniz<br/>

# Üyelik girişinden sonra
=> Üyelik giriş yaptığınızda yukarıdaki login butonu gider ve Logout ve My Post butonları gelir.<br/>
=> My post'a tıklarsanız sizin üyeliğinize ait postları LocalStorage sayesinde JSON serverinden çağırarak postlarım sayfasına basılır.<br/>
=> Buradan bütün postlarınızı görebilirsiniz ve bunları silebilirsiniz.<br/>
=> Buradan Yeni Post ekle ile dialog açılır ve başlık içerik ve kategorileri doldurduğunuzda JSON servere kaydolur, arama yaptığınızda veya postu attığınız kategoriye giderseniz postunuzun basıldığını görürsünüz.<br/>
=> Attığınız postun yazar ismini  LocalStorageda kayıtlı olduğunuz üyelikten alır, tarihi ise attığınız anki güncel saati kaydeder.<br/>
=> Logout ile çıkış yaparsanız, üyelik bilgilerinizi LocalStorage'dan siler ve Anasayfaya yönlendirir.<br/>

=> Bu siteyi yaparken Angular material ve boostrap gibi özellikleri kullanarak yaptım.<br/>
=> Aşağıdaki linkten özellikleri gösteren videoma ulaşabilirsiniz :<br/>
https://www.youtube.com/watch?v=vHHgBMAdYqE

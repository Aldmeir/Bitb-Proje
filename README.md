Tarayıcıda Tarayıcı (BitB) Saldırısı

Bu proje BitB saldırısının nasıl işlediğini anlamak ve öğrenmek amacıyla yapılmıştır. Kullanıcıdan talep edilen veriler Node.js sunucu tarafından local olarak kaydedilmektedir.

Sayfaya giriş yaptığımızda Microsoft ve Gmail kullanarak giriş yapabileceğimiz 2 adet seçenek görüyoruz.

![image](https://github.com/user-attachments/assets/97a5fb7a-869a-4a7c-b57c-ccfab88fbb83)

Microsoft ile Giriş veya Gmail ile Giriş butonlarından birine tıkladığımızda , ekranımıza iframe içerisinde açılmış bir tarayıcı görüntüsü gelicektir. Adres çubuğunda gerçek sitelerin URL adresleri bulunmasına rağmen görüntülenen ekran bizim oluşturmus olduğumuz html dosyasına ait.

Microsoft:


![image](https://github.com/user-attachments/assets/4aed8ea3-525b-4556-833d-fc25d9ea148e)


Google:


![image](https://github.com/user-attachments/assets/808b48c2-c812-47f5-8d88-aeba7ed5ba53)


İşlemleri Microsoft üzerinden devam ettiriyoruz.


![image](https://github.com/user-attachments/assets/4ceafca6-0eb0-4ddd-9f0f-bfeafe316bf3)


![image](https://github.com/user-attachments/assets/00e93b7d-4c52-45da-8aba-0be51e32f0e9)


![image](https://github.com/user-attachments/assets/a44d07ac-50ea-4cd4-b8aa-4cd8a0fc398e)


Kullanıcı Yes butonuna tıkladıktan sonra açılmış olan iframe sekmesi kapanıcak ve kullanıdan almış oluduğumuz veriler sunucumuza iletilerek bilgisayarımızda bir txt dosyasının içerisine kaydedilecektir.


![image](https://github.com/user-attachments/assets/9c8afa46-dbef-429c-9978-27504702603b)

Bu şekilde oluşturulmuş olan phishlet sitelerinde bitb kullanıp çeşitli websitelerine girişte kullanılan kullanıcı bilgilerini elde edebiliriz.



Report
1. Angular merupakan sebuah framework yang umumnya digunakan untuk membuat SPA (single page application) SPA disini maksudnya adalah pemrosesan dalam suatu website hanya terjadi di 1 laman tersebut, beberapa contoh implementasi SPA adalah facebook, google maps, google drive, twitter, dll. Angular merupakan framework berbasis 1 bahasa, yaitu typescript. Angular juga dapat dibuat web dinamis yang mana angular akan melakukan STTP request ke BE server. Code dari angular reusable karena angular berbasis komponen.

Modules: merupakan sebuah container yang menyimpan beberapa komponen yang akan digunakan lalu import di module.ts dan nantinya akan disusun menjadi satu applikasi yang disajikan didalam main.ts untuk melakukan bootstraping ke platform browser yang digunakan

Component : Merupakan suatu kumpulan code yang memiliki fungsi nya sendiri sendiri, komponen dapat berupa html (view), ts (controler dan model)

Module akan mengimpelementasikan / mengimport properti pada suatu komponen yang nantinya akan digunakan pada view (html)
QUIZ
1. dibagi menjadi beberapa komponen yaitu :
    - Sidebar
    - Header
    - Card
2. Komponen dapat dikelompokkan menjadi satu modul sesuai dengan fungsinya, contohnya pada bagian header terdapat komponen search, notifikasi, profile dapat di bagi menjadi satu modul header.
3. dia akan memiliki 3 module tambahan yaitu sidebar, header, dan card.
    component yang terdapat didalam modul dapat dilihat di nomor 2
    yang mana telah memisahkan tiap component pada module




// 画面の準備が出来たら

$(function() {







    // ddmenuの子要素のli にマウスが入ってきたときの命令
  
  
  
    $('.ddmenu li').mouseenter(function() {
        // フォーカスされたliの兄弟のulを探してハイドするor slideUp

        // $(this).siblings().find('ul').hide(); 
        $(this).siblings().find('ul').slideUp();
         
  
  
      // フォーカスされたliの 小要素をslideDownで見せる  
      $(this).children().slideDown();  
  
  
    });

    // 画面のどこかがクリックされたときの命令 $('html').click(function() を使う
    $('html').click(function(){
        $('.ddmenu ul').slideUp();

    });


    // ↑がクリックされたら画面のトップまでスクロールする命令
    $('.arrow').click(function(){
        $('html').animate({scrollTop: 0 }, 1000);


    })




    // スクロールされたら↑を表示する命令
    $(window).scroll(function(){
        // 画面のスクロールされた量(value)を取得する
        let scrollTop = $(document).scrollTop();
    


        // 矢印の表示、非表示を切り替える
        if ( scrollTop > 500){
            // 

            $('.arrow').fadeIn();


        } else{
            $('.arrow').fadeOut();
            $('.hello-scroll').fadeOut();

        }
        // "HELLO SCROLL"の表示
        if(scrollTop > 900){

            $('.hello-scroll').fadeIn('slow');
        }

        // セクション3のスライドイン

        if( scrollTop > 1600){

            $('.section3').animate({ left: 0}, 1000);

        } 
        
    

    });

    
    
 });

// スクロール戻したらピンクの画面が戻る命令
// seision3 show flag を保存する変数を作る
// show:セクション３が表示されている
// hide:セクション３がかくれている
// let section3ShowFlg = 'hide';
//  if (a > section3Top - 200) {
//     // ピンクのボックスを左から右に表示する
//     if (section3ShowFlg == 'hide') {
//       $('.section3').stop().animate({left: 0}, 1000)
//       section3ShowFlg = 'show';
//     }
//   } else {

//     if (section3ShowFlg == 'show') {
//       $('.section3').stop().animate({left: '-100%'}, 1000)
//       section3ShowFlg = 'hide';
//     }
//   }
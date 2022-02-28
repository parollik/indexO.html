$('#text').html('Вы пришли в магазин за шоколадкой по скидке, но к сожалению их не оказалось что будете делать?');

$('#first_ans').html('Развернутся и пойти домой');
$('#second_ans').html('Остаться и купить другую шоколадку');
$('#third_ans').hide();// свойсвто скрыть блок по id


 var position = 0;


  $( "#first_ans" ).click(function() {
    switch(position){
        case 0:// уйти

          $('#text').html('Вы развернулись и ушли. Конец игры');

          $('#first_ans').hide();
          $('#second_ans').hide();
          $('#third_ans').hide();

    position = 1;
    break;

        case 2:// сникерс

            $('#text').html('В магазине появилась новая начинка');

            $('#first_ans').html('Хочу обычный');
            $('#second_ans').html('Мммм что-то новенькое надо попробовать');
            $('#third_ans').hide();


      position = 3;
      break;

      case 3://обычный сникерс

          $('#text').html('Вы пошли на кассу дабы оплатить но по пути вы ещё захватили чипсики и у Вас не хватило денег, что же делать?');

          $('#first_ans').html('Убрать чипсики');
          $('#second_ans').html('Убрать сникерс');
          $('#third_ans').hide();


    position = 76;
    break;

    case 76://уб чипсики

        $('#text').html('Вы растороились из-за потери чипсиков, но ничего. Потом Вас встретили друзья и вы пошли дальше. Конец игры');

        $('#first_ans').hide();
        $('#second_ans').hide();
        $('#third_ans').hide();

  position = 76;
  break;

    case 4:// белая, конфетки

        $('#text').html('Рядом с белой шоколадкой лежали конфеты которые вы ооочень любите, возьмёте ли вы их? ');

        $('#first_ans').html('Естественно');
        $('#second_ans').html('Боюсь что не хватит денег, так что откажусь');
         $('#third_ans').hide();


  position = 7;
  break;



        case 5:// клубника

          $('#text').html('С клубничной вкуснее вы пошли на кассу оплатили и спокойно съели его. Конец');

          $('#first_ans').hide();
          $('#second_ans').hide();
          $('#third_ans').hide();


       position = 80;
       break;

       case 6:// новинка,хч

           $('#text').html('Вы пошли на кассу оплатили товары и с улыбкой пошли дальше. Конец игры ');


                     $('#first_ans').hide();
                     $('#second_ans').hide();
                     $('#third_ans').hide();


      position = 33;
      break;

      case 13:// шоколад, чай

          $('#text').html('Ммм как вкусно. Вы оплатили товары, встретили друзей и пошли дальше. Конец');

          $('#first_ans').hide();
          $('#second_ans').hide();
          $('#third_ans').hide();

     position = 77;
     break;

     case 7 :// белая,  согл

         $('#text').html('У Вас промекнула мысль что может не хватить денег, но на кассе все сомнения отпали. Вы забрали товары и пошли домой. Конец');

         $('#first_ans').hide();
         $('#second_ans').hide();
         $('#third_ans').hide();


     position = 7;
     break;

     case 9:// клубника банан жвачка

         $('#text').html('Вы взяли жвачку и продолжили стоять. Всё это длилось оочень долго и вы уже не знали оставаться на этой кассе или нет');

         $('#first_ans').html('Остаться на этой кассе');
         $('#second_ans').html('Перейти на другую');
          $('#third_ans').hide();

     position = 44;
     break;

     case 44:// остаться на кассе

         $('#text').html('Вы остались, но перед Вами стояла бабушка которая очень долго спорила на счёт своих товаров, к тому же говорила не по теме. Что делать влезть в разговор или стоять и тихо молчать?');

         $('#first_ans').html('Влезть в разговор');
         $('#second_ans').html('Промолчать');
          $('#third_ans').hide();

    position = 45;
    break;

    case 45:// остаться и влезтя

        $('#text').html('Вы влезли в разговор и бабка начала орать и на Вас. Вы взбесились и ушли домой без покупок. Конец');

        $('#first_ans').hide();
        $('#second_ans').hide();
        $('#third_ans').hide();

   position = 45;
   break;

   case 77:// лимонад, чипсики

       $('#text').html('Ммммм как вакусно. Затем Вас встретили друзья и вы пошли гулять. Конец');

               $('#first_ans').hide();
               $('#second_ans').hide();
               $('#third_ans').hide();
   position = 70;
   break;

  }
  });


   $( "#second_ans" ).click(function() {
     switch(position){
          case 0:// остаться

             $('#text').html('Раз уж вы решили остатся, стоит выбрать шоколадку');

             $('#first_ans').html('Сникерс');
             $('#second_ans').html('Миллениум');
             $('#third_ans').html('Я уже хочу батончик ФИТНЕС');

            $('#third_ans').show();
       position = 2;
       break;

       case 2:// милениум

           $('#text').html('Хорошо, вы подошли к стойке с шоколадкой какую хотите');

           $('#first_ans').html('Белую');
           $('#second_ans').html('Молочную');
$('#third_ans').hide();

     position = 4;
     break;

     case 4:// молочная, жвачка

         $('#text').html('Вы взяли шоколадку и пошли на кассу. Там была очередь не очень большая поэтому вы стали туда и увидели жвачку, вам таак её захотелось какой вкус предпоситаете?');

         $('#first_ans').html('С арбузом');
         $('#second_ans').html('С черникой');
         $('#third_ans').html('Клубника банан');
  $('#third_ans').show();

    position = 9;
    break;


     case 3:// новинка, напиток

         $('#text').html('К новинке прилагается напиток в подарок ');

         $('#first_ans').html('Холодный чай');
         $('#second_ans').html('Пепси');
         $('#third_ans').html('Миниральная вода');
  $('#third_ans').show();

    position = 6;
    break;


    case 5:// шоколадом

        $('#text').html('Сладковато, надо попить купить ');

        $('#first_ans').html('Чай');
        $('#second_ans').html('Лимонад');
        $('#third_ans').html('Сок');
  $('#third_ans').show();

   position = 13;
   break;

   case 7:// белая,отказ

       $('#text').html('Вы отказались и пошли домой. Конец ');


                        $('#first_ans').hide();
                        $('#second_ans').hide();
                        $('#third_ans').hide();
 position = 7;
 break;

   case 6:// новинка, пепси

       $('#text').html('Вкусненько, но притарно. Потом вас встретил друг и вы пошли гулять. Конец ');


                 $('#first_ans').hide();
                 $('#second_ans').hide();
                 $('#third_ans').hide();


  position = 32;
  break;

  case 13:// шоколад, лимонад

      $('#text').html('Он вам очень понравился, но чего-то не хватает');

      $('#first_ans').html('Чипсики');
      $('#second_ans').html('Печеньки');
      $('#third_ans').hide();
 position = 77;
 break;

 case 76://уб сн

     $('#text').html('Вы растороились из-за потери сникерса, но ничего. Потом Вас встретили друзья и вы пошли дальше. Конец игры');

     $('#first_ans').hide();
     $('#second_ans').hide();
     $('#third_ans').hide();

position = 76;

case 9:// клубника банан жвачка

    $('#text').html('Вы взяли жвачку и продолжили стоять. Всё это длилось оочень долго и вы уже не знали оставаться на этой кассе или нет');

    $('#first_ans').html('Остаться на этой кассе');
    $('#second_ans').html('Перейти на другую');
     $('#third_ans').hide();

position = 44;
break;

case 9:// перейти на другую кассу

    $('#text').html('Вы перешли. Но всеё же остался некий дискомфорт, что о Вас подумают другие. Поэтому вы оплатили товары и выскочили из магазина. Конец');

         $('#first_ans').hide();
         $('#second_ans').hide();
         $('#third_ans').hide();

position = 44;
break;

case 45:// остаться и Промолчать

    $('#text').html('Вы промолчали и спокойно достояли очередь, потому что не вытерпела тетка которая стояла за Вами, она наорала на всех и дело пошло очень быстро. Конец');

    $('#first_ans').hide();
    $('#second_ans').hide();
    $('#third_ans').hide();

position = 45;
break;

case 77://лимонад, печеньки

    $('#text').html('Какие они вкусные и касса быстро продвинулась. Вы довольны пошли домой');

        $('#first_ans').hide();
        $('#second_ans').hide();
        $('#third_ans').hide();
position = 79;
break;
   }
   });

   $( "#third_ans" ).click(function() {
     switch(position){
       case 2:// ФИТНЕС

         $('#text').html('Таак, вы видете только два вкуса');

         $('#first_ans').html('Клубника');
         $('#second_ans').html('Шоколад');
         $('#third_ans').hide();

      position = 5;
      break;

      case 6:// новинка, минералка

          $('#text').html('Не сладко, не кисло. Вы пошли домой отдыхать. КОНЕЦ');


                    $('#first_ans').hide();
                    $('#second_ans').hide();
                    $('#third_ans').hide();


     position = 33;
     break;

     case 13:// шоколад, сок

         $('#text').html('Очень вкувсно. КОНЕЦ');


                   $('#first_ans').hide();
                   $('#second_ans').hide();
                   $('#third_ans').hide();


    position = 33;
    break;

    case 9:// клубника банан жвачка

        $('#text').html('Вы взяли жвачку и продолжили стоять. Всё это длилось оочень долго и вы уже не знали оставаться на этой кассе или нет');

        $('#first_ans').html('Остаться на этой кассе');
        $('#second_ans').html('Перейти на другую');
         $('#third_ans').hide();

   position = 44;
   break;
     }
     });

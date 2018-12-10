
 
//This is a quick prototype but this got way more
//complicated than I anticipated form the start. 

$(function () {
  $('#horse_content').hide();
  $('#service_content').hide();
  $('#calendar_content').hide();
  $('#admin_content').hide();
  $('.service_calendar').show();
  showHorse();
  setCindy()


  // OPEN TABS
  $('#tab_horse').click(function (event) {
    showHorse();
  });
  $('#tab_service').click(function (event) {
    showService();
  });
  $('#tab_calendar').click(function (event) {
    showCalendar();
  });
  $('#tab_admin').click(function (event) {
    showAdmin();
  });
  $('#tab_abonnemang').click(function (event) {
    showAbonnemang();
  });

  /* ---------------------------------
              BOOKINGS
   --------------------------------- */
  $('#booking_button_hovslagare').click(function (event) {
    var event_start = $('#hov_start').val();
    var event_desciption = $('#hov_comment_field').val();
    var horse = $('#hov_horse').val();;
    var events = [
      {
        title: horse + ': Hovslagare',
        description: event_desciption,
        start: event_start,
        color: 'green'
      }
    ]
    $('.service_calendar').fullCalendar('addEventSource', events)
    $('.service_calendar').fullCalendar('gotoDate', event_start)
  });

  $('#vet_booking_button').click(function (event) {
    var event_start = $('#vet_start').val();
    var event_desciption = $('#vet_comment_field').val();
    var horse = $('#vet_horse').val();
    var events = [
      {
        title: horse + ': Veterinär',
        description: event_desciption,
        start: event_start,
        color: '#ce3535'
      }
    ]
    $('.service_calendar').fullCalendar('addEventSource', events)
    $('.service_calendar').fullCalendar('gotoDate', event_start)
  });

  $('#beh_booking_button').click(function (event) {
    var event_start = $('#beh_start').val();
    var event_desciption = $('#beh_comment_field').val();
    var horse = $('#beh_horse').val();
    var events = [
      {
        title: horse + ': Behandling',
        description: event_desciption,
        start: event_start,
        color: '#e200aa'
      }
    ]
    $('.service_calendar').fullCalendar('addEventSource', events)
    $('.service_calendar').fullCalendar('gotoDate', event_start)
  });

  $('#med_booking_button').click(function (event) {
    var event_start = $('#med_start').val();
    var event_desciption = $('#med_comment_field').val();
    var horse = $('#med_horse').val();
    var events = [
      {
        title: horse + ': Medecinsk Behandling',
        description: event_desciption,
        start: event_start,
        color: '#ff6302'
      }
    ]
    $('.service_calendar').fullCalendar('addEventSource', events)
    $('.service_calendar').fullCalendar('gotoDate', event_start)
  });

  

  /* ---------------------------------
              Show tabs
   --------------------------------- */
  function showCalendar() {
    $('#horse_content').hide();
    $('#service_content').hide();
    $('#calendar_content').show();
    $('.service_calendar').show();
    $('#abonnemang_content').hide();


    $('#tab_service').removeClass("active")
    $('#tab_horse').removeClass("active")
    $('#tab_calendar').addClass("active")
    $('#tab_abonnemang').removeClass("active")

    $('#admin_content').hide();
    $('#tab_admin').removeClass("active")

    clearCalendar();
    $('.service_calendar').fullCalendar('addEventSource', events_all)


  }

  function showHorse() {
    $('#horse_content').show();
    $('#service_content').hide();
    $('#calendar_content').hide();
    $('#abonnemang_content').hide();



    $('#tab_service').removeClass("active")
    $('#tab_horse').addClass("active")
    $('#tab_calendar').removeClass("active")
    $('#tab_abonnemang').removeClass("active")

    $('#admin_content').hide();
    $('#tab_admin').removeClass("active")
  }

  function showService() {
    $('#horse_content').hide();
    $('#service_content').show();
    $('#calendar_content').hide();
    $('#abonnemang_content').hide();


    $('#tab_service').addClass("active")
    $('#tab_horse').removeClass("active")
    $('#tab_calendar').removeClass("active")
    $('#tab_abonnemang').removeClass("active")

    $('#admin_content').hide();
    $('#tab_admin').removeClass("active")

  }

  function showAdmin(){
    $('#horse_content').hide();
    $('#service_content').hide();
    $('#calendar_content').hide();
    $('#admin_content').show();
    $('#abonnemang_content').hide();


    $('#tab_service').removeClass("active")
    $('#tab_horse').removeClass("active")
    $('#tab_calendar').removeClass("active")
    $('#tab_admin').addClass("active")
    $('#tab_abonnemang').removeClass("active")
  }

  function showAbonnemang(){
    $('#horse_content').hide();
    $('#service_content').hide();
    $('#calendar_content').hide();
    $('#admin_content').hide();
    $('#abonnemang_content').show();

    $('#tab_service').removeClass("active")
    $('#tab_horse').removeClass("active")
    $('#tab_calendar').removeClass("active")
    $('#tab_admin').removeClass("active")
    $('#tab_abonnemang').addClass("active")
  }
  


  /* ---------------------------------
             PLAN TRAINING
   --------------------------------- */
  $("#plan_button").click(function (event) {
    var type = $("#traning_type").val();
    var comment = $("#comment_field_training").val();
    var event_start = $("#training_start").val();
    var start_date = new Date(event_start);
    var duration = $("#training_duration").val();
    var enddate = start_date;
    enddate.setHours(enddate.getHours()+parseInt(duration) + 1)
    var events = [
      {
        title: "Cindy träning: " + type,
        description: comment,
        start: event_start+":00",
        end: enddate.toISOString(),
      }
    ]
    
    $("#training_table").append('<tr><td>'+event_start.split("T")[0] + ' ' +  event_start.split("T")[1] +'</td><td>'+type+'</td><td>'+comment+'</td><td></td></tr>');

    $('.service_calendar').fullCalendar('addEventSource', events)
    $('.service_calendar').fullCalendar('gotoDate', event_start)
  });


  $('#traning_type').change(function(){
    clearCalendar();
    $('#training_comment').empty();
    if($('#plan_show_all_checkbok').is(':checked')){
      $('.service_calendar').fullCalendar('addEventSource', events_all_training)
    }
    else{
      if($("#traning_type").val()=="Longering"){
        $('.service_calendar').fullCalendar('addEventSource', events_longering)
     }
     else if($("#traning_type").val()=="Tömkörning"){
       $('.service_calendar').fullCalendar('addEventSource', events_tomkorning)
     }
     else if($("#traning_type").val()=="Markarbete"){
       $('.service_calendar').fullCalendar('addEventSource', events_markarbete)
       $('#training_comment').append("Tänk på X och Y");
     }
     else if($("#traning_type").val()=="Hoppa"){
       $('.service_calendar').fullCalendar('addEventSource', events_hoppa)
       $('#training_comment').append("Hoppa högre nästa gång");
     }
    }

    if($("#traning_type").val()=="Markarbete"){
      $('#training_comment').empty();
      $('#training_comment').append("Tänk på X och Y");
    }
    else if($("#traning_type").val()=="Hoppa"){
      $('#training_comment').empty();
      $('#training_comment').append("Hoppa högre nästa gång");
    }
  });

  $('#plan_show_all_checkbok').change(function(){
    clearCalendar();
    if($('#plan_show_all_checkbok').is(':checked')){
      $('.service_calendar').fullCalendar('addEventSource', events_all_training)
    }
  })

  //horse changer
  $(".dropdown-menu li").click(function(){
    var horse = $(this).text()
    $(".btn:first-child").html('<h2>Häst: '+ horse+' <span class="caret"></span> </h2>');
    console.log(horse)
    if(horse === "Cindy"){
      setCindy();
    }
    else if(horse === "Clayson"){
      setClayson();
    }
    else if(horse === "Felo Z"){
      setFeloZ();
    }
    else if(horse === "Clara´s Heart"){
      setClarasHeart();
    }
    else{
      setNone();
    }
  });

  function setCindy(){
    //$('.alert_bar').empty();
    //$('.alert_bar').append(cindy_alert);
    $('.journal').empty();
    $('.journal').append(cindy_journal);
    $('.foder').empty();
    $('.foder').append(cindy_foderstat);
    $('.gear').empty();
    $('.gear').append(cindy_gear);
    $('.hov_hist').empty();
    $('.hov_hist').append(cindy_hov_hist);
    $('.vet_hist').empty();
    $('.vet_hist').append(cindy_vet_hist);
    $('.beh_hist').empty();
    $('.beh_hist').append(cindy_beh_hist);
    $('.med_hist').empty();
    $('.med_hist').append(cindy_med_hist);
    $('.train_hist').empty();
    $('.train_hist').append(cindy_train_hist);
    $('.doc').empty();
    $('.doc').append(cindy_doc);
    $('.reports').empty();
    $('.reports').append(cindy_rap);
  }

  function setClayson(){
   // $('.alert_bar').empty();
    //$('.alert_bar').append(clayson_alert);
    $('.journal').empty();
    $('.journal').append(clayson_journal);
    $('.foder').empty();
    $('.foder').append(clayson_foderstat);
    $('.gear').empty();
    $('.gear').append(clayson_gear);
    $('.hov_hist').empty();
    $('.hov_hist').append(clayson_hov_hist);
    $('.vet_hist').empty();
    $('.vet_hist').append(clayson_vet_hist);
    $('.beh_hist').empty();
    $('.beh_hist').append(clayson_beh_hist);
    $('.med_hist').empty();
    $('.med_hist').append(clayson_med_hist);
    $('.train_hist').empty();
    $('.train_hist').append(clayson_train_hist);
    $('.doc').empty();
    $('.doc').append(clayson_doc);
    $('.reports').empty();
    $('.reports').append(clayson_rap);
  }

  function setFeloZ(){
     $('.journal').empty();
     $('.journal').append(felo_z_journal);
     $('.foder').empty();
     $('.foder').append(felo_z_foderstat);
     $('.gear').empty();
     $('.gear').append(felo_z_gear);
     $('.hov_hist').empty();
     $('.hov_hist').append(felo_z_hov_hist);
     $('.vet_hist').empty();
     $('.vet_hist').append(felo_z_vet_hist);
     $('.beh_hist').empty();
     $('.beh_hist').append(felo_z_beh_hist);
     $('.med_hist').empty();
     $('.med_hist').append(felo_z_med_hist);
     $('.train_hist').empty();
     $('.train_hist').append(felo_z_train_hist);
     $('.doc').empty();
     $('.doc').append(felo_z_doc);
     $('.reports').empty();
     $('.reports').append(felo_z_rap);
   }

   function setClarasHeart(){
    $('.journal').empty();
    $('.journal').append(claras_heart_journal);
    $('.foder').empty();
    $('.foder').append(claras_heart_foderstat);
    $('.gear').empty();
    $('.gear').append(claras_heart_gear);
    $('.hov_hist').empty();
    $('.hov_hist').append(claras_heart_hov_hist);
    $('.vet_hist').empty();
    $('.vet_hist').append(claras_heart_vet_hist);
    $('.beh_hist').empty();
    $('.beh_hist').append(claras_heart_beh_hist);
    $('.med_hist').empty();
    $('.med_hist').append(claras_heart_med_hist);
    $('.train_hist').empty();
    $('.train_hist').append(claras_heart_train_hist);
    $('.doc').empty();
    $('.doc').append(claras_heart_doc);
    $('.reports').empty();
    $('.reports').append(claras_heart_rap);
  }
 

  function setNone(){
   // $('.alert_bar').empty();
    //$('.alert_bar').append(clayson_alert);
    $('.journal').empty();
    $('.foder').empty();
    $('.gear').empty();
    $('.hov_hist').empty();
    $('.vet_hist').empty();
    $('.beh_hist').empty();
    $('.med_hist').empty();
    $('.train_hist').empty();
    $('.doc').empty();
    $('.reports').empty();
  }


  /* ---------------------------------
             MODAL FUNCTIONS
   --------------------------------- */
  $(".open_modal1").click(function(){
      $("#modal1").show();
  })

  $('.close_modal_button').click(function(){
    $("#modal1").hide();
    $("#modal_with_alert").hide();
    $('#alert_modal').hide();
    $('#add_alert_modal').hide();
  });


  $('.open_modal_with_alert').click(function(){
    $('#modal_with_alert').show();
  });

  $('#show_alert').click(function(){
    $('#alert_modal').show();
  });

  $('#add_alert').click(function(){
    $('#add_alert_modal').show();
  });
  



  /* ---------------------------------
              CALENDAR FUNCTIONS
   --------------------------------- */
  $('.service_calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    eventMouseover: function (data, event, view) {
      tooltip = '<div class="tooltiptopicevent" style="width:auto;height:auto;background:#ccc;position:absolute;z-index:10001;padding:10px 10px 10px 10px ;  line-height: 200%;">' + ' ' + data.title + '</br>' + ' ' + ' ' + data.description + '</div>';
      $("body").append(tooltip);
      $(this).mouseover(function (e) {
        $(this).css('z-index', 10000);
        $('.tooltiptopicevent').fadeIn('500');
        $('.tooltiptopicevent').fadeTo('10', 1.9);
      }).mousemove(function (e) {
        $('.tooltiptopicevent').css('top', e.pageY + 10);
        $('.tooltiptopicevent').css('left', e.pageX + 20);
      });

    },
    eventMouseout: function (data, event, view) {
      $(this).css('z-index', 8);

      $('.tooltiptopicevent').remove();

    },
    dayClick: function () {
      tooltip.hide()
    },
    eventResizeStart: function () {
      tooltip.hide()
    },
    eventDragStart: function () {
      tooltip.hide()
    },
    viewDisplay: function () {
      tooltip.hide()
    },
    events: events_all
  });

  $('#calendar_sort').change(function(){
    clearCalendar();
    if($("#calendar_sort").val()=="Alla"){
       $('.service_calendar').fullCalendar('addEventSource', events_all)
    }
    else if($("#calendar_sort").val()=="Veterinär"){
      $('.service_calendar').fullCalendar('addEventSource', events_vet)
    }
    else if($("#calendar_sort").val()=="Hovslagare"){
      $('.service_calendar').fullCalendar('addEventSource', events_hov)
    }
    else if($("#calendar_sort").val()=="Behandling/Rehab"){
      $('.service_calendar').fullCalendar('addEventSource', events_beh)
    }
    else if($("#calendar_sort").val()=="Medicinsk Behandling"){
      $('.service_calendar').fullCalendar('addEventSource', events_med)
    }
    else if($("#calendar_sort").val()=="Träning"){
      $('.service_calendar').fullCalendar('addEventSource', events_all_training)
    }
  });


  $('.private_calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    eventMouseover: function (data, event, view) {
      tooltip = '<div class="tooltiptopicevent" style="width:auto;height:auto;background:#ccc;position:absolute;z-index:10001;padding:10px 10px 10px 10px ;  line-height: 200%;">' + ' ' + data.title + '</br>' + ' ' + ' ' + data.description + '</div>';
      $("body").append(tooltip);
      $(this).mouseover(function (e) {
        $(this).css('z-index', 10000);
        $('.tooltiptopicevent').fadeIn('500');
        $('.tooltiptopicevent').fadeTo('10', 1.9);
      }).mousemove(function (e) {
        $('.tooltiptopicevent').css('top', e.pageY + 10);
        $('.tooltiptopicevent').css('left', e.pageX + 20);
      });

    },
    eventMouseout: function (data, event, view) {
      $(this).css('z-index', 8);

      $('.tooltiptopicevent').remove();

    },
    dayClick: function () {
      tooltip.hide()
    },
    eventResizeStart: function () {
      tooltip.hide()
    },
    eventDragStart: function () {
      tooltip.hide()
    },
    viewDisplay: function () {
      tooltip.hide()
    },
    events: events_private
  });

  $("#private_sort").change(function(){
    $('.private_calendar').fullCalendar( 'removeEvents' );
    if($("#private_sort").val() === "Alla"){
      $('.private_calendar').fullCalendar('addEventSource', events_private);
    }
    else if($("#private_sort").val() === "Veterinär"){
      $('.private_calendar').fullCalendar('addEventSource', private_vet);
    }
    else if($("#private_sort").val() === "Hovslagare"){
      $('.private_calendar').fullCalendar('addEventSource', private_hov);

    }
    else if($("#private_sort").val() === "Träning"){
      $('.private_calendar').fullCalendar('addEventSource', private_training);
    }


  });

  function clearCalendar(){
    $('.service_calendar').fullCalendar( 'removeEvents' )
  }

});

function openTab(evt, tab_id) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tab_id).style.display = "block";
  evt.currentTarget.className += " active";
  
  if(tab_id === "Planera"){
    $('.service_calendar').fullCalendar( 'removeEvents' )
  }
  else if(tab_id === "Hovslagare"){
    $('.service_calendar').fullCalendar( 'removeEvents' )
    $('.service_calendar').fullCalendar('addEventSource', events_hov);
  }
  else if(tab_id === "Veterinär"){
    $('.service_calendar').fullCalendar( 'removeEvents' )
    $('.service_calendar').fullCalendar('addEventSource', events_vet);
  }
  else if(tab_id === "Behandling"){
    $('.service_calendar').fullCalendar( 'removeEvents' )
    $('.service_calendar').fullCalendar('addEventSource', events_beh);
  }
  else if(tab_id === "Medicinsk"){
    $('.service_calendar').fullCalendar( 'removeEvents' )
    $('.service_calendar').fullCalendar('addEventSource', events_med);
  }
  else{
    $('.service_calendar').fullCalendar( 'removeEvents' )
    $('.service_calendar').fullCalendar('addEventSource', events_all);
  }
}

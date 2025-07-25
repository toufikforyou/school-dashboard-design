$(document).ready(function(){
    // $("#upDate-form").on('submit',function(event){
    //   event.preventDefault();
    //   var dataUpdate = new FormData(this);
    //   $.ajax({
    //     url:'update.php',
    //     type:'POST',
    //     data:dataUpdate,
    //     contentType: false,
    //     processData: false,
    //     success:function(update){
    //       if (update=='Successfull') {
    //           alert('Data Update Successfull');
    //           location.reload();
    //       }else {
    //         alert(update);
    //       }
    //     }
    //   });
    // });
    
    $(window).scroll(function(){
    if($(window).scrollTop() > 650 ){
      $('#menu-fixed').addClass('fixed');
    }else{
      $('#menu-fixed').removeClass('fixed');
    }
    });

  });
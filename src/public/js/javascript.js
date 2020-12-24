
 
/** Top Nav
 **************************************************************** **/
vnTRUST.topNav = function () {
  
};


vnTRUST.vnTFooter = function (){
 
};




/** init Load
 **************************************************************** **/
vnTRUST.init = function () {
  var Xwidth = $(window).width();
  if (Xwidth < 1100) {
    $(".floating-left").hide();
    $(".floating-right").hide()
  }


  $('[data-toggle="tooltip"]').tooltip();

  $(".alert-autohide").delay(5000).slideUp(200, function () {
    $(this).alert('close');
  });

  $(".load_state").change(function() {
    var ext_display = $(this).attr("data-state");

    var mydata =  "do=option_state&city="+ $(this).val();
    $.ajax({
      type: "GET",
      url: ROOT+'load_ajax.php',
      data: mydata,
      success: function(html){
        $("#"+ext_display).html(html);
      }
    });
  });


  $(".load_ward").change(function() {
    var ext_display = $(this).attr("data-ward") ;

    var mydata =  "do=option_ward&state="+ $(this).val();
    $.ajax({
      type: "GET",
      url: ROOT+'load_ajax.php',
      data: mydata,
      success: function(html){
        $("#"+ext_display).html(html);
      }
    });
  });

 

  $(".menu-category .mc-title").click(function (e) {
    if(! $(this).parents(".menu-category").hasClass("active")){
      $(this).parents(".menu-category").addClass("active");
    }else{
      $(this).parents(".menu-category").removeClass("active");
    }
  });
  $(window).bind("click",function (e) {
    var $clicked = $(e.target);
    if(! $clicked.parents().hasClass("menu-category")){
      $(".menu-category").removeClass("active");
    }
  });


  
  vnTRUST.topNav();
  vnTRUST.vnTFooter();
  //vnTRUST.load_Statistics();
  vnTRUST.goTopStart();

  $(window).resize(function(){
  });

};

/* Init */
jQuery(window).ready(function () {
  vnTRUST.init();
  // Add cart
  $("html").on("click","a.addCart",function(){
    var _id = $(this).attr('data-id');
    var _type = ($(this).attr('data-type')) ? $(this).attr('data-type') : 'add';
    var _quantity = ( $('#quantity_'+_id).val() ) ? $('#quantity_'+_id).val() : 1;
    var mydata = 'id='+_id+'&type='+_type+'&quantity='+_quantity;
    $.ajax({
      url      : ROOT_PRO+'/ajax/addcart.html',
      type     : 'POST',
      dataType : 'json',
      data     : mydata,
      async    : true,
      beforeSend :function(){
        $('html').addClass("loading");
        $(this).parents("body").find('.overlay').addClass("active");
      },
      success:function(data){
        setTimeout(function(){
          if(data.success){
            if(_type=='add'){
              $('.cart-popup .popup-open').html(data.popup);
              $(".cart-popup span.sl").html(data.num_items);
              $(".cart-popup").addClass("active");
              $(".cart-popup").find(".vnt-bg-over").addClass("active");
            }else{
              location.href=data.linkCheckout;
            }
          }else{
            alert(data.mess);
          }
          $('html').removeClass("loading");
        },500);
      }
    });
  });
  // Delete item cart
  $("html").on("click",".removeItem",function(){
    var _id = $(this).attr('data-id');
    var mydata = 'id='+_id;
    $.ajax({
      url      : ROOT_PRO+'/ajax/remove.html',
      type     : 'POST',
      dataType : 'json',
      data     : mydata,
      async    : true,
      beforeSend :function(){
        $('.overlay').addClass("loading");
      },
      success:function(data){
        setTimeout(function(){
          $('.cart-popup .popup-open').html(data.popup);
          $(".cart-popup span.sl").html(data.num_items);
        },500);
      }
    });
  });
});

























vnTOrder = {
    doAddCart: function (id) {

        var quantity = 1;
        var ok_add = 1;
        var err = '';
        if ($("#quantity_" + id).length) {
            quantity = parseInt($("#quantity_" + id).val());
            //jAlert(quantity);
        }
        if (quantity == 0) quantity = 1;

        if (ok_add) {
            var mydata = 'id=' + id + '&quantity=' + quantity;
            $.ajax({
                async: true,
                dataType: 'json',
                url: ROOT_MOD + "/ajax/add_cart.html",
                type: 'POST',
                data: mydata,
                success: function (data) {
                    if (data.ok == 1) {
                        $(".menuFixed ul li a span.sl").html(data.num_item);
                        //vnTOrder.showAddCart(id);
                        jAlert(js_lang['buy_success'], js_lang['announce']);
                    } else {
                        jAlert(data.mess, js_lang['error']);
                    }
                }
            });
        } else {
            jAlert(err, js_lang['error']);
        }


        return false;
    },


    FlyItem: function (IDcontrolFly, left, height, opacity, maxwidth, quantity) {
        var IMG = $("#" + IDcontrolFly + " img");
        $("body #ImgSC").remove();
        var tt = IMG.attr("src");
        $("body").append("<img id=\"ImgSC\" style=\"position:fixed; z-index:999; filter:alpha(opacity=" + opacity * 100 + " ); opacity:" + opacity + "; max-width:" + maxwidth + "px ; left:" + left + "px; top:" + height + "px \"; src=\"" + IMG.attr("src") + "\"/>");
        left += 20;
        height = MheightI - ((left * MheightI) / MwidthS) + 20;
        opacity -= 0.02;
        maxwidth -= 5;
        if (left < MwidthS) {
            var timer = setTimeout("vnTOrder.FlyItem('" + IDcontrolFly + "'," + left + "," + height + "," + opacity + "," + maxwidth + "," + quantity + ")", 20);
        }
        else {
            $("body #ImgSC").remove();
        }
    },

    init: function () {


    },

};
$(document).ready(function(){
    $(".load_state").change(function() {
        var ext_display = $(this).attr("data-state");

        var mydata =  "do=option_state&city="+ $(this).val()+"&lang="+lang;

        $.ajax({
            type: "GET",
            url: ROOT+'load_ajax.php',
            data: mydata,
            success: function(html){
                $("#"+ext_display).html(html);
                $("#"+ext_display).val('').trigger("chosen:updated");
            }
        });
    });

    $(".btn_login").click(function() {
        var user = $("#login_user").val();
        var pass = $("#login_pass").val();
        var save = 0;
        var mydata =  "user="+user+'&pass='+pass+'&save='+save ;
        $.ajax({
            async: true,
            dataType: 'json',
            url: url_member_ajax+"/ajax_login.html",
            type: 'POST',
            data: mydata ,
            success: function (data) {
                if(data.ok) {
                    top.location.reload();
                }else{
                    jAlert(data.mess,js_lang['error']);
                }
            }
        })
    });

    $(".group-select-member input[type=radio]").on("change",function(){
        if($("#id2").prop("checked")){
            $(".group-select-content").show();
        }
        else{
            $(".group-select-content").hide();
        }
    })
});



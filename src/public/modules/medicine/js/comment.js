var vnTcomment = {

	/*  show_comment */
	show_comment:function(id,p) {
		$.ajax({
			type:"POST",
			url: ROOT_MOD+"/ajax/comment_list.html" ,
			data: "id="+id+'&p='+p,
			success: function(html){
				$("#ext_comment").html(html);
			}
		});
	},

	/*  post_comment */
	post_comment:function (id)
	{
		var ok_post = true ;
		var mess_err='';

		var mark = $("#hvote").val();
		/*if (mark == '' || mark==0 ) {
		 jAlert(js_lang['err_mark_empty'],js_lang['error'], function() {	f.hvote.focus(); 	});
		 ok_post = false ;
		 return false;
		 }*/

		if($("#hidden_email").attr('checked')){
			var h_email = 1;
		}else{
			var h_email = 0;
		}

		var name = $("#com_name").val()
		if (name == '') {
			jAlert(js_lang['err_name_empty'],js_lang['error'], function() {	$("#com_name").focus(); 	});
			ok_post = false ;
			return false;
		}

		var phone = $("#com_phone").val()
		if (phone == '') {
			jAlert(js_lang['err_phone_empty'],js_lang['error'], function() {	$("#com_phone").focus(); 	});
			ok_post = false ;
			return false;
		}

		var re =/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5})$/gi;
		email = $("#com_email").val();
		if (email == '') {
			jAlert(js_lang['err_email_empty'],js_lang['error'], function() {	$("#com_email").focus(); 	});
			ok_post = false ;
			return false;
		}

		if (email != '' && email.match(re)==null) {
			jAlert(js_lang['err_email_invalid'],js_lang['error'], function() {	$("#com_email").focus(); 	});
			ok_post = false ;
			return false;
		}


		var content= $("#com_content").val();
		if ( content.length <10) {
			jAlert(js_lang['err_conntent_minchar'],js_lang['error'], function() {	 $("#com_content").focus(); 	});
			ok_post = false ;
			return false;
		}


		if(ok_post)
		{
			//name = encodeURIComponent(name);
			//email = encodeURIComponent(email);
			//content = encodeURIComponent(content);

			var mydata =  "id="+id+"&name="+name+"&email="+email+"&phone="+phone+"&content=" + content+"&mark="+mark+"&h_email="+h_email+"&lang="+lang ;
			$.ajax({
				async: true,
				dataType: 'json',
				url:  ROOT_MOD+"/ajax/comment_post.html" ,
				type: 'POST',
				data: mydata ,
				success: function (data) {
					if(data.ok == 1)	{
						if(data.display==1){
							vnTcomment.show_comment (id,lang,0);
						}else{
							jAlert(js_lang['send_comment_success'],js_lang['announce']);
						}

						$("#security_code").val('')		;
						$("#com_content").val('')		;
						$(".formComment").find(".content-info").stop().slideUp(700);
					}	else {
						jAlert(data.mess,js_lang['error']);
					}
				}
			})
		}

		return false;
	},


	show_post_reply	:function (cid)
	{
		$(".form_reply").remove();
		var mydata =  "cid="+cid ;
		$.ajax({
			async: true,
			dataType: 'json',
			url:  ROOT_MOD+"/ajax/reply_show.html" ,
			type: 'POST',
			data: mydata ,
			success: function (data) {
				$("#com_reply"+cid).prepend(data.html) ;
			}
		});


		return false;
	},

	post_reply	:function (cid)
	{

		var ok_post = 1 ;
		var name = $("#reply_name"+cid).val() ;
		if (name == '') {
			jAlert(js_lang['err_name_empty'],js_lang['error'], function() {	$("#reply_name"+cid).focus(); 	});
			ok_post = 0 ;
			return false;
		}

		var content= $("#reply_content"+cid).val();
		if ( content.length <10) {
			jAlert(js_lang['err_conntent_minchar'],js_lang['error'], function() {	 $("#reply_content"+cid).focus(); 	});
			ok_post = 0 ;
			return false;
		}


		if(ok_post)
		{
			name = encodeURIComponent(name);
			content = encodeURIComponent(content);

			var mydata =  "cid="+cid+"&name="+name +"&content=" + content ;
			$.ajax({
				async: true,
				dataType: 'json',
				url:  ROOT_MOD+"/ajax/reply_post.html" ,
				type: 'POST',
				data: mydata ,
				success: function (data) {
					if(data.ok == 1)	{
						$("#form_reply_"+cid).remove();
						if(data.display==1){
							$("#com_reply"+cid).prepend(data.html);
						}else{
							jAlert(js_lang['send_reply_success'],js_lang['announce']);
						}

					}	else {
						jAlert(data.mess,js_lang['error']);
					}
				}
			})
		}

		return false;
	},

	init:function () {

		$("#com_content").focus(function(){
			$(this).css({height:"115px"});
			$(this).parents(".w_content").find(".content-info").stop().slideDown(700);
		});

		$("#btn-close").click(function(){
			$(this).parents(".w_content").find(".content-info").stop().slideUp(700);
		});
	}

};

 

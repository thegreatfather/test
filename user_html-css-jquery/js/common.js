$(function(){
	$('#one').click(function(){
		if($("input[name='user']").val()==''){
			alert('用户名不能为空！');
		}else if($("input[name='password']").val()==''){
			alert('密码不能为空！');
		}else if($("input[name='repeatPassword']").val()==''){
			alert('确认密码不能为空！');
		}else if($("input[name='email']").val()==''){
			alert('email不能为空！');
		}else if($("input[name='user']").val().length>20||$("input[name='user']").val().length<6){
			alert('用户名长度必须在6-20之间！');
		}else if($("input[name='password']").val().length>20||$("input[name='password']").val().length<6){
			alert('密码长度必须在6-20之间！');
		}else if($("input[name='repeatPassword']").val().length>20||$("input[name='repeatPassword']").val().length<6){
			alert('确认密码长度必须在6-20之间！');
		}else if($("input[name='password']").val()!=$("input[name='repeatPassword']").val()){
			alert('两次输入的密码必须相同！');
		}
		// alert($("input[type='radio']:checked").val());
/*		$('#width').each(function(){
			if($(this).val()==''){
				alert($(this[name]).val()+'不能为空');
				return false;
			}
		});*/
	});
	$('.main').height($(window).height());
	$('.middle-left').height($(window).height()-100);
	$('.middle-right').height($(window).height()-100);
	$(window).resize(function(){
		$('.main').height($(window).height());
		$('.middle-left').height($(window).height()-100);
		$('.middle-right').height($(window).height()-100);
	})
});
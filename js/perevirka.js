					$(function($) {
									var field = new Array("name", "email", "comment");
									var field2 = new Array("name", "file", "recipe");
							
									
									$("#call_send").submit(function() {
												var error=0;
													$("#call_send").find(":input").each(function() {
														for(var i=0;i<field.length;i++){
															if($(this).attr("name")==field[i]){ 
																if(!$(this).val()){
																	$(this).css('border', 'red 1px solid');
																	$(".page-form-bg span").css("visibility","visible");
																	error=1;						
																} else {
																	$(this).css('border', '1px solid #BBB');
																	$(".page-form-bg span").css("visibility","hidden");
																}
															}						
														}			
													})
										if (error==0) {
											
										var $form = $("#call_send"),
											s_name 	= $form.find( 'input[name="name"]' ).val(),
											s_email 	= $form.find( 'input[name="email"]' ).val(),
											s_comment 	= $form.find( 'input[name="comment"]' ).val(),
											url 		= $form.attr( 'action' );
											
											$('#result').fadeIn(100);
											$('#hide').hide(100);
											$('#txt').fadeIn(100);
											$('#result').html("Отправка...");
											$('#txt').html("В БЛИЖАЙШЕЕ ВРЕМЯ ВАША ЗАЯВКА БУДЕТ ОБРАБОТАНА.");
											$.post( url, { name: s_name, email: s_email, comment: s_comment} ).done(function(data) {
												$('#result').html(data);
											});
											
										return false;
										} else {
											var err_text = "";
											if(error==1)  err_text="Не все обязательные поля заполнены!";
											return false;
										}
								
									});
									
									$("#call_send2").submit(function() {
												var error=0;
													$("#call_send2").find(":input").each(function() {
														for(var i=0;i<field.length;i++){
															if($(this).attr("name")==field[i]){ 
																if(!$(this).val()){
																	$(this).css('border', 'red 1px solid');
																	$(".page-form-bg span").css("visibility","visible");
																	error=1;						
																} else {
																	$(this).css('border', '1px solid #BBB');
																	$(".page-form-bg span").css("visibility","hidden");
																}
															}						
														}			
													})
										if (error==0) {
											
										var $form = $("#call_send2"),
											s_name 	= $form.find( 'input[name="name"]' ).val(),
											s_comment 	= $form.find( 'input[name="comment"]' ).val(),
											url 		= $form.attr( 'action' );
											
											$('#result2').fadeIn(100);
											$('#hide2').hide(100);
											$('#txt2').fadeIn(100);
											$('#result2').html("Отправка...");
											$('#txt2').html("В БЛИЖАЙШЕЕ ВРЕМЯ ВАША ЗАЯВКА БУДЕТ ОБРАБОТАНА.");
											$.post( url, { name: s_name, comment: s_comment} ).done(function(data) {
												$('#result2').html(data);
											});
											
										return false;
										} else {
											var err_text = "";
											if(error==1)  err_text="Не все обязательные поля заполнены!";
											return false;
										}
								
									});
									
									$("#call_send3").submit(function() {
												var error=0;
													$("#call_send3").find(":input").each(function() {
														for(var i=0;i<field2.length;i++){
															if($(this).attr("name")==field2[i]){ 
																if(!$(this).val()){
																	$(this).css('border', 'red 1px solid');
																	$(".page-form-bg span").css("visibility","visible");
																	error=1;						
																} else {
																	$(this).css('border', '1px solid #BBB');
																	$(".page-form-bg span").css("visibility","hidden");
																}
															}						
														}			
													})
										if (error==0) {
											
										var $form = $("#call_send3"),
											s_name 	= $form.find( 'input[name="name"]' ).val(),
											s_file 	= $form.find( 'input[name="file"]' ).val(),
											s_recipe 	= $form.find( 'input[name="recipe"]' ).val(),
											url 		= $form.attr( 'action' );
											
											$('#result3').fadeIn(100);
											$('#hide3').hide(100);
											$('#txt3').fadeIn(100);
											$('#result3').html("Отправка...");
											$('#txt3').html("В БЛИЖАЙШЕЕ ВРЕМЯ ВАША ЗАЯВКА БУДЕТ ОБРАБОТАНА.");
											$.post( url, { name: s_name, file: s_file, recipe: s_recipe} ).done(function(data) {
												$('#result3').html(data);
											});
											
										return false;
										} else {
											var err_text = "";
											if(error==1)  err_text="Не все обязательные поля заполнены!";
											return false;
										}
								
									});
									
									
									
});
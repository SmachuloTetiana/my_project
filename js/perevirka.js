					$(function($) {
										var field = new Array("name", "email", "comment");
							
									
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
									
									
									
});
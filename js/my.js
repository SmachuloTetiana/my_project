
/***********Calendar**************/

	function Calendar2(id, year, month) {
	var Dlast = new Date(year,month+1,0).getDate(),
		D = new Date(year,month,Dlast),
		DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
		DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
		calendar = '<tr>',
		month=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];
	if (DNfirst != 0) {
	  for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
	}else{
	  for(var  i = 0; i < 6; i++) calendar += '<td>';
	}
	for(var  i = 1; i <= Dlast; i++) {
	  if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
		calendar += '<td class="today">' + i;
	  }else{
		calendar += '<td>' + i;
	  }
	  if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
		calendar += '<tr>';
	  }
	}
	for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
	document.querySelector('#'+id+' tbody').innerHTML = calendar;
	document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
	document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
	document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
	if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {
		document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
	}
	}
	Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
	document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
	  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
	}
	document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
	  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
	}

/***********ClickLick-AddComment**************/

$(document).ready(function() {
	$(".like-input").on("click", function(){
		var newCount = parseInt($(this).text(), 10) + 1; 
		$(this).text(newCount); 
	});
						
	$('.add-comment').on('click', function(){
	$('.add_comment').slideToggle();
	})
});	

/***********AddFile**************/

$(function(){var wrapper = $( ".file_add" ),inp = wrapper.find( "input" ),btn = wrapper.find( "button" ),lbl = wrapper.find( "div" );
	btn.focus(function(){wrapper.addClass( "focus" );}).blur(function(){wrapper.removeClass( "focus" );});
	btn.add( lbl ).click(function(){inp.click();});
	var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;
	inp.change(function(){var file_name;if( file_api && inp[ 0 ].files[ 0 ] )	file_name = inp[ 0 ].files[ 0 ].name;
	else file_name = inp.val().replace( "", '' );if( ! file_name.length )return;
	if( lbl.is( ":visible" ) ){lbl.text( file_name );btn.text( "Вибрано" );btn.css("text-decoration","none");}else btn.text( file_name );}).change();
});

$(document).ready(function() {
	$("#owl-demo-two").owlCarousel({
		itemsCustom : [
			[0, 3],
			[460, 3],
			[768, 3],
			[1024, 3]
		 ],
		autoPlay : true,
		stopOnHover : true,
		navigation : true,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],	
	}); 
});	

function modal() { $('#modal').arcticmodal();}


/***********AddFile**************/


  
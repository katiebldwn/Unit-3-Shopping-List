$('.submitButton').click(function() {
	var item=$('#shopping-list-entry').val();
	var itemHTML="<li><span class=shopping-item>"+item+"</span><div class=shopping-item-controls><button class=shopping-item-toggle><span class=button-label>check</span></button> <button class=shopping-item-delete><span class=button-label>delete</span></button></div></li>";
	$('ul.shopping-list').prepend(itemHTML);
});


//$('.shopping-item-delete').click(function() {
$('.shopping-item-delete').on('click', function() {
	$(this).closest('li').remove();
});


$('.shopping-item-toggle').on('click', function() {
	$(this).parent('div').parent('li').children('span').toggleClass('shopping-item__checked');
});









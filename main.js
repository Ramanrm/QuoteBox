function randomQuote() {
	$.getJSON("http://api.forismatic.com/api/1.0/?", "method=getQuote&format=jsonp&lang=en&jsonp=?", function(response) {
		$("#quote").html('<p class="lead">'+response.quoteText + "<br>" + '<span class="pull-right" style="margin-right: 3%"> &dash;'+response.quoteAuthor+"</span>");
	});
}
$(function(){
	randomQuote();
});
$("#getQuote").on("click",function(){
	randomQuote();
});

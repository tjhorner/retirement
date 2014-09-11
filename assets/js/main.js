var retirement = new Date('June 1, 2022 00:00:00');
var today = false;

function fixIntegers(integer){
	if (integer < 0)
		integer = 0;
	if (integer < 10)
		return "0" + integer;
	return "" + integer;
}

function formatMs(integer){
	if (integer < 0)
		integer = 0;
	if (integer < 100 && !(integer < 10))
		return "0" + integer;
	if (integer < 10)
		return "00" + integer;
	return "" + integer;
}

function updateDate(){
	var now = new Date();
	var difference = Math.floor((retirement - now) / 1000);
	var seconds = fixIntegers(difference % 60);
	difference = Math.floor(difference / 60);
	var minutes = fixIntegers(difference % 60);
	difference = Math.floor(difference / 60);
	var hours = fixIntegers(difference % 24);
	difference = Math.floor(difference / 24);
	var days = difference % 365;
	if(days <= -1){
		$('#ms, #days, #hours, #mins, #secs').text('00');
		$('h1').text('HAPPY RETIREMENT!');
		clearInterval(dateInterval);
		return;
	}
	$('#ms').text(formatMs(Math.abs((now.getMilliseconds() - retirement.getMilliseconds()) - 1000)));
	$('#days').text(days);
	$('#hours').text(hours);
	$('#mins').text(minutes);
	$('#secs').text(seconds);
	$('#years').text((2022 - (now.getYear() + 1900)) - 1);
}

updateDate();

var dateInterval = setInterval(function(){
	updateDate();
}, 1);
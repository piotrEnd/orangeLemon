$(document).ready(function () {

	$('.fa-user-secret').click(function () {
		$('.footer').slideToggle(750);
	});

	$('.fa-repeat').click(function () {
		$('.lemon_photo').toggleClass('spin');
	});

	$('.fa-bolt').click(function () {
		$('.orange_photo').toggleClass('bolt');
	});

	$('.fa-shower').hover(function () {
		$('.lemon_photo').addClass('radiate_lemon');
		$('.orange_photo').addClass('radiate_orange');
	}, function () {
		$('.lemon_photo').removeClass('radiate_lemon');
		$('.orange_photo').removeClass('radiate_orange');
	});

	$('.fa-scissors').hover(function () {
		$("#lemon_img").attr("src", "img/lemon_sliced.gif");
	}, function () {
		$("#lemon_img").attr("src", "img/lemon200.gif");
	});
	$('.fa-scissors').hover(function () {
		$("#orange_img").attr("src", "img/orange_sliced.gif");
	}, function () {
		$("#orange_img").attr("src", "img/orange250.png");
	});

});
                        
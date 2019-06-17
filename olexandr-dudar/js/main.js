	//Task 1
	$('section').each(function(){
		let $section = $(this);
		let n = $section.find('div').length;
		console.log('section #'+$section.attr('id')+' have DIVs: '+n);
	});


	//Task 2
	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 800);
		return false;
	});

	//Task 3
	$('.works-item ').on('click','a',function(event){
		$(this).parent().parent().parent().children('img').toggleClass('invisible');
		$(this).toggleClass('text-danger');
	});

	//Task 4
	$(document).ready(function(){
		$('.social-list').on('click','a',function(event){
			let numberKey = prompt('Please, enter secret number to visit a link');
			let data = $(this).attr('data-checknum');
			console.log(data);
			if(numberKey!==data){
				alert('Sorry, wrong secret number!');
				event.preventDefault();
			}
		});
	});

	//Task 5
	$('.about-item').on('click','h4',function(event){
		$(this).next('p').slideToggle(200);
	});
$(document).ready(function(){
	var button = $('#button');
	var modal = $('#modal');
	var close = $('#close');

button.on('click', function() {
		modal.addClass('modal_active');
	});

close.on('click', function() {
		modal.removeClass('modal_active');
	});
});

$(document).ready(function() {
	var top = $('#top');
	var scroll = $('#scroll');
	$(window).on('scroll', function() { // отслеживаем переменную scroll
		if($(window).scrollTop() > 100) $('.scroll').show(); // Сравниваем высоту прокрутки экрана с 100. Если больше 100, то показываем стрелочку
		else $('.scroll').hide(); // Если высота от начала страницы меньше 100, то прячем стрелочку
	});
	scroll.on('click', function() {
		scroll.scrollTop == 0;
	});
});

function slowScroll(id) { /* Произвольная функция */
	var offset = 0; /* Присваиваем переменной значение 0 */
	$('html').animate({ /* Анимируем весь документ */
		scrollTop: $(id).offset().top - offset /* Скрол вверх на разницу между текущим отступом и 0 */
	}, 1500); /* Время анимации = 1,5 секунды */
	return false; /* Иначе вернуть значение false  */
	};
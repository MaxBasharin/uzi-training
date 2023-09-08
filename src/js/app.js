/*
 !(i)
 Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 Или когда импортирован весь файл, например import "files/script.js";
 Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 Если мы хотим добавить модуль следует его расскоментировать
 */
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
} from './modules';
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = location.hostname === 'localhost';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
// menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
/* Раскомментировать для использования */
// togglePopupWindows()
// =======================================================================================================
const observer = lozad(); // lazy loads elements with default selector as ".lozad"
		observer.observe();
		// Initialize library
		lozad('.lozad', {
				load: function(el) {
						el.src = el.dataset.src;
						el.onload = function() {
								el.classList.add('fade')
						}
				}
		}).observe()

const swiper = new Swiper('.standart__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 500,
})
const swiperWide = new Swiper('.wide__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 500,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 5
    }

  }
})
// const swiperNews = new Swiper('.news__slider', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   speed: 500,
//   slidesPerView: 3,
//   spaceBetween: 30,
//   breakpoints: {
//     320: {
//       slidesPerView: 1
//     },
//     480: {
//       slidesPerView: 2
//     },
//     991: {
//       slidesPerView: 3
//     }

//   }
// })

const swiperReviews = new Swiper('.reviews__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 500,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    }

  }
})

const swiperEducation = new Swiper('.education__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 500,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})

const swiperGraduate = new Swiper(".graduate__slider", {
  speed: 500,
  breakpoints: {
    990: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: true,
      initialSlide: 1,
      loop: true,
      speed: 500,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    },

  }

});

$(function () {

  var formFixed = $("#form-fixed"),
    formFixedActive = $("#form-fixed").innerHeight() + 3000,
    scrollOffset = $(window).scrollTop();
  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= formFixedActive) {
      formFixed.addClass("fixed");
    } else {
      formFixed.removeClass("fixed");
    }
  }
});

let accordion = document.querySelector('.direction__accordion');
let items = accordion.querySelectorAll('.direction__accordion-item');
// let title = accordion.querySelectorAll('.accordion__toggle');

function toggleAccordion() {
  let thisItem = this;

  items.forEach(item => {
    if (thisItem == item) {
      // if this item is equal to the clicked item, open it.
      thisItem.classList.toggle('active');
      return;
    }
    // otherwise, remove the open class
    item.classList.remove('active');
  });

}

items.forEach(question => question.addEventListener('click', toggleAccordion));

$('.diplom__slider').slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<img class="diplom__slider-left" src="images/arrow-left.png" alt="">',
  nextArrow: '<img class="diplom__slider-right" src="images/arrow-right.png" alt="">',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    }
  ]
});



$(function () {
  $(".accordion > .accordion__item.active").children(".accordion__body").slideDown();
  $(".accordion > .accordion__item").click(function () {
    $(this).siblings(".accordion__item").removeClass("active").children(".accordion__body").slideUp();
    $(this).toggleClass("active").children(".accordion__body").slideToggle("ease-out");
  });
});

$(function () {
  var id = ' #academic-work-1, #academic-work-2, #academic-work-3, #academic-work-4';

  $('head').append('<style>body {overflow-x: hidden;}#allrecords {overflow: visible !important;}#t-header,#t-footer {position: relative;z-index: 2;} .t-rec {position: relative;z-index: 1;overflow-x: hidden;}' + id + ' { position: -webkit-sticky; position: sticky; top: 0; z-index: 0;}</style>');

  $(window).on('load resize', function () {
    $(id).each(function () {
      var topPosition = $(window).height() - $(this).height();
      topPosition += $(window).scrollTop();
      if (topPosition < 0) {
        $(this).css('top', topPosition)
      } else {
        $(this).css('top', 140)
        $('#academic-work-2').css('top', 210)
        $('#academic-work-3').css('top', 280)
      }
    });
  });
});



$(function () {
  $('.info__accordion .info__accordion-item:nth-child(1) .info__accordion-header');
  // $('.info__accordion .info__accordion-item:nth-child(1) .info__accordion-content').slideDown(); //добавляет класс active первому элементу
  $('.info__accordion-header').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).siblings('.info__accordion-content').slideUp();
      $(this).removeClass('active');
    }
    else {
      $('.info__accordion-content').slideUp();
      $('.info__accordion-header').removeClass('active');
      $(this).siblings('.info__accordion-content').slideToggle();
      $(this).toggleClass('active');
    }
  });
});

$(function () {
  $('.teacher__accordion .teacher__accordion-item:nth-child(1) .teacher__accordion-header');
  // $('.teacher__accordion .teacher__accordion-item:nth-child(1) .teacher__accordion-wrapper').slideDown(); //добавляет класс active первому элементу
  $('.teacher__accordion-heading').on('click', function () {

    if ($(this).hasClass('active')) {
      $(this).siblings('.teacher__accordion-wrapper__block').slideUp(500);
      $(this).removeClass('active');

    }
    else {
      $('.teacher__accordion-wrapper__block').slideUp();
      $('.teacher__accordion-heading').removeClass('active');
      $(this).siblings('.teacher__accordion-wrapper__block').slideToggle(500);
      $(this).toggleClass('active');
      setTimeout(function () {
        $('html, body').animate({
          scrollTop: $('.teacher__accordion-heading.active').offset().top - 50,
        });
      }, 500);
    }
  });

});

$(function () {
  $('.logistics__accordion .logistics__accordion-item:nth-child(1) .logistics__accordion-header');
  // $('.logistics__accordion .logistics__accordion-item:nth-child(1) .logistics__accordion-wrapper').slideDown(); //добавляет класс active первому элементу
  $('.logistics__accordion-heading').on('click', function () {

    if ($(this).hasClass('active')) {
      $(this).siblings('.logistics__accordion-wrapper__block').slideUp(500);
      $(this).removeClass('active');

    }
    else {
      $('.logistics__accordion-wrapper__block').slideUp();
      $('.logistics__accordion-heading').removeClass('active');
      $(this).siblings('.logistics__accordion-wrapper__block').slideToggle(500);
      $(this).toggleClass('active');
      setTimeout(function () {
        $('html, body').animate({
          scrollTop: $('.logistics__accordion-heading.active').offset().top - 50,
        });
      }, 500);
    }
  });

});

$(function () {
  $('[data-code]').mouseenter(function () {
    $('.district span').html($(this).attr('data-title'));
    $('.district').show();
  });
  $('[data-code]').mouseleave(function () {
    if (!$('.rf-map').hasClass("open")) {
      $('.district').hide();
    }
  });
  $('.rf-map').on('click', '[data-code], .district-links div', function () {
    let id = $(this).attr('data-code');
    if ($('#' + id).text() != '') {
      $('.district').show();
      $('.district span').html($(this).attr('data-title'));
      $('[data-code]').addClass('dropfill');
      $(this).addClass('mainfill');
      $('.rf-map').addClass('open');
      $('#' + id).fadeIn();
    }
  });
  $('.close-district').click(function () {
    $('.rf-map').removeClass('open');
    $('[data-code]').removeClass('dropfill');
    $('[data-code]').removeClass('mainfill');
    $('.district-text').hide();
    $('.district').hide();
  });
  $('[data-code]').each(function () {
    let id = $(this).attr('data-code');
    let title = $(this).attr('data-title');
    if ($('#' + id).text() != '') {
      $('.district-links').append('<div data-title="' + title + '" data-code="' + id + '">' + title + '</div>');
    }
  });
});

$('.icon-close').on('click', function () {
  $('.video-widget__container').remove()
})



$('.video-widget__container').on('click', function () {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $(this).children('.icon-close').addClass('active')
    $(this).children('.video-widget__video--one').css('display', 'none')
    $(this).append(` <video class="video-widget__video video-widget__video--two" loop="" autoplay="" playsinline="" preload="auto" controlslist="nodownload" disablepictureinpicture="">
      <source src="static/video/oksan.mp4" type="video/mp4">
      </video> `);
  }
  else {
    $(this).children('.icon-close').removeClass('active')
    $(this).children('.video-widget__video--one').css('display', '')
    $(this).children('.video-widget__video--two').remove()
  }
})


$.getJSON("static/trips.json", function(data) {

  data.trips.sort(function(a, b) {
    return new Date(a.start_date.replace(/\./g, '-')) - new Date(b.start_date.replace(/\./g, '-'));
  });

  var nearestDate = new Date(data.trips[0].start_date.replace(/\./g, '-'));

  setInterval(function() {
  
    var now = new Date();

    var diff = nearestDate - now;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    var formattedTime =
      (days < 10 ? "0" + days : days) +
      "д " +
      (hours < 10 ? "0" + hours : hours) +
      " : " +
      (minutes < 10 ? "0" + minutes : minutes) +
      " : " +
      (seconds < 10 ? "0" + seconds : seconds);

    $(".form-fixed__date-num").text(formattedTime);
  }, 1000); 
});

$.getJSON('static/trips.json', function(data) {
  var select = $('#tripSelect');
  
  $.each(data.trips, function(index, trip) {
    var startDate = formatDate(trip.start_date);
    var endDate = formatDate(trip.end_date);
    
    var option = $('<option>')
      .text(trip.city + ' (' + startDate + ' - ' + endDate + ')')
      .appendTo(select);
  });
  function formatDate(dateString) {
    var dateParts = dateString.split('.');
    var day = dateParts[2];
    var month = dateParts[1];
    var year = dateParts[0];
    
    if (day.length < 2) {
      day = '0' + day;
    }
    
    if (month.length < 2) {
      month = '0' + month;
    }
    
    return day + '.' + month + '.' + year;
    }
});



$.getJSON("static/trips.json", function(data) {
  var schedule = $(".schedule");
  var trips = data.trips;

  trips.forEach(function(trip) {
    var city = trip.city;
    var color = trip.color;
    var startDate = trip.start_date;
    var endDate = trip.end_date;
    var status = trip.status;
    var startDateFormatted = startDate.split(".").reverse().join(".");
    var endDateFormatted = endDate.split(".").reverse().join(".");

    var tripHtml = `<div class="schedule__inner">
                      <div class="schedule__inner-item__town">${city}<span class="schedule__inner-item__color schedule__inner-item__color--${color}"></span></div>
                      <div class="schedule__inner-item__block">
                        <div class="schedule__inner-item__date">${startDateFormatted} - ${endDateFormatted}</div>
                        <div class="schedule__inner-item__btn"><button class="btn btn--modal-json">${status}</button></div>
                      </div>
                    </div>`;

    schedule.append(tripHtml);
  });
});





$('.btn--modal').click(function () {
  $.fancybox.open({
    src: '#form--modal',
    type: 'inline'
  });
});
function openModalWithDelay() {
  setTimeout(function () {
    $('.btn--modal-json').click(function () {
      $.fancybox.open({
        src: '#form--modal',
        type: 'inline'
      });
    });
  }, 10000);
}

openModalWithDelay();

// 1. 스플리팅 호출
$(function () {
  Splitting();
});

// 2. 헤더 영역 스크롤 방향 이벤트
$(function () {
  var prevScrollTop = 0;
  document.addEventListener('scroll', function () {
    var nowScrollTop = $(window).scrollTop();

    if (nowScrollTop > prevScrollTop) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
    prevScrollTop = nowScrollTop;
  });
});

// 3. scrolla.js
$(function () {
  $('.animate').scrolla({
    mobile: true,
    once: false,
  });
});

//4. svg path 길이 구하기
$(function () {
  $('.svg-ani')
    .find('#svgAni01')
    .each(function (i, path) {
      var length = path.getTotalLength();
    });
});

// contents01

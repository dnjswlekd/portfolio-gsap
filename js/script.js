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
$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.con01',
        start: '0% 80%',
        end: '100% 100%',
        scrub: 1,
        markers: false,
      },
    })
    .to(
      '.wrap',
      { backgroundColor: '#fff', color: '#000', duration: 5, ease: 'none' },
      0
    )
    .to('.svg-ani path', { stroke: '#000', duration: 5, ease: 'none' }, 0)
    .to('.scroll', { opacity: 0, duration: 5, ease: 'none' }, 0)
    .fromTo(
      '.video-wrap video',
      {
        'clip-path': 'inset(60% 60% 60% 60% round 30%)',
      },
      {
        'clip-path': 'inset(0% 0% 0% 0% round 0%)',
        duration: 10,
        ease: 'none',
      },
      0
    );
});

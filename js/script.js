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

// con01
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
  // con02
  // title
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.con02',
        start: '0% 100%',
        end: '0% 20%',
        scrub: 1,
        markers: false,
      },
    })
    .fromTo(
      '.con02 .title p:nth-child(1)',
      { x: '-100%' },
      { x: '0%', duration: 5, ease: 'none' },
      0
    )
    .fromTo(
      '.con02 .title p:nth-child(2)',
      { x: '100%' },
      { x: '0%', duration: 5, ease: 'none' },
      0
    );

  // work list
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.work-list',
        start: '0% 100%',
        end: '0% 100%',
        scrub: 1,
        markers: false,
      },
    })
    .to(
      '.wrap',
      { background: '#000', color: '#fff', ease: 'none', duration: 5 },
      0
    )

    // title position fixed
    .to(
      '.con02 .title',
      {
        position: 'fixed',
        left: 0,
        top: 0,
        ease: 'none',
        duration: 5,
      },
      0
    )

    // work list position
    .fromTo(
      '.work-list',
      { margin: '0 auto' },
      {
        margin: '100vh auto 0 ',
        position: 'relative',
        zIndex: '10',
        duration: 1,
      },
      0
    );

  // work list final
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.work-list',
        start: '100% 50%',
        end: '100% 0%',
        scrub: 1,
        markers: false,
      },
    })
    .to(
      '.con02 .title p:nth-child(1)',
      { x: '-100%', duration: 5, ease: 'none' },
      0
    )
    .to(
      '.con02 .title p:nth-child(2)',
      { x: '100%', duration: 5, ease: 'none' },
      0
    );
});

$(function () {
  $('.con03 .list').simplyScroll({
    speed: 4,
    pauseOnHover: false,
    pauseOnTouch: false,
  });
});

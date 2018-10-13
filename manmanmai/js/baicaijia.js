$(function () {
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
    dataType: 'json',
    success: function (info) {
      console.log(info);
      $('.bcj_nav ul').html(template('tmp1', info));
      var ulWidth = 0;
      $('.bcj_nav li').each(function (i, v) {
        ulWidth += $(v).width();
      })
      $('.bcj_nav ul').width(ulWidth);
      new IScroll('.bcj_products .wrap', {
        scrollX: true,
        scrollY: false
      })
    }
  });
  a();

  function a(titleid) {
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
      data: {
        titleid: titleid || 0
      },
      dataType: 'json',
      success: function (info) {
        console.log(info);
        $('.bcj_content ul').html(template('tmp2', info));
      }
    })
  }

  $('.bcj_nav ul').on('click', 'a', function () {
    $('.bcj_nav a').each(function (i,v) {
      if ($(v).hasClass('active')) {
        $(v).removeClass('active');
      }
    });
    $(this).addClass('active');
    a($(this).data('titleid'));
  })
})
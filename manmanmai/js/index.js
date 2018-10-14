$(function () {
  function nav_render() {
    //导航渲染
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getindexmenu',
      dataType: 'json',
      success: function (info) {
        console.log(info);
        $('.mmm_nav ul').html(template('tmp1', info));
      }
    })
  };

  function products_render() {
    //  商品列表渲染
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getmoneyctrl',
      dataType: 'json',
      success: function (info) {
        console.log(info);
        $('.products ul').html(template('tmp2', info));
      }
    })
  }

  nav_render();
  products_render();
  $('.mmm_nav ul').on('click', 'li:nth-child(8) a', function () {
    $('.mmm_nav li:not(:nth-child(-n+8))').toggle();
  })

})
$(function () {

  function moneyctrl_render(pageid) {
    $.ajax({
      type: 'get',
      url: '  http://127.0.0.1:9090/api/getmoneyctrl',
      data: {
        pageid: pageid || 0
      },
      dataType: 'json',
      success: function (info) {
        console.log(info);
        $('.products ul').html(template('tmp',info));
      }
    })
  }

  moneyctrl_render();

  $('.products ul').on('click','a',function () {
    location.href = 'moneyproduct.html?productId=' + $(this).data('productid');
  })
})
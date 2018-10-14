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
        pageSize = Math.ceil(info.totalCount / info.pagesize);
        $('.products ul').html(template('tmp',info));
        $('.pageSize').text('共'+ pageSize +'页');
      }
    })
  }

  moneyctrl_render();

  $('.products ul').on('click','a',function () {
    location.href = 'moneyproduct.html?productId=' + $(this).data('productid');
  })

  $('.mmm_page .page_x').on('click',function () {
    var page = parseInt($('input[type="number"]').val());
    console.log(page);
    moneyctrl_render(page - 1 + 1);
    $('input[type="number"]').val(page+1);
    if ($('input[type="number"]').val() > pageSize) {
      moneyctrl_render();
      alert('没了');
      $('input[type="number"]').val('1');
    }
  })

  $('.mmm_page .page_s').on('click',function () {
    var page = parseInt($('input[type="number"]').val());
    if (page == 1) {
      moneyctrl_render();
      alert('没了');
    } else {
      moneyctrl_render(page - 1 - 1);
      $('input[type="number"]').val(page-1);
    }
  })
})

$(function () {
  function category_render() {
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getcategorytitle',
      dataType: 'json',
      success: function (info) {
        console.log(info);
        $('.category_list').html(template('tmp1', info));
      }
    })
  }

  category_render();

  $('.category_list').on('click', '.title', function () {
    $(this).siblings('.content').slideToggle();
    $(this).parent().siblings().find('.content').slideUp();
    $.ajax({
      type: 'get',
      url:'http://127.0.0.1:9090/api/getcategory',
      data:{
        titleid:$(this).data('id'),
      },
      dataType: 'json',
      success:function (info) {
        console.log(info);
        $('.content ul').html(template('tmp2',info));
      }
    })
  })
})
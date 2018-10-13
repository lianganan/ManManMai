$(function () {

  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getinlanddiscount',
    dataType:'json',
    success:function (info) {
      console.log(info);
      $('.inland').html(template('tmp',info));
    }
  })

  $('.inland').on('click','a',function () {
    console.log(111);
    location.href = 'discount.html?productid=' + $(this).data('productid');
  })
})
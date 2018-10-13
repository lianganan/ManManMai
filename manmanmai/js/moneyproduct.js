$(function () {
  var productId = location.search.split('?')[1].split('=')[1];
  console.log(productId);
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
    data:{
      productid:productId
    },
    dataType:'json',
    success:function (info) {
      console.log(info);
      $('.mmm_main').html(template('tmp',info));
    }
  })
})
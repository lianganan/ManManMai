$(function () {
  var productArr = decodeURI(location.search).split('?')[1].split('&');
  var obj = {};
  productArr.forEach(function (v, i) {
    obj[v.split('=')[0]] = v.split('=')[1];
  });
  $('.category_san').text(obj.brandName + '>');
  function productList_render() {
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getproduct',
      data:{
        productid:obj.productId
      },
      dataType:'json',
      success:function (info) {
        console.log(info);
        $('.bj_header').html(template('tmp1',info));
      }
    });
    $.ajax({
      type: 'get',
      url:'http://127.0.0.1:9090/api/getproductcom',
      data:{
        productid:obj.productId
      },
      dataType: 'json',
      success:function (info) {
        console.log(info);
        $('.bj_estimate').html(template('tmp2',info));
      }
    })
  };
  productList_render();
})
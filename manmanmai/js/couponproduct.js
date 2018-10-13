$(function () {
  var couponproductArr = decodeURI(location.search).split('?')[1].split('&');
  var obj = {};
  couponproductArr.forEach(function (v, i) {
    obj[v.split('=')[0]] = v.split('=')[1];
  });
  console.log(obj);
  $('title').text(obj.coupontitle + '优惠券');
  $('.moneyctrl_tit').text(obj.coupontitle + '优惠券');

  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getcouponproduct',
    data:{
      couponid:obj.couponid
    },
    dataType:'json',
    success:function (info) {
      console.log(info);
    }
  })


})
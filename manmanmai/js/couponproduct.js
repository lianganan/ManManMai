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
      $('.cpp_list').html(template('tmp',info));
    }
  })
  $('.cpp_list').on('click','a',function () {
    $('.motaikuang').show();
  })
  $(document).on('keyup',function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 27){
    $('.motaikuang').hide();
    }
  })
  //swiper
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })

})
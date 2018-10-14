$(function () {
  var shopid;
  var areaid;
function dp() {
  //  店铺
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getgsshop',
    dataType:'json',
    success:function (info) {
      console.log(info);
      $('.gsp_xl').html(template('tmp',info));
    }
  })
}

  function dq() {
  //  地区
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getgsshoparea',
      dataType:'json',
      success:function (info) {
        console.log(info);
        $('.gsp_xl').html(template('tmp1',info));
      }
    })
  }

  $('.dp').on('click',function () {
    dp();
    $('.gsp_xl.shop').toggle();
    $('.gsp_xl.area').hide();
  })
  $('.dq').on('click',function () {
    dq();
    $('.gsp_xl.area').toggle();
    $('.gsp_xl.shop').hide();
  })



  $('.gsp_xl.shop').on('click','li',function () {
    // 商品
    $('.dp').text($(this).text() + ' ▼');
    shopid = $(this).data('shopid');
    if (areaid) {
      gspList(shopid,areaid);
    } else {
      gspList(shopid,0);
    }
  })
  $('.gsp_xl.area').on('click','li',function () {
    // 地区
    $('.dq').text($(this).text() + ' ▼');
    areaid = $(this).data('areaid');
    if (shopid) {
      gspList(shopid,areaid);
    } else {
      gspList(0,areaid);
    }
  })

  function gspList(shopid,areaid) {
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getgsproduct',
      data:{
        shopid:shopid,
        areaid:areaid
      },
      dataType:'json',
      success:function (info) {
        console.log(info);
      }
    })
  }
  //默认渲染
  gspList(0,0);


})
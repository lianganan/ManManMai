$(function () {
  var brandId = location.search.split('?')[1].split('=')[1];
  console.log(brandId);
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getbrandproductlist',
    data:{
      brandtitleid:brandId
    },
    success:function (info) {
      console.log(info);
    }
  })

  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getproductcom',
    data:{
      productid:1
    },
    success:function (info) {
      console.log(info);
    }
  })

})
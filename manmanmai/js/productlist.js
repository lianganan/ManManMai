$(function () {
  var categoryArr = decodeURI(location.search).split('?')[1].split('&');
  var obj = {};
  categoryArr.forEach(function (v, i) {
    obj[v.split('=')[0]] = v.split('=')[1];
  });

  console.log(obj);
  console.log(categoryArr);

  $('.category_san').text(obj.category + '>');

  function category_render(pageid) {
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getproductlist',
      data: {
        categoryid: obj.categoryId,
        pageid: pageid || 1
      },
      dataType: 'json',
      success: function (info) {
        console.log(info);
        $('.products ul').html(template('tmp', info));
      }
    })
  };
  category_render();

  $('.products ul').on('click','.product_list',function () {
    console.log($(this).data('productid'));
    location.href = "details.html?productId=" + $(this).data('productid') + "&brandName=" + $(this).data('brandname');
  })

})
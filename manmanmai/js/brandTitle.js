$(function () {
  function brandTitle_render() {
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getbrandtitle',
      dataType: 'json',
      success: function (info) {
        console.log(info);
        $('.category_list').html(template('tmp1', info));
      }
    })
  }

  brandTitle_render();



})



$(function() {
  const frame = $('.frame');

  var sly = new Sly(frame, {
    horizontal: true, 
    slidee: frame.find('.slidee'),
    scrollBy: 1
  },{
    load: function() {
      console.log('load')
    }}).init();
});

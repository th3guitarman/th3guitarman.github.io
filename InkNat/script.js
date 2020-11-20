var picture_srcs = ['src/daisies.png', 'src/bouquet.png', 'src/gazanie.png', 'src/peach_flowers.png', 'src/daffodil.png'];
var pos1 = 0, pos2 = 2, pos3 = 4;


//picture flip scripts
$(document).ready(function(){
  function photoFlip() {
    if (++pos1 >= picture_srcs.length) {
      pos1 = 0;
    }
    if (++pos2 >= picture_srcs.length) {
      pos2 = 0;
    }
    if (++pos3 >= picture_srcs.length) {
      pos3 = 0;
    }

    $('#imgs1').attr('src', picture_srcs[pos1]);
    $('#imgs2').attr('src', picture_srcs[pos2]);
    $('#imgs3').attr('src', picture_srcs[pos3]);
  }

  setInterval(photoFlip, 1500);

});

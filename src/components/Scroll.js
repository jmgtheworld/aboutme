import $ from 'jquery'; 

export default function Scroll() {
  $(document).ready( function(){       
    const scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 210) {
          $('.language').css('color', 'white');
        } else {
          $('.language').css('color', 'red');
        }
    });
  });
}
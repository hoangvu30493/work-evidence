$(document).ready(function() {


    // TOGGLE SLIDE UPDATE_EVENT
    $("#update_click").click(function() {
        $("#slidedown1").toggle(400);
    });
    $("#event_click").click(function() {
        $("#slidedown2").toggle(400);
    });


    // SCROLL SCREEN
    $("#to_about").click(function() {
        $('html,body').animate({
                scrollTop: $("#scroll_about").offset().top
            },
            'slow');
    });
    $("#to_books").click(function() {
        $('html,body').animate({
                scrollTop: $("#scroll_books").offset().top
            },
            'slow');
    });
    $("#to_contact").click(function() {
        $('html,body').animate({
                scrollTop: $("#scroll_contact").offset().top
            },
            'slow');
    });

});


// function RemoveLastDirectoryPartOf(the_url) {
//     var the_arr = the_url.split('#');
//     the_arr.pop();
//     return (the_arr.join('#'));
// }

// function clearSuffix() {
//     window.location.href = 'file:///C:/Users/User/Desktop/tash%20aw/index.html#scroll_books';

// }
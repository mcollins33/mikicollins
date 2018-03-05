$(document).ready(function() {

    setTimeout(function() {
        for (var i = 13; i < 14; i++) {

            var j = i + 4;

            $(".interests1").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + i + ".jpg'/></div>").hide().fadeIn(1000));
            $(".interests2").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + j + ".jpg'/></div>").hide().fadeIn(1000));
        }
    }, 500);

    setTimeout(function() {
        for (var i = 14; i < 15; i++) {

            var j = i + 4;

            $(".interests1").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + i + ".jpg'/></div>").hide().fadeIn(1500));
            $(".interests2").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + j + ".jpg'/></div>").hide().fadeIn(1500));


        }
    }, 1000);

    setTimeout(function() {
        for (var i = 15; i < 16; i++) {

            var j = i + 4;

            $(".interests1").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + i + ".jpg'/></div>").hide().fadeIn(2000));
            $(".interests2").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + j + ".jpg'/></div>").hide().fadeIn(2000));


        }
    }, 1500);

    setTimeout(function() {
        for (var i = 16; i < 17; i++) {

            var j = i + 4;

            $(".interests1").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + i + ".JPG'/></div>").hide().fadeIn(2500));
            $(".interests2").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + j + ".jpg'/></div>").hide().fadeIn(2500));


        }
    }, 2000);

    setTimeout(function() {
        $(".buttons").append($("<a class='waves-effect waves-light btn-large links' href='./index.html'>Home</a>").hide().fadeIn(500));
        $(".buttons").append($("<a href='./portfolio.html'><button type='button' class='waves-effect waves-light btn-large links' id='portfolio'>Portfolio</button></a>").hide().fadeIn(500));
        $(".buttons").append($("<a href='./photos.html'><button type='button' class='waves-effect waves-light btn-large links' id='photos'>Photography</button></a>").hide().fadeIn(500));
        $(".buttons").append($("<a class='btn-floating btn-large links' href='https://www.linkedin.com/in/miki-collins/''><img class='icon' src='./images/linkedin.png' alt='Linked In'></a>").hide().fadeIn(500));
        $(".buttons").append($("<a class='btn-floating btn-large links' href='https://github.com/mcollins33'><img class='icon' src='./images/github.png' alt='GitHub'></a>").hide().fadeIn(500));
    }, 1500);

});
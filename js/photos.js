$(document).ready(function() {

    setTimeout(function() {
        for (var i = 1; i < 2; i++) {

            var j = i + 4;
            var k = i + 8;
            $(".interests1").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + i + ".jpg'/></div>").hide().fadeIn(1000));
            $(".interests2").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + j + ".jpg'/></div>").hide().fadeIn(1000));
            $(".interests3").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + k + ".jpg'/></div>").hide().fadeIn(1000));
        }
    }, 500);

    setTimeout(function() {
        for (var i = 2; i < 3; i++) {

            var j = i + 4;
            var k = i + 8;
            $(".interests1").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + i + ".jpg'/></div>").hide().fadeIn(1500));
            $(".interests2").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + j + ".jpg'/></div>").hide().fadeIn(1500));
            $(".interests3").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + k + ".jpg'/></div>").hide().fadeIn(1500));
        }
    }, 1000);

    setTimeout(function() {
        for (var i = 3; i < 4; i++) {

            var j = i + 4;
            var k = i + 8;
            $(".interests1").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + i + ".jpg'/></div>").hide().fadeIn(2000));
            $(".interests2").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + j + ".jpg'/></div>").hide().fadeIn(2000));
            $(".interests3").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + k + ".jpg'/></div>").hide().fadeIn(2000));

        }
    }, 1500);

    setTimeout(function() {
        for (var i = 4; i < 5; i++) {

            var j = i + 4;
            var k = i + 8;
            $(".interests1").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + i + ".JPG'/></div>").hide().fadeIn(2500));
            $(".interests2").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + j + ".jpg'/></div>").hide().fadeIn(2500));
            $(".interests3").append($("<div class='col sm12 m3'><img class='interests' src='./images/" + k + ".jpg'/></div>").hide().fadeIn(2500));

        }
    }, 2000);

    setTimeout(function() {
        $(".buttons").append($("<a class='waves-effect waves-light btn-large links' href='./index.html'>Home</a>").hide().fadeIn(500));
        $(".buttons").append($("<a href='./portfolio.html'><button type='button' class='waves-effect waves-light btn-large links' id='portfolio'>Portfolio</button></a>").hide().fadeIn(500));
        $(".buttons").append($("<a href='./hobbies.html'><button type='button' class='waves-effect waves-light btn-large links' id='hobbies'>Hobbies</button></a>").hide().fadeIn(500));
        $(".buttons").append($("<a class='btn-floating btn-large links' href='https://www.linkedin.com/in/miki-collins/''><img class='icon' src='./images/linkedin.png' alt='Linked In'></a>").hide().fadeIn(500));
        $(".buttons").append($("<a class='btn-floating btn-large links' href='https://github.com/mcollins33'><img class='icon' src='./images/github.png' alt='GitHub'></a>").hide().fadeIn(500));
    }, 1500);

});


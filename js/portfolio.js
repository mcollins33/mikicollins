$(document).ready(function() {

    setTimeout(function() {
        for (var i = 13; i < 14; i++) {

            var j = i + 4;

            $(".interests1").append($("<div class='col sm12 m6'><h3 class='center'>Happy Choice</h3><a href='https://happy-choice.herokuapp.com/'><img class='interests' src='./images/happy.jpg'/></a><div id='happytext'></div></div>").hide().fadeIn(1000));
            $("#happytext").append($("<div>For groups choosing between numerous options, Happy Choice puts the power of an advanced decision making algorithm in the palm of your hand. Happy Choice finds the best option that maximizes total group satisfaction. This was a group project.  I served as Project Manager, utilizing Trello for project management.  I was also responsible for creating routes, developing the database, and assisting with troubleshooting on front and back ends.  This app utilizes the following technologies: Javascript, React, Materialize, HTML, CSS, Express, MongoDB, Mongoose, Axios, Heroku, and Node Mailer.</div>").hide().fadeIn(1000));
        }
    }, 500);

    setTimeout(function() {
        for (var i = 14; i < 15; i++) {

            var j = i + 4;

            $(".interests2").append($("<div class='col sm12 m6'><h3 class='center'>Friday Night Roulette</h3><a href='https://stevensammon.github.io/friday-night/'><img class='interests' src='./images/friday.jpg'/></a><div id='fridaytext'></div></div>").hide().fadeIn(1500));
            $("#fridaytext").append($("<div>This application provides users with a unique and entertaining way to plan their Friday night. Through a series of questions, this app will elicit the information that correlates to the search parameters in the EatStreet and Edamam APIs. The app provides the user with either a restaurant or recipe recommendation and an activity. This was a group project. My role was front end developer. This application utilizes the following: HTML, CSS, Bootstrap, AJAX, Eatstreet & Edamam APIs, JQuery, and Javascript.</div>").hide().fadeIn(1000));
        }
    }, 1000);

    setTimeout(function() {
        for (var i = 15; i < 16; i++) {

            var j = i + 4;

            $(".interests1").append($("<div class='col sm12 m6'><h3 class='center'>Animal Hangman</h3><a href='https://mcollins33.github.io/Hangman-Game/'><img class='interests' src='./images/hangman.jpg'/></a><div id='hangmantext'></div></div>").hide().fadeIn(2000));
            $("#hangmantext").append($("<div>An animal themed hangman game geared towards children.  This was an individual project.  This app was produced using HTML, CSS, JavaScript, JQuery, and GitHub.</div>").hide().fadeIn(1000));
        }
    }, 1500);

    setTimeout(function() {
        for (var i = 16; i < 17; i++) {

            var j = i + 4;

            $(".interests2").append($("<div class='col sm12 m6'><h3 class='center'>VolunteerNOW</h3><a href='https://volunteer-now-app.herokuapp.com/#'><img class='interests' src='./images/volunteer.jpg'/></a><div id='volunteertext'></div></div>").hide().fadeIn(2500));
            $("#volunteertext").append($("<div>Learn how to get involved in your community, sign up to volunteer, keep track of volunteer hours, and more. This was a group project. This app is not fully functional at this time. I was responsible for front end development, in particular the landing page, volunteer login and signup forms, and styling.  Tools utilized in the creation of this app include: HTML, CSS, MySQL, Sequelize, Express, Node.js, Passport, Heroku, and Handlebars</div>").hide().fadeIn(1000));
        }
    }, 2000);


    setTimeout(function() {
        $(".buttons").append($("<a class='waves-effect waves-light btn-large links' href='./index.html'>Home</a>").hide().fadeIn(500));
        $(".buttons").append($("<a href='./photos.html'><button type='button' class='waves-effect waves-light btn-large links' id='photos'>Photography</button></a>").hide().fadeIn(500));
        $(".buttons").append($("<a href='./hobbies.html'><button type='button' class='waves-effect waves-light btn-large links' id='hobbies'>Hobbies</button></a>").hide().fadeIn(500));
        $(".buttons").append($("<a class='btn-floating btn-large links' href='https://www.linkedin.com/in/miki-collins/''><img class='icon' src='./images/linkedin.png' alt='Linked In'></a>").hide().fadeIn(500));
        $(".buttons").append($("<a class='btn-floating btn-large links' href='https://github.com/mcollins33'><img class='icon' src='./images/github.png' alt='GitHub'></a>").hide().fadeIn(500));
    }, 1500);

});
//card support
    var countDown = function(cssId, title, countTo, repeatCycle, insertIn){
        var now,output;
        var years, months, days, hours, minutes, seconds;

        document.getElementById(insertIn).insertAdjacentHTML('beforeend', "<div id = '" + cssId + "' data-ss-colspan='4' class = 'card' style = 'width: 446px;'><h2>Countdown to <br><span>"+title+"</span> </h2> <h3 class=timer></h3> </div>");
        if(insertIn=='cards'){
            document.getElementById(cssId).insertAdjacentHTML('afterbegin','<span class="handel" style="font-size:large;">&equiv;&equiv;&equiv;</span>')
        }
        setInterval(function () {
            now = new Date();
            output = '';
            years = 0, months = 0, days = 0, hours = 0, minutes = 0, seconds = 0;
            //Calculation
                //Seconds
                seconds += countTo.getSeconds() - now.getSeconds();
                if (seconds < 0 && seconds != 0) {
                    seconds += 60;
                    minutes -= 1;
                }
                //Minutes
                minutes += countTo.getMinutes() - now.getMinutes();
                if (minutes < 0 && minutes != 0) {
                    minutes += 60;
                    hours -= 1;
                }
                //Hours
                hours += countTo.getHours() - now.getHours();
                if (hours < 0 && hours != 0) {
                    hours += 24;
                    days -= 1;
                }
                //Days
                if (repeatCycle == "weekly") {
                    days += countTo.getDay() - now.getDay();
                    if (days < 0 && days != 0) {
                        days += 7;
                    }
                } else {
                days += countTo.getDate() - now.getDate();
                    if (days < 0 && days != 0) {
                        if (now.getMonth() === 3 || now.getMonth() === 5 || now.getMonth() === 8 || now.getMonth() === 10) {
                            days += 30;
                        } else if (now.getMonth() === 1) {
                            if (now.getFullYear() % 4 === 0) {
                                days += 29;
                            } else {
                                days += 28;
                            }
                        } else {
                            days += 31;
                        }
                        months -= 1;
                    }
                }
                //Months
                months += countTo.getMonth() - now.getMonth();
                if (months < 0 && months != 0) {
                    months += 12;
                    years -= 1;
                }
                //Years
                years += countTo.getFullYear() - now.getFullYear();
            //Output
                //Years
                if (repeatCycle == "none" && years != 0) {
                    output += years + ' year';
                    if(years > 1){
                        output += 's';
                    }
                    if(months != 0 || days != 0 || hours != 0 || minutes != 0 || seconds != 0){
                        output += ', <wbr>';
                    }
                    if((months != 0 && days == 0 && hours == 0 && minutes == 0 && seconds == 0)||
                        (months == 0 && days != 0 && hours == 0 && minutes == 0 && seconds == 0)||
                        (months == 0 && days == 0 && hours != 0 && minutes == 0 && seconds == 0)||
                        (months == 0 && days == 0 && hours == 0 && minutes != 0 && seconds == 0)||
                        (months == 0 && days == 0 && hours == 0 && minutes == 0 && seconds !=0)){
                        output +='and ';
                    }
                }
                //Months
                if ((repeatCycle == "yearly" || repeatCycle == "none" )&& months != 0) {
                    output += months + ' month';
                    if(months > 1){
                        output += 's';
                    }
                    if(days != 0 || hours != 0 || minutes != 0 || seconds != 0){
                        output += ', <wbr>';
                    }
                    if((days != 0 && hours == 0 && minutes == 0 && seconds == 0)||
                        (days == 0 && hours != 0 && minutes == 0 && seconds == 0)||
                        (days == 0 && hours == 0 && minutes != 0 && seconds == 0)||
                        (days == 0 && hours == 0 && minutes == 0 && seconds !=0)){
                        output +='and ';
                    }
                }
                //Days
                if (repeatCycle != "daily" && repeatCycle != "hourly" && repeatCycle != "minutely" && days != 0) {
                    output += days + ' day';
                    if(days > 1){
                        output += 's';
                    }
                    if(hours != 0 || minutes != 0 || seconds != 0){
                        output += ', <wbr>';
                    }
                    if((hours != 0 && minutes == 0 && seconds == 0)||
                        (hours == 0 && minutes != 0 && seconds == 0)||
                        (hours == 0 && minutes == 0 && seconds !=0)){
                        output +='and ';
                    }
                }
                //Hours
                if (repeatCycle != "hourly" && repeatCycle != "minutely" && hours != 0) {
                    output += hours + ' hour';
                    if(hours>1){
                        output += 's';
                    }
                    if(minutes != 0 || seconds != 0){
                        output += ', <wbr>';
                    }
                    if((minutes != 0 && seconds == 0)||
                        (minutes == 0 && seconds !=0)){
                        output +='and ';
                    }
                }
                //Minutes
                if (repeatCycle != "minutely" && minutes != 0) {
                    output += minutes +' minute';
                    if(minutes>1){
                        output += 's';
                    }
                    if(seconds != 0) {
                        output += ', <wbr>and ';
                    }
                }
                //Seconds
                if(seconds != 0){
                    output += seconds +' second';
                    if(seconds>1){
                        output += 's';
                    }
                }
                if(insertIn!='cards'){
                    document.querySelector("#" + insertIn + " .slick-cloned>h3.timer").innerHTML = output;
                }
                document.querySelector("#" + cssId + " h3.timer").innerHTML = output;
            $('#cards').trigger('ss-rearrange');
        }, 1000);
    };

    var currentTime = function(cssId, style, insertIn){
        var now, output,years,months,days,dayWeek,hours,ampm,minutes,seconds;
            document.getElementById(insertIn).insertAdjacentHTML('beforeend', "<div id = " + cssId + " class=card><div class = 'clock'></div></div>");
        if(insertIn=='cards'){
            document.getElementById(cssId).insertAdjacentHTML('afterbegin','<span class="handel" style="font-size:large;">&equiv;&equiv;&equiv;</span>')
        }
        setInterval(function(){
            now = new Date();
            years = now.getFullYear();
            months = now.getMonth() + 1;
            days = now.getDate();
            switch(now.getDay){
                case 0:
                    dayWeek = 'Sunday';
                    break;
                case 1:
                    dayWeek = 'Monaday';
                    break;
                case 2:
                    dayWeek = 'Tuesday';
                    break;
                case 3:
                    dayWeek = 'Wednesday';
                    break;
                case 4:
                    dayWeek = 'Thursday';
                    break;
                case 5:
                    dayWeek = 'Friday';
                    break;
                case 6:
                    dayWeek = 'Saturday';
                    break;
            }
            hours = now.getHours();
            if(hours>12){
                hours -= 12;
                ampm = 'PM';
            } else {
                ampm='AM';
            }
            minutes = now.getMinutes();
            seconds = now.getSeconds();
            output = '';
            if(style == "digital"){
                output += hours + ":" + minutes + ":" + seconds + " " +ampm;
                document.querySelector("#" + cssId + " .clock").innerHTML = "<h2>"+output+"</h2>";
            }
            if(style == "blocks"){
                var blocks;
                document.getElementById(cssId).setAttribute('data-ss-colspan','2');
                document.querySelector("#" + cssId + " .clock").setAttribute('style','width:171px;');
                document.querySelector("#" + cssId + " .clock").innerHTML = '<div class = hourOne> <div class = "one"></div><div class = "two"></div><div class = "three"></div></div><p></p><div  class = hourTwo> <div class = "one"></div> <div class = "two"></div> <div class = "three"></div> <p></p> <div class = "four"></div> <div class = "five"></div> <div class = "six"></div> <p></p> <div class = "seven"></div> <div class = "eight"></div> <div class = "nine"></div></div><p></p><div  class = minuteOne> <div class = "one"></div> <div class = "two"></div> <div class = "three"></div> <p></p> <div class = "four"></div> <div class = "five"></div> <div class = "six"></div> </div> <p></p> <div  class = minuteTwo> <div class = "one"></div> <div class = "two"></div> <div class = "three"></div> <p></p> <div class = "four"></div> <div class = "five"></div> <div class = "six"></div> <p></p> <div class = "seven"></div> <div class = "eight"></div> <div class = "nine"></div> </div> <p></p> <div  class = secondOne> <div class = "one"></div> <div class = "two"></div> <div class = "three"></div> <p></p> <div class = "four"></div> <div class = "five"></div> <div class = "six"></div> </div> <p></p> <div  class = secondTwo> <div class = "one"></div> <div class = "two"></div> <div class = "three"></div> <p></p> <div class = "four"></div> <div class = "five"></div> <div class = "six"></div> <p></p> <div class = "seven"></div> <div class = "eight"></div> <div class = "nine"></div> </div>';
                //hours
                //digit 1
                if(hours>=10){
                    output = Math.floor((Math.random()*3)+1);
                    if(output == 1) {
                        output = 'one';
                    } else if(output == 2){
                        output = 'two';
                    } else {
                        output = 'three';
                    }
                    document.querySelector("#" + cssId + " .hourOne"+ " ."+output).setAttribute('style','background-color: rgba(74, 133, 228, 0.8);');
                    hours-=10;
                }
                //digit 2
                blocks = ['one','two','three','four','five','six','seven','eight','nine'];
                for(var i = 9;i>9-hours; i--){
                    output = Math.floor((Math.random()*i));
                    document.querySelector("#" + cssId + " .hourTwo"+ " ."+blocks[output]).setAttribute('style','background-color: rgba(112, 77, 228, 0.8);');
                    blocks.splice(output,1);
                }
                //minutes
                //digit 2
                blocks = ['one','two','three','four','five','six','seven','eight','nine'];
                for(var i = 9; i>9-minutes%10; i--){
                    output = Math.floor((Math.random()*i));
                    document.querySelector("#" + cssId + " .minuteTwo"+ " ."+blocks[output]).setAttribute('style','background-color: rgba(228, 151, 13, 0.8);');
                    blocks.splice(output,1);
                }
                minutes -= minutes%10;
                minutes = minutes/10;
                //digit 1
                blocks = ['one','two','three','four','five','six'];
                for(var i = 6;i>6-minutes; i--){
                    output = Math.floor((Math.random()*i));
                    document.querySelector("#" + cssId + " .minuteOne"+ " ."+blocks[output]).setAttribute('style','background-color: rgba(228, 83, 96, 0.8);');
                    blocks.splice(output,1);
                }
                //seconds
                //digit 2
                blocks = ['one','two','three','four','five','six','seven','eight','nine'];
                for(var i = 9; i>9-seconds%10; i--){
                    output = Math.floor((Math.random()*i));
                    document.querySelector("#" + cssId + " .secondTwo"+ " ."+blocks[output]).setAttribute('style','background-color: rgba(107, 228, 122, 0.8);');
                    blocks.splice(output,1);
                }
                seconds -= seconds%10;
                seconds = seconds/10;
                //digit 1
                blocks = ['one','two','three','four','five','six'];
                for(var i = 6; i>6-seconds; i--){
                    output = Math.floor((Math.random()*i));
                    document.querySelector("#" + cssId + " .secondOne"+ " ."+blocks[output]).setAttribute('style','background-color: rgba(202, 228, 122, 0.8);');
                    blocks.splice(output,1);
                }
            }
            $('#cards').trigger('ss-rearrange');
        },1000);

    };

    var pictureFrame = function(title, width, height, fileLocation, caption, insertIn){
        document.getElementById(insertIn).insertAdjacentHTML('beforeend',"<div class=card><h2>"+title+"</h2><img style='float:left' src='"+fileLocation+"' alt='"+caption+"' width='"+width+"' height='"+height+"'><h3>"+caption+"</h3></div>");
        if(insertIn=='cards'){
            document.getElementById(cssId).insertAdjacentHTML('afterbegin','<span class="handel" style="font-size:large;">&equiv;&equiv;&equiv;</span>')
        }
    };

    var videoFrame = function(title, width, height, videoUrl, insertIn){
        document.getElementById(insertIn).insertAdjacentHTML('beforeend',"<div class='card'><h2>"+title+"</h2><iframe width='"+width+"' height='"+height+"' src='"+videoUrl+"' frameborder='0' allowfullscreen></iframe></div>");
        if(insertIn=='cards'){
            document.getElementById(cssId).insertAdjacentHTML('afterbegin','<span class="handel" style="font-size:large;">&equiv;&equiv;&equiv;</span>')
        }
    };

    var textCard = function(title, width, content, insertIn){
        document.getElementById(insertIn).insertAdjacentHTML('beforeend',"<div class='card' style = 'width: "+width+";' ><h2>"+title+"</h2><p>"+content+"</p></div>");
        if(insertIn=='cards'){
            document.getElementById(cssId).insertAdjacentHTML('afterbegin','<span class="handel" style="font-size:large;">&equiv;&equiv;&equiv;</span>')
        }
    };

    var weather = function(cssId, title, location, units, full, insertIn){
        document.getElementById(insertIn).insertAdjacentHTML('beforeend', "<div id = " + cssId + " data-ss-colspan='6' class='card' >");
        var key = 'a1b1821b5646513de4f5d6533ceea55e';
        if(units=='I'){
            var unitTemp = '&deg'+'F';
            var unitSpeed = 'MPH';
            var unitPressure = 'in';
        } else if(units=='M'||units=='K'){
            if(units=='K'){
                var unitTemp='K';
            } else{
                var unitTemp='&deg'+'C';
            }
            var unitSpeed = 'm/s';
            var unitPressure = 'hPA';
        }

        var changeUnitsTemp = function(value,unit,current){
            if(current == 'K') {
                if (unit == 'M' || unit == 'I') {
                    value -= 273.15;
                    if (unit == 'I') {
                        value = Math.round(value * 1.8);
                        value += 32;
                    }
                }
            } else if(current == 'I'){
                value -=32;
                value = Math.round(value/1.8);
                if(unit == 'K'){
                    value += 273.15;
                }
            } else if(current == 'M'){
                if(unit == 'K'){
                    value += 273.15;
                } else if(unit == 'I'){
                    value = Math.round(value * 1.8);
                    value += 32;
                }
            }
            return value;
        };
        if(full.all) {
            document.getElementById(cssId).innerHTML = '<div class=carousel style="height:260px; width:650px;"></div>';
            if(insertIn == 'cards') {
                document.getElementById(cssId).setAttribute('style','padding:30px; padding-top:0;');
                document.getElementById(cssId).insertAdjacentHTML('afterbegin','<span class="handel" style="position:relative; left:-20px; font-size:large;">&equiv;&equiv;&equiv;</span>');
                if(full.today){
                    document.querySelector('#' + cssId + ' .carousel').insertAdjacentHTML('beforeend','<div class="current"><h2>Weather in<br>'+title+'</h2><div class="now"><h3>Now</h3><div class="weatherIcon"></div><br><span style="font-size: 15pt" class="weatherDescription"></span><br><span class="temp"></span><br></div><div class="stats"><div style="height:60px;"><span class="windSpeed"></span><br><span class="windChill"></span><br><span class="windDirection"></span><br><div class="compass"><span class="north">N</span><span class="east">E</span><span class="south">S</span><span class="west">W</span></div><div class="pointer">\\/</div></div><div><span class="pressure"></span><br><span class="humidity"></span><br><span class="sunrise"></span><br><span class="sunset"></span></div></div><div class="threeHours"><h3></h3><div class="weatherIcon"></div><br><span style="font-size: 15pt" class="weatherDescription"></span><br><span class="temp"></span><br></div><div class="sixHours"><h3></h3><div class="weatherIcon"></div><br><span style="font-size: 15pt" class="weatherDescription"></span><br><span class="temp"></span><br></div></div>');
                } else if (full.current) {
                    document.querySelector('#' + cssId + ' .carousel').insertAdjacentHTML('beforeend', "<div class='current'><h2>Weather in<br>" + title + "</h2><div class='weatherIcon'></div><p><span style='font-size: 15pt' class='weatherDescription'></span><br><span class='temp'></span></p></div>");
                }

                if (full.forecast) {
                    var numberToString = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'];
                    document.querySelector('#' + cssId + ' .carousel').insertAdjacentHTML('beforeend', "<div><h2 style='border-bottom:none;'>5 Day Forecast For " + title + "</h2><div class = 'forecastSection'></div></div>");
                    var date = new Date();
                    var day = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sun"];
                    for (var i = 0; i <= 4; i++) {
                        document.querySelector('#' + cssId + ' div.forecastSection').insertAdjacentHTML('beforeend', "<div class='forecast " + numberToString[i] + "'><h2>" + day[(date.getDay() + i) % 7] + "</h2></div>")
                    }
                }
                $(document).ready(function () {
                    $('#' + cssId + ' .carousel').slick({
                        dots: true
                    });
                });
            } else {
                document.querySelector('#'+cssId+' .carousel').setAttribute('style','height:260px; width:650px; margin-top:30px; margin-bottom:30px;');
                if(full.today){
                    document.querySelector('#' + cssId + ' .carousel').insertAdjacentHTML('beforeend','<div class="current" style="height: 250px; float:left; padding:6px"><h2>Weather in<br>'+title+'</h2><div class="now"><h3>Now</h3><div class="weatherIcon"></div><br><span style="font-size: 15pt" class="weatherDescription"></span><br><span class="temp"></span><br></div><div class="stats"><div style="height:60px;"><span class="windSpeed"></span><br><span class="windChill"></span><br><span class="windDirection"></span><br><div class="compass"><span class="north">N</span><span class="east">E</span><span class="south">S</span><span class="west">W</span></div><div class="pointer">\\/</div></div><div><span class="pressure"></span><br><span class="humidity"></span><br><span class="sunrise"></span><br><span class="sunset"></span></div></div><div class="threeHours"><h3></h3><div class="weatherIcon"></div><br><span style="font-size: 15pt" class="weatherDescription"></span><br><span class="temp"></span><br></div><div class="sixHours"><h3></h3><div class="weatherIcon"></div><br><span style="font-size: 15pt" class="weatherDescription"></span><br><span class="temp"></span><br></div></div>');
                }
                else if (full.current) {
                    document.querySelector('#' + cssId + ' .carousel').insertAdjacentHTML('beforeend', "<div class='current' style='height: 250px; float:left; padding:6px'><h2>Weather in<br>" + title + "</h2><div class='weatherIcon'></div><p><span style='font-size: 15pt' class='weatherDescription'></span><br><span class='temp'></span></p></div>");
                }
                if (full.forecast) {
                    var numberToString = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'];
                    document.querySelector('#' + cssId + ' .carousel').insertAdjacentHTML('beforeend', "<div style='height: 250px; float:left; padding:6px'><h2 style='border-bottom:none;'>5 Day Forecast For " + title + "</h2><div class = 'forecastSection'></div></div>");
                    var date = new Date();
                    var day = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sun"];
                    for (var i = 0; i <= 4; i++) {
                        document.querySelector('#' + cssId + ' div.forecastSection').insertAdjacentHTML('beforeend', "<div class='forecast " + numberToString[i] + "'><h2>" + day[(date.getDay() + i) % 7] + "</h2></div>")
                    }
                }
                $(document).ready(function(){
                    $('#'+cssId+' .carousel').slick({
                        vertical: true,
                        verticalSwiping: true,
                        prevArrow: '<button type="button" class="slick-prev" style="float:top; top:-20px; left:46.5%; transform:rotate(90deg)">Previous</button>',
                        nextArrow: '<button type="button" class="slick-next" style="float:top; top: 280px; left:46.5%; transform:rotate(90deg)">Next</button>'
                    });
                });
            }
        } else{

            if(full.today){
                document.getElementById(cssId).insertAdjacentHTML('beforeend','<div class="current" style="width:650px; height: 250px; float:left; padding:6px"><h2>Weather in<br>'+title+'</h2><div class="now"><h3>Now</h3><div class="weatherIcon"></div><br><span style="font-size: 15pt" class="weatherDescription"></span><br><span class="temp"></span><br></div><div class="stats"><div style="height:60px;"><span class="windSpeed"></span><br><span class="windChill"></span><br><span class="windDirection"></span><br><div class="compass"><span class="north">N</span><span class="east">E</span><span class="south">S</span><span class="west">W</span></div><div class="pointer">\\/</div></div><div><span class="pressure"></span><br><span class="humidity"></span><br><span class="sunrise"></span><br><span class="sunset"></span></div></div><div class="threeHours"><h3></h3><div class="weatherIcon"></div><br><span style="font-size: 15pt" class="weatherDescription"></span><br><span class="temp"></span><br></div><div class="sixHours"><h3></h3><div class="weatherIcon"></div><br><span style="font-size: 15pt" class="weatherDescription"></span><br><span class="temp"></span><br></div></div>');
            } else if (full.current) {
                document.getElementById(cssId).insertAdjacentHTML('beforeend', "<div class='current'><h2>Weather in<br>" + title + "</h2><div class='weatherIcon'></div><p><span style='font-size: 15pt' class='weatherDescription'></span><br><span class='temp'></span></p></div>");
            }
            if (full.forecast) {
                var numberToString = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'];
                document.getElementById(cssId).insertAdjacentHTML('beforeend', "<div><h2 style='border-bottom:none;'>5 Day Forecast For " + title + "</h2><div class = 'forecastSection'></div></div>");
                var date = new Date();
                var day = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sun"];
                for (var i = 0; i <= full.forecast.range - 1; i++) {

                    document.querySelector('#' + cssId + ' div.forecastSection').insertAdjacentHTML('beforeend', "<div class='forecast " + numberToString[i] + "'><h2>" + day[(date.getDay() + i) % 7] + "</h2></div>")
                }
            }
        }
        if(full.current || full.today) {
            var apiURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + location;
            if(units=='I'){
                apiURL += '&units=imperial';
            } else if(units=='M'){
                apiURL += '&units=metric';
            }
            apiURL += "&&APPID=" + key;
            $.getJSON(apiURL, function (json) {
                //now
                var currentData = JSON.parse(JSON.stringify(json));
                var currentTemp = currentData.main.temp;
                var minTemp = currentData.main.temp_min;
                var maxTemp = currentData.main.temp_max;
                var iconUrl = 'http://openweathermap.org/img/w/' + currentData.weather[0].icon + '.png';
                var weatherDescription = currentData.weather[0].main;
                if(full.today){
                    //stats
                    var windSpeed = currentData.wind.speed;
                    var windChill = changeUnitsTemp((35.74+(0.6215*changeUnitsTemp(currentTemp,'I',units))-Math.pow((35.75*(2.23694*windSpeed)),0.16)+Math.pow((0.4275*changeUnitsTemp(currentTemp,'I',units)*(2.23694*windSpeed)),0.16)),units,'I');
                    var windDirDeg = currentData.wind.deg;
                    if(windDirDeg>=315||windDirDeg<45){
                        var windDir = 'Northerly';
                    } else if (windDirDeg>=45 && windDirDeg<135){
                        var windDir = 'Easterly';
                    } else if (windDirDeg>=135 && windDirDeg<225){
                        var windDir = 'Southerly';
                    } else if (windDirDeg>=225 && windDirDeg<315){
                        var windDir = 'Westerly';
                    }
                    var pressure = currentData.main.pressure;
                    if(units=='I'){
                        pressure*=.0295333727;
                        pressure = Math.round(pressure*100)/100;
                    }
                    var humidity = currentData.main.humidity;
                    var sunrise = new Date(currentData.sys.sunrise);
                    var sunset = new Date(currentData.sys.sunset);
                    if(full.all){
                        //now
                        document.querySelector('#' + cssId + " .current.slick-cloned>div.now>div.weatherIcon").innerHTML = "<img src='" + iconUrl + "' width = 100% height = 100%>";
                        document.querySelector('#' + cssId + " .current.slick-cloned>div.now>span.weatherDescription").innerHTML = weatherDescription;
                        document.querySelector("#" + cssId + " .current.slick-cloned>div.now>span.temp").innerHTML = "<span style='font-size: 15pt'>" + currentTemp + unitTemp + "</span> <br> <span style='font-size: 10pt'>" + minTemp + unitTemp + " - " + maxTemp + unitTemp + "</span>";
                        //stats
                        document.querySelector('#' + cssId + ' div.current.slick-cloned>div.stats>div>span.windSpeed').innerHTML = 'Wind Speed: ' + windSpeed + ' ' + unitSpeed;
                        document.querySelector('#' + cssId + ' div.current.slick-cloned>div.stats>div>span.windChill').innerHTML = 'Wind Chill: ' + windChill + unitTemp;
                        document.querySelector('#' + cssId + ' div.current.slick-cloned>div.stats>div>span.windDirection').innerHTML = 'Wind Direction: ' + windDir;
                        document.querySelector('#' + cssId + ' div.current.slick-cloned>div.stats>div>div.pointer').setAttribute('style','-webkit-transform: rotate('+windDirDeg+'deg); -ms-transform: rotate('+windDirDeg+'deg); transform: rotate('+windDirDeg+'deg);');
                        document.querySelector('#' + cssId + ' div.current.slick-cloned>div.stats>div>span.pressure').innerHTML = 'Pressure: ' + pressure + ' ' +unitPressure;
                        document.querySelector('#' + cssId + ' div.current.slick-cloned>div.stats>div>span.humidity').innerHTML = 'Humidity: ' + humidity + '%';
                        document.querySelector('#' + cssId + ' div.current.slick-cloned>div.stats>div>span.sunrise').innerHTML = 'Sunrise: ' + sunrise.toLocaleTimeString('en-US');
                        document.querySelector('#' + cssId + ' div.current.slick-cloned>div.stats>div>span.sunset').innerHTML = 'Sunset: ' + sunset.toLocaleTimeString('en-US');

                    }
                    //now
                    document.querySelector("#" + cssId + " div.current:not(.slick-cloned)>div.now>span.temp").innerHTML = "<span style='font-size: 15pt'>" + currentTemp + unitTemp + "</span> <br> <span style='font-size: 10pt'>" + minTemp + unitTemp + " - " + maxTemp + unitTemp + "</span>";
                    document.querySelector('#' + cssId + " div.current:not(.slick-cloned)>div.now>div.weatherIcon").innerHTML = "<img src='" + iconUrl + "' width = 100% height = 100%>";
                    document.querySelector('#' + cssId + " div.current:not(.slick-cloned)>div.now>span.weatherDescription").innerHTML = weatherDescription;
                    //stats
                    document.querySelector('#' + cssId + ' div.current:not(.slick-cloned)>div.stats>div>span.windSpeed').innerHTML = 'Wind Speed: ' + windSpeed + ' ' + unitSpeed;
                    document.querySelector('#' + cssId + ' div.current:not(.slick-cloned)>div.stats>div>span.windChill').innerHTML = 'Wind Chill: ' + windChill + unitTemp;
                    document.querySelector('#' + cssId + ' div.current:not(.slick-cloned)>div.stats>div>span.windDirection').innerHTML = 'Wind Direction: ' + windDir;
                    document.querySelector('#' + cssId + ' div.current:not(.slick-cloned)>div.stats>div>div.pointer').setAttribute('style','-webkit-transform: rotate('+windDirDeg+'deg); -ms-transform: rotate('+windDirDeg+'deg); transform: rotate('+windDirDeg+'deg);');
                    document.querySelector('#' + cssId + ' div.current:not(.slick-cloned)>div.stats>div>span.pressure').innerHTML = 'Pressure: ' + pressure + ' ' +unitPressure;
                    document.querySelector('#' + cssId + ' div.current:not(.slick-cloned)>div.stats>div>span.humidity').innerHTML = 'Humidity: ' + humidity + '%';
                    document.querySelector('#' + cssId + ' div.current:not(.slick-cloned)>div.stats>div>span.sunrise').innerHTML = 'Sunrise: ' + sunrise.toLocaleTimeString('en-US');
                    document.querySelector('#' + cssId + ' div.current:not(.slick-cloned)>div.stats>div>span.sunset').innerHTML = 'Sunset: ' + sunset.toLocaleTimeString('en-US');

                    var apiURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + location;
                    if(units=='I'){
                        apiURL += '&units=imperial';
                    } else if(units=='M'){
                        apiURL += '&units=metric';
                    }
                    apiURL += "&&APPID=" + key;
                    $.getJSON(apiURL, function(json){
                        var time = new Date();
                        var ampmThree = 'am';
                        var ampmSix = 'am';
                        var todayData = JSON.parse(JSON.stringify(json));

                        var threeTime = time.getHours()+3;
                        if(threeTime >= 12 && threeTime < 24){
                            threeTime-=12;
                            ampmThree = 'pm'
                        } else if(threeTime>=24){
                            threeTime-=24;
                        }
                        if(threeTime==0){
                            threeTime=12;
                        }
                        var threeIcon = 'http://openweathermap.org/img/w/' + todayData.list[0].weather[0].icon + '.png';
                        var threeDescription = todayData.list[0].weather[0].main;
                        var threeTemp = todayData.list[0].main.temp;
                        var threeMinTemp = todayData.list[0].main.temp_min;
                        var threeMaxTemp = todayData.list[0].main.temp_max;

                        var sixTime = todayData.list[1].dt;
                        var sixTime = time.getHours()+6;
                        if(sixTime >= 12 && sixTime < 24){
                            sixTime-=12;
                            ampmSix = 'pm'
                        } else if(sixTime>=24){
                            sixTime-=24;
                        }
                        if(sixTime==0){
                            sixTime=12;
                        }
                        var sixIcon = 'http://openweathermap.org/img/w/' + todayData.list[1].weather[0].icon + '.png';
                        var sixDescription = todayData.list[1].weather[0].main;
                        var sixTemp = todayData.list[1].main.temp;
                        var sixMinTemp = todayData.list[1].main.temp_min;
                        var sixMaxTemp = todayData.list[1].main.temp_max;
                        if(full.all){
                            document.querySelector('#' + cssId + " div.current.slick-cloned>div.threeHours>h3").innerHTML = threeTime+":00 "+ampmThree;
                            document.querySelector("#" + cssId + " div.current.slick-cloned>div.threeHours>span.temp").innerHTML = "<span style='font-size: 15pt'>" + threeTemp + unitTemp + "</span> <br> <span style='font-size: 10pt'>" + threeMinTemp + unitTemp + " - " + threeMaxTemp + unitTemp + "</span>";
                            document.querySelector('#' + cssId + " div.current.slick-cloned>div.threeHours>div.weatherIcon").innerHTML = "<img src='" + threeIcon + "' width = 100% height = 100%>";
                            document.querySelector('#' + cssId + " div.current.slick-cloned>div.threeHours>span.weatherDescription").innerHTML = threeDescription;
                            document.querySelector('#' + cssId + " div.current.slick-cloned>div.sixHours>h3").innerHTML = sixTime+":00 "+ampmSix;
                            document.querySelector("#" + cssId + " div.current.slick-cloned>div.sixHours>span.temp").innerHTML = "<span style='font-size: 15pt'>" + sixTemp + unitTemp + "</span> <br> <span style='font-size: 10pt'>" + sixMinTemp + unitTemp + " - " + sixMaxTemp + unitTemp + "</span>";
                            document.querySelector('#' + cssId + " div.current.slick-cloned>div.sixHours>div.weatherIcon").innerHTML = "<img src='" + sixIcon + "' width = 100% height = 100%>";
                            document.querySelector('#' + cssId + " div.current.slick-cloned>div.sixHours>span.weatherDescription").innerHTML = sixDescription;
                        }
                        document.querySelector('#' + cssId + " div.current:not(.slick-cloned)>div.threeHours>h3").innerHTML = threeTime+":00 "+ampmThree;
                        document.querySelector("#" + cssId + " div.current:not(.slick-cloned)>div.threeHours>span.temp").innerHTML = "<span style='font-size: 15pt'>" + threeTemp + unitTemp + "</span> <br> <span style='font-size: 10pt'>" + threeMinTemp + unitTemp + " - " + threeMaxTemp + unitTemp + "</span>";
                        document.querySelector('#' + cssId + " div.current:not(.slick-cloned)>div.threeHours>div.weatherIcon").innerHTML = "<img src='" + threeIcon + "' width = 100% height = 100%>";
                        document.querySelector('#' + cssId + " div.current:not(.slick-cloned)>div.threeHours>span.weatherDescription").innerHTML = threeDescription;
                        document.querySelector('#' + cssId + " div.current:not(.slick-cloned)>div.sixHours>h3").innerHTML = sixTime+":00 "+ampmSix;
                        document.querySelector("#" + cssId + " div.current:not(.slick-cloned)>div.sixHours>span.temp").innerHTML = "<span style='font-size: 15pt'>" + sixTemp + unitTemp + "</span> <br> <span style='font-size: 10pt'>" + sixMinTemp + unitTemp + " - " + sixMaxTemp + unitTemp + "</span>";
                        document.querySelector('#' + cssId + " div.current:not(.slick-cloned)>div.sixHours>div.weatherIcon").innerHTML = "<img src='" + sixIcon + "' width = 100% height = 100%>";
                        document.querySelector('#' + cssId + " div.current:not(.slick-cloned)>div.sixHours>span.weatherDescription").innerHTML = sixDescription;
                        $('#cards').trigger('ss-rearrange');
                    });
                } else {
                    if (full.all) {
                        document.querySelector('#' + cssId + " .current.slick-cloned>div.weatherIcon").innerHTML = "<img src='" + iconUrl + "' width = 100% height = 100%>";
                        document.querySelector('#' + cssId + " .current.slick-cloned>p>span.weatherDescription").innerHTML = weatherDescription;
                        document.querySelector("#" + cssId + " .current.slick-cloned>p>span.temp").innerHTML = "<span style='font-size: 15pt'>" + currentTemp + unitTemp + "</span> <br> <span style='font-size: 10pt'>" + minTemp + unitTemp + " - " + maxTemp + unitTemp + "</span>";
                    }
                    document.querySelector("#" + cssId + " div.current:not(.slick-cloned)>p>.temp").innerHTML = "<span style='font-size: 15pt'>" + currentTemp + unitTemp + "</span> <br> <span style='font-size: 10pt'>" + minTemp + unitTemp + " - " + maxTemp + unitTemp + "</span>";
                    document.querySelector('#' + cssId + " div.current:not(.slick-cloned)>div.weatherIcon").innerHTML = "<img src='" + iconUrl + "' width = 100% height = 100%>";
                    document.querySelector('#' + cssId + " div.current:not(.slick-cloned)>p>span.weatherDescription").innerHTML = weatherDescription;
                }
                $('#cards').trigger('ss-rearrange');
            });
        }
        if(full.forecast) {
            var numberToString = ['one','two','three','four','five','six','seven','eight','nine','ten','twelve','thirteen','fourteen','fifteen','sixteen'];
            var apiURL = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + "&cnt=5";
            if(units=='I'){
                apiURL += '&units=imperial';
            } else if(units=='M'){
                apiURL += '&units=metric';
            }
            apiURL += "&&APPID=" + key;
            $.getJSON(apiURL, function (json) {
                var forecastData = JSON.parse(JSON.stringify(json));
                var weatherIcon, weatherDescription;
                for(var i = 0;i<=4;i++){
                    weatherDescription = forecastData.list[i].weather[0].main;
                    weatherIcon = 'http://openweathermap.org/img/w/'+forecastData.list[i].weather[0].icon+'.png';
                    if(full.all){
                        document.querySelector('#'+cssId+" div.slick-cloned > div >div.forecast."+numberToString[i]).insertAdjacentHTML('beforeend',"<div class='weatherIcon'><img src='" + weatherIcon + "'width = 100% height = 100%></div><br><span style='font-size: 15pt' class='weatherDescription'>" + weatherDescription + "</span><br>");
                    }
                    document.querySelector('#'+cssId+" div:not(.slick-cloned) > div > div.forecast."+numberToString[i]).insertAdjacentHTML('beforeend',"<div class='weatherIcon'><img src='" + weatherIcon + "'width = 100% height = 100%></div><br><span style='font-size: 15pt' class='weatherDescription'>" + weatherDescription + "</span><br>");
                }
                var minTemp, maxTemp;
                for(var i = 0;i<=4;i++){
                    minTemp = forecastData.list[i].temp.min;
                    maxTemp = forecastData.list[i].temp.max;
                    if(full.all){
                        document.querySelector('#'+cssId+" div.slick-cloned> div> div.forecast."+numberToString[i]).insertAdjacentHTML('beforeend',"<span style='font-size: 10pt'>" + minTemp + unitTemp + " - " + maxTemp + unitTemp + "</span><br>");
                    }
                    document.querySelector('#'+cssId+" div:not(.slick-cloned)>div>div.forecast."+numberToString[i]).insertAdjacentHTML('beforeend',"<span style='font-size: 10pt'>" + minTemp + unitTemp + " - " + maxTemp + unitTemp + "</span><br>");
                }
                $('#cards').trigger('ss-rearrange');
            });
        }
    };

    var megaCard = function(cssId, title, subCards){
        document.getElementById('cards').insertAdjacentHTML('beforeend',"<div id='"+cssId+"' data-ss-colspan='6' class = 'mega card' style='padding:30px; padding-top:0;'><span class='handel' style='position: relative; left: -20px; font-size:large;'>&equiv;&equiv;&equiv;</span><h2>"+title+"</h2> <div id='"+cssId+"Carousel' style='width:650px'></div></div>");
        for(var i=0;i<=subCards.length-1;i++){
            var currentCard = subCards[i];
            switch(currentCard.type){
                case "countdown":
                    var countTo = new Date(currentCard.date[0],(currentCard.date[1]-1),currentCard.date[2],currentCard.date[3],currentCard.date[4],currentCard.date[5]);
                    countDown(cssId+"_"+currentCard.cssId,currentCard.title,countTo,currentCard.repeatCycle,cssId+'Carousel');
                    break;
                case "clock":
                    currentTime(cssId+"_"+currentCard.cssId,currentCard.style,cssId+'Carousel');
                    break;
                case "picture":
                    pictureFrame(currentCard.title,currentCard.width,currentCard.height,currentCard.fileLocation,currentCard.caption,cssId+'Carousel');
                    break;
                case "video":
                    videoFrame(currentCard.title,currentCard.width,currentCard.height,currentCard.videoUrl,cssId+'Carousel');
                    break;
                case "text":
                    textCard(currentCard.title,currentCard.width,currentCard.content,cssId+'Carousel');
                    break;
                case "weather":
                    weather(cssId+"_"+currentCard.cssId,currentCard.title,currentCard.location,currentCard.units,currentCard.full,cssId+'Carousel');
                    break;
            }
        }
        $(document).ready(function () {
            $('#'+cssId+'Carousel').slick({
                dots: true
            });
        });
    };

//card reader
    var reader = function(toRead){
        for(var i=0;i<=toRead.length-1;i++){
            var read = toRead[i];
            switch(toRead[i].type){
                case "countdown":
                    var countTo = new Date(read.date[0],(read.date[1]-1),read.date[2],read.date[3],read.date[4],read.date[5]);
                    countDown(read.cssId,read.title,countTo,read.repeatCycle,'cards');
                    break;
                case "clock":
                    currentTime(read.cssId,read.style,'cards');
                    break;
                case "picture":
                    pictureFrame(read.title,read.width,read.height,read.fileLocation,read.caption,'cards');
                    break;
                case "video":
                    videoFrame(read.title,read.width,read.height,read.videoUrl,'cards');
                    break;
                case "text":
                    textCard(read.title,read.width,read.content,'cards');
                    break;
                case "weather":
                    weather(read.cssId,read.title,read.location,read.units,read.full,'cards');
                    break;
                case "mega":
                    megaCard(read.cssId,read.title,read.subCards,'cards');
                    break;
            }
        }
        $('#cards').shapeshift({
            colWidth: 100,
            gutterX: 22,
            gutterY: 22,
            minColumns: 6,
            maxColumns:6,
            align: 'center',
            handle: '.handel'
        });
    };
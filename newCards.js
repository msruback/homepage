var subCard = function (subCardNum) {
    switch (document.getElementById("subCardType" + subCardNum).value) {
        case '':
            document.getElementById('subCardStuff' + subCardNum).innerHTML = '';
            break;
        case "countDown":
            document.getElementById('subCardStuff' + subCardNum).innerHTML = '<tr><td></td><td><label>CSS ID:</label></td><td><input type="text" name="cssid'+subCardNum+'"></td></tr><tr><td></td><td><label>Title:</label></td><td><input type="text" name="title'+subCardNum+'"></td></tr><tr><td></td><td><label>Repeats:</label></td><td><select name="repeat'+subCardNum+'" class="repeat"><option value="none">None</option><option value="yearly">Yearly</option><option value="monthly">Monthly</option><option value="daily">Daily</option><option value="hourly">Hourly</option></select></td></tr><tr><td></td><td><label>Count To:</label></td></tr><tr><td></td><td><label>Year:</label></td><td><input type="text" name="year'+subCardNum+'" class="year" value="0"></td></tr><tr><td></td><td><label>Month:</label></td><td><input type="text" name="month'+subCardNum+'" class="month" value="0"></td></tr><tr><td></td><td><label>Day:</label></td><td><input type="text" name="day'+subCardNum+'" class="day" value="0"></td></tr><tr><td></td><td><label>Hour:</label></td><td><input type="text" name="hour'+subCardNum+'" class="hour" value="0"></td></tr><tr><td></td><td><label>Minute:</label></td><td><input type="text" name="minute'+subCardNum+'" value="0"></td></tr><tr><td></td><td><label>Second:</label></td><td><input type="text" name="second'+subCardNum+'" value="0"></td></tr>';
            document.querySelector('#subCardStuff' + subCardNum + ' select.repeat').addEventListener('change', function () {
                switch (document.querySelector('#subCardStuff' + subCardNum + ' select.repeat').value) {
                    case "none":
                        document.querySelector('#subCardStuff' + subCardNum + ' input.year').removeAttribute('disabled');
                        document.querySelector('#subCardStuff' + subCardNum + ' input.month').removeAttribute('disabled');
                        document.querySelector('#subCardStuff' + subCardNum + ' input.day').removeAttribute('disabled');
                        document.querySelector('#subCardStuff' + subCardNum + ' input.hour').removeAttribute('disabled');
                        break;
                    case "yearly":
                        document.querySelector('#subCardStuff' + subCardNum + ' input.year').setAttribute('disabled', '');
                        document.querySelector('#subCardStuff' + subCardNum + ' input.month').removeAttribute('disabled');
                        document.querySelector('#subCardStuff' + subCardNum + ' input.day').removeAttribute('disabled');
                        document.querySelector('#subCardStuff' + subCardNum + ' input.hour').removeAttribute('disabled');
                        break;
                    case "monthly":
                        document.querySelector('#subCardStuff' + subCardNum + ' input.year').setAttribute('disabled', '');
                        document.querySelector('#subCardStuff' + subCardNum + ' input.month').setAttribute('disabled', '');
                        document.querySelector('#subCardStuff' + subCardNum + ' input.day').removeAttribute('disabled');
                        document.querySelector('#subCardStuff' + subCardNum + ' input.hour').removeAttribute('disabled');
                        break;
                    case "daily":
                        document.querySelector('#subCardStuff' + subCardNum + ' input.year').setAttribute('disabled', '');
                        document.querySelector('#subCardStuff' + subCardNum + ' input.month').setAttribute('disabled', '');
                        document.querySelector('#subCardStuff' + subCardNum + ' input.day').setAttribute('disabled', '');
                        document.querySelector('#subCardStuff' + subCardNum + ' input.hour').removeAttribute('disabled');
                        break;
                    case "hourly":
                        document.querySelector('#subCardStuff' + subCardNum + ' input.year').setAttribute('disabled', '');
                        document.querySelector('#subCardStuff' + subCardNum + ' input.month').setAttribute('disabled', '');
                        document.querySelector('#subCardStuff' + subCardNum + ' input.day').setAttribute('disabled', '');
                        document.querySelector('#subCardStuff' + subCardNum + ' input.hour').setAttribute('disabled', '');
                        break;
                }
            });
            break;
        case 'currentTime':
            document.getElementById('subCardStuff' + subCardNum).innerHTML = '<tr><td></td><td><label>CSS ID:</label></td><td><input type="text" name="cssid'+subCardNum+'"></td></tr><tr><td></td><td><label>Style:</label></td><td><select name="style'+subCardNum+'"><option value="digital">Digital</option><option value="blocks">Blocks</option></select></td></tr>';
            break;
        case 'pictureFrame':
            document.getElementById('subCardStuff' + subCardNum).innerHTML = '<tr><td></td><td><label>Title:</label></td><td><input type="text" name="title'+subCardNum+'"></td></tr><tr><td></td><td><label>Width:</label></td><td><input type="text" name="width'+subCardNum+'"></td></tr><tr><td></td><td><label>Height:</label></td><td><input type="text" name="height'+subCardNum+'"></td></tr><tr><td></td><td><label>File:</label></td><td><input type="text" name="file'+subCardNum+'"></td></tr><tr><td></td><td><label>Caption:</label></td><td><textarea form="cardInfo" name="caption'+subCardNum+'"></textarea></td></tr>';
            break;
        case 'videoFrame':
            document.getElementById('subCardStuff' + subCardNum).innerHTML = '<tr><td></td><td><label>Title:</label></td><td><input type="text" name="title'+subCardNum+'"></td></tr><tr><td></td><td><label>Width:</label></td><td><input type="text" name="width'+subCardNum+'"></td></tr><tr><td></td><td><label>Height:</label></td><td><input type="text" name="height'+subCardNum+'"></td></tr><tr><td></td><td><label>File:</label></td><td><input type="text" name="videourl'+subCardNum+'"></td></tr>';
            break;
        case 'textCard':
            document.getElementById('subCardStuff' + subCardNum).innerHTML = '<tr><td></td><td><label>Title:</label></td><td><input type="text" name="title'+subCardNum+'"></td></tr><tr><td></td><td><label>Width:</label></td><td><input type="text" name="width'+subCardNum+'"></td></tr><tr><td></td><td><label>Text:</label></td><td><textarea form="cardInfo" name="text'+subCardNum+'"></textarea></td></tr>';
            break;
        case 'weather':
            document.getElementById('subCardStuff' + subCardNum).innerHTML = '<tr><td></td><td><label>CSS ID:</label></td><td><input type="text" name="cssid'+subCardNum+'"></td></tr><tr><td></td><td><label>Title:</label></td><td><input type="text" name="title'+subCardNum+'"></td></tr><tr><td></td><td><label>Location:</label></td><td><input type="text" name="location'+subCardNum+'"></td></tr><tr><td></td><td><label>Units</label></td><td><select name="units'+subCardNum+'"><option value="I">Imperial</option><option value="M">Metric</option><option value="K">Kelvin</option></select></td></tr><tr><td></td><td>Full:<input class="full" type="checkbox" name="full'+subCardNum+'"></td></tr><tr><td></td><td>Current:<input type="checkbox" class="current" name="current'+subCardNum+'"></td><td>Today:<input type="checkbox" class="today" name="today'+subCardNum+'">&emsp;Forecast:<input type="checkbox" class="forecast" name="forecast'+subCardNum+'"></td></tr>'
            document.querySelector('#subCardStuff' + subCardNum + ' input.full').addEventListener('change', function () {
                if (document.querySelector('#subCardStuff' + subCardNum + ' input.full').checked) {
                    document.querySelector('#subCardStuff' + subCardNum + ' input.current').checked = true;
                    document.querySelector('#subCardStuff' + subCardNum + ' input.today').checked = true;
                    document.querySelector('#subCardStuff' + subCardNum + ' input.forecast').checked = true;
                } else {
                    document.querySelector('#subCardStuff' + subCardNum + ' input.current').checked = false;
                    document.querySelector('#subCardStuff' + subCardNum + ' input.today').checked = false;
                    document.querySelector('#subCardStuff' + subCardNum + ' input.forecast').checked = false;
                }
            });
            document.querySelector('#subCardStuff' + subCardNum + ' input.current').addEventListener('change', function () {
                if (document.querySelector('#subCardStuff' + subCardNum + ' input.current').checked && document.querySelector('#subCardStuff' + subCardNum + ' input.today').checked && document.querySelector('#subCardStuff' + subCardNum + ' input.forecast').checked) {
                    document.querySelector('#subCardStuff' + subCardNum + ' input.full').checked = true;
                } else {
                    document.querySelector('#subCardStuff' + subCardNum + ' input.full').checked = false;
                }
            });
            document.querySelector('#subCardStuff' + subCardNum + ' input.today').addEventListener('change', function () {
                if (document.querySelector('#subCardStuff' + subCardNum + ' input.current').checked && document.querySelector('#subCardStuff' + subCardNum + ' input.today').checked && document.querySelector('#subCardStuff' + subCardNum + ' input.forecast').checked) {
                    document.querySelector('#subCardStuff' + subCardNum + ' input.full').checked = true;
                } else {
                    document.querySelector('#subCardStuff' + subCardNum + ' input.full').checked = false;
                }
            });
            document.querySelector('#subCardStuff' + subCardNum + ' input.forecast').addEventListener('change', function () {
                if (document.querySelector('#subCardStuff' + subCardNum + ' input.current').checked && document.querySelector('#subCardStuff' + subCardNum + ' input.today').checked && document.querySelector('#subCardStuff' + subCardNum + ' input.forecast').checked) {
                    document.querySelector('#subCardStuff' + subCardNum + ' input.full').checked = true;
                } else {
                    document.querySelector('#subCardStuff' + subCardNum + ' input.full').checked = false;
                }
            });
            break;
    }
}
document.getElementById('add').addEventListener('click', function() {
    document.getElementById('block').setAttribute('style','display:block;');
    document.getElementById('addCard').setAttribute('style','display:block;');

    document.getElementById("cardType").addEventListener('change', function () {
        switch (document.getElementById("cardType").value) {
            case '':
                document.getElementById('cardStuff').innerHTML = '';
                break;
            case "countDown":
                document.getElementById('cardStuff').innerHTML = '<tr><td><label>CSS ID:</label></td><td><input type="text" name="cssid"></td></tr><tr><td><label>Title:</label></td><td><input type="text" name="title"></td></tr><tr><td><label>Repeats:</label></td><td><select name="repeat" id="repeat"><option value="none">None</option><option value="yearly">Yearly</option><option value="monthly">Monthly</option><option value="daily">Daily</option><option value="hourly">Hourly</option></select></td></tr><tr><td><label>Count To:</label></td></tr><tr><td><label>Year:</label></td><td><input type="text" name="year" id="year"></td></tr><tr><td><label>Month:</label></td><td><input type="text" name="month" id="month"></td></tr><tr><td><label>Day:</label></td><td><input type="text" name="day" id="day"></td></tr><tr><td><label>Hour:</label></td><td><input type="text" name="hour" id="hour"></td></tr><tr><td><label>Minute:</label></td><td><input type="text" name="minute"></td></tr><tr><td><label>Second:</label></td><td><input type="text" name="second"></td></tr>';
                document.getElementById('repeat').addEventListener('change', function () {
                    switch (document.getElementById('repeat').value) {
                        case "none":
                            document.getElementById('year').removeAttribute('disabled');
                            document.getElementById('month').removeAttribute('disabled');
                            document.getElementById('day').removeAttribute('disabled');
                            document.getElementById('hour').removeAttribute('disabled');
                            break;
                        case "yearly":
                            document.getElementById('year').setAttribute('disabled', '');
                            document.getElementById('month').removeAttribute('disabled');
                            document.getElementById('day').removeAttribute('disabled');
                            document.getElementById('hour').removeAttribute('disabled');
                            break;
                        case "monthly":
                            document.getElementById('year').setAttribute('disabled', '');
                            document.getElementById('month').setAttribute('disabled', '');
                            document.getElementById('day').removeAttribute('disabled');
                            document.getElementById('hour').removeAttribute('disabled');
                            break;
                        case "daily":
                            document.getElementById('year').setAttribute('disabled', '');
                            document.getElementById('month').setAttribute('disabled', '');
                            document.getElementById('day').setAttribute('disabled', '');
                            document.getElementById('hour').removeAttribute('disabled');
                            break;
                        case "hourly":
                            document.getElementById('year').setAttribute('disabled', '');
                            document.getElementById('month').setAttribute('disabled', '');
                            document.getElementById('day').setAttribute('disabled', '');
                            document.getElementById('hour').setAttribute('disabled', '');
                            break;
                    }
                });
                break;
            case 'currentTime':
                document.getElementById('cardStuff').innerHTML = '<tr><td><label>CSS ID:</label></td><td><input type="text" name="cssid"></td></tr><tr><td><label>Style:</label></td><td><select name="style"><option value="digital">Digital</option><option value="blocks">Blocks</option></select></td></tr></tr>';
                break;
            case 'pictureFrame':
                document.getElementById('cardStuff').innerHTML = '<tr><td><label>Title:</label></td><td><input type="text" name="title"></td></tr><tr><td><label>Width:</label></td><td><input type="text" name="width"></td></tr><tr><td><label>Height:</label></td><td><input type="text" name="height"></td></tr><tr><td><label>File:</label></td><td><input type="text" name="file"></td></tr><tr><td><label>Caption:</label></td><td><textarea form="cardInfo" name="caption"></textarea></td></tr>';
                break;
            case 'videoFrame':
                document.getElementById('cardStuff').innerHTML = '<tr><td><label>Title:</label></td><td><input type="text" name="title"></td></tr><tr><td><label>Width:</label></td><td><input type="text" name="width"></td></tr><tr><td><label>Height:</label></td><td><input type="text" name="height"></td></tr><tr><td><label>File:</label></td><td><input type="text" name="videourl"></td></tr>'
                break;
            case 'textCard':
                document.getElementById('cardStuff').innerHTML = '<tr><td><label>Title:</label></td><td><input type="text" name="title"></td></tr><tr><td><label>Width:</label></td><td><input type="text" name="width"></td></tr><tr><td><label>Text:</label></td><td><textarea form="cardInfo" name="text"></textarea></td></tr>';
                break;
            case 'weather':
                document.getElementById('cardStuff').innerHTML = '<tr><td><label>CSS ID:</label></td><td><input type="text" name="cssid"></td></tr><tr><td><label>Title:</label></td><td><input type="text" name="title"></td></tr><tr><td><label>Location:</label></td><td><input type="text" name="location"></td></tr><tr><td><label>Units</label></td><td><select name="units"><option value="I">Imperial</option><option value="M">Metric</option><option value="K">Kelvin</option></select></td></tr><tr><td>Full:<input id="full" type="checkbox" name="full"></td></tr><tr><td>Current:<input type="checkbox" id="current" name="current"></td><td>Today:<input type="checkbox" id="today" name="today">&emsp;Forecast:<input type="checkbox" id="forecast" name="forecast"></td></tr>'
                document.getElementById('full').addEventListener('change', function () {
                    if (document.getElementById('full').checked) {
                        document.getElementById('current').checked = true;
                        document.getElementById('today').checked = true;
                        document.getElementById('forecast').checked = true;
                    } else {
                        document.getElementById('current').checked = false;
                        document.getElementById('today').checked = false;
                        document.getElementById('forecast').checked = false;
                    }
                });
                document.getElementById('current').addEventListener('change', function () {
                    if (document.getElementById('current').checked && document.getElementById('today').checked && document.getElementById('forecast').checked) {
                        document.getElementById('full').checked = true;
                    } else {
                        document.getElementById('full').checked = false;
                    }
                });
                document.getElementById('today').addEventListener('change', function () {
                    if (document.getElementById('current').checked && document.getElementById('today').checked && document.getElementById('forecast').checked) {
                        document.getElementById('full').checked = true;
                    } else {
                        document.getElementById('full').checked = false;
                    }
                });
                document.getElementById('forecast').addEventListener('change', function () {
                    if (document.getElementById('current').checked && document.getElementById('today').checked && document.getElementById('forecast').checked) {
                        document.getElementById('full').checked = true;
                    } else {
                        document.getElementById('full').checked = false;
                    }
                });
                break;
            case 'megaCard':
                var subCardNum = 0;
                document.getElementById('cardStuff').innerHTML = '<tr><td><label>CSS ID:</label></td><td><input type="hidden" id="length" name="length" value="0"><input type="text" name="cssid"></td></tr><tr><td><label>Title:</label></td><td><input type="text" name="title"</td></tr><tbody id="subCards"></tbody><tr><input type="button" value="+" id="addSubCard"></tr>';
                document.getElementById('addSubCard').addEventListener("click", function () {
                    subCardNum++;
                    document.getElementById('length').setAttribute('value',subCardNum);
                    document.getElementById('subCards').insertAdjacentHTML('beforebegin', '<table id="subCard' + subCardNum + '"><tr><td><select onchange="subCard(' + subCardNum + ')" id="subCardType' + subCardNum + '" name="cards'+subCardNum+'"><option></option><option value="countDown">Count Down</option><option value="currentTime">Clock</option><option value="pictureFrame">Picture</option><option value="videoFrame">Video</option><option value="textCard">Text</option><option value="weather">Weather</option></select></td></tr><tbody id="subCardStuff' + subCardNum + '"></tbody></table>');
                });
                break;
        }
    });

});
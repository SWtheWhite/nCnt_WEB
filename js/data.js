var requestURL = 'http://114.71.48.94:8080/ssccounter_info';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var statusdata = request.response;

    var temperature = parseInt(statusdata["temperature"])
    var humidity = parseInt(statusdata["humidity"])
    var dust = parseInt(statusdata["dust"])
    var lamp = parseInt(statusdata["lamp"])
    var people_count = parseInt(statusdata["people_count"])
    var last_time = parseInt(statusdata["last_time"])
    var get_time = parseInt(statusdata["get_time"])
    var air_cleaner = parseInt(statusdata["air_cleaner"])

    $('#get_time').html(get_time);
    $('#people_count').html(people_count + " 명");
    $('#temperature').html(temperature + " °C");
    $('#humidity').html(humidity + " %");

    changeimage(people_count, nCntimg)
}

function changeimage(cnt,imgid) {
    if (cnt == 0) {
        document.getElementById(imgid).src = "./images/0 people.png";
    }
    else if (cnt == 1) {
        document.getElementById(imgid).src = "./images/1 people.png";
    }
    else if (cnt == 2) {
        document.getElementById(imgid).src = "./images/2 people.png";
    }
    else if (cnt == 3) {
        document.getElementById(imgid).src = "./images/3 people.png";
    }
    else if (cnt == 4) {
        document.getElementById(imgid).src = "./images/4 people.png";
    }
    else if (cnt == 5) {
        document.getElementById(imgid).src = "./images/5 people.png";
    }
    else if (cnt == 6) {
        document.getElementById(imgid).src = "./images/6 people.png";
    }
    else {
        document.getElementById(imgid).src = "./images/people.png";
    }
}

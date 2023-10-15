
$(document).ready(function () {

    $('#citySelected').change(function () {
        var value = $('#citySelected').val()
        console.log(value)
        var location = JSON.parse(value);
        console.log(location)
        $.get("http://www.7timer.info/bin/api.pl?lon=" + location.lon + "&lat=" + location.lat + "&product=civillight&output=json", function (data, status) {
            var obj = JSON.parse(data);
            $('#weather_info').empty();
            for (var i = 0; i < obj.dataseries.length; i++) {
                var item = obj.dataseries[i];
                $html = ' <div class="col-sm-2" ><p >' + item['date'] + '</p ><img src = "images/' + item['weather'] + '.png" style="width: 100px;" /><h3>' + item['weather'] + '</h3><p>max: ' + item['temp2m']['max'] + '</p><p>min: ' + item['temp2m']['min'] + '</p></div > ';
                $('#weather_info').append($html);
            }
        });
    });

});
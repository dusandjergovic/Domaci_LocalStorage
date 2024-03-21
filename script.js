$(document).ready(function() {

    $("#btn").click(function() {
        let userChoice = ($("#userChoice").find(":selected").text())

        $.ajax({
            url: 'http://api.weatherapi.com/v1/current.json?',
            method: 'GET',
            data: {
                key: 'eaac2ed3fb354158ab080556240503',
                q: userChoice,
                aqi: 'no'
            },
            success:function(response) {
                let temp = response.current.temp_c;
                let poruka = $("#poruka");
                poruka.text(`Grad: ${userChoice}, temperatura: ${temp}°C`);
                localStorage.setItem('poruka', poruka.text());
            },
        })
    })

    let storedMessage = localStorage.getItem('poruka');
    if (storedMessage) {
        $("#poruka").text(storedMessage);
    }

    // $.ajax({
    //     url: 'http://api.weatherapi.com/v1/current.json?',
    //     method: 'GET',
    //     data: {
    //         key: 'eaac2ed3fb354158ab080556240503',
    //         q: userChoice,
    //         aqi: 'no'
    //     },
    //     success:function(response) {
    //         console.log(response);
    //     }
    // })

})
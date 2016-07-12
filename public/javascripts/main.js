
$(document).ready(function () {
	var chart = c3.generate({
    bindTo: '#chart',
    data: {
	    columns: [
        ['Temperature'],
        ['Humidity'],
      ],
      axes: {
        data1: 'y',
        data2: 'y2',
      },
      type: 'spline',
    },
    axis: {
      y: {
        label: {
          text: 'Temperature',
          position: 'outer-middle',
        },
      },
      y2: {
        label: {
          text: 'Humidity',
          position: 'outer-middle',
        },
        show: true,
      },
    },
  });

  var chart_data = [['Temperature'], ['Humidity']];

  setInterval(function () {
    $.ajax({
      url: '/sensors',
      method: 'GET',
      dataType: 'json'
    }).done(function (response_data) {
      chart_data[0].push(response_data.temperature.value);
      chart_data[1].push(response_data.humidity.value);
      if (chart_data.length > 6) {
        chard_data[0].splice(1, 1);
        chart_data[1].splice(1, 1);
      }
      chart.load({
        columns: chart_data
      });
    });
  }, 1000);
});



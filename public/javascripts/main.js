
$(document).ready(function () {
  var chart_data = [['Temperature', 0], ['Humidity', 0]];
  
  var chart_options = {
    bindTo: '#chart',
    data: {
	    columns: [],
      axes: {
        Temperature: 'y',
        Humidity: 'y2',
      },
      type: 'spline',
    },
    axis: {
      y: {
        min: 10,
        max: 40,
        label: {
          text: 'Temperature',
          position: 'outer-middle',
        },
      },
      y2: {
        min: 20,
        max: 100,
        label: {
          text: 'Humidity',
          position: 'outer-middle',
        },
        show: true,
      },
    },
  };

  chart_options.data.columns = chart_data;

  var chart = c3.generate(chart_options);

  setInterval(function () {
    $.ajax({
      url: '/sensor',
      method: 'GET',
      dataType: 'json'
    }).done(function (response_data) {
      chart_data[0].push(parseFloat(response_data.temperature));
      chart_data[1].push(parseFloat(response_data.humidity));
      if (chart_data[0].length > 31) {
        chart_data[0].splice(1, 1);
        chart_data[1].splice(1, 1);
      }
      chart_options.data.columns = chart_data;
      chart = c3.generate(chart_options);
    });
  }, 1000);
});



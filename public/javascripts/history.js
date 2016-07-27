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
        min: 20,
        max: 40,
        label: {
          text: 'Temperature',
          position: 'outer-middle',
        },
      },
      y2: {
        min: 30,
        max: 80,
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

  $.ajax({
    url: '/stored',
    method: 'GET',
    dataType: 'json'
  }).done(function (response_data) {
    console.log(response_data);
  });
});

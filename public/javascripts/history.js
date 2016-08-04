$(document).ready(function () {
  var chart_data = [['x'], ['Temperature'], ['Humidity']];

  var chart_options = {
    bindTo: '#chart',
    data: {
      x: 'x',
      xFormat: '%Y-%m-%d %H:%M:%S',
      columns: [],
      axes: {
        Temperature: 'y',
        Humidity: 'y2',
      },
      type: 'area',
    },
    axis: {
      x:{
        type: 'timeseries',
        tick: {
          format: "%Y-%m-%d %H:%M:%S"
        }
      },
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
  }).done(function (response) {
    console.log(response);
    response.data.forEach(function(data){
      if (data.temperature > 0 && data.temperature < 50){
        chart_data[0].push(data.date);
        chart_data[1].push(data.temperature);
        chart_data[2].push(data.humidity);
      }
    });
    chart_options.data.columns = chart_data;
    chart = c3.generate(chart_options);
  });
});

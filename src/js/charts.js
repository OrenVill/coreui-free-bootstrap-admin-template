var getJSON = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
  var status = xhr.status;
  if (status === 200) {
      callback(null, xhr.response);
  } else {
      callback(status, xhr.response);
  }
  };
  xhr.send();
};

let RateFloatsList = []

function UpdateBtcChart(){
  getJSON('https://api.coindesk.com/v1/bpi/currentprice.json',
    function(err, data) {
      if (err !== null) {
          console.log("Errrrrror")
      } else {
          RateFloatsList = [
            data.bpi.USD.rate_float,
            data.bpi.GBP.rate_float,
            data.bpi.EUR.rate_float
          ]
          barChart.data.datasets[0].data = RateFloatsList
          barChart.update()
      }
    });  
}

UpdateBtcChart()


let computers = 0
let televisions = 0
let servers = 0


function UpdateDevicesSummury(){
  getJSON('http://localhost:3000/src/js/jsons/devices_graphe.json',
    function(err, data) {
      if (err !== null) {
          console.log("Errrrrror")
      } else {
        computers = 0
        televisions = 0
        servers = 0
        console.log(data.devices)
        data.devices.forEach(device => {
          switch (device.dev_type) {
            case "computer":
              computers += 1
              break
            case "television":
              televisions += 1
              break
            case "server":
              servers += 1
              break
          }

          doughnutChart.data.datasets[0].data = [computers, televisions, servers]
          doughnutChart.update()
        });
      }
    });    
}

UpdateDevicesSummury()

var intervalId = window.setInterval(UpdateBtcChart(), 5000);




 

var DevicesIntervalId = window.setInterval(UpdateDevicesSummury(), 5000);

console.log(computers, televisions, servers)






/* global Chart */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template main.js
 * Licensed under MIT (https://github.com/coreui/coreui-free-bootstrap-admin-template/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

// random Numbers
const random = () => Math.round(Math.random() * 100)

// eslint-disable-next-line no-unused-vars
const lineChart = new Chart(document.getElementById('canvas-1'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: [random(), random(), random(), random(), random(), random(), random()]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: [random(), random(), random(), random(), random(), random(), random()]
      }
    ]
  },
  options: {
    responsive: true
  }
})

// eslint-disable-next-line no-unused-vars
const barChart = new Chart(document.getElementById('canvas-2'), {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        backgroundColor: 'rgba(220, 220, 220, 0.5)',
        borderColor: 'rgba(220, 220, 220, 0.8)',
        highlightFill: 'rgba(220, 220, 220, 0.75)',
        highlightStroke: 'rgba(220, 220, 220, 1)',
        data: RateFloatsList
      }
      // {
      //   backgroundColor: 'rgba(151, 187, 205, 0.5)',
      //   borderColor: 'rgba(151, 187, 205, 0.8)',
      //   highlightFill: 'rgba(151, 187, 205, 0.75)',
      //   highlightStroke: 'rgba(151, 187, 205, 1)',
      //   data: [random(), random(), random(), random(), random(), random(), random()]
    ]
  },
  options: {
    responsive: true
  }
})

// eslint-disable-next-line no-unused-vars
const doughnutChart = new Chart(document.getElementById('canvas-3'), {
  type: 'doughnut',
  data: {
    labels: ['computers', 'televisions', 'servsrs',],
    datasets: [{
      data: [computers, televisions, servers],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
   }
  }
})

// eslint-disable-next-line no-unused-vars
const radarChart = new Chart(document.getElementById('canvas-4'), {
  type: 'radar',
  data: {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220, 220, 220, 1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151, 187, 205, 1)',
        data: [28, 48, 40, 19, 96, 78, 34]
      }
    ]
  },
  options: {
    responsive: true
  }
})

// eslint-disable-next-line no-unused-vars
const pieChart = new Chart(document.getElementById('canvas-5'), {
  type: 'pie',
  data: {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  },
  options: {
    responsive: true
  }
})

// eslint-disable-next-line no-unused-vars
const polarAreaChart = new Chart(document.getElementById('canvas-6'), {
  type: 'polarArea',
  data: {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [{
      data: [11, 16, 7, 3, 14],
      backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB']
    }]
  },
  options: {
    responsive: true
  }
})

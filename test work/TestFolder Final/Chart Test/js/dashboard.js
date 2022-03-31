/* globals Chart:false, feather:false */


// const pieChart = document.querySelector('myChart_pie');
// const myChart_pie = new Chart(config,{

// })
// const config = {
//   type: 'doughnut',
//   data: data,
// };
// const data = {
//   labels: [
//     'Red',
//     'Blue',
//     'Yellow'
//   ],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [300, 50, 100],
//     backgroundColor: [
//       'rgb(255, 99, 132)',
//       'rgb(54, 162, 235)',
//       'rgb(255, 205, 86)'
//     ],
//     hoverOffset: 4
//   }]
// };

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })
  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels:[
        'Jan',
        'Fed',
        'Mar',
        'Apr',
        'MAy',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [{
        data: [
          230,
          180,
          230,
          240,
          250,
          240,
          220,
          210,
          225,
          230,
          270,
          280
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: 'rgb(255,183,103)',
        borderWidth: 4,
        pointBackgroundColor: 'rgb(255,183,103)'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            suggestedMin: 100,
            suggestedMax: 350,
            beginAtZero: false,
          }
        }]
        
      },
      legend: {
        display: false
      }
    }
  })
})()


// Chart2 , pie
// const DATA_COUNT = 5;
// const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

// const data = {
//   labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: Utils.numbers(NUMBER_CFG),
//       backgroundColor: Object.values(Utils.CHART_COLORS),
//     }
//   ]
// };


// const data = {
//   labels: [
//     'Deposit',
//     'Expese',
//     'payable',
//     ''
//   ],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [75, 50, 55, 120],
//     backgroundColor: [
//       'rgb(255, 205, 86)',
//       'rgb(255, 99, 132)',
//       'rgb(54, 162, 235)',
//       'rgb(222,222,222)'
//     ],
//     hoverOffset: 4
//   }]
// };
// const config = {
//   type: 'doughnut',
//   data: data,
//   options: {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Doughnut Chart'
//       }
//     }
//   },
// };
// const myChart_pie = new Chart(
//   document.getElementById('myChart_pie'),
//   config
// );


const data = {
  labels: [
    'Deposit',
    'Expese',
    'payable',
    'etc'
  ],
  datasets: [{

    label: 'My First Dataset',
    data: [75, 50, 55, 120],
    backgroundColor: [
      'rgb(255, 205, 86)',
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(222,222,222)'
    ],
    hoverOffset: 4
  }]
};

const config = {

  type: 'doughnut',
  data: data,
  options: {
    responsive: true,
    legend: {
      // display:false,
      align : 'start',
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'Earning in Month'
    },
  },
};
const myChart_pie = new Chart(
  document.getElementById('myChart_pie'), 
  config
);

(function ($) {
  'use strict';
  $(function () {
    if ($(".dashboard-progress-1").length) {
      $('.dashboard-progress-1').circleProgress({
        value: 0.70,
        size: 125,
        thickness: 7,
        startAngle: 80,
        fill: {
          gradient: ["#7922e5", "#1579ff"]
        }
      });
    }
    if ($(".dashboard-progress-1-dark").length) {
      $('.dashboard-progress-1-dark').circleProgress({
        value: 0.70,
        size: 125,
        thickness: 7,
        startAngle: 10,
        emptyFill: '#eef0fa',
        fill: {
          gradient: ["#7922e5", "#1579ff"]
        }
      });
    }

    if ($(".dashboard-progress-2").length) {
      $('.dashboard-progress-2').circleProgress({
        value: 0.60,
        size: 125,
        thickness: 7,
        startAngle: 10,
        fill: {
          gradient: ["#429321", "#b4ec51"]
        }
      });
    }
    if ($(".dashboard-progress-2-dark").length) {
      $('.dashboard-progress-2-dark').circleProgress({
        value: 0.60,
        size: 125,
        thickness: 7,
        startAngle: 10,
        emptyFill: '#eef0fa',
        fill: {
          gradient: ["#429321", "#b4ec51"]
        }
      });
    }

    if ($(".dashboard-progress-3").length) {
      $('.dashboard-progress-3').circleProgress({
        value: 0.90,
        size: 125,
        thickness: 7,
        startAngle: 10,
        fill: {
          gradient: ["#f76b1c", "#fad961"]
        }
      });
    }
    if ($(".dashboard-progress-3-dark").length) {
      $('.dashboard-progress-3-dark').circleProgress({
        value: 0.90,
        size: 125,
        thickness: 7,
        startAngle: 10,
        emptyFill: '#eef0fa',
        fill: {
          gradient: ["#f76b1c", "#fad961"]
        }
      });
    }

    if ($(".dashboard-progress-4").length) {
      $('.dashboard-progress-4').circleProgress({
        value: 0.45,
        size: 125,
        thickness: 7,
        startAngle: 10,
        fill: {
          gradient: ["#9f041b", "#f5515f"]
        }
      });
    }
    if ($(".dashboard-progress-4-dark").length) {
      $('.dashboard-progress-4-dark').circleProgress({
        value: 0.45,
        size: 125,
        thickness: 7,
        startAngle: 10,
        emptyFill: '#eef0fa',
        fill: {
          gradient: ["#9f041b", "#f5515f"]
        }
      });
    }


    if ($("#total-profit").length) {
      const ctx = document.getElementById('total-profit');
      var graphGradient1 = document.getElementById('total-profit').getContext("2d");

      var gradientColor = graphGradient1.createLinearGradient(15, 0, 15, 190);
      gradientColor.addColorStop(0, 'rgba(0, 98, 255, .3)');
      gradientColor.addColorStop(1, 'rgba(0, 0, 0, .2)');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
          datasets: [
            {
              label: 'Margin',
              data: [5, 4, 6, 4.5, 5.5, 4, 5, 4.2, 5.5],
              backgroundColor: gradientColor,
              borderColor: [
                '#0062ff'
              ],
              borderWidth: 3,
              fill: true,
              pointRadius: 0,
              tension: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            line: {
              tension: .4,
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                color: "#6C7383",
                display: false,
                beginAtZero: false,
                steps: 100,
                stepValue: 5,
                max: 150
              },
            },
            y: {
              beginAtZero: true,
              border: {
                display: false
              },
              grid: {
                display: false,
              },
              ticks: {
                color: "#6C7383",
                beginAtZero: false,
                stepsize: 10,
                display: false,
              },
            }
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: 'rgb(255, 99, 132)'
              }
            }
          }
        },
      });

    }

    if ($("#total-expences").length) {
      const ctx = document.getElementById('total-expences');
      var graphGradient1 = document.getElementById('total-expences').getContext("2d");

      var gradientColor = graphGradient1.createLinearGradient(15, 0, 15, 190);
      gradientColor.addColorStop(0, 'rgba(61, 213, 151, .3)');
      gradientColor.addColorStop(1, 'rgba(0, 0, 0, .2)');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
          datasets: [
            {
              label: 'Margin',
              data: [4, 5, 6, 5, 4, 5, 4, 6, 5],
              backgroundColor: [gradientColor],
              borderColor: [
                '#3dd597'
              ],
              borderWidth: 3,
              fill: true,
              pointRadius: 0,
              tension: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            line: {
              tension: .4,
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                color: "#6C7383",
                display: false,
                beginAtZero: false,
                steps: 100,
                stepValue: 5,
                max: 150
              },
            },
            y: {
              beginAtZero: true,
              border: {
                display: false
              },
              grid: {
                display: false,
              },
              ticks: {
                color: "#6C7383",
                beginAtZero: false,
                stepsize: 10,
                display: false,
              },
            }
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: 'rgb(255, 99, 132)'
              }
            }
          }
        },
      });

    }

    if ($("#device-sales").length) {
      const ctx = document.getElementById('device-sales');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["Iphone", "Google", "Samsung", "Huawei", "Xiaomi", "Oppo", "Vivo", "Lg"],
          datasets: [
            {
              label: 'Demand',
              data: [450, 500, 300, 350, 200, 320, 310, 700],
              backgroundColor: [
                '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
              ],
              borderColor: [
                '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
              ],
              borderWidth: 1,
              fill: false,
              barPercentage: .5,
              categoryPercentage: 0.4,
            },
            {
              label: 'Supply',
              data: [250, 100, 310, 75, 290, 100, 500, 260],
              backgroundColor: [
                '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
              ],
              borderColor: [
                '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
              ],
              borderWidth: 1,
              fill: false,
              barPercentage: .5,
              categoryPercentage: 0.4,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
              tension: .4,
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                color: "#6C7383",
                display: true,
                beginAtZero: false,
                steps: 100,
                stepValue: 5,
                max: 150
              },
            },
            y: {
              beginAtZero: true,
              border: {
                display: false
              },
              grid: {
                display: true,
              },
              ticks: {
                color: "#6C7383",
                beginAtZero: false,
                stepsize: 10,
                display: true,
                callback: function (value, index, ticks) {
                  return value + 'k';
                }
              },
            }
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: 'rgb(255, 99, 132)'
              }
            }
          }
        },
        plugins: [{
          afterDatasetUpdate: function (chart, args, options) {
            const chartId = chart.canvas.id;
            var i;
            const legendId = `${chartId}-legend`;
            const ul = document.createElement('ul');
            for (i = 0; i < chart.data.datasets.length; i++) {
              ul.innerHTML += `
                  <li>
                    <span style="background-color: ${chart.data.datasets[i].backgroundColor[i]}"></span>
                    ${chart.data.datasets[i].label}
                  </li>
                `;
            }
            return document.getElementById(legendId).appendChild(ul);
          }
        }]
      });

    }

    if ($("#account-retension").length) {
      const ctx = document.getElementById('account-retension');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [
            {
              label: 'Demand',
              data: [33, 48, 39, 36, 36],
              backgroundColor: [
                '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
              ],
              borderColor: [
                '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
              ],
              borderWidth: 1,
              fill: false
            },
            {
              label: 'Demand',
              data: [94, 28, 49, 25, 20],
              backgroundColor: [
                '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
              ],
              borderColor: [
                '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
              ],
              borderWidth: 1,
              fill: false
            },
            {
              label: 'Demand',
              data: [66, 33, 25, 36, 69],
              backgroundColor: [
                '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
              ],
              borderColor: [
                '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
              ],
              borderWidth: 1,
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
              tension: .4,
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: false,
              },
              ticks: {
                color: "#a7afb7",
                display: true,
                beginAtZero: false,
                steps: 100,
                stepValue: 5,
                max: 150
              },
            },
            y: {
              beginAtZero: true,
              border: {
                display: false
              },
              grid: {
                display: false,
              },
              ticks: {
                color: "#a7afb7",
                beginAtZero: false,
                stepsize: 10,
                display: false,
                callback: function (value, index, ticks) {
                  return value + 'k';
                }
              },
            }
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: 'rgb(255, 99, 132)'
              }
            }
          }
        },
      });

    }

    if ($("#page-view-analytic").length) {

      const ctx = document.getElementById('page-view-analytic');
      var graphGradient1 = document.getElementById('page-view-analytic').getContext("2d");

      var gradientColor = graphGradient1.createLinearGradient(25, 0, 25, 420);
      gradientColor.addColorStop(0, 'rgba(55, 208, 181, 0.34)');
      gradientColor.addColorStop(1, 'rgba(254, 254, 254, 0)');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
          datasets: [
            {
              label: 'This week',
              data: [46, 49, 51, 58, 63.61, 65, 64, 69, 70, 78, 80, 80, 90, 85, 87, 92, 97, 102, 107, 109, 111, 111, 120, 130, 132, 136, 140, 145],
              backgroundColor: [
                gradientColor,
              ],
              borderColor: [
                '#3dd597'
              ],
              borderWidth: 2,
              fill: true,
              pointBorderColor: "#fff",
              pointBackgroundColor: "#3dd597",
              pointBorderWidth: 2,
              pointRadius: 4,
            },
            {
              label: 'Current week',
              data: [16, 19, 21, 28, 33.31, 35, 34, 39, 40, 48, 50, 50, 51, 55, 57, 62, 67, 69, 68, 70, 72, 75, 74, 80, 79, 80, 84, 90],
              backgroundColor: [
                'rgba(216,247,234, 0.19)',
              ],
              borderColor: [
                '#0162ff'
              ],
              borderWidth: 2,
              fill: false,
              pointBorderColor: "#fff",
              pointBackgroundColor: "#0162ff",
              pointBorderWidth: 2,
              pointRadius: 4,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
              tension: .4,
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                color: "#6C7383",
                display: false,
                beginAtZero: false,
              },
            },
            y: {
              beginAtZero: true,
              border: {
                display: false
              },
              grid: {
                display: true,
              },
              ticks: {
                color: "#a7afb7",
                beginAtZero: false,
                stepsize: 20,
                stepValue: 20,
                max: 350,
                display: true,
              },
            }
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: 'rgb(255, 99, 132)'
              }
            }
          }
        },
        plugins: [{
          afterDatasetUpdate: function (chart, args, options) {
            const chartId = chart.canvas.id;
            var i;
            const legendId = `${chartId}-legend`;
            const ul = document.createElement('ul');
            for (i = 0; i < chart.data.datasets.length; i++) {
              ul.innerHTML += `
                  <li>
                    <span style="background-color: ${chart.data.datasets[i].pointBackgroundColor}"></span>
                    ${chart.data.datasets[i].label}
                  </li>
                `;
            }
            return document.getElementById(legendId).appendChild(ul);
          }
        }]
      });

    }

    if ($("#my-balance").length) {
      const ctx = document.getElementById('my-balance');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr"],
          datasets: [
            {
              label: 'Demand',
              data: [90, 85, 100, 105],
              backgroundColor: [
                '#0062ff', '#0062ff', '#0062ff', '#0062ff',
              ],
              borderColor: [
                '#0062ff', '#0062ff', '#0062ff', '#0062ff',
              ],
              barPercentage: .7,
            },
            {
              label: 'Supply',
              data: [200, 200, 200, 200],
              backgroundColor: [
                '#eef0fa', '#eef0fa', '#eef0fa', '#eef0fa',
              ],
              borderColor: [
                '#eef0fa', '#eef0fa', '#eef0fa', '#eef0fa',
              ],
              barPercentage: .7,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
              tension: .4,
            }
          },
          scales: {
            x: {
              stacked: true,
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                color: "#6C7383",
                display: true,
                beginAtZero: false,
                steps: 100,
                stepValue: 5,
                max: 150
              },
            },
            y: {
              stacked: true,
              beginAtZero: true,
              border: {
                display: false
              },
              grid: {
                display: false,
              },
              ticks: {
                color: "#6C7383",
                beginAtZero: false,
                stepsize: 10,
                display: false,
              },
            }
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: 'rgb(255, 99, 132)'
              }
            }
          }
        },
      });

    }

    if ($("#prediction-1").length) {
      const ctx = document.getElementById('prediction-1');
      var graphGradient1 = document.getElementById('prediction-1').getContext("2d");

      var gradientColor = graphGradient1.createLinearGradient(25, 0, 25, 75);
      gradientColor.addColorStop(0, 'rgba(164,97,216, 1)');
      gradientColor.addColorStop(1, 'rgba(24, 24, 36, 0.27)');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: 'Margin',
              data: [5, 10, 6, 12, 7, 14, 16],
              backgroundColor: gradientColor,
              borderColor: [
                '#a461d8'
              ],
              borderWidth: 3,
              fill: true,
              pointRadius: 0,

            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
              tension: .4,
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                color: "#6C7383",
                display: false,
                beginAtZero: false,
                steps: 100,
                stepValue: 5,
                max: 150
              },
            },
            y: {
              beginAtZero: true,
              border: {
                display: false
              },
              grid: {
                display: false,
              },
              ticks: {
                color: "#6C7383",
                beginAtZero: false,
                stepsize: 10,
                display: false,
              },
            }
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: 'rgb(255, 99, 132)'
              }
            }
          }
        },
      });

    }
    if ($("#prediction-2").length) {
      const ctx = document.getElementById('prediction-2');
      var graphGradient1 = document.getElementById('prediction-2').getContext("2d");

      var gradientColor = graphGradient1.createLinearGradient(25, 0, 25, 75);
      gradientColor.addColorStop(0, 'rgba(164,97,216, 1)');
      gradientColor.addColorStop(1, 'rgba(24, 24, 36, 0.27)');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: 'Margin',
              data: [16, 14, 7, 12, 6, 10, 5],
              backgroundColor: gradientColor,
              borderColor: [
                '#a461d8'
              ],
              borderWidth: 3,
              fill: true,
              pointRadius: 0,

            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
              tension: .4,
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                color: "#6C7383",
                display: false,
                beginAtZero: false,
                steps: 100,
                stepValue: 5,
                max: 150
              },
            },
            y: {
              beginAtZero: true,
              border: {
                display: false
              },
              grid: {
                display: false,
              },
              ticks: {
                color: "#6C7383",
                beginAtZero: false,
                stepsize: 10,
                display: false,
              },
            }
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: 'rgb(255, 99, 132)'
              }
            }
          }
        },
      });

    }

    if ($("#prediction-3").length) {
      const ctx = document.getElementById('prediction-3');
      var graphGradient1 = document.getElementById('prediction-3').getContext("2d");

      var gradientColor = graphGradient1.createLinearGradient(25, 0, 25, 75);
      gradientColor.addColorStop(0, '#0062ff');
      gradientColor.addColorStop(1, 'rgba(24, 24, 36, 0.27)');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: 'Margin',
              data: [3, 4, 2, 3, 1, 2, 3],
              backgroundColor: gradientColor,
              borderColor: [
                '#0062ff'
              ],
              borderWidth: 3,
              fill: true,
              pointRadius: 0,

            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
              tension: .4,
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                color: "#6C7383",
                display: false,
                beginAtZero: false,
                steps: 100,
                stepValue: 5,
                max: 150
              },
            },
            y: {
              beginAtZero: true,
              border: {
                display: false
              },
              grid: {
                display: false,
              },
              ticks: {
                color: "#6C7383",
                beginAtZero: false,
                stepsize: 10,
                display: false,
              },
            }
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: 'rgb(255, 99, 132)'
              }
            }
          }
        },
      });

    }

    if ($("#prediction-4").length) {
      const ctx = document.getElementById('prediction-4');
      var graphGradient1 = document.getElementById('prediction-3').getContext("2d");

      var gradientColor = graphGradient1.createLinearGradient(25, 0, 25, 110);
      gradientColor.addColorStop(0, '#0062ff');
      gradientColor.addColorStop(1, 'rgba(255, 255, 255, 0.27)');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: 'Margin',
              data: [3, 2, 1, 3, 2, 4, 3],
              backgroundColor: gradientColor,
              borderColor: [
                '#0062ff'
              ],
              borderWidth: 3,
              fill: true,
              pointRadius: 0,

            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
              tension: .4,
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                color: "#6C7383",
                display: false,
                beginAtZero: false,
                steps: 100,
                stepValue: 5,
                max: 150
              },
            },
            y: {
              beginAtZero: true,
              border: {
                display: false
              },
              grid: {
                display: false,
              },
              ticks: {
                color: "#6C7383",
                beginAtZero: false,
                stepsize: 10,
                display: false,
              },
            }
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: 'rgb(255, 99, 132)'
              }
            }
          }
        },
      });

    }
    if ($("#page-view-analytic-rtl").length) {
      const ctx = document.getElementById('page-view-analytic-rtl');
      var graphGradient1 = document.getElementById('page-view-analytic-rtl').getContext("2d");

      var gradientColor = graphGradient1.createLinearGradient(25, 0, 25, 420);
      gradientColor.addColorStop(0, 'rgba(55, 208, 181, 0.34)');
      gradientColor.addColorStop(1, 'rgba(254, 254, 254, 0)');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
          datasets: [
            {
              label: 'This week',
              data: [46, 49, 51, 58, 63.61, 65, 64, 69, 70, 78, 80, 80, 90, 85, 87, 92, 97, 102, 107, 109, 111, 111, 120, 130, 132, 136, 140, 145],
              backgroundColor: [
                gradientColor
              ],
              borderColor: [
                '#3dd597'
              ],
              borderWidth: 2,
              fill: true,
              pointBorderColor: "#fff",
              pointBackgroundColor: "#3dd597",
              pointBorderWidth: 2,
              pointRadius: 4,
            },
            {
              label: 'Current week',
              data: [16, 19, 21, 28, 33.31, 35, 34, 39, 40, 48, 50, 50, 51, 55, 57, 62, 67, 69, 68, 70, 72, 75, 74, 80, 79, 80, 84, 90],
              backgroundColor: [
                'rgba(216,247,234, 0.19)',
              ],
              borderColor: [
                '#3dd597'
              ],
              borderWidth: 2,
              fill: false,
              pointBorderColor: "#fff",
              pointBackgroundColor: "#0162ff",
              pointBorderWidth: 2,
              pointRadius: 4,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
              tension: .4,
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                color: "#6C7383",
                display: false,
                beginAtZero: false,
              },
            },
            y: {
              beginAtZero: true,
              border: {
                display: false
              },
              grid: {
                display: true,
              },
              ticks: {
                color: "#a7afb7",
                beginAtZero: false,
                stepsize: 20,
                stepValue: 20,
                max: 350,
                display: true,
              },
            }
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: 'rgb(255, 99, 132)'
              }
            }
          }
        },
        plugins: [{
          afterDatasetUpdate: function (chart, args, options) {
            const chartId = chart.canvas.id;
            var i;
            const legendId = `${chartId}-legend`;
            const ul = document.createElement('ul');
            for (i = 0; i < chart.data.datasets.length; i++) {
              ul.innerHTML += `
                  <li>
                    <span style="background-color: ${chart.data.datasets[i].pointBackgroundColor}"></span>
                    ${chart.data.datasets[i].label}
                  </li>
                `;
            }
            return document.getElementById(legendId).appendChild(ul);
          }
        }]
      });

    }
    if ($("#device-sales-rtl").length) {
      const ctx = document.getElementById('device-sales-rtl');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["Iphone", "Google", "Samsung", "Huawei", "Xiaomi", "Oppo", "Vivo", "Lg"],
          datasets: [
            {
              label: 'Demand',
              data: [450, 500, 300, 350, 200, 320, 310, 700],
              backgroundColor: [
                '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
              ],
              borderColor: [
                '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
              ],
              borderWidth: 1,
              fill: false,
              barPercentage: .5,
              categoryPercentage: 0.4,
            },
            {
              label: 'Supply',
              data: [250, 100, 310, 75, 290, 100, 500, 260],
              backgroundColor: [
                '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
              ],
              borderColor: [
                '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
              ],
              borderWidth: 1,
              fill: false,
              barPercentage: .5,
              categoryPercentage: 0.4,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
              tension: .4,
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                color: "#6C7383",
                display: true,
                beginAtZero: false,
                steps: 100,
                stepValue: 5,
                max: 150
              },
            },
            y: {
              beginAtZero: true,
              border: {
                display: false
              },
              grid: {
                display: true,
              },
              ticks: {
                color: "#6C7383",
                beginAtZero: false,
                stepsize: 10,
                display: true,
                callback: function (value, index, ticks) {
                  return value + 'k';
                }
              },
            }
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: 'rgb(255, 99, 132)'
              }
            }
          }
        },
        plugins: [{
          afterDatasetUpdate: function (chart, args, options) {
            const chartId = chart.canvas.id;
            var i;
            const legendId = `${chartId}-legend`;
            const ul = document.createElement('ul');
            for (i = 0; i < chart.data.datasets.length; i++) {
              ul.innerHTML += `
                  <li>
                    <span style="background-color: ${chart.data.datasets[i].backgroundColor[i]}"></span>
                    ${chart.data.datasets[i].label}
                  </li>
                `;
            }
            return document.getElementById(legendId).appendChild(ul);
          }
        }]
      });

    }

    if ($.cookie('connectplus-pro-banner') != "true") {
      document.querySelector('#proBanner').classList.add('d-flex');
      document.querySelector('.navbar').classList.remove('fixed-top');
    }
    else {
      document.querySelector('#proBanner').classList.add('d-none');
      document.querySelector('.navbar').classList.add('fixed-top');
    }

    if ($(".navbar").hasClass("fixed-top")) {
      document.querySelector('.page-body-wrapper').classList.remove('pt-0');
      document.querySelector('.navbar').classList.remove('proBanner-padding-top');
    }
    else {
      document.querySelector('.page-body-wrapper').classList.add('pt-0');
      document.querySelector('.navbar').classList.add('proBanner-padding-top');

    }
    document.querySelector('#bannerClose').addEventListener('click', function () {
      document.querySelector('#proBanner').classList.add('d-none');
      document.querySelector('#proBanner').classList.remove('d-flex');
      document.querySelector('.navbar').classList.remove('pt-5');
      document.querySelector('.navbar').classList.add('fixed-top');
      document.querySelector('.page-body-wrapper').classList.add('proBanner-padding-top');
      document.querySelector('.navbar').classList.remove('pt-3');
      document.querySelector('.navbar').classList.remove('proBanner-padding-top');
      var date = new Date();
      date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
      $.cookie('connectplus-pro-banner', "true", { expires: date });
    });


  });
})(jQuery);
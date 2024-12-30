(function($) {
    'use strict';
    $(function() {
        var successColor = '#44ce42';
        var infoColor = '#a461d8';
        var secondaryColor = '#8e94a9';
        var primaryColor = '#0062ff';
        var warningColor = '#ffc542';
        var dangerColor = '#fc5a5a';
        var lightColor = '#aab2bd';
        var darkColor = '#001737';


        function onRefresh(chart) {
            chart.data.datasets.forEach(function(dataset) {
                dataset.data.push({
                    x: Date.now(),
                    y: Math.random()
                });
            });
        }
        if ($("#statistics-graph-1").length) {
            const ctx = document.getElementById('statistics-graph-1');
            var graphGradient1 = document.getElementById('statistics-graph-1').getContext("2d");

            var gradientColor = graphGradient1.createLinearGradient(1, 2, 1, 400);
            gradientColor.addColorStop(0, '#fff');
            gradientColor.addColorStop(1, infoColor);

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
                    datasets: [{
                        label: 'Profit',
                        data: [3, 9, 7, 5, 7, 2, 8],
                        borderColor: infoColor,
                        backgroundColor: gradientColor,
                        borderWidth: 2,
                        fill: true,
                        pointRadius: 0,
                        tension: 0,

                    }]
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
        if ($("#statistics-graph-2").length) {
            const ctx = document.getElementById('statistics-graph-2');
            var graphGradient1 = document.getElementById('statistics-graph-2').getContext("2d");

            var gradientColor = graphGradient1.createLinearGradient(1, 2, 1, 400);
            gradientColor.addColorStop(0, '#fff');
            gradientColor.addColorStop(1, primaryColor);

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
                    datasets: [{
                        label: 'Profit',
                        data: [7, 9, 2, 2, 8, 7, 9],
                        borderColor: primaryColor,
                        backgroundColor: gradientColor,
                        borderWidth: 2,
                        fill: true,
                        pointRadius: 0,
                        tension: 0,

                    }]
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
        if ($("#statistics-graph-3").length) {
            const ctx = document.getElementById('statistics-graph-3');
            var graphGradient1 = document.getElementById('statistics-graph-3').getContext("2d");

            var gradientColor = graphGradient1.createLinearGradient(1, 2, 1, 400);
            gradientColor.addColorStop(0, '#fff');
            gradientColor.addColorStop(1, warningColor);

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
                    datasets: [{
                        label: 'Profit',
                        data: [5, 4, 7, 2, 9, 2, 8],
                        borderColor: warningColor,
                        backgroundColor: gradientColor,
                        borderWidth: 2,
                        fill: true,
                        pointRadius: 0,
                        tension: 0,

                    }]
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
        if ($("#statistics-graph-4").length) {
            const ctx = document.getElementById('statistics-graph-4');
            var graphGradient1 = document.getElementById('statistics-graph-4').getContext("2d");

            var gradientColor = graphGradient1.createLinearGradient(1, 2, 1, 400);
            gradientColor.addColorStop(0, '#fff');
            gradientColor.addColorStop(1, dangerColor);

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
                    datasets: [{
                        label: 'Profit',
                        data: [5, 2, 5, 2, 4, 4, 1],
                        borderColor: dangerColor,
                        backgroundColor: gradientColor,
                        borderWidth: 2,
                        fill: true,
                        pointRadius: 0,
                        tension: 0,

                    }]
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

        if ($("#UsersDoughnutChart").length) { 
            const doughnutChartCanvas = document.getElementById('UsersDoughnutChart');
            new Chart(doughnutChartCanvas, {
              type: 'doughnut',
              data: {
                labels: ['Request','Email','chat'],
                datasets: [{
                    data: [80, 34, 100],
                    backgroundColor: [
                        successColor,
                        infoColor,
                        secondaryColor
                    ],
                    borderColor: [
                        successColor,
                        infoColor,
                        secondaryColor
                    ],
                    hoverBackgroundColor: ['#a7afb7','#a7afb7','#a7afb7'],
                    hoverBorderColor:['#a7afb7','#a7afb7','#a7afb7'],
                }]
              },
              options: {
                cutout: 70,
                animationEasing: "easeOutBounce",
                animateRotate: true,
                animateScale: false,
                responsive: true,
                maintainAspectRatio: true,
                showScale: false,
                legend: false,
                plugins: {
                  legend: {
                      display: false,
                  }
                }
              }
            });
          }
          if ($("#conversionBarChart").length) {
            const ctx = document.getElementById('conversionBarChart');

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
                    datasets: [{
                        label: 'Amount Due',
                        data: [39, 19, 25, 16, 31, 39, 12, 18, 33, 24],
                        backgroundColor: primaryColor,
                        borderColor: primaryColor,
                        borderWidth: 0,
                        fill: true,
                        pointRadius: 0,
                        tension: 0,
                        barPercentage: 0.4,

                    }]
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

        if ($("#trafficSourceDoughnutChart").length) { 
            const doughnutChartCanvas = document.getElementById('trafficSourceDoughnutChart');
            new Chart(doughnutChartCanvas, {
              type: 'doughnut',
              data: {
                labels: [
                    'Human Resources',
                    'Manger',
                    'Other'],
                datasets: [{
                    data: [185, 85, 15],
                    backgroundColor: [
                        secondaryColor,
                        successColor,
                        dangerColor,
  
                    ],
                    borderColor: [
                        secondaryColor,
                        successColor,
                        dangerColor,
                    ],
                    hoverBackgroundColor: ['#a7afb7','#a7afb7','#a7afb7'],
                    hoverBorderColor:['#a7afb7','#a7afb7','#a7afb7'],
                }]
              },
              options: {
                cutout: 70,
                animationEasing: "easeOutBounce",
                animateRotate: true,
                animateScale: false,
                responsive: true,
                maintainAspectRatio: true,
                showScale: false,
                legend: false,
                plugins: {
                  legend: {
                      display: false,
                  }
                }
              }
            });
        }
        if ($("#salesPrdictionDoughnutChart").length) { 
            const doughnutChartCanvas = document.getElementById('salesPrdictionDoughnutChart');
            new Chart(doughnutChartCanvas, {
              type: 'doughnut',
              data: {
                labels: [
                    'Human Resources',
                    'Manger',
                    'Other'],
                datasets: [{
                    data: [185, 85, 65],
                    backgroundColor: [
                        primaryColor,
                        warningColor, 
                        successColor,
                    ],
                    borderColor: [
                        primaryColor,
                        warningColor,
                        successColor,
                    ],
                    hoverBackgroundColor: ['#a7afb7','#a7afb7','#a7afb7'],
                    hoverBorderColor:['#a7afb7','#a7afb7','#a7afb7'],
                }]
              },
              options: {
                cutout: 70,
                animationEasing: "easeOutBounce",
                animateRotate: true,
                animateScale: false,
                responsive: true,
                maintainAspectRatio: true,
                showScale: false,
                legend: false,
                plugins: {
                  legend: {
                      display: false,
                  }
                }
              }
            });
        }
        if ($('#usersDoughnutChart').length) {
            var g1
            var g1 = new JustGage({
                id: "usersDoughnutChart",
                value: getRandomInt(0, 100),
                min: 0,
                max: 100,
                gaugeWidthScale: 0.8,
                hideInnerShadow: true,
                customSectors: [{
                    color: dangerColor,
                    lo: 0,
                    hi: 25
                }, {
                    color: warningColor,
                    lo: 25,
                    hi: 50
                }, {
                    color: successColor,
                    lo: 50,
                    hi: 100
                }],
                label: "Daily average"
            });
  
  
            setInterval(function () {
                g1.refresh(getRandomInt(20, 100));
            }, 3500);
        }
        if ($('#review-rating-1').length) {
            $('#review-rating-1').barrating({
                theme: 'css-stars',
                showSelectedRating: false,
                initialRating: 4
            });
        }
        if ($('#review-rating-2').length) {
            $('#review-rating-2').barrating({
                theme: 'css-stars',
                showSelectedRating: false,
                initialRating: 5
            });
        }
        if ($('#review-rating-3').length) {
            $('#review-rating-3').barrating({
                theme: 'css-stars',
                showSelectedRating: false,
                initialRating: 3
            });
        }
        if ($('#review-rating-4').length) {
            $('#review-rating-4').barrating({
                theme: 'css-stars',
                showSelectedRating: false,
                initialRating: 4
            });
        }
        if ($('#review-rating-5').length) {
            $('#review-rating-5').barrating({
                theme: 'css-stars',
                showSelectedRating: false,
                initialRating: 2
            });
        }
    });
})(jQuery)
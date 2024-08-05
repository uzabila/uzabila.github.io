$(document).ready(function() {
	   $("#signal-bar").width($("#signal-bar").attr('aria-valuenow') + '%');
	   $("#exchange-bar").width($("#exchange-bar").attr('aria-valuenow') + '%');
	   $("#mirror-bar").width($("#mirror-bar").attr('aria-valuenow') + '%');
		

		colors = ["#6658dd", "#f7b84b", "#CED4DC"];
		(dataColors = $("#apex-area").data("colors")) && (colors = dataColors.split(","));
		options = {
			chart: {
				height: 380,
				type: "area",
				stacked: !0,
				events: {
					selection: function (e, o) {
						console.log(new Date(o.xaxis.min));
					},
				},
			},
			noData: {
				text: 'No data recorded yet...'
			},
			colors: colors,
			dataLabels: { enabled: !1 },
			stroke: { width: [2], curve: "smooth" },
			series: [],
			fill: { type: "gradient", gradient: { opacityFrom: 0.6, opacityTo: 0.8 } },
			legend: { position: "top", horizontalAlign: "left" },
			xaxis: { type: "datetime" },
		};
			
		(chart = new ApexCharts(document.querySelector("#apex-area"), options)).render();
		
		$.ajax({
			'method': 'GET',
			'url': '/wallet_history',
			success: function(response) {
				let pairs = []
				$.each(response, (coin, values) => {
					console.log(values)
					pairs.push({
						name: coin,
						data: values
					})
				});
				chart.updateSeries(pairs)
			}
	 	}) // Ajax
    }) // Document ready
var reportsWidget = {
	options: {
		containerSelector: ".reports",
		template:
			"{{#.}}" +
			'<article class="reports_item">' +
			'<a href="{{cover}}" target="_blank">' +
			'<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover" title="{{title}} Cover"/>' +
			"</a>" +
			'<footer class="reports_docs">' +
			"{{#documents}}" +
			'<span class="reports_title">' +
			'<a href="{{url}}" class="report_title-text" target="_blank" title="{{title}}">{{title}} <span class=report_title-size>({{file_size}} {{file_type}})</span></a>' +
			"</span>" +
			"{{/documents}}" +
			"</footer>" +
			"</article>" +
			"{{/.}}",
	},

	init: function () {
		this.renderReports(reportData || []);
	},

	renderReports: function (reports) {
		var inst = this,
			options = inst.options;

		$(options.containerSelector).html(
			Mustache.render(options.template, reports)
		);
	},
};

reportsWidget.init();

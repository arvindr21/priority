const { dialog, app } = require("electron");

const LOG = require("electron-log");
const createGHIssue = require("github-create-issue");

const opts = {
	token: process.env.GHISSUETOKEN,
	useragent: "arvindr21/priority",
	labels: ["auto", "crash-report"],
};

LOG.catchErrors({
	showDialog: false,
	onError(error, versions /*, submitIssue*/) {
		dialog
			.showMessageBox({
				title: "An error occurred",
				message: error.message,
				detail: error.stack,
				type: "error",
				buttons: ["Ignore", "Report", "Exit"],
			})
			.then((result) => {
				if (result.response === 1) {
					// submitIssue("https://github.com/arvindr21/priority/issues/new", {
					//     title: `Error report for ${versions.app}`,
					//     body: "Error:\n```" + error.stack + "\n```\n" + `OS: ${versions.os}`,
					// });

					opts.title = `Error report for ${versions.app}`;
					opts.body =
            "Error:\n```" + error.stack + "\n```\n" + `OS: ${versions.os}`;

					createGHIssue(
						"arvindr21/priority",
						opts.title,
						opts,
						(err, issue, info) => {
							if (info) {
								LOG.info("Limit: %d", info.limit);
								LOG.info("Remaining: %d", info.remaining);
								LOG.info(
									"Reset: %s",
									new Date(info.reset * 1000).toISOString()
								);
							}
							if (err) {
								LOG.error(err.message);
								throw new Error(err.message);
							}
							LOG.info(JSON.stringify(issue));
							dialog.showMessageBox({
								title: "Error Issue Created",
								message: JSON.stringify(issue),
								type: "info",
								buttons: ["Thanks!"],
							});
						}
					);

					return;
				}

				if (result.response === 2) {
					app.quit();
				}
			});
	},
});

module.exports = LOG;

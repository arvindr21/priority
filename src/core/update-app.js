require("update-electron-app")({
	repo: "arvindr21/priority",
	updateInterval: "4 hours",
	logger: require("electron-log"),
	notifyUser: true,
});

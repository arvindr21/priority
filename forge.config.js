module.exports = {
	"packagerConfig": {
		dir: "/Users/aravulavaru/Documents/public/tray-example/priority",
		name: "priority",
		platform: "linux,darwin,win32",
		arch: "x64",
		electronVersion: "8.0.2",
		out: "/Users/aravulavaru/Documents/public/tray-example/priority/releases",
		appBundleId: "",
		appVersion: "0.1.0",
		overwrite: true,
		asar: true,
		icon: "/Users/aravulavaru/Documents/public/tray-example/priority/public/icons/dark/icons/mac/icon.icns",
		bundle_id: "com.arvindr21.priority",
		appname: "priority",
		sourcedir: "/Users/aravulavaru/Documents/public/tray-example/priority",
		ignore: "/Users/aravulavaru/Documents/public/tray-example/priority/releases"
	},
	"makers": [{
		"name": "@electron-forge/maker-squirrel",
		"config": {
			"name": "com.arvindr21.priority"
		}
	},
	{
		"name": "@electron-forge/maker-zip",
		"platforms": [
			"darwin"
		]
	},
	{
		"name": "@electron-forge/maker-deb",
		"config": {}
	},
	{
		"name": "@electron-forge/maker-rpm",
		"config": {}
	},
	{
		"name": "@electron-forge/maker-flatpak",
		"config": {}
	}, {
		// name: "@electron-forge/publisher-github",
		// config: {
		//     repository: {
		//         owner: "arvindr21",
		//         name: "priority"
		//     },
		//     prerelease: true,
		//     draft: true
		// }
	}
	],
	plugins: [
		["@electron-forge/plugin-auto-unpack-natives"]
	]
};
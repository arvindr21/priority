module.exports = {
	"packagerConfig": {
		name: "priority",
		platform: "linux,darwin,win32",
		arch: "x64",
		electronVersion: "8.0.2",
		out: "releases",
		appBundleId: "io.arvindr21.priority",
		appVersion: "0.1.0",
		overwrite: true,
		asar: true,
		icon: "public/icons/light/icons/mac/icon.icns",
		bundle_id: "co.arvindr21.priority",
		appname: "priority",
		sourcedir: "/Users/aravulavaru/Documents/public/tray-example/priority"
	},
	"makers": [{
		"name": "@electron-forge/maker-squirrel",
		"config": {
			"name": "io.arvindr21.priority"
		}
	},
	{
		"name": "@electron-forge/maker-zip",
		"platforms": [
			"darwin",
			"linux"
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
	}
	],
	publishers: [{
		name: "@electron-forge/publisher-github",
		config: {
			repository: {
				owner: "arvindr21",
				name: "priority"
			},
			prerelease: true,
			draft: true
		}
	}],
	plugins: [
		["@electron-forge/plugin-auto-unpack-natives"]
	]
};
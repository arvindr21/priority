module.exports = {
	"packagerConfig": {
		asar: true
	},
	"makers": [{
		"name": "@electron-forge/maker-squirrel",
		"config": {
			"name": "com.app.priority"
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
	}
		// {
		//     name: "@electron-forge/publisher-github",
		//     config: {
		//         repository: {
		//             owner: "arvindr21",
		//             name: "priority"
		//         },
		//         prerelease: true,
		//         draft: true
		//     }
		// }
	],
	plugins: [
		["@electron-forge/plugin-auto-unpack-natives"]
	]
};

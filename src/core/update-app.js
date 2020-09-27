// eslint-disable-next-line @typescript-eslint/no-var-requires
require('update-electron-app')({
    repo: 'arvindr21/priority',
    updateInterval: '4 hours',
    logger: require('electron-log'),
    notifyUser: true
})
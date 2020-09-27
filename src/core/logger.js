import { dialog, app } from 'electron';

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const LOG = require('electron-log');

LOG.catchErrors({
    showDialog: false,
    onError(error, versions, submitIssue) {
        dialog.showMessageBox({
                title: 'An error occurred',
                message: error.message,
                detail: error.stack,
                type: 'error',
                buttons: ['Ignore', 'Report', 'Exit'],
            })
            .then((result) => {
                if (result.response === 1) {
                    submitIssue('https://github.com/arvindr21/priority/issues/new', {
                        title: `Error report for ${versions.app}`,
                        body: 'Error:\n```' + error.stack + '\n```\n' + `OS: ${versions.os}`
                    });
                    return;
                }

                if (result.response === 2) {
                    app.quit();
                }
            });
    }
});
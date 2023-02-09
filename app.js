var request = require('sync-request');

const issues = ['Tasks', 'FAQ response', 'User Experience', 'Incorrect Response', 'General'];

function sendMssg(mssg) {
    var res = request('POST', '', {
        headers: {
            'Authorization': 'bearer ',
            'Content-Type': 'application/json'
        },
        json: {
            "message": {
                "type": "text",
                "val": mssg
            },
            "from": {
                "id": "manjunath.naik2@idfcbank.com"
            }
        }
    });
    console.log(JSON.parse(res.getBody('utf8')));
}

const total = 100;
function startComm() {
    for (let i = 0; i < total; i++) {
        sendMssg('raise issue');
        // randomly select an issue
        sendMssg(issues[Math.floor(Math.random() * issues.length)]);
        sendMssg('nothing');

        // progress bar to show the progress
        process.stdout.write(`\r${i+1} of ${total} (${i + 1}%) complete.`);
    }
}

//sendMssg('discard');
startComm();
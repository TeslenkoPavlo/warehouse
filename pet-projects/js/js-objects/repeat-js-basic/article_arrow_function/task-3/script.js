'use strict';

/*function executeAction(actionName, actionCallback) {
    console.log(`Do action: ${actionName}`);
    return actionCallback();
}

console.log(executeAction('Download data', () => { return 'Data success downloaded'} ));*/

function checkPermission(role, onSuccess, onError) {
    if (role === 'admin') {
        onSuccess();
    }
    else {
        onError();
    }
}

checkPermission('admin',
    () => {
        console.log('Hi admin!');
    } ,
    () => {
        console.log('Access is decline');
    }
    );

const clockwall = document.getElementsByTagName('pre')[0];
const timezones = [
    ['America/Los_Angeles', 'PST'],
    ['America/Denver', 'MST'],
    ['America/Chicago', 'CST'],
    ['America/New_York', 'EST'],
    ['America/Buenos_Aires', 'ART'],
    ['UTC', 'Universal Time'],
    ['Europe/London', 'GMT'],
    ['Europe/Paris', 'CEST'],
    ['Europe/Budapest', 'EEST'],
    ['Europe/Moscow', 'MSK'],
    ['Asia/Kolkata', 'India Standard Time'],
    ['Australia/Sydney', 'AEST']
]

function showDateIn(date, timezone) {
    return date.toLocaleString('es-AR', {'timeZone': timezone});
}

function showTimes(){
    const date = new Date();
    let zone, name;
    clockwall.innerText = '';
    timezones.forEach(timezone => {
        [zone, name] = timezone;
        clockwall.append(showDateIn(date, zone) + ' ' + zone + ' (' + name + ')' + '\n');
    });
}

showTimes();

setInterval(function(){
    showTimes();
}, 30000)

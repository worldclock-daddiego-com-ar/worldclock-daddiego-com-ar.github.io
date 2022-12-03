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

function showDateIn(timezone) {
    return new Date().toLocaleString('es-AR', {'timeZone': timezone})
}

function showTimes(){
    clockwall.innerText = ''
    timezones.forEach(timezone => {
        let [zone, name] = timezone;
        clockwall.append(showDateIn(zone) + ' ' + zone + ' (' + name + ')' + '\n');
    });
}

showTimes();

setInterval(function(){
    showTimes()
}, 30000)

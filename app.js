
window.addEventListener('load', (event) => {
    var fridayEvents = [
        {
            start: new Date('2022/04/01 14:05'),
            end: new Date('2022/04/01 14:30'),
            artist: 'Efelante',
            description: 'desc',
            stage: 0
        },
        {
            start: new Date('2022/04/01 14:55'),
            end: new Date('2022/04/01 15:25'),
            artist: 'Serbia',
            description: 'desc',
            stage: 0
        },
        {
            start: new Date('2022/04/01 15:55'),
            end: new Date('2022/04/01 16:40'),
            artist: 'Nicki Nicole',
            description: 'desc',
            stage: 0
        },



        {
            start: new Date('2022/04/01 14:30'),
            end: new Date('2022/04/01 14:05'),
            artist: 'Wiplash',
            description: 'desc',
            stage: 1
        },
        {
            start: new Date('2022/04/01 15:50'),
            end: new Date('2022/04/01 16:35'),
            artist: 'Taburete',
            description: 'desc',
            stage: 1
        },
        {
            start: new Date('2022/04/01 17:05'),
            end: new Date('2022/04/01 17:55'),
            artist: 'Vetusta Morla',
            description: 'desc',
            stage: 0
        },



        {
            start: new Date('2022/04/01 13:45'),
            end: new Date('2022/04/01 14:15'),
            artist: 'El Cuelgue',
            description: 'desc',
            stage: 2
        },
        {
            start: new Date('2022/04/01 14:45'),
            end: new Date('2022/04/01 15:15'),
            artist: 'Kaia Lana',
            description: 'desc',
            stage: 2
        },
        {
            start: new Date('2022/04/01 15:40'),
            end: new Date('2022/04/01 16:15'),
            artist: 'Francisca Valenzuela',
            description: 'desc',
            stage: 2
        },




        {
            start: new Date('2022/04/01 17:40'),
            end: new Date('2022/04/01 18:15'),
            artist: 'La cotorrisa',
            description: 'desc',
            stage: 3
        },




        {
            start: new Date('2022/04/01 15:00'),
            end: new Date('2022/04/01 15:25'),
            artist: 'Priscilla Orfanos',
            description: 'desc',
            stage: 4
        },
        {
            start: new Date('2022/04/01 15:55'),
            end: new Date('2022/04/01 16:30'),
            artist: 'Arroba Nat',
            description: 'desc',
            stage: 4
        },
        {
            start: new Date('2022/04/01 17:05'),
            end: new Date('2022/04/01 17:55'),
            artist: 'Daniel, me estas matando',
            description: 'desc',
            stage: 4
        },




    ];

    var stages = [
        'Tecate Light',
        'Tecate Original',
        'Fusion Telcel',
        'Sorpresa Viva',
        'Acustico Hey',
        'Villa Maravilla',
        'Club Social Kia',
        'Oasis Bacardi',
        'Chips Pilos Bar'
    ];

    var canvas = document.getElementById("cvs");
    var rect = canvas.getBoundingClientRect();
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    var dpr = 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    canvas.onclick = function (event) {
        if (event.region) {
            alert('You clicked ' + event.region);
        }
    }

    var startDate = new Date('2022/04/01 12:00:00');
    var endDate = new Date('2022/04/02 02:00');


    var fontSize = 14;
    var hourX = 130;
    var hourY = 10;
    var hourHeight = 50;
    var hourWidth = 300;

    var stageX = 10;
    var stageY = 60;
    var stageHeight = 75;
    var stageWidth = 120;


    ctx.font = fontSize + 'px Arial';

    for (var i = 0; i <= 24; i++) {

    }

    var hourCounter = 0;
    var availableEvent = true;
    var eventHours = new Date(startDate);

    while (availableEvent) {
        //console.log(eventHours.getHours());

        // ctx.beginPath();
        // ctx.fillStyle = 'lightgreen';
        // ctx.rect(hourX + (hourCounter * hourWidth), hourY, hourWidth, hourHeight);
        // ctx.fill();
        // ctx.stroke();


        ctx.strokeStyle = "#cb9d41";
        ctx.beginPath();
        ctx.moveTo(hourX + (hourCounter * hourWidth), hourY);
        ctx.lineTo(hourX + (hourCounter * hourWidth), 1000); // find height
        ctx.stroke();


        ctx.font = 'bolder ' + 16 + 'px Arial';
        ctx.fillStyle = '7d6128';
        ctx.fillText(getPrettyHour(eventHours), hourX + (hourCounter * hourWidth) + 5, hourY + (hourHeight / 2) + (fontSize / 2));
        ctx.stroke();


        hourCounter++;
        eventHours = new Date(addHours(eventHours, 1));
        if (eventHours > endDate) {
            availableEvent = false;
        }

    }

    ctx.font = '' + 12 + 'px Arial';
    ctx.font = fontSize + 'px Arial';
    for (var i = 0; i < stages.length; i++) {
        // ctx.beginPath();
        // ctx.fillStyle = 'white';
        // ctx.rect(stageX, stageY + (stageHeight * i), stageWidth, stageHeight);
        // ctx.fill();
        // ctx.stroke();

        for (let j = 0; j < 10; j++) {
            ctx.fillStyle = '#d20047';
            ctx.fillText(stages[i], stageX + (250 * j), stageY + (i * stageHeight) + fontSize);
            ctx.stroke();
        }


    }
    ctx.font = fontSize + 'px Arial';
    var eventRectangles = [];
    for (var i = 0; i < fridayEvents.length; i++) {

        var eventLength = getDateDiff(fridayEvents[i].end, fridayEvents[i].start);
        //console.log(eventLength);
        ctx.beginPath();
        ctx.fillStyle = '#d20047';

        var eventRectangle = {
            x: hourX + (getDateDiff(fridayEvents[i].start, startDate) * hourWidth),
            y: stageY + (stageHeight * fridayEvents[i].stage) + (fontSize * 1.5),
            width: (hourWidth * eventLength),
            height: stageHeight - (fontSize * 2.5),
            stage: fridayEvents[i].stage,
            artist: fridayEvents[i].artist,
            time: getPrettyHour(fridayEvents[i].start) + ' - ' + getPrettyHour(fridayEvents[i].end)
        };

        ctx.rect(
            eventRectangle.x,
            eventRectangle.y,
            eventRectangle.width,
            eventRectangle.height);

        eventRectangles.push(eventRectangle);

        ctx.fill();
        ctx.strokeStyle = "#85002d";
        ctx.stroke();

        ctx.font = 'bolder ' + 14 + 'px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(
            fridayEvents[i].artist,
            hourX + (getDateDiff(fridayEvents[i].start, startDate) * hourWidth) + (fontSize / 2),
            stageY + (stageHeight * fridayEvents[i].stage) + (fontSize * 3));

        ctx.font = 'bold ' + 11 + 'px Arial';
        ctx.fillText(
            getPrettyHour(fridayEvents[i].start) + '-' + getPrettyHour(fridayEvents[i].end),
            hourX + (getDateDiff(fridayEvents[i].start, startDate) * hourWidth) + (fontSize / 2),
            stageY + (stageHeight * fridayEvents[i].stage) + (fontSize * 4));


        //ctx.stroke();
        ctx.font = fontSize + 'px Arial';
    }

    function getDateDiff(date1, date2) {
        return Math.abs(date1 - date2) / 36e5;
    }

    function getPrettyHour(date) {
        return date.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    function addHours(date, hours) {
        return date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    }

    function getMousePosition(canvas, event) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        console.log("Coordinate x: " + x, "Coordinate y: " + y);

        eventRectangles.forEach(rectangle => {

            if (rectangle.x < x && rectangle.y < y && rectangle.x + rectangle.width > x && rectangle.y + rectangle.height > y) {
                console.log(rectangle);
                $('#eventStage').html(stages[rectangle.stage]);
                $('#eventArtist').html(rectangle.artist);
                $('#eventTime').html(rectangle.time);
                $('#exampleModal').modal('show');
            }
        });
    }



    canvas.addEventListener("mousedown", function (e) {
        getMousePosition(canvas, e);
    });

});


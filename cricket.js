var counter = 60;
var c = counter.toString();
console.log(c);
document.getElementById('clock-c').innerHTML = c;
var Cricket = /** @class */ (function () {
    function Cricket(Config) {
        this.player_id = Config.player_id;
        this.f_name = Config.f_name;
        this.l_name = Config.l_name;
        this.runs = Config.runs;
        this.score = Config.score;
    }
    Cricket.prototype.getName = function (id) {
        for (var index in this.player_id) {
            if (this.player_id[index] == id) {
                return (this.f_name[index] + " " + this.l_name[index]);
            }
        }
    };
    return Cricket;
}());
var tRef = document.getElementById('mi').getElementsByTagName('tbody')[0];
var tRef1 = document.getElementById('csk').getElementsByTagName('tbody')[0];
//TEAM 2
var mi = new Cricket({
    player_id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    f_name: ["Rohith", "Lasith", "Aditya", "Dhawal", "Hardik", "Ishan", "Jasprit", "Kieron", "Quinton", "Rahul", "Chris"],
    l_name: ["Sharma", "Malinga", "Tare", "Kulkarni", "Pandya", "Kishan", "Bumrah", "Pollard", "De Kock", "Chahar", "Lynn"],
    runs: [[], []],
    score: []
});
for (var i = 0; i < 11; i++)
    tRef.rows[i].cells[0].innerHTML = mi.getName(i + 1);
//TEAM 1
var csk = new Cricket({
    player_id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    f_name: ["MS", "Sam", "Dwayne", "Suresh", "Deepak", "Shane", "Ambati", "Imran", "Kedar", "Murali", "Ravindra"],
    l_name: ["Dhoni", "Curran", "Bravo", "Raina", "Chahar", "Watson", "Rayudu", "Tahir", "Jadhav", "Vijay", "jadeja"],
    runs: [[], []],
    score: []
});
for (var i = 0; i < 11; i++)
    tRef1.rows[i].cells[0].innerHTML = csk.getName(i + 1);
// TEAM 1 Game function
function Cskgame() {
    var ball = 6;
    var tot_run;
    for (var i in csk.player_id) {
        tot_run = 0;
        for (var j = 0; j < ball; j++) {
            var run = Math.floor(Math.random() * 7);
            if (!csk.runs[i]) {
                csk.runs[i] = [];
            }
            csk.runs[i][j] = run;
            if (run == 0) {
                break;
            }
            else {
                tot_run = tot_run + run;
            }
        }
        csk.score[i] = tot_run;
    }
}
Cskgame();
console.log(csk.score);
// TEAM 1 Game function
function Migame() {
    var ball = 6;
    var tot_run;
    for (var i in mi.player_id) {
        tot_run = 0;
        for (var j = 0; j < ball; j++) {
            var run = Math.floor(Math.random() * 7);
            if (!mi.runs[i]) {
                mi.runs[i] = [];
            }
            mi.runs[i][j] = run;
            if (run == 0) {
                break;
            }
            else {
                tot_run = tot_run + run;
            }
        }
        mi.score[i] = tot_run;
    }
}
Migame();
console.log(mi.score);
console.log(mi.runs[0][5]);
//timer function

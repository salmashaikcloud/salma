console.log("Welcome to learn NodeJS");
/*function squarePattern(n) {
    console.log("squarePattern function start");
    let row = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            row += "*";
        }
        row += "\n";
    }
    console.log(row);
    console.log("squarePattern function end");
}
squarePattern(6);
(function () {
    let os = require('os');
    console.log("os.arch():",os.arch());
    console.log("os.cpus():",os.cpus());
    console.log("os.endianness():",os.endianness());
    console.log("os.freemem():",os.freemem());
    console.log("os.homedir():",os.homedir());
    console.log("os.hostname():",os.hostname());
    console.log("os.loadavg():",os.loadavg());
    console.log("os.networkInterfaces():",os.networkInterfaces());
    console.log("os.platform():",os.platform());
    console.log("os.release():",os.release());
    console.log("os.tmpdir():",os.tmpdir());
    console.log("os.totalmem():",os.totalmem());
    console.log("os.type():",os.type());
    console.log("os.uptime():",os.uptime());
    console.log("os.userInfo():",os.userInfo());
})
();
setInterval(function(){
    console.log("setInterval: Hey! 1 second completed!..");
}, 1000);*/
setTimeout(function(){
    console.log("setTimeout: Hey! 1 second completed!..");
}, 1000);
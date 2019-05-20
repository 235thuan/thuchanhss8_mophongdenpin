// //có 2 lớp đối tượng cơ bản là Đèn (FlashLamp) và Pin (Battery)
// // thông tin về trạng thái năng lượng của nó,
// //đối tượng đèn sẽ sử dụng một đối tượng pin để cung cấp năng lượng cho hoạt động chiếu sáng
// /**
//  * Created by nhatnk on 4/26/17.
//  */
//
// function Hero(image, top, left, size){
//     this.image = image;
//     this.top = top;
//     this.left = left;
//     this.size = size;
//
//     this.getHeroElement = function(){
//         return '<img width="'+ this.size + '"' +
//             ' height="'+ this.size + '"' +
//             ' src="' + this.image +'"' +
//             ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
//     }
//
//     this.moveRight = function(){
//         this.left += 1;
//         console.log('ok: ' + this.left);
//     }
//
// }
//
// var hero = new Hero('pikachu.png', 20, 30, 200);
//
// function start(){
//     if(hero.left < window.innerWidth - hero.size){
//         hero.moveRight();
//     }
//     document.getElementById('game').innerHTML = hero.getHeroElement();
//     setTimeout(start, 1)
// }
//
// start();

let Battery = function () {
    this.setEnergy = function (energy) {
        this.energy=energy;

    };
    this.getEnergy = function () {
        return this.energy;

    };
    this.decreaseEnergy = function () {
        if(this.energy>0) {
            this.energy --;
        }

    };
};
let FlashLamp = function () {

    this.flashlamp = function () {

    };
    this.setBattery = function (battery) {
        this.battery=battery;
    };
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };
    this.light = function () {
        if (this.status) {
            alert("Lightning");
        } else {
            alert("not Lightning");
        }
    };
    this.turnOn = function () {
    this.status= true;
    };
    this.turnOff = function () {
    this.status= false;
    };
};

let battery= new Battery();
battery.setEnergy(10);
let flashlamp= new FlashLamp();
flashlamp.setBattery(battery);

document.write("Battery info:"+flashlamp.getBatteryInfo()+ "<br/>");
flashlamp.light();

// document.write("Turn on<br/>");
// flashlamp.turnOn();
// flashlamp.light();
// document.write("Battery info:"+ flashlamp.getBatteryInfo()+ "<br/>");
//
// document.write("Turn off<br/>");
// flashlamp.turnOff();
// flashlamp.light();



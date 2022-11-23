// модуль 7 Задание 5

class Tech {
  constructor(device) {
    (this.device = device),
      (this.material = "plastic"),
      (this.supplyOn = function (device) {
        this.device = device;
        return `${device} включен в розетку`;
      });
    this.supplyOf = function (device) {
      this.device = device;
      return `${device} выключен из розетки`;
    };
  }
}

let lamp = new Tech("lamp");
let tv = new Tech("tv");
lamp.place = "table";
tv.place = "wall";
tv.change = function (numChanel) {
  return `вы включили ${numChanel} канал`;
};
Tech.prototype.getPower = function (power) {
  return `${this.device} потребляет ${power}V `;
};

console.log(lamp.getPower(15));
console.log(tv.change(15));
console.log(lamp.supplyOn("lamp"));
console.log(lamp.supplyOf("tv"));

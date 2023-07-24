"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    function Myclass(id, f, lname) {
        console.log("Constr is called");
        this.id = id;
        this.fname = f;
        this.lname = lname;
    }
    Myclass.prototype.display = function () {
        console.log("\n            ID         :: ".concat(this.id, "\n            First Name :: ").concat(this.fname, "\n            Last Name  :: ").concat(this.lname, "\n        "));
    };
    return Myclass;
}());
exports.Myclass = Myclass;
// let obj=new Myclass(9,"Sumit",'Raokhande');
// obj.display();

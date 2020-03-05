"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor() {
        this.email = /^(([^<>()\[\]\\.,;=\s@"]+(\.[^<>()\[\]\\.,;=\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.phone = /.*/;
        this.cellphone = /.*/;
        this.postalCode = /^([0-9]{5}[\d]{3})$/;
        this.password = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%!\-_?&])(?=\S+$).{8,}/;
        this.cpf = /.*/;
    }
}
exports.default = default_1;
//# sourceMappingURL=regex.js.map
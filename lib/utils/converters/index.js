"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneToReadablePhone = (phone) => {
    if (!phone) {
        if (phone.length === 14)
            return phone.replace(/^(\+\d{2})(\d{2})(\d{5})(\d{4})/, "$1($2)$3-$4");
        else if (phone.length === 13)
            return phone.replace(/^(\+\d{2})(\d{2})(\d{4})(\d{4})/, "$1($2)$3-$4");
    }
};
exports.readablePhoneToPhone = (readablePhone) => {
    if (!readablePhone)
        return null;
    else if (typeof readablePhone !== "string")
        return null;
    else
        return "+55" + readablePhone.replace("+55", "").replace(/\D/g, "");
};
exports.numbersToPrice = (numbers) => {
    if (!numbers)
        return "";
    return numbers.toString().replace(/\D/g, "")
        .replace(/(\d{2})$/, ",$1")
        .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&.");
};
exports.priceToNumber = (price) => {
    if (!price)
        return null;
    if (typeof price === "number")
        return price;
    else {
        if (price.length === 0)
            return null;
        return parseFloat(price.replace(/\./g, "").replace(",", "."));
    }
};
exports.withdrawNaN = (str) => {
    if (!str)
        return "";
    else if (typeof str !== "string")
        return "";
    else
        return str.replace(/\D/g, "");
};
exports.toSnakeCase = (value) => {
    if (!value)
        return "";
    if (typeof value !== "string")
        return "";
    else
        return value.replace(/\W+/g, "_").toLowerCase();
};
//# sourceMappingURL=index.js.map
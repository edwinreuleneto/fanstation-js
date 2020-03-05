export const phoneToReadablePhone = (phone: string): string  => {
    if (!phone) {
        if (phone.length === 14)
            return phone.replace(/^(\+\d{2})(\d{2})(\d{5})(\d{4})/, "$1($2)$3-$4");
        else if (phone.length === 13)
            return phone.replace(/^(\+\d{2})(\d{2})(\d{4})(\d{4})/, "$1($2)$3-$4");
    }
};

export const readablePhoneToPhone = (readablePhone: string): string => {
    if(!readablePhone) return null;
    else if(typeof readablePhone !== "string") return null;
    else return "+55" + readablePhone.replace("+55", "").replace(/\D/g, "");
};

export const numbersToPrice = (numbers: number): string => {
    if (!numbers) return "";
    return numbers.toString().replace(/\D/g, "")
        .replace(/(\d{2})$/, ",$1")
        .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&.")
};

export const priceToNumber = (price: string | number): number => {
    if(!price) return null;
    if (typeof price === "number") return price;
    else {
        if (price.length === 0) return null;
        return parseFloat(
            price.replace(/\./g, "").replace(",", ".")
        )
    }
};

export const withdrawNaN = (str: string) => {
    if(!str) return "";
    else if(typeof str !== "string") return "";
    else return str.replace(/\D/g, "");
};

export const toSnakeCase = (value: string) => {
    if(!value) return "";
    if(typeof value !== "string") return "";
    else return value.replace(/\W+/g, "_").toLowerCase();
};
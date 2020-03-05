module.exports = require("./lib");

// const client = Client.init({
//     locale: "PT_BR"
// });

// client.agency.createIdol({
//     alias: "",
//     description: "",
//     email: "",
//     name: "",
//     phone: {
//         fullPhoneNumber: "+22"
//     },
//     agency: undefined,
//     socialNetwork: {
//         youtubeUrl: "ass"
//     }
// }).catch(e => console.log(e.data));
//
//
// async function test() {
//     try {
//         const {headers, data} = await client.user.authenticate("joao@omnidigitalis.com.br", "xablau");
//         const orders = await client.order.signed(headers.authorization).getOrdersByUser(data.id);
//         console.log(orders)
//     } catch(e) {
//         console.log(e)
//     }
// }

// test()
// client.order.getCelebrationReasons()
//     .then(r => console.log(r))
//     .catch(e => console.log(e));

// client.user.authenticate("joao@omnidigitalis.com.br", "xablau")
//     .then(value => console.log(value))
//     .catch(error => console.log(error));
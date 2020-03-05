const readline = require("readline");
const {assert} = require("chai");
const {Client} = require("../lib/index");

const {validateSync: validate} = require("class-validator");


describe("Mobile client tests", () => {
  const client = Client.init();

  let token;

  it("Mobile authentication with registered number should respond ok.", async () => {

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const number = await new Promise(resolve => rl.question("Enter the registered phone number (areacode + phone): \n", answer => {
      resolve(answer);
    }));

    const verifyPhoneResponse = await client.auth.mobile("backoffice", number).execute();

    assert.equal(verifyPhoneResponse.ok, true);

    const code = await new Promise(resolve => rl.question("Enter the code received: \n", answer => {
      rl.close();
      resolve(answer);
    }));

    const verifyCodeResponse = await client.auth.mobile("backoffice", number, code).execute();

    assert.equal(verifyCodeResponse.ok, true);

    token = verifyCodeResponse.headers["Authorization"];
  });

  it("")

});

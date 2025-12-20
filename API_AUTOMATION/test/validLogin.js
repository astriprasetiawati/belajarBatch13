const { describe } = require("mocha");
const assert = require("assert");
const { expect } = require("chai");


describe("Valid Login", function () {
  it("Valid Login", async function () {
    const response = await fetch(
      "https://belajar-bareng.onrender.com/api/login",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username: "admin",
          password: "admin",
        }),
      }
    );

    //cek Status Code
    assert.strictEqual(response.status, 200);
    expect(response.status).to.equal(200);

    // Cek Response Body
    const data = await response.json();
    expect(data.message).to.eql("Login successful");
    console.log('Login successful');
  });
});
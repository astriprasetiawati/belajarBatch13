const { describe } = require("mocha");
const assert = require("assert");
const { expect } = require("chai");

let token;

describe("Get User", function () {
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

    //Cek Status Code
    assert.strictEqual(response.status, 200);
    expect(response.status).to.equal(200);

    // Cek Response Body
    const data = await response.json();
    expect(data.message).to.eql("Login successful");

    // Token
    token = data.token;
    //console.log(token);
  });

  it("Get User", async function () {
    const response = await fetch(
      "https://belajar-bareng.onrender.com/api/users",
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );

    //cek Status Code
    assert.strictEqual(response.status,200);
    expect(response.status).to.equal(200);

    // Cek Response Body
    const data = await response.json();
    expect(data.users[0].username).to.equal('Ridhwan');
    
  });

});
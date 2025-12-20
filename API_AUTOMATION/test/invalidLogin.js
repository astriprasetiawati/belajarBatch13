const { describe } = require("mocha");
const assert = require("assert");
const { expect } = require("chai");

describe("Test Invalid Login", function () {
  it("Invalid Login", async function () {
      const response = await fetch(
        "https://belajar-bareng.onrender.com/api/login",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            username: "test",
            password: "admin",
          }),
        }
      );

      //cek Status Code
      assert.strictEqual(response.status,401);
      expect(response.status).to.equal(401);
  
      //cek Response Body
      const data = await response.json();
      expect(data.message).to.eql("Invalid username or password!");
      console.log('Invalid username or password!');
    });
});
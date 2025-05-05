const User = require("./user");

const db = require("../db.js");
const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** update */

describe("update", function () {
  const updateData = {
    first_name: "NewF",
    last_name: "NewL",
    email: "new@email.com",
    phone: "111-111-1111",
  };

  test("works", async function () {
    const user = await User.update("u1", updateData);
    expect(user).toEqual({
      username: "u1",
      ...updateData,
      password: expect.any(String),
      admin: false,
    });
  });
});

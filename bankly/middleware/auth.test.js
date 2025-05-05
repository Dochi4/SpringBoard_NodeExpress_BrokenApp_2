const jwt = require("jsonwebtoken");
const { authUser } = require("./auth");
const { SECRET_KEY } = require("../config");

const testJwt = jwt.sign({ username: "test", admin: true }, SECRET_KEY);
const badJwt = jwt.sign({ username: "test", admin: false }, "BAD_KEY");

describe("authUser", function () {
  test("authUser Works", function () {
    const req = { body: { _token: testJwt } };
    const res = {};
    const next = function (err) {
      expect(err).toBeFalsy();
      expect(req.curr_username).toEqual("test");
      expect(req.curr_admin).toEqual(true);
    };

    authUser(req, res, next);
  });
  test("authUser fail", function () {
    const req = { body: { _token: badJwt } };
    const res = {};
    const next = function (err) {
      expect(err).toBeTruthy();
      expect(err.status).toEqual(401);
    };

    authUser(req, res, next);
  });

  test("authUser No Token", function () {
    const req = { body: {} };
    const res = {};
    const next = function (err) {
      expect(err).toBeTruthy();
      expect(err.status).toEqual(401);
    };

    authUser(req, res, next);
  });
});

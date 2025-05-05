const timeWord = require("./timeWord");

describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeWord).toBe("function");
  });

  test("Test Midnight", () => {
    const resp = timeWord("00:00");
    expect(resp).toEqual("midnight");
  });
  test("Test Noon", () => {
    const resp = timeWord("12:00");
    expect(resp).toEqual("noon");
  });
  test("01:00", () => {
    const resp = timeWord("01:00");
    expect(resp).toEqual("one o’clock am");
  });

  test("06:01", () => {
    const resp = timeWord("06:01");
    expect(resp).toEqual("six oh one am");
  });

  test("06:10", () => {
    const resp = timeWord("06:10");
    expect(resp).toEqual("six ten am");
  });

  test("06:18", () => {
    const resp = timeWord("06:18");
    expect(resp).toEqual("six eighteen am");
  });

  test("06:30", () => {
    const resp = timeWord("06:30");
    expect(resp).toEqual("six thirty am");
  });

  test("10:34", () => {
    const resp = timeWord("10:34");
    expect(resp).toEqual("ten thirty four am");
  });

  test("12:09", () => {
    const resp = timeWord("12:09");
    expect(resp).toEqual("twelve oh nine pm");
  });

  test("23:23", () => {
    const resp = timeWord("23:23");
    expect(resp).toEqual("eleven twenty three pm");
  });
});

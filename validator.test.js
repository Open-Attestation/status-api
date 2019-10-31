const { validateUpdateRequest } = require("./validator");

it("does not throw with valid inputs", () => {
  validateUpdateRequest({ status: 0 });
  validateUpdateRequest({ status: 1 });
  validateUpdateRequest({ status: 10 });
});

it("throws on empty object", () => {
  const input = {};
  expect(() => validateUpdateRequest(input)).toThrow('"status" is required');
});

it("throws on object with other keys", () => {
  const input = { status: 1, foo: "bar" };
  expect(() => validateUpdateRequest(input)).toThrow('"foo" is not allowed');
});

it("throws on invalid negative number", () => {
  const input = { status: -1 };
  expect(() => validateUpdateRequest(input)).toThrow(
    '"status" must be larger than or equal to 0'
  );
});

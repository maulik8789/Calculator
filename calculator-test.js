it("should calculate the monthly rate correctly", function() {
  // ...
  const values = {
    p: 10000,
    y: 8,
    r: 5.8
  }
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    p: 10000,
    y: 8,
    r: 5.8
  }
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});

/// etc

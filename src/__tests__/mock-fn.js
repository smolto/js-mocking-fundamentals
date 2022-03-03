const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const originalGetWinner = utils.getWinner;

test("returns winner", () => {
  jest.spyOn(utils, 'getWinner')
  utils.getWinner.mockImplementation((p1, p2) => p1);

  const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenCalledWith("Kent C. Dodds", "Ken Wheeler")

  utils.getWinner.mockRestore()
});

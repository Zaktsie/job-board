import { evenOROdd } from "@/playground";

describe("basic Math", () => {
  it("add  two  numbers", () => {
    expect(2 + 2).toBe(4);
  });

  it("subtracts  two  numbers", () => {
    expect(3 - 1).toBe(2);
  });
  describe("evenOrOdd", () => {
    describe("when the  number is even", () => {
      it("indicates the number is even", () => {
        expect(evenOROdd(4)).toBe("Even");
      });
    });
    describe("when the  number is odd", () => {
      it("Indicates the  number is odd", () => {
        expect(evenOROdd(3)).toBe("Odd");
      });
    });
  });
});

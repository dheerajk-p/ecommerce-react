import { it, expect, describe } from "vitest";
import formatMoney from "./money";

describe("formatMoney", () => {
  it("formats 1 cents as ₹ 1.00", () => {
    expect(formatMoney(10)).toBe("₹ 19.61");
  });

  it("displays 2 decimal", () => {
    expect(formatMoney(1090)).toBe("₹ 2137.25");
    expect(formatMoney(1090)).toBe("₹ 2137.25");
  });
});

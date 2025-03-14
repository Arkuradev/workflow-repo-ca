import { describe, expect, test } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  test("returns true when the current path matches href exactly", () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  test("returns true for root path ('/') when path is '/' or '/index.html'", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  test("returns true when current path includes the href", () => {
    expect(isActivePath("/venue", "/venue/?id=1")).toBe(true);
  });

  test("returns false when paths don't match", () => {
    expect(isActivePath("/venue", "/login")).toBe(false);
    expect(isActivePath("/login", "/register")).toBe(false);
  });
});

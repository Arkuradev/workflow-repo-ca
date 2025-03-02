import { getUsername } from "./storage.js";
import { describe, expect, beforeEach, afterEach, test } from "vitest";

const userKey = "user";

function setUserInStorage(user) {
  localStorage.setItem(userKey, JSON.stringify(user));
}

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  afterEach(() => {
    localStorage.clear();
  });

  test("returns the username when a user is stored", () => {
    setUserInStorage({ name: "John Doe" });
    expect(getUsername()).toBe("John Doe");
  });

  test("returns null when no user is stored", () => {
    expect(getUsername()).toBe(null);
  });
});

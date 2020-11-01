import { isBookRead } from "../../src/Books";

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

describe("Read books", () => {
  it("isBookRead", () => {
    expect(
      isBookRead(books, "Harry Potter y la piedra filosofal")
    ).toBeTruthy();
    expect(isBookRead(books, "Canción de hielo y fuego")).toBeFalsy();
    expect(isBookRead(books, "Devastación")).toBeTruthy();
  });

  it("isBookRead lower case check", () => {
    expect(
      isBookRead(books, "HARRY Potter y La PieDra filosOfAL")
    ).toBeTruthy();
    expect(isBookRead(books, "CANcIón de HIELo y fueGo")).toBeFalsy();
    expect(isBookRead(books, "deVAstacIóN")).toBeTruthy();
  });

  it("isBookRead, books that doesn't exist", () => {
    expect(isBookRead(books, "Crimen y castigo")).toBeFalsy();
    expect(isBookRead(books, "El mundo de sofía")).toBeFalsy();
    expect(isBookRead(books, "La tienda")).toBeFalsy();
  });

  it("isBookRead empty books", () => {
    expect(isBookRead([], "este titulo ni existe")).toBeFalsy();
  });
});

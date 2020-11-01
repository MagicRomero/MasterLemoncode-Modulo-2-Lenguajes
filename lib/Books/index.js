"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBookRead = void 0;
exports.isBookRead = (books, titleToSearch) => {
    const foundBook = books.find((book) => lowerAndTrimString(book.title) === lowerAndTrimString(titleToSearch));
    return !!(foundBook === null || foundBook === void 0 ? void 0 : foundBook.isRead);
};
function lowerAndTrimString(text) {
    return text.toLowerCase().trim();
}

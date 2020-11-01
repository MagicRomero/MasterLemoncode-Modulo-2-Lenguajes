export interface Book {
  title: string;
  isRead: boolean;
}

export const isBookRead = (
  books: Array<Book>,
  titleToSearch: string
): boolean => {
  const foundBook = books.find(
    (book) =>
      lowerAndTrimString(book.title) === lowerAndTrimString(titleToSearch)
  );

  return !!foundBook?.isRead;
};

function lowerAndTrimString(text: string): string {
  return text.toLowerCase().trim();
}

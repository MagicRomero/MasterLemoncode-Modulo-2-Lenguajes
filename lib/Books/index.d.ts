export interface Book {
    title: string;
    isRead: boolean;
}
export declare const isBookRead: (books: Array<Book>, titleToSearch: string) => boolean;

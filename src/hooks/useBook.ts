import { useEffect, useState } from "react";
import { BookDetail } from "../models/book.model";
import { fetchBook } from "../api/books.api";
import { likeBook, unlikeBook } from "../api/books.api";

export const useBook = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);

  const likeToggle = () => {
    if (!book) return;

    if (book.liked) {
      // 라이크 상태 -> 언라이크 실행
      unlikeBook(book.id).then(() => {
        setBook({
          ...book,
          liked: false,
          likes: book.likes - 1,
        });
      });
    } else {
      // 언라이크 상태 -> 라이크 실행
      likeBook(book.id).then(() => {
        // 성공 처리
        setBook({
          ...book,
          liked: true,
          likes: book.likes + 1,
        });
      });
    }
  };

  useEffect(() => {
    if (!bookId) return;

    fetchBook(bookId).then((book) => {
      setBook(book);
    });
  }, [bookId]);

  return { book, likeToggle };
};

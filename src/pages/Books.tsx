import Styled from "styled-components";
import Title from "../components/common/Title";
import BooksFilter from "../components/books/BooksFilter";
import BooksList from "../components/books/BooksList";
import BooksEmpty from "../components/books/BooksEmpty";
import Pagination from "../components/books/Pagination";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";
import Loading from "@/components/common/Loading";
import { useBooksInfinite } from "@/hooks/useBooksinfinite";
import Button from "@/components/common/Button";

const Books = () => {
  const {
    books = [],
    pagination,
    isEmpty,
    isBooksLoading,
    fetchNextPage,
    hasNextPage,
  } = useBooksInfinite();

  if (isEmpty) {
    return <BooksEmpty />;
  }

  if (!books || !pagination || isBooksLoading) {
    return <Loading />;
  }
  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BookStyle>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwitcher />
        </div>
        <BooksList books={books} />
        {/* <Pagination pagination={pagination} /> */}

        <div className="more">
          <Button
            size="medium"
            scheme="normal"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage}
          >
            {hasNextPage ? "더보기" : "마지막 도서입니다."}
          </Button>
        </div>
      </BookStyle>
    </>
  );
};

const BookStyle = Styled.div`
display: flex;
flex-direction: column;
justify-content : space-between;
gap: 24px;

.filter {
  display: flex;
  justify-content : space-between;
  align-items: center;
  padding: 20px 0;
}
`;

export default Books;

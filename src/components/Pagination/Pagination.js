import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

function Pagination({ setPageNumber, pageNumber, info }) {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <>
      <style jsx>
        {`
          .link {
            text-decoration: none !important;
            color: #fff !important;
          }

          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>

      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        nextLinkClassName="link"
        previousLinkClassName="link"
        pageCount={info?.pages}
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        pageRangeDisplayed={width < 576 ? 1 : 2}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        onPageChange={(page) => setPageNumber(page.selected + 1)}
      />
    </>
  );
}

export default Pagination;

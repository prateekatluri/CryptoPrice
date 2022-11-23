import React from "react";
import NextImage from "../assets/pagination-arrow.svg";
import { CryptoContext } from "../context/CryptoContext";
import { useContext } from "react";
function Pagination() {
  const { page, setPage } = useContext(CryptoContext);
  const handleNext = () => {
    if (page === 100) return;
    setPage(() => page + 1);
  };
  const handlePrev = () => {
    if (page === 1) return;
    setPage(() => page - 1);
  };
  const handleClick = (e) => {
    setPage(() => e.target.value);
  };
  return (
    <div className="flex justify-end mt-1 ">
      <ul className="flex items-center">
        <button onClick={handlePrev} className="pr-1">
          <img src={NextImage} alt="prevButton" className="rotate-180" />
        </button>
        <button
          className={`${
            page === page ? "border-cyan border-2" : ""
          } mr-1 border bg-gray-100 rounded-full w-8 h-8`}
          onClick={() => setPage(page)}
          id={page}
        >
          <li className="">{page}</li>
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className={`${
            page === page + 1 ? "border-cyan border-2" : ""
          } mr-1 border bg-gray-100 rounded-full w-8 h-8`}
          id={page + 1}
        >
          <li className="">{page + 1}</li>
        </button>
        <button
          onClick={() => setPage(page + 2)}
          className={`${
            page === page + 2 ? "border-cyan border-2" : ""
          } mr-1 border bg-gray-100 rounded-full w-8 h-8`}
          id={page + 2}
        >
          <li className="">{page + 2}</li>
        </button>
        <button onClick={handleNext}>
          <img src={NextImage} alt="Nextbutton" />
        </button>
      </ul>
    </div>
  );
}

export default Pagination;

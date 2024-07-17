import React, { useEffect, useState } from "react";
import { useApartment } from "../../context/ApartmentContextProvider";
import ApartmentCard from "./ApartmentCard";

const ApartmentList = () => {
  const { getApartments, apartments } = useApartment();
  const [currentPage, setCurrentPage] = useState(1);
  const apartmentsPerPage = 5;

  useEffect(() => {
    getApartments();
  }, []);

  // Проверка на пустой массив apartments
  if (!apartments) {
    return <div>Loading...</div>;
  }

  const totalPages = Math.ceil(apartments.length / apartmentsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage < 1) {
      setCurrentPage(1);
    } else if (newPage > totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(newPage);
    }
  };

  const renderApartments = () => {
    const start = (currentPage - 1) * apartmentsPerPage;
    const end = start + apartmentsPerPage;
    return apartments
      .slice(start, end)
      .map((elem) => <ApartmentCard key={elem.id} elem={elem} />);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`page-number ${i === currentPage ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="container">
      <h1>Apartment List</h1>
      <div className="apartment-list">{renderApartments()}</div>
      <div className="pagination">
        <button
          className="prev"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        <div className="page-numbers">{renderPagination()}</div>
        <button
          className="next"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ApartmentList;

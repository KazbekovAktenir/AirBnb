// import React, { useEffect, useState } from "react";
// import ApartmentCard from "./ApartmentCard";
// import { useApartment } from "../../context/ApartmentContextProvider";
// import { useSearchParams } from "react-router-dom";

// const ApartmentList = () => {
//   const { apartments, getApartments, pages } = useApartment();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchParams, setSearchParams] = useSearchParams();

//   useEffect(() => {
//     getApartments();
//   }, [searchParams]);

//   useEffect(() => {
//     setSearchParams({ page: currentPage });
//   }, [currentPage]);

//   const getPagesCount = () => {
//     const pageCountArr = [];
//     for (let i = 1; i <= pages; i++) {
//       pageCountArr.push(i);
//     }
//     return pageCountArr;
//   };

//   if (currentPage < 1) setCurrentPage(1);
//   if (currentPage > pages) setCurrentPage(pages);

//   return (
//     <div>
//       <h1>Apartament List</h1>
//       {apartments.map((elem) => (
//         <ApartmentCard key={elem.id} elem={elem} />
//       ))}

//       <div className="pagination">
//         <button
//           onClick={() => setCurrentPage(currentPage - 1)}
//           className="prev"
//         >
//           Prev
//         </button>
//         <div className="page_numbers">{renderPagination()}</div>
//         <button
//           onClick={() => setCurrentPage(currentPage + 1)}
//           className="next"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ApartmentList;

import React, { useEffect, useState } from "react";
import { useApartment } from "../../context/ApartmentContextProvider";
import ApartmentCard from "./ApartmentCard";

const ApartmentList = () => {
  const { getApartments, apartments } = useApartment();
  const [currentPage, setCurrentPage] = useState(1);
  const apartmentsPerPage = 3;

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

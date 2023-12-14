import React, { useState } from "react";

function Jeryo() {
  const [selectedSalesStatus, setSelectedSalesStatus] = useState("");
  const [categorySelect1, setCategorySelect1] = useState("");
  const [categorySelect2, setCategorySelect2] = useState("");
  const [startprice, setStartprice] = useState(0);
  const [endprice, setEndprice] = useState(0);
  const [searchcategory, setSearchcategory] = useState("상품명");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("list");
  const [id, setId] = useState("");

  console.log("id: ", id);
  const [data, setData] = useState([
    
  ]);
  return (
    <div className="CHM_adminProductPageBg">
      {page === "list" ? (
        <Search
          categorySelect1={categorySelect1}
          setCategorySelect1={setCategorySelect1}
          categorySelect2={categorySelect2}
          setCategorySelect2={setCategorySelect2}
          selectedSalesStatus={selectedSalesStatus}
          setSelectedSalesStatus={setSelectedSalesStatus}
          startprice={startprice}
          setStartprice={setStartprice}
          endprice={endprice}
          setEndprice={setEndprice}
          searchcategory={searchcategory}
          setSearchcategory={setSearchcategory}
          search={search}
          setSearch={setSearch}
          resetSearchState={resetSearchState}
        ></Search>
      ) : (
        ""
      )}
      {page === "list" ? (
        <Result
          filteredResults={filteredResults}
          onDeleteItems={handleDeleteItems}
          setPage={setPage}
          setId={setId}
        ></Result>
      ) : (
        ""
      )}

      {page === "plus" ? <Plus setPage={setPage}></Plus> : ""}

      {page === "edit" ? (
        <Edit
          setPage={setPage}
          data={data}
          id={id}
        ></Edit>
      ) : (
        ""
      )}
    </div>
  );
}

export default Jeryo;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Cards from "./components/Cards";
import Card1 from "./components/Card1";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [view, setView] = useState("card");
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((r) => r.json())
      .then((res) => setData(res));
  }, []);

  const deleteCard = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentData = data.slice(start, end);

  return (
    <div className="container mt-4">
     
      <div className="d-flex justify-content-start mb-4">
        <button
          className={`btn me-2 ${view === "card" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setView("card")}
        >
          Card View
        </button>
        <button
          className={`btn ${view === "list" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setView("list")}
        >
          List View
        </button>
      </div>

      
      {view === "card" ? (
        <Cards products={currentData} onDelete={deleteCard} />
      ) : (
        <Card1 products={currentData} onDelete={deleteCard} />
      )}

     
      <div className="d-flex justify-content-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`btn btn-light mx-1 ${page === i + 1 ? "btn-primary text-white" : ""}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="btn btn-success ms-2"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          »
        </button>
      </div>
    </div>
  );
}

export default App;




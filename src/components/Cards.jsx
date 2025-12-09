import React from "react";

function Cards({ products, onDelete }) {

    return (

        <div className=" mt-4 d-flex  ">
            

            <div
                className="d-flex flex-wrap gap-2 justify-content-center"
                style={{ width: "100%" }}
            >

                {
                    products.map(({ id, title, body }) => (

                        <div
                            key={id}
                            className="card shadow-sm position-relative"
                            style={{ width: "25%", minHeight: "180px" }}
                        >

                            
                            <button
                                onClick={() => onDelete(id)}
                                className="btn  btn-sm position-absolute top-0 end-0 m-2"
                            >
                                ❌
                            </button>

                            <div className="card-body d-flex flex-column justify-content-center">
                                <p className="text-muted">ID: {id}</p>
                                <h5>{title}</h5>
                                <p>{body}</p>
                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    );
}

export default Cards;

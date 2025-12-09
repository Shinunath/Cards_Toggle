import React from 'react';

function Cards({ products, onDelete }) {
    return (
        <div className="d-flex flex-column gap-3">
            {products.map(item => (
                <div key={item.id} className="d-flex justify-content-between align-items-start p-3 shadow-sm bg-white border rounded-5">
                    <div>
                        <h6 className="fw-bold">{item.id}. {item.title}</h6>
                        <p className="mb-1">{item.body}</p>
                    </div>
                    <button
                        className="btn btn-sm text-danger"
                        onClick={() => onDelete(item.id)}
                    >
                        ✕
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Cards;

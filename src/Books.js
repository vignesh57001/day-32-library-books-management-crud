import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "./URL";
import { useNavigate } from "react-router-dom";

function Books() {
  const [booksdata, setBooksdata] = useState([]);
  const navigate = useNavigate();

  const viewBook = () => {
    navigate("/view-book");
  };

  const createBook = () => {
    navigate("/create-book");
  };

  const updateBook = ({ id, bookname, authorname, bookcode, bookprice }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("bookname", bookname);
    localStorage.setItem("authorname", authorname);
    localStorage.setItem("bookcode", bookcode);
    localStorage.setItem("bookprice", bookprice);
    navigate("/update-book");
  };

  const deleteBook = async (id) => {
    await axios.delete(API_URL + id);
    getBooksdata();
  };

  const getBooksdata = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data);
      setBooksdata(response.data);
    } catch (error) {
      alert("error on read page");
    }
  };
  useEffect(() => {
    getBooksdata();
  }, []);

  return (
    <div className="all-book-table">
      <table className="total-table-body">
        <thead>
          <th>
            <button
              className="custom-btn btn-12 button-rotate"
              onClick={() => createBook()}
            >
              <span>Click!</span>
              <span>Create - Book</span>
            </button>
          </th>
          <th>
            <button
              className="custom-btn btn-12 button-rotate"
              onClick={() => viewBook()}
            >
              <span>Click!</span>
              <span>View</span>
            </button>
          </th>
          <tr className="thead">
            <th scope="col">ID</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author Name</th>
            <th scope="col">Book Code</th>
            <th scope="col">Price $</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {booksdata.map((data) => (
            <tr key={data.id}>
              <td data-label="Id">{data.id}</td>
              <td data-label="Name">{data.bookname}</td>
              <td data-label="Author">{data.authorname}</td>
              <td data-label="Code">{data.bookcode}</td>
              <td data-label="Price">{data.bookprice}</td>
              <button className="btn btn-new1" onClick={() => viewBook(data)}>
                <span>Click!</span>
                <span>View</span>
              </button>
              <br />
              <br />
              <button className="btn btn-new2" onClick={() => updateBook(data)}>
                <span>Click!</span>
                <span>Update</span>
              </button>
              <button
                className="btn btn-new3"
                onClick={() => deleteBook(data.id)}
              >
                <span>Click!</span>
                <span>Delete</span>
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;

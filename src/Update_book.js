import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import { API_URL } from "./URL";
import { useNavigate } from "react-router-dom";

function Update_book() {
  const [id, setId] = useState("");
  const [bookname, setBookname] = useState("");
  const [authorname, setAuthorname] = useState("");
  const [bookcode, setBookcode] = useState("");
  const [bookprice, setBookprice] = useState("");
  const navigate = useNavigate();

  const updateBook = async () => {
    try {
      await axios.put(API_URL + id, {
        bookname,
        authorname,
        bookcode,
        bookprice,
      });
      navigate("/books");
    } catch (error) {}
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setBookname(localStorage.getItem("bookname"));
    setAuthorname(localStorage.getItem("authorname"));
    setBookcode(localStorage.getItem("bookcode"));
    setBookprice(localStorage.getItem("bookprice"));
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Form>
        <div className="form-main">
          <h1 className="text-primary">Create Book</h1>
          <div className="main-wrapper">
            <h2 className="form-head text-dark">Book Details</h2>
            <div className="form-wrapper ">
              <div className="form-card">
                <input
                  className="form-input"
                  type="text"
                  id="bookname"
                  required="required"
                  value={bookname}
                  onChange={(event) => setBookname(event.target.value)}
                />
                <label className="form-label" for="bookname">
                  Book Name
                </label>
              </div>
              <div className="form-card">
                <input
                  className="form-input"
                  type="text"
                  id="authorname"
                  required="required"
                  value={authorname}
                  onChange={(event) => setAuthorname(event.target.value)}
                />
                <label className="form-label" for="authorname">
                  Book Author Name
                </label>
              </div>
              <div className="form-card">
                <input
                  className="form-input"
                  type="text"
                  id="bookcode"
                  required="required"
                  value={bookcode}
                  onChange={(event) => setBookcode(event.target.value)}
                />
                <label className="form-label" for="bookcode">
                  Book Code No
                </label>
              </div>
              <div className="form-card">
                <input
                  className="form-input"
                  type="number"
                  id="bookprice"
                  required="required"
                  value={bookprice}
                  onChange={(event) => setBookprice(event.target.value)}
                />
                <label className="form-label" for="bookprice">
                  Book Price
                </label>
              </div>

              <button
                className="form-control bg-primary text-white"
                onClick={updateBook}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Update_book;

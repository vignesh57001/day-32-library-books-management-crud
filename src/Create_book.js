import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "./URL";
import { Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function Create_book() {
  const [bookname, setBookname] = useState("");
  const [authorname, setAuthorname] = useState("");
  const [bookcode, setBookcode] = useState("");
  const [bookprice, setBookprice] = useState("");
  const navigate = useNavigate();

  const userData = async () => {
    await axios.post(API_URL, {
      bookname,
      authorname,
      bookcode,
      bookprice,
    });
    navigate("/books");

    // console.log(bookcode);
    // console.log(bookprice);
    // console.log(bookname);
    // console.log(authorname);
  };
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
                onClick={userData}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Create_book;

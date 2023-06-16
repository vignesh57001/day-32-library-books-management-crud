import React, { useEffect, useState } from "react";
import { API_URL } from "./URL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function View_book() {
  const navigate = useNavigate();

  const updateBook = () => {
    navigate("/books");
  };

  const [booksdata, setBooksdata] = useState([]);

  const allbooksdata = async () => {
    try {
      const response = await axios.get(API_URL);
      setBooksdata(response.data);
      console.log(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    allbooksdata();
  }, []);
  return (
    <div class="book-view-container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="row">
        {booksdata.map((data) => (
          <div class="col-lg-3">
            <table
              class="table table-dark"
              style={{ margin: "10px", borderradius: "20px" }}
            >
              <thead>
                <tr>
                  <th
                    colspan="2"
                    style={{ textalign: "center", fontsize: "20px" }}
                  >
                    {data.bookname}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Author Name: </td>
                  <td>{data.authorname}</td>
                </tr>
                <tr>
                  <td>Book Code : </td>
                  <td>{data.bookcode}</td>
                </tr>
                <tr>
                  <td>Book Price : </td>
                  <td>$ {data.bookprice}</td>
                </tr>
                <tr>
                  <td colspan="2" style={{ textalign: "center" }}>
                    <button onClick={updateBook}>Update</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
    // <div className="total-card-body">
    //   <h2 className="text-white bg-dark">Book Description</h2>

    //   {booksdata.map((data) => (
    //     <div className="profile-card">
    //       <div className="profile-image">
    //         <img
    //           src="https://tinypic.host/images/2022/12/19/img_avatar.png"
    //           alt="Profile"
    //         />
    //       </div>
    //       <div className="profile-info">
    //         <h2 className="name text-dark">{data.bookname}</h2>
    //         <p className="designation">Author Name : {data.authorname}</p>
    //         <p className="description">Code : {data.bookcode}</p>
    //         <h2 className="name text-dark">price : ${data.bookprice}</h2>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}

export default View_book;

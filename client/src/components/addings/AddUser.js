import axios from "axios";
import React, { useEffect, useState } from "react";
import "./addUser.css";
function AddUser() {
  const [userid, setUserid] = useState("");
  const [total, setTotal] = useState("");
  const [number, setNumber] = useState("");
  const [num, setNum] = useState(1);
  const [update, setUpdate] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();

    const user = {
      userId: userid,
      sub_total: total,
      phone: number,
    };

    const res = await axios.post(
      "http://localhost:8000/api/user/add-order",
      user
    );
    

    setNum((num) => num + 1);
  };

  useEffect(() => {
    const gettings = async () => {
      const res = await axios.get("http://localhost:8000/api/user/get-order");
   
      setUpdate(res.data);
    };
    gettings();
  }, [num]);

  return (
    <>
      <div className="loginRight">
        <form className="loginBox" onSubmit={handleClick}>
          <input
            placeholder="UserId"
            required
            className="loginInput"
            onChange={(e) => {
              setUserid(e.target.value);
            }}
          />
          <input
            placeholder="subTotal"
            required
            className="loginInput"
            type="text"
            onChange={(e) => {
              setTotal(e.target.value);
            }}
          />
          <input
            placeholder="Phone Number"
            required
            type="number"
            className="loginInput"
            minLength="6"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />

          <button className="loginButton" type="submit">
            Submit details
          </button>
        </form>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "30px", flex: "4" }}>
          <h1>subTotal</h1>
          <h3>
            {update?.map((n) => (
              <div key={n._id}>{n.sub_total}</div>
            ))}
          </h3>
        </div>

        <div style={{ marginLeft: "30px", flex: "4" }}>
          <h1>UserId</h1>
          <h3>
            {update?.map((n) => (
              <div key={n._id}>{n.userId}</div>
            ))}
          </h3>
        </div>

        <div style={{ marginLeft: "30px", flex: "4" }}>
          <h1>phone number</h1>
          <h3>
            {update?.map((n) => (
              <div key={n._id}>{n.phone}</div>
            ))}
          </h3>
        </div>
      </div>
    </>
  );
}

export default AddUser;

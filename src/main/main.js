import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handle_submit } from "../redux/actionCreater";

const MainContent = () => {
  const [item, setItem] = useState({ email: "", password: "" });
  const [arr, setArr] = useState([]);
  const selectObject = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    const { email, password } = item;
    let newArr = selectObject.details;
    
    newArr.map((data) => {
      if ( email == data.email && password == data.password && data.auth == true ) {
        setArr((arr) => [...arr, { email: email, password: password }]);
        dispatch(handle_submit(item));
        navigate("./move");
        setItem({ email: "", password: "" });
      }
    })
  }
   
    
   
  return (
    <div>
      <div className="main">
        <h1>LOG IN</h1>
        <div className="block">
          <div className="label">
          <label htmlFor="email">Email</label>
          </div>
          <input
            type="text"
            value={item.email}
            placeholder="ben@gmail.com"
            onChange={(e) => setItem({ ...item, email: e.target.value })}
          />
        </div>
        <div className="block">
          <div className="label">
            <label htmlFor="password">Password</label>
          </div>
          <input
            type="text"
            value={item.password}
            placeholder="986"
            onChange={(e) => setItem({ ...item, password: e.target.value })}
          />
        </div>
        <div className="block">
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
    </div>
  );
};
export default MainContent;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Table = () => {
  const arr = useSelector((state) => state.details);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{arr[0].name}</td>
            <td>{arr[0].email}</td>
            <td>{arr[0].password}</td>
          </tr>
        </tbody>
      </table>
      <div className="block">
        <Link to="/">
          <h3>Log out</h3>
        </Link>
      </div>
    </div>
  );
};
export default Table;

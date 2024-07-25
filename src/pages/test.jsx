import React from "react";
import { Link } from "react-router-dom";

function Test() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my website!</p>
      <Link to="/">
        <li>2번상품</li>
      </Link>
    </div>
  );
}

export default Test;

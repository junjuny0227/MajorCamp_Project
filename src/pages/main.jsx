import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my website!</p>
      <Link to="/test">
        <li>1번상품</li>
      </Link>
    </div>
  );
}

export default Home;

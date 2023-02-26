import React from "react";

function footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <footer>
        <p>Copyright © {year}</p>
      </footer>
    </div>
  );
}

export default footer;

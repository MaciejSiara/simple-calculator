import React from "react";

const Result = ({ result }) => {
  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <p style={{ fontSize: "24px", fontWeight: 500 }}>
        Result: <strong>{result}</strong>
      </p>
    </div>
  );
};

export default Result;

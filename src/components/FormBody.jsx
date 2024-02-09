import React from "react";
import Form from "./Form";
import "./FormBody.css";

function FormBody() {
  return (
    <div id="formBody" className="flex items-center justify-between">
      <div id="status" className="text-center">
        <h1 className="font-bold">Welcome to Biblio</h1>
        <h2 className="font-bold">Best, yet the most patient teacher.</h2>
      </div>
      <Form />
    </div>
  );
}

export default FormBody;

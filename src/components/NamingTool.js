import React, { useState } from "react";
import * as n from "../lib/Naming.js";

function NamingTool(props) {
  const [companyName, setCompanyName] = useState("");
  const [namingToolOutput, setNamingToolOutput] = useState("");
  const [namingToolInput, setNamingToolInput] = useState("");

  // process pasted products and brand, set text results to output box
  function processProductNames() {
    const results = [];
    namingToolInput.split("\n").forEach((line) => {
      results.push(n.default.getAllNamesArray(companyName, line));
    });

    var resultText = "";
    results.forEach((pArray) => {
      pArray.forEach((line) => {
        resultText += line + '\n';
      });
      resultText += '\n';
    });
    setNamingToolOutput(resultText);
  }

  function handleTextAreaInputChange(e) {
    setNamingToolInput(e.target.value);
  }

  function handleCompanyNameInputChange(e) {
    setCompanyName(e.target.value);
  }

  return (
    <div className="flex-inline">
      {/* Left (input) section */}
      <div className="flex-inline-inner">
        <p className="instructions-explain">
          Input company name, then paste list of product names below.
        </p>
        {/* Left side inputs (text, textarea, button) */}
        <div style={{ textAlign: "center" }}>
          <input
            id="brand-input"
            type={"text"}
            placeholder="Company Name"
            onChange={handleCompanyNameInputChange}
          />
          <div>
            <textarea
              id="product-names-input"
              rows={30}
              onChange={handleTextAreaInputChange}
            />
          </div>
          <button className="button-9" onClick={processProductNames}>Run Tool</button>
        </div>
      </div>

      {/* Right (output) section */}
      <div className="flex-inline-inner">
        <p className="instructions-explain">Results</p>
        <div style={{ textAlign: "center" }}>
          <div>
            <textarea id="naming-tool-output" readOnly rows={33} value={namingToolOutput}/>
          </div>
          <button
            className="button-9"
            onClick={() => {navigator.clipboard.writeText(namingToolOutput)}}
          >
            Copy Results
          </button>
        </div>
      </div>
    </div>
  );
}

export default NamingTool;

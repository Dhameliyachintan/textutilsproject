import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(16); // Initialize font size state

  const handleUppercaseClick = () => {
    setText(text.toUpperCase());
    props.showAlert("toUpperCase", "success");
  };

  const handleLowercaseClick = () => {
    setText(text.toLowerCase());
    props.showAlert("toLowerCase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("ClearText", "success");
  };

  const handleReverseClick = () => {
    setText(text.split("").reverse().join(""));
  };

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleCopyClick = () => {
    props.showAlert("CopyText", "success");
    navigator.clipboard.writeText(text);
    // var copyText = document.getElementById("myBox");
    // copyText.select();
    // document.getSelection().removeAllRanges();
  };

  const handleRemoveExtraSpacesClick = () => {
    props.showAlert("RemoveExtraSpace", "success");
    setText(text.replace(/\s+/g, "").trim());
  };
  const handleIncreaseFontSizeClick = () => setFontSize(fontSize + 2);
  const handleDecreaseFontSizeClick = () => setFontSize(fontSize - 2);

  return (
    <div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>
          {props.heading}
        </h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Example area
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="5"
            value={text}
            placeholder="Enter text"
            onChange={handleChange}
            // style={{ fontSize: `${fontSize}px` }} // Apply font size to textarea
            style={{
              backgroundColor: props.mode === "light" ? "gray" : "white",
              color: props.mode === "light" ? "white" : "black",
              fontSize: `${fontSize}px` // Apply font size to textarea
            }}
          />
          <button
            className={
              props.mode === "btn mt-2 mt-md-2 my-2 ms-2 ms-md-2 btn-primary"
                ? "btn mt-2 mt-md-2 my-2 ms-2 ms-md-2 btn-dark"
                : "btn btn-white mt-2 mt-md-2 my-2 ms-2 ms-md-2 bg-white text-dark border"
            }
            disabled={text.length === 0}
            onClick={handleUppercaseClick}
          >
            Convert to Uppercase
          </button>
          <button
            className={
              props.mode === "btn btn-secondary mt-2 mt-md-2 my-2 ms-2 ms-md-2"
                ? "btn mt-2 mt-md-2 my-2 ms-2 ms-md-2 btn-dark"
                : "btn btn-white mt-2 mt-md-2 my-2 ms-2 ms-md-2 bg-white text-dark border"
            }
            disabled={text.length === 0}
            onClick={handleLowercaseClick}
          >
            Convert to Lowercase
          </button>
          <button
            className={
              props.mode === "btn btn-secondary mt-2 mt-md-2 my-2 ms-2 ms-md-2"
                ? "btn mt-2 mt-md-2 my-2 ms-2 ms-md-2 btn-dark"
                : "btn btn-white mt-2 mt-md-2 my-2 ms-2 ms-md-2 bg-white text-dark border"
            }
            disabled={text.length === 0}
            onClick={handleReverseClick}
          >
            Reverse Text
          </button>
          <button
            className={
              props.mode === "btn btn-danger mt-2 mt-md-2 my-2 ms-2 ms-md-2"
                ? "btn btn-danger mt-2 mt-md-2 my-2 ms-2 ms-md-2"
                : "btn btn-white mt-2 mt-md-2 my-2 ms-2 ms-md-2 bg-white text-dark border"
            }
            disabled={text.length === 0}
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            className={
              props.mode === "btn btn-success mt-2 mt-md-2 my-2 ms-2 ms-md-2"
                ? "btn btn-dark mt-2 mt-md-2 my-2 ms-2 ms-md-2"
                : "btn btn-white mt-2 mt-md-2 my-2 ms-2 ms-md-2 bg-white text-dark border"
            }
            disabled={text.length === 0}
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
          <button
            className={
              props.mode === "btn btn-warning mt-2 mt-md-2 my-2 ms-2 ms-md-2"
                ? "btn mt-2 mt-md-2 my-2 ms-2 ms-md-2 btn-dark"
                : "btn btn-white mt-2 mt-md-2 my-2 ms-2 ms-md-2 bg-white text-dark border"
            }
            disabled={text.length === 0}
            onClick={handleRemoveExtraSpacesClick}
          >
            Remove Extra Spaces
          </button>
          <button
            className={
              props.mode === "btn btn-info mt-2 mt-md-2 my-2 ms-2 ms-md-2"
                ? "btn mt-2 mt-md-2 my-2 ms-2 ms-md-2 btn-dark"
                : "btn btn-white mt-2 mt-md-2 my-2 ms-2 ms-md-2 bg-white text-dark border"
            }
            disabled={text.length === 0}
            onClick={handleIncreaseFontSizeClick}
          >
            Increase Font Size
          </button>
          <button
            className={
              props.mode === "btn btn-info mt-2 mt-md-2 my-2 ms-2 ms-md-2"
                ? "btn mt-2 mt-md-2 my-2 ms-2 ms-md-2 btn-dark"
                : "btn btn-white mt-2 mt-md-2 my-2 ms-2 ms-md-2 bg-white text-dark border"
            }
            disabled={text.length === 0}
            onClick={handleDecreaseFontSizeClick}
          >
            Decrease Font Size
          </button>

          <div
            className="container"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            <div className="number-world">
              <h1>text summary</h1>
              <p>
                {
                  text.split(/\s+/).filter(element => {
                    return element.length !== 0;
                  }).length
                }{" "}
                words and {text.length} character
              </p>
              <p>
                {0.003 *
                  text.split("").filter(element => {
                    return element.length !== 0;
                  }).length}{" "}
                minutes read
              </p>
              <h1>preview</h1>
              <p>
                {text.length > 0 ? text : "Nathing to preview"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

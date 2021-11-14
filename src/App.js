import "./App.scss";
import { useState } from "react";
import html2canvas from "html2canvas";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [image, setImage] = useState("");

  const handleChange1 = function (e) {
    setLinea1(e.target.value);
  };
  const handleChange2 = function (e) {
    setLinea2(e.target.value);
  };
  const handleSelect = function (e) {
    setImage(e.target.value);
  };
  const handleClick = function (e) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/jpg");

      var link = document.createElement("a");
      link.download = "meme.jpg";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <select onChange={handleSelect}>
        <option value="" selected disabled hidden>
          Elige un meme
        </option>
        <option value="fire">Casa en Llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br />
      <input
        onChange={handleChange1}
        type="text"
        name=""
        placeholder="linea 1"
      />{" "}
      <br />
      <input
        onChange={handleChange2}
        type="text"
        name=""
        placeholder="linea 2"
      />{" "}
      <br />
      <br />
      <button onClick={handleClick}>Exportar</button>
      <div className="meme" id="meme">
        <span>{linea1}</span>
        <span>{linea2}</span>
        {image && <img src={`./img/${image}.jpg`} alt="custom meme" />}
      </div>
    </div>
  );
}

export default App;

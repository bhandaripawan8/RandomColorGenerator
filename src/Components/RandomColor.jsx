import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => Math.floor(Math.random() * length);

  const handleCreateRandomHexColor = () => {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "hex") handleCreateRandomHexColor();
    else handleCreateRandomRgbColor();
  }, [typeOfColor]);

  const generateColor = () => {
    if (typeOfColor === "hex") handleCreateRandomHexColor();
    else handleCreateRandomRgbColor();
  };

  return (
    <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: "100vw", height: "100vh", background: color }}>
      <button style={{ height: '40px', width: "200px", background: "teal" }} onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button style={{ height: '40px', width: "200px", background: "teal" }} onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button style={{ height: '40px', width: "200px", background: "teal" }} onClick={generateColor}>Generate Random Color</button>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", fontSize: "30px", marginTop: "50px", flexDirection: 'column', gap: '20px' }}>
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;

import React, { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";
import "./App.css";
import Camera from "./Camera";
import Container from "react-bootstrap/Container";
import Majezik from "./Majezik.js";
import Vermidon from "./Vermidon.js";
import Furacin from "./Furacin";
import Naprosyn from "./Naprosyn";
import Novalgin from "./Novalgin";
import Parol from "./Parol";
import Strepsils from "./Strepsils";
import Talcid from "./Talcid";
import Tylolhot from "./Tylolhot";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Sky from "react-sky";
import Fail from "./fail";
import Icon1 from "./icons/icon1.png"
import Icon2 from "./icons/icon2.png"
import Icon3 from "./icons/icon3.png"
import Icon4 from "./icons/icon4.png"


function App() {
  const worker = createWorker({
    logger: (m) => console.log(m, "logger"),
  });
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(photo);
    setOcr(text);
    console.log(text);
  };
  const [ocr, setOcr] = useState("");
  useEffect(() => {
    doOCR();
  });

  const [photo, setPhoto] = useState();

  const photoHandler = (photo) => {
    if(photo && photo.length >0 ){

      let photoUrl = URL.createObjectURL(photo[0]) || null;
      setPhoto(photoUrl);
    }
  };


  const renderProspektus = () => {

    if (ocr === "") {
      return null;
    } else {
      switch (true) {
        case /Vermidon/.test(ocr):
          return <Vermidon />;
        case /ajezik/.test(ocr):
          return <Majezik />;
        case /Furacin/.test(ocr):
          return <Furacin />;
        case /Naprosyn/.test(ocr):
          return <Naprosyn />;
        case /Novalgin/.test(ocr):
          return <Novalgin />;
        case /Parol/.test(ocr):
          return <Parol />;
        case /repsils/.test(ocr):
          return <Strepsils />;
        case /Tal/.test(ocr):
          return <Talcid />;
        case /TYLOL/.test(ocr):
          return <Tylolhot />;
        default:
          return <Fail data={ocr} />;
      }
    }
  };

  console.log(photo);
  return (
    <div className="containerAna">
      <Sky
        images={{
          /* FORMAT AS FOLLOWS */
          0: Icon1 /* You can pass as many images as you want */,
          1: Icon2,
          2: Icon3,
          3: Icon4,
        }}
        how={
          80
        } /* Pass the number of images Sky will render chosing randomly */
        time={40} /* time of animation */
        size={"80px"} /* size of the rendered images */
        background={"palettedvioletred"} /* color of background */
      />

      <Container fluid style={{ padding: "1%" }}>
        <div>
          <p
            style={{
              marginLeft: "42%",
              color: "white",
              fontWeight: "bolder",
              fontSize: "180%",
            }}
          >
            Prospektusum.com DEMO
          </p>
          <image />
        </div>

        <Camera handlePhotoChange={photoHandler}  />
        <div style={{ marginLeft: "45%", marginTop: "2%" }}>
          {photo && ocr === "" ? (
            <div>
              <Loader type="Puff" color="#fc03ba" height={100} width={100} />
              <h2>Aranıyor...</h2>
            </div>
          ) : null}
        </div>

        {renderProspektus(ocr)}
      </Container>
    </div>
  );
}

export default App;

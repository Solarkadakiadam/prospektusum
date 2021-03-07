import React from "react";

function Fail(props) {
  return (
    <div>
      <h2>
        Ne Yazıkki ilaç bulunamadı, modelimizde bulunmayabilir, yada daha net
        bir fotoğraf yüklemeyi deneyebilirsiniz.
      </h2>
      <h5>incelemeniz için yapay zeka çıktısı:{props.data}</h5>
    </div>
  );
}

export default Fail;

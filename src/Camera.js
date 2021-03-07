import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import Resizer from "react-image-file-resizer";

import { Row, Col } from "react-bootstrap";

class Camera extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     files: []
  //   };
  // }
  // handleChange(files) {
  //   this.setState({
  //     files: files
  //   });
  // }

  handlePhotoChangeandResize(photo) {
    console.log(photo);
    // let resizedPhoto = Resizer.imageFileResizer(
    //   photo.target.files[0],
    //   1000,
    //   1000,
    //   "PNG",
    //   100,
    //   0,
    //   uri => {
    //     console.log(uri);
    //   }
    // );
    this.props.handlePhotoChange(photo);
  }

  render() {
    return (
      <div style={{ width: "50%", marginLeft: "25%", marginRight: "25%" }}>
        {" "}
        <DropzoneArea
          onChange={photo => this.handlePhotoChangeandResize(photo)}
          dropzoneText="İlacınızın Fotoğrafını Sürükleyip Bırakın"
        />
      </div>
    );
  }
}

export default Camera;

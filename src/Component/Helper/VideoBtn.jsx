import "../../../node_modules/react-modal-video/scss/modal-video.scss"
import Lottie from "lottie-react";
import btn from "../../assets/PlayBtutton.json";

import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export class VideoBtn extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <div>
          <ModalVideo
            channel="youtube"
            youtube={{ mute: 1, autoplay: 1}}
            isOpen={this.state.isOpen}
            videoId="HYUpNJJELeE"
            allowFullScreen
            onClose={() => this.setState({ isOpen: false })}
          />
          <Lottie
            onClick={this.openModal}
            className="h-24 w-24 mt-3 md:mt-3 md:ml-4"
            animationData={btn}
            loop={true}
          />
        </div>
      </div>
    );
  }
}

export default VideoBtn;

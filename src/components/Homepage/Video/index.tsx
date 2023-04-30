import React from "react";
import Heading from "@theme/Heading";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function Video() {
  return (
    <div className="container text--center margin-bottom--xl">
      <div className="row">
        <div className="col">
          <Heading as="h2">
            Check out our talk from the{" "}
            <a href="https://event.subnetsummit.xyz/">Subnet Summit</a>!
          </Heading>
          <div className="video-container">
            <LiteYouTubeEmbed
              id="YbE7OA23L_s"
              params="autoplay=1&autohide=1&showinfo=0&rel=0"
              title="Subnet Infra Made Easy With Ash"
              poster="maxresdefault"
              webp
            />
          </div>
        </div>
      </div>
    </div>
  );
}

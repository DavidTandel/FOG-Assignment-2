import { Img } from "./..";
import React from "react";

export default function ImageGallery({ dawnbreakerImage = "images/img_dawnbreaker_1.png", ...props }) {
  return (
    <div {...props} className={`${props.className} h-[76px] w-[24%] md:w-full md:px-5 bg-black relative`}>
      <Img
        src={dawnbreakerImage}
        alt="Dawnbreakerone"
        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[72px] w-full flex-1 object-cover"
      />
      <Img
        src="images/img_browser_si_nex.png"
        alt="Browsersinex"
        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[72px] w-full flex-1 object-cover"
      />
    </div>
  );
}
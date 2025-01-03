import { Img } from "./.."; // Assuming this is the correct relative path
import React from "react";

export default function MenuMultiplayerServerBrowserInvite({ ...props }) {
  return (
    <div
      {...props}
      className={`${props.className || ""} flex flex-col items-end w-[20%] md:w-full mt-[22px] gap-[34px] px-11 md:px-5 sm:px-4`}
    >
      <div className="flex flex-col items-start gap-[18px]">
        <Img src="images/img_thumbs_up_white_0.svg" alt="Thumbsup" className="h-[10px]" />
        <Img src="images/img_plus_white_0.svg" alt="Plus" className="h-[50px] self-end" />
      </div>
      <div className="flex flex-col items-start gap-[18px]">
        <Img src="images/img_contrast_white_0.svg" alt="Contrast" className="h-[10px]" />
        <Img src="images/img_lock_green_a700.png" alt="Lock" className="h-[50px] object-cover" />
      </div>
      <div className="flex w-[18%] flex-col items-start gap-[18px]">
        <div className="h-[10px] w-[10px] rounded border-2 border-solid border-white-0" />
        <Img src="images/img_close_white_0.png" alt="Close" className="h-[50px] object-cover" />
      </div>
    </div>
  );
}
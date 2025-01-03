import { Heading } from "./..";
import React from "react";

export default function RegionInfoRow({ regionText = "Region", locationText = "europe de", ...props }) {
  return (
    <div {...props} className={`${props.className || ""} flex flex-col self-stretch gap-1 flex-1`}>
      <div className="ml-4 mr-[22px] flex flex-wrap justify-between gap-5 self-stretch">
        <Heading size="textxs" as="p" className="text-[16px] font-medium uppercase tracking-[0.64px]">
          {regionText}
        </Heading>
        <Heading size="textxs" as="p" className="text-[16px] font-medium uppercase tracking-[0.64px]">
          {locationText} {/* Moved locationText inside the Heading component */}
        </Heading>
      </div>
      <div className="h-px w-full self-stretch bg-white-a700_19" />
    </div>
  );
}
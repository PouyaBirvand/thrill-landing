"use client";

import React from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas-lite";

export default function WavyLines() {
  const { rive, RiveComponent } = useRive({
    src: `/animations/wavy-header-lines.riv`,
    stateMachines: ["state-machine"],
    autoplay: true,
  });

  const blurDivs = Array.from({ length: 25 }, (_, i) => (
    <div
      key={i}
      className="blurFilter"
      style={{
        height: "6%",
        backdropFilter: `blur(${(i + 1) * 0.5}px)`,
      }}
    />
  ));

  return (
    <div className="wavyLines">
      <RiveComponent className="rive" />
      <div className="progressiveBlurContainer">{blurDivs}</div>
    </div>
  );
}
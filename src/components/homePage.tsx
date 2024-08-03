"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { content } from "./contents";

export default function HomePage() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}

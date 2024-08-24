'use client';
import Image from "next/image";
import "./grid/grid.css";

import { useState } from "react";
import Bgrid from "./grid/Bgrid";
export default function Home() {
  const [v,sV]=useState(['','','','','','','','','']);
  return <Bgrid v={v} sV={sV} />
}

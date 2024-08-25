'use client';
import "./grid/grid.css";

import { useState } from "react";
import Bgrid from "./grid/Bgrid";
export default function Home() {
  const [v,sV]=useState(['','','','','','','','','']);// value of outer grid
  const [cg, setCg]=useState('');//complete game
  return <Bgrid v={v} sV={sV} cg={cg} setCg={setCg} />
}

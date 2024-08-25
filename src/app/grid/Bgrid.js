import { useState } from "react";
import Grid from "./Grid";

export default function Bgrid(prop) {
    const [p,setP] =useState('X');//Player
  const [el, setEl]=useState([true,true,true,true,true,true,true,true,true]);//Eligible playable spot
  const [c,setC]=useState(['black','black','black','black','black','black','black','black','black']);//color for outer grid when anyone wins turn win line to red
  return (
    <div>
      <h1>{prop.cg==''? p+" Plays:" : prop.cg}</h1>
      <div className="center">
        <div className="grid_container">
            <div className="grid_item1" style={{color:c[0]}}>{prop.v[0]==''?<Grid p={p} setP={setP} el={el} setEl={setEl} v={prop.v} sV={prop.sV} setC={setC} setCg={prop.setCg} gn={0}/> : prop.v[0]}</div>
            <div className="grid_item1" style={{color:c[1]}}>{prop.v[1]==''?<Grid p={p} setP={setP} el={el} setEl={setEl} v={prop.v} sV={prop.sV} setC={setC} setCg={prop.setCg} gn={1}/> : prop.v[1]}</div>
            <div className="grid_item2" style={{color:c[2]}}>{prop.v[2]==''?<Grid p={p} setP={setP} el={el} setEl={setEl} v={prop.v} sV={prop.sV} setC={setC} setCg={prop.setCg} gn={2}/> : prop.v[2]}</div>  
            <div className="grid_item1" style={{color:c[3]}}>{prop.v[3]==''?<Grid p={p} setP={setP} el={el} setEl={setEl} v={prop.v} sV={prop.sV} setC={setC} setCg={prop.setCg} gn={3}/> : prop.v[3]}</div>
            <div className="grid_item1" style={{color:c[4]}}>{prop.v[4]==''?<Grid p={p} setP={setP} el={el} setEl={setEl} v={prop.v} sV={prop.sV} setC={setC} setCg={prop.setCg} gn={4}/> : prop.v[4]}</div>
            <div className="grid_item2" style={{color:c[5]}}>{prop.v[5]==''?<Grid p={p} setP={setP} el={el} setEl={setEl} v={prop.v} sV={prop.sV} setC={setC} setCg={prop.setCg} gn={5}/> : prop.v[5]}</div>  
            <div className="grid_item3" style={{color:c[6]}}>{prop.v[6]==''?<Grid p={p} setP={setP} el={el} setEl={setEl} v={prop.v} sV={prop.sV} setC={setC} setCg={prop.setCg} gn={6}/> : prop.v[6]}</div>
            <div className="grid_item3" style={{color:c[7]}}>{prop.v[7]==''?<Grid p={p} setP={setP} el={el} setEl={setEl} v={prop.v} sV={prop.sV} setC={setC} setCg={prop.setCg} gn={7}/> : prop.v[7]}</div>
            <div className="grid_item" style={{color:c[8]}}>{prop.v[8]==''?<Grid p={p} setP={setP} el={el} setEl={setEl} v={prop.v} sV={prop.sV} setC={setC} setCg={prop.setCg} gn={8}/>: prop.v[8]}</div>  
        </div>
      </div>
    </div>
  );
}
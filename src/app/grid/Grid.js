import "./gridsm.css";
import { useState } from "react";
import { bSetValue, setValue } from "./setValue";
export default function Grid(prop) {
    const [v,sv]=useState(['','','','','','','','','']);// inner grid value
    function ttc(e){
        if (prop.el[prop.gn]==false)
            return;
        let [f,f1]=setValue(sv, e, prop), f2=true, f3=false;//f1 tells who wins in current inner grid
        if (!f)//f tells if any vlaue in present in the clicked spot or not
            return;
        for (let i=0; i<9; i++){
            if (v[i]==='')
                f2=false;// f2 tells if there are any blank spot in current inner grid 
        }
        if (f2 && f1==='')
            f1='D';
        if (f1!='' && bSetValue(prop,f1))// if anyone wins
            return;
        prop.setEl((prev)=>{
            if (prop.v[e.target.id]!=''){
                for (let i=0; i<9; i++){
                    if (prop.v[i]==='')
                        prev[i]=true;
                    else prev[i]=false;
                }
            }
            else{
                for (let i=0; i<9; i++){
                    prev[i]=false;
                }
                prev[e.target.id]=true;
            }
            return prev;
        })
        f2=true;
        for (let i=0; i<9; i++){
            if (prop.v[i]==='')
                f2=false;
        }
        if (f2){
            prop.setCg("Draws!!");
        }
        // console.log(prop.el);
        if (prop.p==='X')
            prop.setP('O');
        else prop.setP('X');
        // console.log("clicked "+ e.target.id);
    }
    return (
    <div className="grid_containersm" style={prop.el[prop.gn]? {border: "3px solid #2fe36b"} :  {border: "none"}}>
      <div className="grid_item1sm" id={0} onClick={ttc}>{v[0]}</div>
      <div className="grid_item1sm" id={1} onClick={ttc}>{v[1]}</div>
      <div className="grid_item2sm" id={2} onClick={ttc}>{v[2]}</div>  
      <div className="grid_item1sm" id={3} onClick={ttc}>{v[3]}</div>
      <div className="grid_item1sm" id={4} onClick={ttc}>{v[4]}</div>
      <div className="grid_item2sm" id={5} onClick={ttc}>{v[5]}</div>  
      <div className="grid_item3sm" id={6} onClick={ttc}>{v[6]}</div>
      <div className="grid_item3sm" id={7} onClick={ttc}>{v[7]}</div>
      <div className="grid_itemsm" id={8} onClick={ttc}>{v[8]}</div>  
    </div>
  );
}
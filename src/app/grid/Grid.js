// 'use client';
import "./gridsm.css";
import { useState } from "react";
export default function Grid(prop) {
    const [v,sv]=useState(['','','','','','','','','']);// inner grid value
    function ttc(e){
        if (prop.el[prop.gn]==false)
            return;
        let f=true, f1='', f4=false; 
        sv((prev)=>{//for inner grid
            if (prev[e.target.id]==='X' || prev[e.target.id]==='O' ){
                f=false;
                return prev;
            }
            prev[e.target.id]=prop.p; 
            if (prev[0]==prev[1] && prev[1]==prev[2] && prev[0]!=''){
                f1=prev[0];  
            }
            if (prev[3]==prev[4] && prev[4]==prev[5] && prev[3]!=''){
                f1=prev[3];  
            }
            if (prev[6]==prev[7] && prev[7]==prev[8] && prev[6]!=''){
                f1=prev[6];  
            }
            if (prev[0]==prev[3] && prev[3]==prev[6] && prev[0]!=''){
                f1=prev[0];  
            }
            if (prev[1]==prev[4] && prev[4]==prev[7] && prev[1]!=''){
                f1=prev[1];  
            }
            if (prev[2]==prev[5] && prev[5]==prev[8] && prev[2]!=''){
                f1=prev[2];  
            }
            if (prev[0]==prev[4] && prev[4]==prev[8] && prev[0]!=''){
                f1=prev[0];  
            }
            if (prev[2]==prev[4] && prev[4]==prev[6] && prev[2]!=''){
                f1=prev[2];  
            }
            return prev;
        });
        
        if (!f)
            return;
        let f2=true;
        for (let i=0; i<9; i++){
            if (v[i]==='')
                f2=false;
        }
        if (f2 && f1===''){
            f1='D';
            // console.log(f2);
        }
        // console.log(f1);
        if (f1!=''){
            prop.sV((prev)=>{//for outer grid
                let f3='';
                prev[prop.gn]=f1;
                if (prev[0]==prev[1] && prev[1]==prev[2] && prev[0]!='' && prev[0]!='D'){
                    prop.setC((prev)=>{
                        prev[0]='red';
                        prev[1]='red';
                        prev[2]='red';
                        return prev;
                    })
                    f3=prev[0];
                }
                if (prev[3]==prev[4] && prev[4]==prev[5] && prev[3]!='' && prev[3]!='D'){
                    prop.setC((prev)=>{
                        prev[3]='red';
                        prev[4]='red';
                        prev[5]='red';
                        return prev;
                    })
                    f3=prev[3];  
                }
                if (prev[6]==prev[7] && prev[7]==prev[8] && prev[6]!='' && prev[6]!='D'){
                    prop.setC((prev)=>{
                        prev[6]='red';
                        prev[7]='red';
                        prev[8]='red';
                        return prev;
                    })
                    f3=prev[6];
                }
                if (prev[0]==prev[3] && prev[3]==prev[6] && prev[0]!='' && prev[0]!='D'){
                    prop.setC((prev)=>{
                        prev[0]='red';
                        prev[3]='red';
                        prev[6]='red';
                        return prev;
                    })
                    f3=prev[0];
                }
                if (prev[1]==prev[4] && prev[4]==prev[7] && prev[1]!='' && prev[1]!='D'){
                    prop.setC((prev)=>{
                        prev[1]='red';
                        prev[4]='red';
                        prev[7]='red';
                        return prev;
                    })
                    f3=prev[1];
                }
                if (prev[2]==prev[5] && prev[5]==prev[8] && prev[2]!='' && prev[2]!='D'){
                    prop.setC((prev)=>{
                        prev[2]='red';
                        prev[5]='red';
                        prev[8]='red';
                        return prev;
                    })
                    f3=prev[2];
                }
                if (prev[0]==prev[4] && prev[4]==prev[8] && prev[0]!='' && prev[0]!='D'){
                    prop.setC((prev)=>{
                        prev[0]='red';
                        prev[4]='red';
                        prev[8]='red';
                        return prev;
                    })
                    f3=prev[0];
                }
                if (prev[2]==prev[4] && prev[4]==prev[6] && prev[2]!='' && prev[2]!='D'){
                    prop.setC((prev)=>{
                        prev[2]='red';
                        prev[4]='red';
                        prev[6]='red';
                        return prev;
                    })
                    f3=prev[2]; 
                }
                if (f3!=''){
                    prop.setEl((prev)=>{
                        for (let i=0; i<9; i++){
                            prev[i]=false;
                        }
                        return prev;
                    })
                    prop.setCg(f3+" Wins!!");
                    f4=true;
                }
                return prev;
            });
        }
        if (f4)
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
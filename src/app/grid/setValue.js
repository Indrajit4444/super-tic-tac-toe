function setValue (sv, e, prop){
    let f=true, f1='';
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
    return [f,f1];
}
function bSetValue(prop, f1){
    let f3=false;
    prop.sV((prev)=>{//for outer grid
        let f2='';
        prev[prop.gn]=f1;
        if (prev[0]==prev[1] && prev[1]==prev[2] && prev[0]!='' && prev[0]!='D'){
            prop.setC((prev)=>{
                prev[0]='red';
                prev[1]='red';
                prev[2]='red';
                return prev;
            })
            f2=prev[0];
        }
        if (prev[3]==prev[4] && prev[4]==prev[5] && prev[3]!='' && prev[3]!='D'){
            prop.setC((prev)=>{
                prev[3]='red';
                prev[4]='red';
                prev[5]='red';
                return prev;
            })
            f2=prev[3];  
        }
        if (prev[6]==prev[7] && prev[7]==prev[8] && prev[6]!='' && prev[6]!='D'){
            prop.setC((prev)=>{
                prev[6]='red';
                prev[7]='red';
                prev[8]='red';
                return prev;
            })
            f2=prev[6];
        }
        if (prev[0]==prev[3] && prev[3]==prev[6] && prev[0]!='' && prev[0]!='D'){
            prop.setC((prev)=>{
                prev[0]='red';
                prev[3]='red';
                prev[6]='red';
                return prev;
            })
            f2=prev[0];
        }
        if (prev[1]==prev[4] && prev[4]==prev[7] && prev[1]!='' && prev[1]!='D'){
            prop.setC((prev)=>{
                prev[1]='red';
                prev[4]='red';
                prev[7]='red';
                return prev;
            })
            f2=prev[1];
        }
        if (prev[2]==prev[5] && prev[5]==prev[8] && prev[2]!='' && prev[2]!='D'){
            prop.setC((prev)=>{
                prev[2]='red';
                prev[5]='red';
                prev[8]='red';
                return prev;
            })
            f2=prev[2];
        }
        if (prev[0]==prev[4] && prev[4]==prev[8] && prev[0]!='' && prev[0]!='D'){
            prop.setC((prev)=>{
                prev[0]='red';
                prev[4]='red';
                prev[8]='red';
                return prev;
            })
            f2=prev[0];
        }
        if (prev[2]==prev[4] && prev[4]==prev[6] && prev[2]!='' && prev[2]!='D'){
            prop.setC((prev)=>{
                prev[2]='red';
                prev[4]='red';
                prev[6]='red';
                return prev;
            })
            f2=prev[2]; 
        }
        if (f2!=''){
            prop.setEl((prev)=>{
                for (let i=0; i<9; i++){
                    prev[i]=false;
                }
                return prev;
            })
            prop.setCg(f2+" Wins!!");
            f3=true;
        }
        return prev;
    });
    return f3;
}
export {setValue, bSetValue};
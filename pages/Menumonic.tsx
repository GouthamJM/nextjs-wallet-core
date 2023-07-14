import { useState } from "react";
import trustWalletService from "../utils/walletCore";

export default function Mneumonic(){
    const [mneumonic,setMneumonic]=useState("");
    const [val,setVal]=useState('');
  return (
    <div>
        <h1 > Wallet Core </h1>
        <input value={val} onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={()=>{
          setMneumonic(trustWalletService.suggestMenumonic(val))
        }}>Suggest Mneumonic</button>
        <p>Mneumonic : {mneumonic}</p>
    </div>)
}
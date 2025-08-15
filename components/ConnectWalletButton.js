import { useState } from "react";
export default function ConnectWalletButton(){
  const [connected,setConnected] = useState(false);
  return (
    <div className="connect-fixed">
      <button className="btn" onClick={()=>setConnected(!connected)}>
        {connected ? "Wallet: 0x12...abC" : "Connect Wallet"}
      </button>
    </div>
  );
}

import { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";

function FlowWalletConnect() {
  const [user, setUser] = useState({ loggedIn: null });

  useEffect(() => {
    fcl.currentUser().subscribe(setUser);
  }, []);

  return (
    <div>
      {user.loggedIn ? (
        <div>
          <p className="text-white">Connected: {user.addr}</p>
          <button
            onClick={() => fcl.unauthenticate()}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
          >
            Disconnect Flow Wallet
          </button>
        </div>
      ) : (
        <button
          onClick={() => fcl.authenticate()}
          className="px-6 py-2 bg-green-600 text-white rounded"
        >
          Connect Flow Wallet
        </button>
      )}
    </div>
  );
}

export default FlowWalletConnect;

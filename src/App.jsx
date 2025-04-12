import EthereumWalletConnect from "./components/EthereumWalletConnect";
import FlowWalletConnect from "./components/FlowWalletConnect";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>🎨 NFT Multichain Collab</h1>
      <EthereumWalletConnect />
      <FlowWalletConnect />
    </div>
  );
}

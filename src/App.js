import "./styles.css";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import Toggler from "./Toggler";
import Sample from "./Sample";
import ColorBox from "./ColorBox";
import ColorBoxGrid from "./ColorBoxGrid";

const colors = [
  "#FF5733", // red-orange
  "#3498DB", // blue
  "#2ECC71", // green
  "#F39C12", // orange
  "#9B59B6", // purple
  "#E91E63", // pink
  "#F1C40F", // yellow
  "#00BCD4", // cyan
  "#1ABC9C", // teal
];

export default function App() {
  return (
    <div className="App">
      <ColorBoxGrid colors={colors} />
    </div>
  );
}

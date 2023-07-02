import { Display, Log} from "../component/Add";
import Navbar from "../component/Nav";
import Profile from "../component/Profile";
import "./App.css";

function App() {
  return (
    <>
      <Navbar title="Student Management" />
      <Display/> 
      <Log/>
      <Profile/>
    </>
  );
}

export default App;

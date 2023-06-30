import { Display, Log} from "../component/Add";
import Navbar from "../component/Nav";


function App() {
  return (
    <>
      <Navbar title="Student Management" />
      <Display/> 
      <Log/>
    </>
  );
}

export default App;

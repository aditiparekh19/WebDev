import ClassComponent, {  } from "./components/ClassComponent";
import { FunctionalComponent } from "./components/FunctionalComponent";
import { Memo } from "./components/Memo";

const App = () => {
  return (
    <div>
      <ClassComponent/>
      <FunctionalComponent/>
      <Memo/>
    </div>
  );
}

export default App;

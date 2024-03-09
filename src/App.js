import "./App.css";
import { ClassComponent } from "./Component/PropsClass";

import  {PropFunction}  from "./Component/PropsComponet";
import { TableComponent } from "./Component/table";
import { StateComponent } from "./State";
import { TimerComponent } from "./Timer";

 function App() {
   return (
   <div>

  <TableComponent/>
{/* <ClassComponent  name={"jeevan"}  text={"good morning"}> hello have a nice day!</ClassComponent>

<ClassComponent  name={"vineeth"}  text={"good afternoon"}> hello can you provide any information</ClassComponent>
<ClassComponent  name={"omshi"}  text={"good night"}> hii ra karroal</ClassComponent> */}


  {/*  <PropFunction  name={"jeevan"} color={"red"}/>
<PropFunction  name={"vineeth"} color={"black"}/>
<PropFunction  name={"omshi"} color={"brown"}/>
<PropFunction  name={"lavan"} color={"white"}/> */}
    </div>
   );
 }

 export default App;

/* class App extends Component {
  render() {
    return (
      <>
   
      </>
    );
  }
}

export default App; */

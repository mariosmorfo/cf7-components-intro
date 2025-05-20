import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponents from "./components/ArrowFunctionalComponents.tsx";

import ArrowFunctionalComponentsWithProps from "./components/ArrowFunctionalComponentsWithProps.tsx";
import ArrowFunctionalComponentsWithPropsType from "./components/ArrowFunctionalComponentsWithPropsType.tsx";
function App() {

  return (
    <>
    <ClassComponent/>
        <FunctionalComponent/>
        <ArrowFunctionalComponents/>
        <ArrowFunctionalComponentsWithProps title="Is arrow functional component with props"/>
        <ArrowFunctionalComponentsWithPropsType title="Is arrow functional component with props" description="This is description"/>
    </>
  )
}

export default App

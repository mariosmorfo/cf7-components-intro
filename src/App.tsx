// import ClassComponent from "./components/ClassComponent.tsx";
// import ArrowFunctionalComponents from "./components/ArrowFunctionalComponents.tsx";
// import ArrowFunctionalComponentsWithProps from "./components/ArrowFunctionalComponentsWithProps.tsx";
// import ArrowFunctionalComponentsWithPropsType from "./components/ArrowFunctionalComponentsWithPropsType.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";
import Layout from "./components/Layout.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
import Counter from "./components/Counter.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";

function App() {

  return (
    <>
    {/*<ClassComponent/>*/}
    {/*    <FunctionalComponent/>*/}
    {/*    <ArrowFunctionalComponents/>*/}
    {/*    <ArrowFunctionalComponentsWithProps title="Is arrow functional component with props"/>*/}
    {/*    <ArrowFunctionalComponentsWithPropsType title="Is arrow functional component with props" description="This is description"/>*/}
    {/*    <CodingFactoryLogo/>*/}
        <Layout>
            {/*<h1 className="text-center text-2xl font-bold">This is a h1 title</h1>*/}
            {/*<FunctionalComponent/>*/}
            {/*<ClassComponentWithState/>*/}
            {/*<FunctionalComponentWithState/>*/}
            <Counter/>
        </Layout>
    </>
  )
}

export default App

import { generateRandomColor } from "./utils";
import { h, init } from "snabbdom";
import { propsModule, styleModule, eventListenersModule } from "snabbdom";

const patch = init([propsModule, styleModule, eventListenersModule]);

function MyComponent() {
  const internalState = {
    count: 0,
    backgroundColor: generateRandomColor(),
  };

  const updateInternalState = (newState) => {
    internalState.count = newState.count;
    internalState.backgroundColor =
      newState.backgroundColor || generateRandomColor();
    render(); // Re-render when state changes
    console.log("Internal state changed:", internalState);
  };

  const render = () => {
    if (!element) {
      console.log("Element is null or undefined. Cannot render.");
      return;
    }

    const vNode =h("div", {
      style:{
        padding:"20px", 
        height:"100vh",
        display:"flex",
        background: "hsla(66, 85%, 78%, 1)",
        background: "linear-gradient(90deg, hsla(66, 85%, 78%, 1) 0%, hsla(6, 77%, 85%, 1) 100%)",
        background: "-moz-linear-gradient(90deg, hsla(66, 85%, 78%, 1) 0%, hsla(6, 77%, 85%, 1) 100%)",
        background: "-webkit-linear-gradient(90deg, hsla(66, 85%, 78%, 1) 0%, hsla(6, 77%, 85%, 1) 100%)",
        filter:` progid: DXImageTransform.Microsoft.gradient( startColorstr="#EEF799", endColorstr="#F6C0BA", GradientType=1 )`,   
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
      }
    },[
      
      h(
        "h1",
        {
          style: {
           fontSize:"2.5rem",
            padding: "20px",
            fontWeight:"bold",
            textAlign:"center"
  
          },
        },
        "UI Library with Snabbdom and Lerna"
      ),
      h("div", {
      style:{
        padding:"20px 30px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        width:"80%",
        maxWidth:"500px",
        borderRadius:"20px", 
        background:"white"
      }
    }, [
    
      h(
        "h1",
        {
          style: {
          fontFamily: '"Protest Guerrilla", sans-serif',
          textAlign:"center",
          fontSize:"5rem",
          margin:"0" 
          },
        },
        internalState.count
      ), // Initial value of 0
      h(
        "button",
        {
          style: {
            padding: "15px 20px",
            borderRadius:"5px",
            border:"none",
            marginTop:"20px",
            letterSpacing:"1px",
            fontWeight:"bolder",
            fontSize:'2rem',
            outline:"none",
            cursor:"pointer",
            background:"#ff9a77",
            color:"white",
            width:"100%"
          },
          on: {
            click: () =>
              updateInternalState({
                count: internalState.count + 1,
                backgroundColor: generateRandomColor(),
              }),
          },
        },
        "Add"
      ),
    ])]);

    element = patch(element, vNode);
  };

  let element = document.getElementById("root");

  render();
  console.log("Component mounted!");
}

export default MyComponent;

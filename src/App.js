import React, { useState } from "react";
import "./App.css";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import SideDrawerContent from "./components/SideDrawerContent";

export const DrawerContext = React.createContext(null);
export const PoiContext = React.createContext(null);

function App() {
  const [xPosition, setXPosition] = useState("100%");
  const [displayName, setDisplayName] = useState("");

  return (
    <>
      <PoiContext.Provider value={[displayName, setDisplayName]}>
        <DrawerContext.Provider value={[xPosition, setXPosition]}>
          <div>
            <h1>{`Display Name: ${displayName}`}</h1>
          </div>
          <SideDrawer translate={xPosition}>
            <SideDrawerContent />
          </SideDrawer>
          <div>{xPosition === "0" && <Backdrop />}</div>
        </DrawerContext.Provider>
      </PoiContext.Provider>
    </>
  );
}

export default App;

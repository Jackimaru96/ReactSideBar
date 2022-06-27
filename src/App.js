import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import "./App.css";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import SideDrawerContent from "./components/SideDrawerContent";
import SideDrawerCheckboxes from "./components/SideDrawerCheckboxes";
import LeftPane from "./components/LeftPane";
import FilterChips from "./components/FilterChips";

export const DrawerContext = React.createContext(null);
export const PoiContext = React.createContext(null);
export const ChipContext = React.createContext(null);

function App() {
  const [xPosition, setXPosition] = useState("100%");
  const [displayName, setDisplayName] = useState([]);
  const [chips, setChips] = useState([]);

  return (
    <>
      <PoiContext.Provider value={[displayName, setDisplayName]}>
        <DrawerContext.Provider value={[xPosition, setXPosition]}>
          <ChipContext.Provider value={[chips, setChips]}>
            <Grid container>
              <Grid item xs={3}>
                <LeftPane>
                  <SideDrawerCheckboxes />
                </LeftPane>
              </Grid>

              <Grid item xs={9}>
                <h1>{`Display Name: ${displayName}`}</h1>
              </Grid>
              <div>{xPosition === "0" && <Backdrop />}</div>
            </Grid>
            {/* <SideDrawer translate={xPosition}>
            <SideDrawerCheckboxes />
          </SideDrawer> */}
          </ChipContext.Provider>
        </DrawerContext.Provider>
      </PoiContext.Provider>
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Drawer } from "./Example1";
import { Accordion } from "./Example2";
import { Input } from "./Example3";
import { Menu } from "./Example4";

function App() {
  return (
    <div className="App">
      <Drawer shape="circle" radius={2} />
      <Accordion collapsed expanded />
      <Input type="camera" onError={() => ({})}/>
      <Menu
        items={[
          { nick: "SyncAgent", name: "Maciek"}
        ]}
        labelProp="nick"
        valueProp="name"
      />
    </div>
  );
}

export default App;

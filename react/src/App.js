import React, { useEffect, useState, useRef } from "react";

import "@esri/calcite-components/dist/calcite/calcite.css";

import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-modal";
// import { defineCustomElements } from "@esri/calcite-components/dist/loader";
// defineCustomElements(window);

function App() {
  const ref = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      ref.current.setFocus();
    }
  }, [open]);

  return (
    <>
      <calcite-button onClick={() => setOpen(true)}>Click me!</calcite-button>
      {open && (
        <calcite-modal open ref={ref}>
          <div slot="header">Demo</div>
          <div slot="content">hi!</div>
        </calcite-modal>
      )}
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from "react-dom";
import { App } from "./App";
import { ColorProvider } from "./components/ColorProvider";

ReactDOM.render(
    <ColorProvider>
        <App />
    </ColorProvider>,
    document.getElementById("root")
);

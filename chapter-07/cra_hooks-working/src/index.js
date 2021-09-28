import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from "./components/CheckBox";
import { Numbers } from "./components/Numbers";
import { User } from "./components/User";
import { AppCats } from "./components/AppCats";

ReactDOM.render(
    <>
        <Numbers />
        <CheckBox />
        <User />
        <AppCats />
    </>,
    document.getElementById("root")
);

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./store";

const Main: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
}
export default Main;
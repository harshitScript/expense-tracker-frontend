import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store, { persister } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const Main: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persister}>
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
}
export default Main;
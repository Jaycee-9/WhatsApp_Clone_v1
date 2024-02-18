import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./Context/AccountProvider";

//components

import Messenger from "./Components/Messenger";

const clientId =
  "104519849728-4tjiksfc1crbr644umrcqbadvu93h43r.apps.googleusercontent.com";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AccountProvider />}>
      <Route
        path="/"
        element={
          <GoogleOAuthProvider clientId={clientId}>
            <Messenger />
          </GoogleOAuthProvider>
        }
      />
    </Route>
  )
);

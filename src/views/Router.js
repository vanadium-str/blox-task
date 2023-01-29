import { Route, Routes } from "react-router-dom";
import SignIn from "./auth/SignIn";
import AllTokens from "./tokens/AllTokens";

function Router() {  
    return (
      <Routes>
        <Route path={'/'} element={<SignIn />} />
        <Route path={'/tokens'} element={<AllTokens />} />
      </Routes>
    );
  }
  
  export default Router;
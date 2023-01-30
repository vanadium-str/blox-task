import { Route, Routes } from 'react-router-dom';
import SignIn from './auth/SignIn';
import AllTokens from './tokens/AllTokens';
import Tokens from './tokens';
import MyTokens from './tokens/MyTokens';

function Router() {
  return (
    <Routes>
      <Route path={'/'} element={<SignIn />} />
      <Route path={'tokens'} element={<Tokens />}>
        <Route path={'all'} index element={<AllTokens />} />
        <Route path={'my'} element={<MyTokens />} />
      </Route>
    </Routes>
  );
}

export default Router;

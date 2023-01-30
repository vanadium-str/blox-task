import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';

function Tokens() {
  return (
    <div>
      <Header login={true} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Tokens;

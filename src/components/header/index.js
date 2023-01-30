import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { resetAll } from '../../store/user/userSlice';
import { useState } from 'react';

function Header({ login }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState('allTokens');

  return (
    <div className="bg-sky-700 h-20 flex justify-center items-center">
      {login ? (
        <div>
          <nav className="text-white flex justify-center">
            <Link
              to="/tokens/all"
              className={`mx-10 ${
                currentPage === 'allTokens' ? 'border-b-2 border-solid border-white' : ''
              }`}
              onClick={() => setCurrentPage('allTokens')}
            >
              All Tokens
            </Link>
            <Link
              to="/tokens/my"
              className={`mx-10 ${
                currentPage === 'myTokens' ? 'border-b-2 border-solid border-white' : ''
              }`}
              onClick={() => setCurrentPage('myTokens')}
            >
              My Tokens
            </Link>
          </nav>
          <p
            className="text-white mr-7 cursor-pointer absolute right-0 top-7"
            onClick={() => {
              dispatch(resetAll);
              navigate('/');
            }}
          >
            Log out
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;

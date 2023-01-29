import { useNavigate } from 'react-router-dom';

function Header({ login }) {
  const navigate = useNavigate();

  return (
    <div className="bg-sky-700 h-20 flex justify-end items-center">
      {login ? (
        <p
          className="text-white mr-7 cursor-pointer"
          onClick={() => {
            navigate('/');
          }}
        >
          Log out
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;

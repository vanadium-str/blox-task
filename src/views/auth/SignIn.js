import { useState } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/user/userSlice';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [isNotAuthorized, setIsNotAuthorized] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const formData = {
      username: event.currentTarget.elements.name.value,
      password: event.currentTarget.elements.password.value,
    };
    signingIn(formData);
  };

  const signingIn = (data) => {
    fetch('http://localhost:8888/login', {
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(setToken(data.data.token));
          navigate('/tokens/all');
        } else {
          setIsNotAuthorized(data.error.message);
        }
      })
      .catch(() => {
        setIsNotAuthorized('Something went wrong');
      });
  };

  return (
    <div>
      <Header />
      <form className="flex flex-col items-center justify-center mt-32" onSubmit={handleSignIn}>
        <div className="flex flex-col">
          <label htmlFor="name">Enter your username:</label>
          <input type="text" id="name" className="mt-3 border-blue-500 border-2 border-solid" />
        </div>
        <div className="flex flex-col mt-10">
          <label htmlFor="password">Enter your password:</label>
          <input
            type="password"
            id="password"
            className="mt-3 border-blue-500 border-2 border-solid"
          />
        </div>
        <button type="submit" className="mt-10 bg-sky-700 w-28 h-8 text-white rounded-xl">
          Sign in
        </button>
        {isNotAuthorized ? <p className="text-red-500 font-bold mt-3">{isNotAuthorized}</p> : <></>}
      </form>
      <Footer />
    </div>
  );
}

export default SignIn;

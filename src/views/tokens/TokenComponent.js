import { useSelector } from 'react-redux';
import { userTokenSelector } from '../../store/user/userSelectors';
import { useState } from 'react';

function TokenComponent({ token }) {
  const userToken = useSelector(userTokenSelector);
  const [displayNone, setDisplayNone] = useState(false);

  const setToken = () => {
    fetch('http://localhost:8888/user/tokens', {
      method: 'POST',
      body: JSON.stringify({
        tokenIds: [token.tokenId],
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: userToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setDisplayNone(true);
        }
      });
  };

  return (
    <tr className="my-3">
      <td>
        <img src={token.icon} alt="icon" className="mx-5 w-10" />
      </td>
      <td className="mx-5">{token.name}</td>
      <td className="mx-5">{token.symbol}</td>
      <td className="mx-5">{token.rank}</td>
      <td className="mx-5">{token.price}</td>
      <td className="mx-5">{token.percentChange1h}</td>
      <td className="mx-5">{token.percentChange24h}</td>
      <td className="mx-5">{token.percentChange7d}</td>
      <td className="min-w-12">
        <button
          className={`bg-sky-700 w-12 h-8 text-white rounded-xl ${
            displayNone ? 'hidden' : 'block'
          }`}
          onClick={setToken}
        >
          Add
        </button>
      </td>
    </tr>
  );
}

export default TokenComponent;

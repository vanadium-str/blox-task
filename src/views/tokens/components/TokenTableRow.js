import { useSelector } from 'react-redux';
import { userTokenSelector } from '../../../store/user/userSelectors';
import { useState } from 'react';

function TokenTableRow({ token, myTokens }) {
  const userToken = useSelector(userTokenSelector);
  const [buttonDisplayNone, setButtonDisplayNone] = useState(false);
  const [deleteRow, setDeleteRow] = useState(false);

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
          setButtonDisplayNone(true);
        }
      });
  };

  const deleteToken = () => {
    fetch('http://localhost:8888/user/tokens', {
      method: 'POST',
      body: JSON.stringify({
        tokenIds: [],
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
          setButtonDisplayNone(true);
        }
      });
    setDeleteRow(true);
  };

  return (
    <tr className={`${deleteRow ? 'hidden' : ''}`}>
      <td>
        <img src={token.icon} alt="icon" className="w-8" />
      </td>
      <td>{token.name}</td>
      <td>{token.symbol}</td>
      <td>{token.rank}</td>
      <td>{token.price}</td>
      <td>{token.percentChange1h}</td>
      <td>{token.percentChange24h}</td>
      <td>{token.percentChange7d}</td>
      <td className="min-w-20">
        <button
          className={`bg-sky-700 w-20 h-8 text-white rounded-xl ${
            buttonDisplayNone ? 'hidden' : 'block'
          }`}
          onClick={myTokens ? deleteToken : setToken}
        >
          {myTokens ? 'Remove' : 'Add'}
        </button>
      </td>
    </tr>
  );
}

export default TokenTableRow;

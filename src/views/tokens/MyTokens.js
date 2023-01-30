import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userTokenSelector } from '../../store/user/userSelectors';
import { getTokensSelector } from '../../store/tokens/tokensSelectors';
import { setData } from '../../store/tokens/tokensSlice';
import TokenTableHeader from './components/TokenTableHeader';
import TokenTableRow from './components/TokenTableRow';

function MyTokens() {
  const [loading, setLoading] = useState(false);
  const token = useSelector(userTokenSelector);
  const allTokens = useSelector(getTokensSelector);
  const dispatch = useDispatch();
  const tokenIds = [];

  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:8888/user/tokens', {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          if (data.data.length) {
            data.data.map((item) => tokenIds.push(item.tokenId));
            getTokensInfo();
          } else {
            setLoading(false);
            dispatch(setData([]));
          }
        }
      });
    const refreshInterval = setInterval(getTokensInfo, 300000);
    return () => clearInterval(refreshInterval);
  }, []);

  const getTokensInfo = () => {
    fetch('/user/tokens', {
      method: 'POST',
      body: JSON.stringify({
        tokenIds: tokenIds,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.length) {
          setLoading(false);
          dispatch(setData(data));
        }
      });
  };

  return loading ? (
    <div className="flex justify-center mt-20">
      <div className="spinner" role="status" />
    </div>
  ) : (
    <div className="flex justify-center">
      {allTokens.length ? (
        <table className="mt-20">
          <tbody>
            <TokenTableHeader />

            {allTokens.map((item) => {
              return <TokenTableRow key={item.tokenId} token={item} myTokens={true} />;
            })}
          </tbody>
        </table>
      ) : (
        <p className="mt-20">You don't have any token</p>
      )}
    </div>
  );
}

export default MyTokens;

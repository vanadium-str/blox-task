import { useEffect, useState } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { useDispatch, useSelector } from 'react-redux';
import { userTokenSelector } from '../../store/user/userSelectors';
import { getTokensSelector } from '../../store/tokens/tokensSelectors';
import TokenComponent from './TokenComponent';
import { setData } from '../../store/tokens/tokensSlice';

function AllTokens() {
  const [loading, setLoading] = useState(false);
  const token = useSelector(userTokenSelector);
  const allTokens = useSelector(getTokensSelector);
  const dispatch = useDispatch();

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
          const tokenIds = [];
          data.data.map((item) => tokenIds.push(item.tokenId));
          console.log(tokenIds);
          getTokensInfo(tokenIds);
        }
      });
  }, []);

  const getTokensInfo = (tokens) => {
    fetch('http://localhost:8888/tokens-info', {
      method: 'POST',
      body: JSON.stringify({
        tokenIds: tokens,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setLoading(false);
          dispatch(setData(data.data));
        }
      });
  };

  setInterval(getTokensInfo, 300000);

  return (
    <div>
      <Header login={true} />
      <div className="flex justify-center">
        <table className="mt-20">
          <tr>
            <th></th>
            <th>Name</th>
            <th></th>
            <th>Rank</th>
            <th>Price</th>
            <th>Percent Change 1h</th>
            <th>Percent Change 24h</th>
            <th>Percent Change 7d</th>
          </tr>

          {allTokens.map((item) => {
            return <TokenComponent key={item.tokenId} token={item} />;
          })}
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default AllTokens;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTokensSelector } from '../../store/tokens/tokensSelectors';
import { setData } from '../../store/tokens/tokensSlice';
import TokenTableRow from './components/TokenTableRow';
import TokenTableHeader from './components/TokenTableHeader';

function AllTokens() {
  const [loading, setLoading] = useState(false);
  const allTokens = useSelector(getTokensSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getTokensInfo();
    const refreshInterval = setInterval(getTokensInfo, 300000);
    return () => clearInterval(refreshInterval);
  }, []);

  const getTokensInfo = () => {
    fetch('/tokens-info')
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
      <table className="mt-20">
        <tbody>
          <TokenTableHeader />

          {allTokens.map((item) => {
            return <TokenTableRow key={item.tokenId} token={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllTokens;

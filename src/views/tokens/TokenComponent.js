function TokenComponent({ token }) {
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
    </tr>
  );
}

export default TokenComponent;

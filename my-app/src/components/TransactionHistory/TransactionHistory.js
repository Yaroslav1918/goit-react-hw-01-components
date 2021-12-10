import s from '../TransactionHistory/TransactionHistory.module.css'
import PropTypes from 'prop-types';
const TransactionHistory = ({ items }) => {
    return (
        <table className={s.transactionHistory}>
  <thead className={s.transactionThead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody className={s.transactionBody}>
          {items.map(item => (
    <tr key ={item.id}>
    <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
            </tr>
          ))}
  </tbody>
</table>

    )
}
TransactionHistory.propTypes = {
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionHistory;
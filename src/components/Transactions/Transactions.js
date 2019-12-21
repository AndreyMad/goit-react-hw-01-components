import React from "react";
import PropTypes from "prop-types";
import style from "./Transactions.module.css";

const Transactions = ({ transactionHistory }) => {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr className={style.table_head}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactionHistory.map(item => (
          <tr className={style.tableRow} key={item.id}>
            <td className={style.firstLetterToUpercase}>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
Transactions.propTypes = {
  transactionHistory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  ).isRequired
};
export default Transactions;

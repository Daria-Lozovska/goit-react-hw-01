import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr className={styles.main}>
          <th className={styles.mainItem}>Type</th>
          <th className={styles.mainItem}>Amount</th>
          <th className={styles.mainItem}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {items.map((transaction) => (
          <tr key={transaction.id}>
            <td className={styles.type}>{transaction.type}</td>
            <td className={styles.amount}>{transaction.amount}</td>
            <td className={styles.currency}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
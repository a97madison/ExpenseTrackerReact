import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

function ExpensesList(props) {
  const emptyExpensesContent = <p className="expenses-list__fallback">Found no expenses.</p>;

  if (props.items.length === 0) {
    return emptyExpensesContent;
  }

  const expenseItems = props.items.map(item =>
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  );

  return (
    <ul className="expenses-list">
      {expenseItems}
    </ul>
  );
}

export default ExpensesList;

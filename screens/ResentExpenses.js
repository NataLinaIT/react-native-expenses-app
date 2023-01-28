import { useContext } from 'react';
import { ExpensesContext } from '../store/context';
import { getDateMinusDays } from '../util/date';

import ExpensesOutput from '../components/ExpensesOutput';

const ResentExpenses = () => {
  const expensesContext = useContext(ExpensesContext);
  
  const resentExpenses = expensesContext.expenses.filter(e => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return e.date > date7DaysAgo;
  })

  return <ExpensesOutput
            period="Last 7 days"
            expenses={resentExpenses}
            fallbackText="No expenses registered for the last 7 days"
          />
}

export default ResentExpenses;
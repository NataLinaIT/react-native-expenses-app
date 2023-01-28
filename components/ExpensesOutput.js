import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';

import ExpensesSummary from '../components/ExpensesSummary';
import ExpensesList from '../components/ExpensesList';

const ExpensesOutput = ({ expenses, period }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} period={period}/>
      <ExpensesList expenses={expenses}/>
    </View>
  )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});

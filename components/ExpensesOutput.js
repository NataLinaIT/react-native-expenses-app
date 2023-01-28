import { View, StyleSheet, Text } from 'react-native';
import { GlobalStyles } from '../constants/styles';

import ExpensesSummary from '../components/ExpensesSummary';
import ExpensesList from '../components/ExpensesList';

const ExpensesOutput = ({ expenses, period, fallbackText }) => {
  let content = <Text style={styles.text}>{fallbackText}</Text>

  if(expenses.length > 0) {
    content =  <ExpensesList expenses={expenses}/>
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} period={period}/>
      {content}
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
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32
  },
});

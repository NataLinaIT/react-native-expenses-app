import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';

import ExpensesSummary from '../components/ExpensesSummary';
import ExpensesList from '../components/ExpensesList';

const dummy_exps = [
  {
    id: 'e1',
    description: 'Shoes',
    amount: 59.99,
    date: new Date('2023-01-26')
  },
  {
    id: 'e2',
    description: 'Fruits',
    amount: 12.99,
    date: new Date('2023-01-17')
  },
  {
    id: 'e3',
    description: 'A book',
    amount: 25.99,
    date: new Date('2023-01-23')
  },
  {
    id: 'e11',
    description: 'Shoes',
    amount: 59.99,
    date: new Date('2023-01-26')
  },
  {
    id: 'e21',
    description: 'Fruits',
    amount: 12.99,
    date: new Date('2023-01-17')
  },
  {
    id: 'e31',
    description: 'A book',
    amount: 25.99,
    date: new Date('2023-01-23')
  },
  {
    id: 'e13',
    description: 'Shoes',
    amount: 59.99,
    date: new Date('2023-01-26')
  },
  {
    id: 'e277',
    description: 'Fruits',
    amount: 12.99,
    date: new Date('2023-01-17')
  },
  {
    id: 'e355',
    description: 'A book',
    amount: 25.99,
    date: new Date('2023-01-23')
  }
]
const ExpensesOutput = ({ expenses, period }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={dummy_exps} period={period}/>
      <ExpensesList expenses={dummy_exps}/>
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

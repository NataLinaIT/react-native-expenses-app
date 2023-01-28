import { useLayoutEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/context';

import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import IconButton from '../UI/IconButton';

const ManageExpenses = ({route, navigation}) => {
  const expensesContext = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesContext.expenses.find(e => e.id === editedExpenseId)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing? 'Edit Expenses': 'Add Expenses'
    })
  }, [navigation, isEditing]);

  const deleteExpense = () => {
    expensesContext.deleteExpense(editedExpenseId)
    navigation.goBack();
  }

  const cancel = () => {
    navigation.goBack();
  }

  const confirm = (data) => {
    if(isEditing) {
      expensesContext.updateExpense(editedExpenseId, data)
    } else {
      expensesContext.addExpense(data)
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancel}
        onSubmit={confirm}
        submitLabel={isEditing? 'Edit' : 'Add'}
        initialValue={selectedExpense}
      />

      {isEditing &&
      <View style={styles.delete}>
        <IconButton
          icon="trash"
          size={36}
          color={GlobalStyles.colors.error500}
          onPress={deleteExpense}
        />
      </View>}
    </View>
  )
}

export default ManageExpenses;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  delete: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  },
});


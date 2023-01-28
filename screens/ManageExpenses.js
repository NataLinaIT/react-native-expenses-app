import { useLayoutEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/context';

import IconButton from '../UI/IconButton';
import Button from '../UI/Button';

const ManageExpenses = ({route, navigation}) => {
  const expensesContext = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

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

  const confirm = () => {
    if(isEditing) {
      expensesContext.updateExpense(
        editedExpenseId,
        {
          description: 'Test update',
          amount: 12.99,
          date: new Date()
        }
      )
    } else {
      expensesContext.addExpense({
        description: 'Test add',
        amount: 12.99,
        date: new Date()
      })
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode='flat' onPress={cancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirm}>
          {isEditing? 'Edit' : 'Add'}
        </Button>
      </View>

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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
  delete: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  },
});


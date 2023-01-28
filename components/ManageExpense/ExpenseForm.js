import { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';

import { getFormattedDate } from '../../util/date';
import Input from './Input';
import Button from '../../UI/Button';

const ExpenseForm = ({onCancel, onSubmit, submitLabel, initialValue}) => {
  const [inputValue, setInputValue] = useState({
    amount: initialValue?.amount.toString() ?? '',
    date: getFormattedDate(initialValue?.date) ?? '',
    description: initialValue?.description ?? ''
  });

  const changeInputValue = (identifier, value) => {
    setInputValue((prev) => {
      return {
        ...prev,
        [identifier]: value
      }
    })
  }

  const submit = () => {
    const expenseData = {
      amount: +inputValue.amount,
      date: new Date(inputValue.date),
      description: inputValue.description
    }

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toDateString() !== 'Invalid date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if(!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert('Invalid input', 'Please check your input values');
      return;
    }
    onSubmit(expenseData);
  }

  return (
    <View>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          config={{
            keyboardType: 'decimal-pad',
            onChangeText: changeInputValue.bind(this, 'amount'),
            value: inputValue.amount
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          config={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: changeInputValue.bind(this, 'date'),
            value: inputValue.date
          }}
        />
      </View>

      <Input
        label="Description"
        config={{
          multiline: true,
          onChangeText: changeInputValue.bind(this, 'description'),
          value: inputValue.description
        }}
      />

      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode='flat' onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submit}>
          {submitLabel}
        </Button>
      </View>
    </View>
  )
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 24
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: {
    flex: 1
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
});

import { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';

const ManageExpenses = ({route, navigation}) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing? 'Edit Expenses': 'Add Expenses'
    })
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>
        ManageExpenses
      </Text>
    </View>
  )
}

export default ManageExpenses
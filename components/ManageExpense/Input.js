import { View, StyleSheet, TextInput, Text } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const Input = ({label, style, config}) => {
  let inputStyles = [styles.input];

  if(config && config.multiline) {
    inputStyles.push(styles.inputMultiline)
  }
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...config} style={inputStyles}/>
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
});

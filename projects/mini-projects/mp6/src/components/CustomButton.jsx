import { Button } from "react-native";
const CustomButton = ({ title, onPress, disabled = false }) => {
  return <Button onPress={() => onPress()} title={title} disabled={disabled} />;
};

export default CustomButton;

import { Button } from "react-native";
const CustomButton = ({ title, onPress }) => {
  return <Button onPress={onPress} title={title} />;
};

export default CustomButton;

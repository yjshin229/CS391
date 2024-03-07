import { createContext } from "react";
import PropTypes from "prop-types";

export const TextColorContext = createContext();

const TextColorContextProvider = ({ children }) => {
  const color = "blue";
  return (
    <TextColorContext.Provider value={color}>
      {children}
    </TextColorContext.Provider>
  );
};

TextColorContextProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TextColorContextProvider;

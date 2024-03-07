import { createContext } from "react";
import { PropTypes } from "prop-types";

export const BackgroundColorContext = createContext();

const BackgroundColorContextProvider = ({ children }) => {
  const backgroundColor = "orange";
  return (
    <BackgroundColorContext.Provider value={backgroundColor}>
      {children}
    </BackgroundColorContext.Provider>
  );
};

BackgroundColorContextProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default BackgroundColorContextProvider;

import { HotelsContextProvider } from "./HotelsContext";
import { ReviewsContextProvider } from "./ReviewsContext";
import PropTypes from "prop-types";

const AppContext = ({ children }) => {
  return (
    <HotelsContextProvider>
      <ReviewsContextProvider>{children}</ReviewsContextProvider>
    </HotelsContextProvider>
  );
};

export default AppContext;

AppContext.propTypes = {
  children: PropTypes.object,
};

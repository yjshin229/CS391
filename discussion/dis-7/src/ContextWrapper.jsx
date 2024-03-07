import Component1 from "./first-pair/Component1";
import TextColorContextProvider from "./first-pair/TextColorContextProvider";
import BackgroundColorContextProvider from "./second-pair/BackgroundColorContextProvider";

const ContextWrapper = () => {
  return (
    <BackgroundColorContextProvider>
      <TextColorContextProvider>
        <Component1 />
      </TextColorContextProvider>
    </BackgroundColorContextProvider>
  );
};

export default ContextWrapper;

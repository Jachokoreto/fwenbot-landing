/**
 * This code was generated by Builder.io.
 */
import * as React from "react";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center p-20 mt-3.5 w-full bg-yellow-200 max-md:px-5 max-md:max-w-full">
      {children}
    </div>
  );
};

export default MainContainer;

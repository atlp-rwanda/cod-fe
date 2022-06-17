import React, { createContext, useContext, useState } from 'react';

const StepperContext = createContext({ facilityData: '', setFacilityData: null });

export function UseContextProvider({ children }) {
  const [facilityData, setFacilityData] = useState('');

  return (
    <StepperContext.Provider value={{ facilityData, setFacilityData }}>{children}</StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { facilityData, setFacilityData } = useContext(StepperContext);

  return { facilityData, setFacilityData };
}

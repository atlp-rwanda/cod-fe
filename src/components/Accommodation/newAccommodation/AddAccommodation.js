import React, { useState } from 'react';
import Stepper from './Stepper';
import StepperControl from './StepperControl';
import { UseContextProvider } from '../../../contexts/StepperContext';

import SelectAccommodation from './steps/SelectAccommodation';
import AddRooms from './steps/AddRooms';
import AddImage from './steps/AddImage';
import Final from './steps/Final';

function NewAccomodation() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ['Accommodation', 'AddRooms', 'Images', 'Complete'];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <SelectAccommodation />;
      case 2:
        return <AddRooms />;
      case 3:
        return <AddImage />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}
    </div>
  );
}

export default NewAccomodation;

import React, { useState } from 'react';

import Input from '../Auth/Input';
import FormAction from '../Auth/FormAction';

const FeedbackForm = ({ handleSubmit }) => {
  const [feedback, setFeedback] = useState('');
  const handleChange = (e) => {
    setFeedback(e.target.value);
  };
  return (
    <form className="space-y-6 p-2" onSubmit={(e) => handleSubmit(e, feedback)}>
      <Input
        key="feedbackInput"
        handleChange={handleChange}
        value={feedback}
        id="feedback"
        name="feedback"
        type="text"
        isRequired={true}
        placeholder="Enter your comment or feedback"
      />
      <FormAction handleSubmit={(e) => handleSubmit(e, feedback)} text="Add Feedback" />
    </form>
  );
};

export default FeedbackForm;

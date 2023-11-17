import React from 'react';
import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.feedbackbtnflex}>
    {options.map((option) => (
      <button className={css.feedbackbutton} key={option} onClick={() => onLeaveFeedback(option)}>
        {option[0].toLowerCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;

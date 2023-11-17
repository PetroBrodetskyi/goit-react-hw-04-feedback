import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p>Добре: <span className={css.statnumbers}>{good}</span></p>
    <p>Нейтрально: <span className={css.statnumbers}>{neutral}</span></p>
    <p>Погано: <span className={css.statnumbers}>{bad}</span></p>
    <p>Загальна кількість відгуків: <span className={css.statnumbers}>{total}</span></p>
    <p>Відсоток позитивних відгуків: <span className={css.statnumbers}>{positivePercentage}%</span></p>
  </div>
);

export default Statistics;

import React, { Component } from 'react';
import css from "./Statistics.module.css"

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <p>Добре: <span className={css.statnumbers}>{good}</span></p>
        <p>Нейтрально: <span className={css.statnumbers}>{neutral}</span></p>
        <p>Погано: <span className={css.statnumbers}>{bad}</span></p>
        <p>Загальна кількість відгуків: <span className={css.statnumbers}>{total}</span></p>
        <p>Відсоток позитивних відгуків: <span className={css.statnumbers}>{positivePercentage}%</span></p>
      </div>
    );
  }
}

export default Statistics;

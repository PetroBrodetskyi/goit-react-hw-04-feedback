import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={css.sectionflex}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;

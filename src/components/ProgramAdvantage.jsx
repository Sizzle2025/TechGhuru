import React from 'react';
import './ProgramAdvantage.css';

const advantages = [
  {
    icon: '🎓',
    title: 'Lifetime access to material',
  },
  {
    icon: '📹',
    title: 'Session recordings available',
  },
  {
    icon: '🖥',
    title: 'Free hosting for 1 year',
  },
  {
    icon: '📘',
    title: '14+ advanced modules',
  },
  {
    icon: '🎯',
    title: '3 specialization tracks',
  },
  {
    icon: '🤝',
    title: '100% placement support',
  },
  {
    icon: '🧠',
    title: 'Weekly doubt sessions',
  },
  {
    icon: '🧪',
    title: 'Live case study projects',
  },
];

const ProgramAdvantage = () => {
  return (
    <section className="advantage-section">
      <h2 className="advantage-heading">Program Advantage</h2>
      <div className="advantage-grid">
        {advantages.map((item, index) => (
          <div className="advantage-card" key={index}>
            <div className="icon-circle">{item.icon}</div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramAdvantage;
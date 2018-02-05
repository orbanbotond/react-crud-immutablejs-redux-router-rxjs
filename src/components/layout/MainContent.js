import React from 'react';

import './MainContent.scss';

const MainContent = ({ children }) => (
    <section className="app-content">
      {children}
    </section>
);

export default MainContent;

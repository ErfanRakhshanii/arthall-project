// Layout.js
import React, { ReactNode } from 'react';
import Header from './components/Header/Header';
interface LayoutProps {
    children: ReactNode; 
  }
const Layout = ({ children } : any) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

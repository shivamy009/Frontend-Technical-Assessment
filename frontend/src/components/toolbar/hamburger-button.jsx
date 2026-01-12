import React from 'react';
import { Menu, X } from 'lucide-react';
import { useStore } from '../../store';
import { shallow } from 'zustand/shallow';

export const HamburgerButton = () => {
  const { isMenuOpen, toggleMenu } = useStore(
    (state) => ({
      isMenuOpen: state.isMenuOpen,
      toggleMenu: state.toggleMenu,
    }),
    shallow
  );

  return (
    <button
      className="p-2 rounded-md hover:bg-white/20 lg:hidden"
      onClick={toggleMenu}
    >
      {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
    </button>
  );
};

export default HamburgerButton;

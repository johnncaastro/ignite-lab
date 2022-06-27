import { Dispatch, SetStateAction } from "react";
import { List, X } from "phosphor-react";

import logoImg from '../assets/logo.svg';

interface HomeProps {
  isMenuLessonsOpen: boolean;
  setIsMenuLessonsOpen: Dispatch<SetStateAction<boolean>>;
}

export function Header({ isMenuLessonsOpen, setIsMenuLessonsOpen }: HomeProps) {
  
  function toggleMenuLessons() {
    setIsMenuLessonsOpen(!isMenuLessonsOpen);
  }

  return (
    <header className="w-full py-5 flex items-center mobile:justify-between mobile:p-6 desktop:justify-center bg-gray-700 border-b border-gray-600">
      <img
        src={logoImg}
        alt="Logo do Ignite lab"
        className="mobile:w-2/4 laptop:w-1/3 desktop:w-1/6"
      />

      <button
        type="button"
        onClick={toggleMenuLessons}
        className="desktop:hidden flex items-center gap-2 cursor-pointer">
        Aulas {isMenuLessonsOpen ? 
          <X size={32} color="#81d8f7" weight="thin" /> : 
          <List size={32} color="#81d8f7" weight="thin" />}
      </button>
    </header>
  )
}
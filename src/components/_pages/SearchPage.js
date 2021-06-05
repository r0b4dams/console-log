import React, { useContext } from 'react';
import { AppContext } from '../../App'
import '../assets/SearchPage.css';

export default function NavBar() {
  const { state, dispatch } = useContext(AppContext);
  const changeInputValue = (newValue) => {
    dispatch({ type: 'UPDATE_INPUT', data: newValue, });
  };

  return (
    <div className="py-1 pr-3 mb-0 Barset align-middle grid grid-cols-3 grid-rows-1 grid-flow-col">
      {state.searchText}
    </div>
  )
}
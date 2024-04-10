import React from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectButton = () => {
  const navigate = useNavigate();
  
  const returnClick=()=>{
    console.log("Esta app corre")
    navigate('/PaginaPrincipal')
  }

  return (
    <div className="block-btn">
      <button
        onClick={returnClick}
        type="button"
        className="btn font-br-sonoma-bold bg-black rounded-full text-white"
      >
        Cotiza aquí
      </button>
    </div>
  );
};

export default RedirectButton;

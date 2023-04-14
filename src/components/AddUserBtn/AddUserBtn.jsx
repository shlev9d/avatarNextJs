import React from 'react';
import s from './addUserBtn.module.css';

const AddUserBtn = ({addUser}) => {
  return (
    <button className={s.addButton} onClick={() => addUser()}>
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="#02CC67"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="32" width="6" height="70" />
        <rect
          x="70"
          y="32"
          width="6"
          height="70"
          transform="rotate(90 70 32)"
        />
      </svg>
    </button>
  );
};

export default AddUserBtn;

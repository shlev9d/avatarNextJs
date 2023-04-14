import React from 'react';
import s from './refreshBtn.module.css';

const RefreshBtn = ({count, refreshUsers, usersLoading}) => {
  return (
    <button
      className={s.refreshBtn}
      onClick={() => refreshUsers()}
      disabled={(count === 0 || usersLoading) ? true : false}
    >
      Refresh All
    </button>
  );
}

export default RefreshBtn
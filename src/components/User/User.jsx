import React, {useState} from 'react';
import s from './user.module.css';
import Loader from './../Loader/Loader';

const User = ({usersLoading, user, refreshUser, id}) => {
  const [userLoading, setUserLoading] = useState(false);

  const refresh = async () => {
    setUserLoading(true);
    await refreshUser(id);
    setUserLoading(false);
  };

  return (
    <div className={s.user} onClick={() => refresh()}>
      {(userLoading || usersLoading) && <Loader />}
      {!userLoading && (
        <svg
          className={s.refresh}
          width="100"
          height="104"
          viewBox="0 0 100 104"
          fill="#02CC67"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M99.3001 45.839C98.9621 43.7262 96.9701 42.2869 94.8511 42.624C92.7321 42.9611 91.2886 44.9472 91.6266 47.0599C91.6303 47.0831 91.6341 47.106 91.6382 47.1289C95.5948 70.3516 79.9209 92.3752 56.6295 96.3202C33.338 100.265 11.2493 84.6374 7.29269 61.4147C3.33607 38.192 19.0102 16.1684 42.3014 12.2234C56.6252 9.79744 71.2048 14.786 81.0159 25.4703L63.8042 31.188C61.7681 31.8635 60.6669 34.0566 61.3442 36.0867C62.0224 38.1184 64.2219 39.2163 66.2581 38.541C66.2588 38.5408 66.2592 38.5406 66.2597 38.5406L89.5714 30.793C91.1586 30.266 92.2292 28.7849 92.229 27.1168V3.8739C92.229 1.73437 90.4895 0 88.3436 0C86.1978 0 84.4583 1.73437 84.4583 3.8739V18.0248C64.4494 -0.949919 32.8012 -0.159342 13.7703 19.7905C-5.26057 39.7404 -4.46788 71.2952 15.5413 90.2702C35.5504 109.245 67.1983 108.455 86.2294 88.5045C97.0814 77.1282 101.925 61.3196 99.3001 45.839Z" />
        </svg>
      )}
      <img src={user.url} alt={`${user.first_name} ${user.last_name}`} />
    </div>
  );
};

export default User;

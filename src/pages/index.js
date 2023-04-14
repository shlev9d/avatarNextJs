import Head from 'next/head';
import s from '@/styles/Home.module.css';
import {useState} from 'react';
import User from '@/components/User/User';
import Loader from '@/components/Loader/Loader';
import AddUserBtn from '@/components/AddUserBtn/AddUserBtn';
import RefreshBtn from '@/components/RefreshBtn/RefreshBtn';
import {apiUrl, getAvatars} from '@/common';


export default function Home({avatars}) {
  const [users, setUsers] = useState(avatars);
  const [loading, setLoading] = useState(false);
  const [usersLoading, setUsersLoading] = useState(false);


  const addUser = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${apiUrl}?limit=1`);
      const user = await response.json();
      setUsers([...users, ...user]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshUsers = async () => {
    try {
      setUsersLoading(true);
      const response = await fetch(`${apiUrl}?limit=${users.length}`);
      const newUsers = await response.json();
      setUsers(newUsers);
      setUsersLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshUser = async idx => {
    try {
      const response = await fetch(`${apiUrl}?limit=1`);
      const user = await response.json();
      const newUsers = [...users];
      newUsers[idx] = user[0];
      setUsers(newUsers);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Avatar NextJs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={s.main}>
        <div className={s.users}>
          {users.map((user, idx) => (
            <User
              key={idx}
              id={idx}
              user={user}
              usersLoading={usersLoading}
              refreshUser={refreshUser}
            />
          ))}
          {loading && (
            <div>
              <Loader />
            </div>
          )}
          <AddUserBtn addUser={addUser} />
        </div>
        <RefreshBtn
          count={users.length}
          refreshUsers={refreshUsers}
          usersLoading={usersLoading}
        />
      </main>
    </>
  );
}

export async function getServerSideProps(){
  try{
  const avatars = await getAvatars()
  return {props:{avatars}}
} catch{
  return {props: []}
}}
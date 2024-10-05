'use client'
import { useState, useEffect } from 'react'
import styles from "./page.module.css";

export default function Home() {

  const [users, setUsers] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

 
  useEffect(() => {
    async function fetchUsers() {
      let res = await fetch('http://localhost:3000/getUsers')
      let data = await res.json()
      setUsers(data)
    }
    fetchUsers()
  }, [])

  const handleSubmit = async () => {
   
    let response =  await fetch("http://localhost:3000/createUser", {
      method: "POST",
      body: JSON.stringify({ 
        name: name,
        age: age
      }),
      headers: {
        'Content-type': 'application/json'
      }
    });

    response = await response.json();
  }
 
  if (!users) return <div>Loading...</div>

  return (
    <div className={styles.page}>
     <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.name}
              <br/>
              {user.age}
            </li>
          ))}
        </ul>
        <input type='text' onChange={(e) => setName(e.target.value)} />
        <input type='text' onChange={(e) => setAge(e.target.value)} />
        <button onClick={handleSubmit}>Create user</button>
    </div>
  );
}

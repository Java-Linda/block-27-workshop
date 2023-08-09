import { useState } from 'react';

export default function SignUpForm() {

    const [username, setUserName] = useState ("");
    const [password, setPassword] = useState ("");
    const [error, setError] = useState (null);

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("Hello");
      }

    return (
    <>
    <h2>Sign Up!</h2>

    <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username} onChange={(e) => setUserName(e.target.value)}/>
        </label>
        <br/>
        <label>
            Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <br/>
        <button>Submit</button>
    </form>
    </>
    );
  }
import { useState } from 'react';

export default function SignUpForm() {

    const [username, setUserName] = useState ("");
    const [password, setPassword] = useState ("");
    const [error, setError] = useState (null);

    async function handleSubmit(event) {
        event.preventDefault();
        //console.log("Hello");

        try{
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
                method:"POST",
                body:JSON.stringify ({username},{password})
            })
            const result = await response.json();
            console.log(result);

        } catch (error){
            setError(error.message);
        }
        setToken(result.token);
    }

    return (
    <>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label>
            Username: {" "}
            <input type="username"
            value={username} 
            onChange={(e) => setUserName(e.target.value)}/>
        </label>
        <br/>
        <label>
            Password: {" "}
            <input type="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <br/>
        <button>Submit</button>
    </form>
    </>
    );
  }
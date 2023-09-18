import React, { useState } from 'react';

const userData = [
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }
];

const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        let count = 0;
        setTimeout(() => {
            for (let i = 0; i < userData.length; i++) {
                if (userData[i].email === email) {
                    if (userData[i].password !== password) {
                        setUserMessage("");
                        setPasswordMessage("Password Incorrect");
                    }
                    else {
                        setPasswordMessage("");
                        setUserMessage("");
                        console.log(userData);
                    }
                }
                else{
                    count++;
                }
            };

            if (count === userData.length) {
                setPasswordMessage("");
                setUserMessage("User not found");
            }
        }, 3000)

    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} id='input-email' />
                <p id='user-error'>{userMessage}</p>
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} id='input-password' />
                <p id='password-error'>{passwordMessage}</p>
                <button type='submit' id='submit-form-btn'>Submit</button>
            </form>
        </>
    )
};

export default App;


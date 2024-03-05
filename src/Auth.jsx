import './Auth.css';
import { useState } from 'react';
import Login from './atoms/Login';
import SignUp from './atoms/SignUp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Auth({ setUserId, setUserName }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [authToggle, setAuthToggle] = useState(false);
  const navigate = useNavigate();

  const signInReturningUser = async () => {
    const user = {
      email: email,
      password: password,
    };
    const response = await axios.post('http://localhost:4000/api/signin', user);
    console.log(response.data);
    setUserId(response.data.uid);
    setUserName(response.data.name);
    navigate('/gameplay');
  };

  const handleNewUsers = async () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };
    const response = await axios.post('http://localhost:4000/api/signup', user);
    setUserId(response.data.uid);
    setUserName(response.data.name);
    navigate('/gameplay');
  };

  return (
    <div className='landing-hero'>
      <h1 className='title'>Welcome to Wordle-Evolved</h1>

      <div className='login-container'>
        <div className='toggle-container'>
          <button className={`toggle toggle-left ${authToggle ? 'sel' : ''}`} onClick={() => setAuthToggle(true)}>
            Sign In
          </button>
          <button className={`toggle toggle-right ${authToggle ? '' : 'sel'}`} onClick={() => setAuthToggle(false)}>
            Sign Up
          </button>
        </div>
        {authToggle ? (
          <Login setEmail={setEmail} setPassword={setPassword} signInReturningUser={signInReturningUser} />
        ) : (
          <SignUp setName={setName} setEmail={setEmail} setPassword={setPassword} handleNewUsers={handleNewUsers} />
        )}
      </div>
    </div>
  );
}
export default Auth;

import { useState, useCallback, useEffect, useRef } from 'react';
import React from 'react';
import './PassG.css'
function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);


  const passRef=useRef('null')
  const copyToClipboard= useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passRef.current?.select()
  },[password])

  const Generate = useCallback(() => {
    let passw = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numAllowed) {
      str += '0123456789';
    }
    if (charAllowed) {
      str += "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }

    for (let i = 0; i < length; i++) {
      let randnum = Math.floor(Math.random() * str.length);
      passw += str.charAt(randnum);
    }
    setPassword(passw);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    Generate();
  }, [length, numAllowed, charAllowed, Generate]);

  return (
    <>
      <div className='box'>
        <input
          type="text"
          placeholder='Password'
          value={password}
          readOnly
          ref={passRef}
        />
        <input
        className='passs'
          type='range'
          value={length}
          min={8}
          max={50}
          onChange={(e) => {
            setLength(Number(e.target.value));
          }}
        />
        Length: {length}
        <input
          type='checkbox'
          id='numInput'
          checked={numAllowed}
          onChange={() => {
            setNumAllowed((prev) => !prev);
          }}
        />
        <label htmlFor='numInput'>Numbers</label>
        <input
          type='checkbox'
          id='charInput'
          checked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
        />
        <label htmlFor='charInput'>Special characters</label>
          <br/>
        <button onClick={copyToClipboard}>
          Copy
        </button>
      </div>
    </>
  );
}

export default PasswordGenerator;

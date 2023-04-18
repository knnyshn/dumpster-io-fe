import './SignIn.css'
import { useEffect, useRef, useState } from "react"
import { signIn, signUp } from '../../api/user'


export default function SignIn({ visibility, sendDataToParent }) {

  // Our states.
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()
  const [buttonValue, setButtonValue] = useState("Sign In")

  // Our refs.
  const signInModal = useRef(null)
  const backDropRef = useRef(null)
  const createAccount = useRef(null)
  const signInButton = useRef(null)

  // Our useEffects.
  useEffect(() => {
    setTimeout(() => {
      signInModal.current.style.opacity = '1'
      backDropRef.current.style.opacity = '0.5'
    }, 1)
  }, [visibility])

  useEffect(() => {
    console.log('buttonChanged');
  }, [buttonValue])

  async function handleSubmit(e) {
    e.preventDefault()
    if (signInButton.current.value === "Sign In") {
      const res = await signIn(username, password)
      if (res.login) {
        window.location.reload()
      } else {
        setError(res.message)
      }
    } else {
      const res = await signUp(username, password)
      if (res.login) {
        window.location.reload()
      } else {
        setError(res.message)
      }
    }
  }

  function handleClose(e) {
    signInModal.current.style.opacity = '0'
    backDropRef.current.style.opacity = '0'
    setTimeout(() => {
      sendDataToParent(false);
    }, 300);
  }

  function handleCreateAccount(e) {
    setButtonValue("Sign Up")
  }

  function backDropClick(e) {
    signInModal.current.style.opacity = '0'
    backDropRef.current.style.opacity = '0'
    setTimeout(() => {
      sendDataToParent(false);
    }, 300);
  }

  return (
    <>
      <div ref={backDropRef} className='backdrop' onClick={backDropClick}></div>
      <div ref={signInModal} className='signin-modal'>
        <div className="sign-in-modal-header">
          <span className='sign-in-modal-svg' onClick={handleClose}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
              <path d="m6 6 20 20" ></path>
              <path d="m26 6-20 20" ></path>
            </svg>
          </span>
          <h1>Log in or <span ref={createAccount} className="fake-link" onClick={handleCreateAccount}>create an account</span></h1>
        </div>
        <div className='signin-modal-input-area'>
          <h2>Welcome to dumpster.io</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              placeholder="Username or E-mail"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p>We'll call or text you to confirm your number. Standard message and data rates apply. <a href="https://www.youtube.com/watch?v=wvVWyJavZJs">Privacy Policy</a></p>
            <p className='error-message'>{error}</p>
            <input ref={signInButton} type="submit" id="submit" value={buttonValue} />
          </form>
        </div>
      </div>
    </>
  )
}
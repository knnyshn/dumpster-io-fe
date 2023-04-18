import { useState } from "react"
import { getUserProfile } from '../api/user'
import "./Profile.css"
import Header from "../components/Header/Header"




export default function Profile() {
  let userHash = localStorage.getItem("TOKEN")
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [avatar, setAvatar] = useState()
  const [favorites, setFavorites] =useState([])

  async function handleSubmit(e) {
    e.preventDefault()
    let userData = { username, password, name, email, avatar, favorites }

    await getUserProfile(userHash, userData)

  
  }
  return (
    <div>
            <Header />

    <div className="entire-form-page">
        
      <h1 className="account-settings-header">Account Settings</h1>
      <form className="form-input" onSubmit={handleSubmit}>
        {/* <label htmlFor="username">Username: </label> */}
        <input
          className="text-input"
          type="text"
          id="username_"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="text-input"
          type="password"
          id="password_"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="text-input"
          type="text"
          id="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="text-input"
          type="email"
          id="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="text-input"
          type="text"
          id="avatar"
          placeholder="avatar"
          onChange={(e) => setAvatar(e.target.value)}
        />
        <input
          className="text-input"
          type="text"
          id="favorites"
          placeholder="favorites"
          onChange={(e) => setFavorites(e.target.value)}
        />
        <input className="text-input btn" type="submit" id="submit" value="Update" />
      </form>
      </div>
      </div>
  )
}
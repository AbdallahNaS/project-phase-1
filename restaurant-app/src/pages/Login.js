import { useState } from "react"
import api from "../api"

export default function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const submit = async e => {
    e.preventDefault()
    const res = await api.post("/auth/login",{email,password})
    localStorage.setItem("token",res.data.token)
    alert("Logged in")
  }

  return (
    <form onSubmit={submit}>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  )
}

import { useState } from "react"
import api from "../api"

export default function Register() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const submit = async e => {
    e.preventDefault()
    await api.post("/auth/register",{name,email,password})
    alert("Registered")
  }

  return (
    <form onSubmit={submit}>
      <input placeholder="Name" onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} />
      <button>Register</button>
    </form>
  )
}

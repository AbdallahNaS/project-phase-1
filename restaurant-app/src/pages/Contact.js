import { useState } from "react"
export default function Contact(){
  const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [msg,setMsg]=useState("")
  const submit=e=>{e.preventDefault(); setName(""); setEmail(""); setMsg("")}
  return(
    <form className="form" onSubmit={submit}>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" required/>
      <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" required/>
      <textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Message" rows="4" required/>
      <button className="btn" type="submit">Send</button>
    </form>
  )
}

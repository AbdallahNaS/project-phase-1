import { useParams } from "react-router-dom"
import api from "../api"

export default function DishDetails() {
  const { id } = useParams()

  const order = async () => {
    await api.post(
      "/orders",
      { item: id, quantity: 1 },
      { headers: { Authorization: localStorage.getItem("token") } }
    )
    alert("Order created")
  }

  return (
    <div>
      <h1>Dish {id}</h1>
      <button onClick={order}>Order</button>
    </div>
  )
}

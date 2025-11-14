import { useState } from "react"
import { Button } from "@/components/ui/button"
import Header from "./components/Header";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen">
      <Header />
      
    </div>
  )
}

export default App
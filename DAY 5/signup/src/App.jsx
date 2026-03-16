import { useState } from "react"
import Login from "./components/Login"
import Register from "./components/Register"

// Main app - yahan pe toggle state rakhi hai
export default function App() {
  // false matlab Register dikhao by default
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className="min-h-screen min-w-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Ek hi jagah se toggle hoga, koi routing nahi */}
      {isLogin ? (
        <Login setToggle={setIsLogin} />
      ) : (
        <Register setToggle={setIsLogin} />
      )}
    </div>
  )
}
import { useState } from "react"

export default function Login({ setToggle }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // Errors track karne ke liye alag state
  const [errors, setErrors] = useState({})

  const handleToggle = () => {
    setEmail("")
    setPassword("")
    setErrors({})
    setToggle(prev => !prev)
  }

  // Submit pe pehle validation, phir toggle
  const handleSubmit = () => {
    const newErrors = {}
    if (!email.trim()) newErrors.email = "Email is required"
    if (!password.trim()) newErrors.password = "Password is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Sab fields bhari hain toh Register pe wapas bhejo
    setErrors({})
    setToggle(false)
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

        <div className="mb-8">
          <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Welcome back</h1>
          <p className="text-slate-400 text-sm mt-1">Sign in to your account</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                // Likhte hi error hatao
                if (errors.email) setErrors(prev => ({ ...prev, email: "" }))
              }}
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition ${errors.email ? "border-red-500" : "border-white/10"}`}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (errors.password) setErrors(prev => ({ ...prev, password: "" }))
              }}
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition ${errors.password ? "border-red-500" : "border-white/10"}`}
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1.5">{errors.password}</p>
            )}
          </div>

          <div className="flex justify-end">
            <span className="text-xs text-indigo-400 cursor-pointer hover:text-indigo-300 transition">
              Forgot password?
            </span>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition duration-200 text-sm tracking-wide"
        >
          Sign in
        </button>

        <p className="text-center text-slate-400 text-sm mt-6">
          Don't have an account?{" "}
          <button onClick={handleToggle} className="text-indigo-400 hover:text-indigo-300 font-medium transition">
            Sign up
          </button>
        </p>
      </div>
    </div>
  )
}
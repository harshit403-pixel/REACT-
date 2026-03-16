import { useState } from "react"

export default function Register({ setToggle }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // Teen fields ke liye teen errors
  const [errors, setErrors] = useState({})

  const handleToggle = () => {
    setName("")
    setEmail("")
    setPassword("")
    setErrors({})
    setToggle(prev => !prev)
  }

  // Validation pehle, submit baad mein
  const handleSubmit = () => {
    const newErrors = {}
    if (!name.trim()) newErrors.name = "Full name is required"
    if (!email.trim()) newErrors.email = "Email is required"
    if (!password.trim()) newErrors.password = "Password is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Sab theek hai toh fields clear aur Register pe rehte hain
    setName("")
    setEmail("")
    setPassword("")
    setErrors({})
    setToggle(false)
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

        <div className="mb-8">
          <div className="w-12 h-12 rounded-xl bg-violet-500 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Create account</h1>
          <p className="text-slate-400 text-sm mt-1">Sign up and get started today</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (errors.name) setErrors(prev => ({ ...prev, name: "" }))
              }}
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition ${errors.name ? "border-red-500" : "border-white/10"}`}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) setErrors(prev => ({ ...prev, email: "" }))
              }}
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition ${errors.email ? "border-red-500" : "border-white/10"}`}
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
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition ${errors.password ? "border-red-500" : "border-white/10"}`}
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1.5">{errors.password}</p>
            )}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 rounded-xl transition duration-200 text-sm tracking-wide"
        >
          Sign up
        </button>

        <p className="text-center text-slate-400 text-sm mt-6">
          Already have an account?{" "}
          <button onClick={handleToggle} className="text-violet-400 hover:text-violet-300 font-medium transition">
            Sign in
          </button>
        </p>
      </div>
    </div>
  )
}
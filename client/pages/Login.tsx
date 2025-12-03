import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-dh-black py-12 md:py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-dh-gold to-dh-gold-dark rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚔️</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-dh-gold">Dark Hunters</h1>
          <p className="text-dh-silver/70 mt-2">Welcome back, Hunter</p>
        </div>

        {/* Form */}
        <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-dh-white mb-2">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white placeholder:text-dh-silver/50 focus:outline-none focus:border-dh-gold focus:ring-1 focus:ring-dh-gold/20 transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-dh-white mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white placeholder:text-dh-silver/50 focus:outline-none focus:border-dh-gold focus:ring-1 focus:ring-dh-gold/20 transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-dh-silver/60 hover:text-dh-gold transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-dh-silver cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-dh-silver/20 bg-dh-black checked:bg-dh-gold"
                />
                Remember me
              </label>
              <Link to="#" className="text-dh-gold hover:text-dh-gold-dark transition-colors">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-dh-silver/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-dh-charcoal text-dh-silver/60">New to Dark Hunters?</span>
            </div>
          </div>

          {/* Register Link */}
          <Link to="/register">
            <Button variant="secondary" size="lg" className="w-full">
              Create Account
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-dh-silver/60 text-sm mt-6">
          By signing in, you agree to our{" "}
          <Link to="#" className="text-dh-gold hover:text-dh-gold-dark transition-colors">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="#" className="text-dh-gold hover:text-dh-gold-dark transition-colors">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!formData.acceptTerms) {
      setError("Please accept the terms and conditions");
      return;
    }

    console.log("Registration attempt:", formData);
    // Handle registration logic here
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
          <p className="text-dh-silver/70 mt-2">Join the Pack</p>
        </div>

        {/* Form */}
        <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-8 space-y-6">
          {error && (
            <div className="p-4 bg-dh-red/20 border border-dh-red/50 rounded-lg text-dh-red text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-bold text-dh-white mb-2">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white placeholder:text-dh-silver/50 focus:outline-none focus:border-dh-gold focus:ring-1 focus:ring-dh-gold/20 transition-all"
                placeholder="Your full name"
              />
            </div>

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

            {/* Phone */}
            <div>
              <label className="block text-sm font-bold text-dh-white mb-2">Phone Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white placeholder:text-dh-silver/50 focus:outline-none focus:border-dh-gold focus:ring-1 focus:ring-dh-gold/20 transition-all"
                placeholder="+91 XXXXX XXXXX"
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
                  placeholder="Create a strong password"
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

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-bold text-dh-white mb-2">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-3 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white placeholder:text-dh-silver/50 focus:outline-none focus:border-dh-gold focus:ring-1 focus:ring-dh-gold/20 transition-all"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-dh-silver/60 hover:text-dh-gold transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 text-sm text-dh-silver cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formData.acceptTerms}
                onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                className="w-4 h-4 rounded border-dh-silver/20 bg-dh-black checked:bg-dh-gold mt-1"
              />
              <span>
                I agree to the{" "}
                <Link to="#" className="text-dh-gold hover:text-dh-gold-dark transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="#" className="text-dh-gold hover:text-dh-gold-dark transition-colors">
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Submit */}
            <Button type="submit" variant="primary" size="lg" className="w-full mt-6">
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-dh-silver/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-dh-charcoal text-dh-silver/60">Already a member?</span>
            </div>
          </div>

          {/* Login Link */}
          <Link to="/login">
            <Button variant="secondary" size="lg" className="w-full">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

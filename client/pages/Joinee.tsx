import { useState } from "react";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";

export default function Joinee() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    locality: "",
    roleInterest: "",
    kitSize: "M",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        dob: "",
        locality: "",
        roleInterest: "",
        kitSize: "M",
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-dh-black py-12 md:py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center space-y-6 animate-scale-in">
          <div className="text-7xl">✓</div>
          <h1 className="font-display text-4xl font-bold text-dh-gold">Thank You!</h1>
          <p className="text-lg text-dh-silver/80 max-w-md">
            Your application has been submitted successfully. Our team will review your profile and contact you soon.
          </p>
          <div className="space-y-3 pt-6">
            <p className="text-dh-silver">Follow us for updates:</p>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-dh-red text-white font-bold rounded-lg hover:bg-dh-red/90 transition-colors"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dh-black py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-dh-gold mb-4">Join Dark Hunters</h1>
        <p className="text-lg text-dh-silver/80 mb-12">
          Apply to become a part of our elite cricket club. Fill in the form below to get started.
        </p>

        <form onSubmit={handleSubmit} className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-8 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-bold text-dh-white mb-2">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white placeholder:text-dh-silver/50 focus:outline-none focus:border-dh-gold focus:ring-1 focus:ring-dh-gold/20 transition-all"
              placeholder="Your full name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-bold text-dh-white mb-2">Phone Number *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white placeholder:text-dh-silver/50 focus:outline-none focus:border-dh-gold focus:ring-1 focus:ring-dh-gold/20 transition-all"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-dh-white mb-2">Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white placeholder:text-dh-silver/50 focus:outline-none focus:border-dh-gold focus:ring-1 focus:ring-dh-gold/20 transition-all"
              placeholder="your@email.com"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-bold text-dh-white mb-2">Date of Birth *</label>
            <input
              type="date"
              required
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              className="w-full px-4 py-3 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white focus:outline-none focus:border-dh-gold focus:ring-1 focus:ring-dh-gold/20 transition-all"
            />
          </div>

          {/* Locality */}
          <div>
            <label className="block text-sm font-bold text-dh-white mb-2">Locality *</label>
            <input
              type="text"
              required
              value={formData.locality}
              onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
              className="w-full px-4 py-3 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white placeholder:text-dh-silver/50 focus:outline-none focus:border-dh-gold focus:ring-1 focus:ring-dh-gold/20 transition-all"
              placeholder="Your area/locality"
            />
          </div>

          {/* Role Interest */}
          <div>
            <label className="block text-sm font-bold text-dh-white mb-3">Role Interest *</label>
            <div className="grid grid-cols-2 gap-3">
              {["Batsman", "Bowler", "All-Rounder", "Wicket Keeper"].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setFormData({ ...formData, roleInterest: role })}
                  className={`py-3 px-4 rounded-lg border-2 font-bold transition-all ${
                    formData.roleInterest === role
                      ? "bg-dh-gold text-dh-black border-dh-gold"
                      : "border-dh-silver/20 text-dh-white hover:border-dh-gold/50"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Kit Size */}
          <div>
            <label className="block text-sm font-bold text-dh-white mb-2">Kit Size</label>
            <select
              value={formData.kitSize}
              onChange={(e) => setFormData({ ...formData, kitSize: e.target.value })}
              className="w-full px-4 py-3 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white focus:outline-none focus:border-dh-gold focus:ring-1 focus:ring-dh-gold/20 transition-all"
            >
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <Button type="submit" variant="primary" size="lg" className="w-full">
            Submit Application
          </Button>
        </form>

        <p className="text-dh-silver/60 text-sm text-center mt-8">
          All fields marked with * are required. We'll review your application and contact you soon.
        </p>
      </div>
    </div>
  );
}

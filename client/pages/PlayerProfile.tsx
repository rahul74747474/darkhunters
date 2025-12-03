import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { PLAYERS } from "@shared/data";

export default function PlayerProfile() {
  const { jerseyNumber } = useParams();
  const navigate = useNavigate();
  const player = PLAYERS.find((p) => p.jerseyNumber.toString() === jerseyNumber);

  if (!player) {
    return (
      <div className="min-h-screen bg-dh-black py-12 flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="font-display text-4xl font-bold text-dh-gold">Player Not Found</h1>
          <p className="text-dh-silver">The player you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/squad")} variant="primary">
            Back to Squad
          </Button>
        </div>
      </div>
    );
  }

  const duePercentage = player.dues.total > 0 ? (player.dues.paid / player.dues.total) * 100 : 100;

  return (
    <div className="min-h-screen bg-dh-black py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => navigate("/squad")}
          className="flex items-center gap-2 text-dh-gold hover:text-dh-gold-dark mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Squad
        </button>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-dh-charcoal to-dh-black border border-dh-silver/20 rounded-xl p-8 mb-8 relative overflow-hidden">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Player Image */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-dh-gold/20 to-dh-gold/5 rounded-full blur-3xl scale-110"></div>
                <div className="relative w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-dh-gold/20 to-dh-gold/5 rounded-full flex items-center justify-center border-2 border-dh-gold/30 text-7xl">
                  👤
                </div>
              </div>
            </div>

            {/* Player Info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="font-display text-5xl font-bold text-dh-gold mb-2">{player.jerseyName}</h1>
                <p className="text-2xl text-dh-silver/70 mb-4">{player.legalName}</p>
                <div className="flex gap-3 flex-wrap">
                  <Badge variant="gold" size="lg">
                    #{player.jerseyNumber}
                  </Badge>
                  <Badge variant="default" size="lg">
                    {player.playerType}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-dh-black/50 rounded-lg p-4">
                  <p className="text-dh-silver/70 text-sm mb-1">Age</p>
                  <p className="font-display text-2xl font-bold text-dh-gold">{player.age}</p>
                </div>
                <div className="bg-dh-black/50 rounded-lg p-4">
                  <p className="text-dh-silver/70 text-sm mb-1">Blood Group</p>
                  <p className="font-display text-2xl font-bold text-dh-gold">{player.bloodGroup}</p>
                </div>
                <div className="bg-dh-black/50 rounded-lg p-4">
                  <p className="text-dh-silver/70 text-sm mb-1">Kit Size</p>
                  <p className="font-display text-2xl font-bold text-dh-gold">{player.kitSize}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Personal Info */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-6">
              <h2 className="font-display text-2xl font-bold text-dh-white mb-6">Personal Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-dh-silver/60 text-sm mb-1">Date of Birth</p>
                  <p className="text-dh-white">{player.dob}</p>
                </div>
                <div>
                  <p className="text-dh-silver/60 text-sm mb-1">Education</p>
                  <p className="text-dh-white">{player.education}</p>
                </div>
                <div>
                  <p className="text-dh-silver/60 text-sm mb-1">Profession</p>
                  <p className="text-dh-white">{player.profession || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-dh-silver/60 text-sm mb-1">Locality</p>
                  <p className="text-dh-white flex items-center gap-2">
                    <MapPin size={16} className="text-dh-gold" />
                    {player.locality}
                  </p>
                </div>
              </div>
            </div>

            {/* Kit Info */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-6">
              <h2 className="font-display text-2xl font-bold text-dh-white mb-6">Kit Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-dh-silver/60 text-sm mb-1">Kit Size</p>
                  <p className="text-dh-white">{player.kitSize}</p>
                </div>
                <div>
                  <p className="text-dh-silver/60 text-sm mb-1">Sleeve Type</p>
                  <p className="text-dh-white">{player.jerseyType}</p>
                </div>
                <div>
                  <p className="text-dh-silver/60 text-sm mb-1">Jersey Number</p>
                  <p className="text-dh-white">{player.jerseyNumber}</p>
                </div>
                <div>
                  <p className="text-dh-silver/60 text-sm mb-1">Kit Status</p>
                  <Badge variant="success" size="sm">
                    Ready
                  </Badge>
                </div>
              </div>
            </div>

            {/* Match Stats */}
            {player.stats && (
              <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-6">
                <h2 className="font-display text-2xl font-bold text-dh-white mb-6">Match Statistics</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-dh-black rounded-lg p-4 text-center">
                    <p className="text-dh-silver/60 text-sm mb-2">Matches</p>
                    <p className="font-display text-3xl font-bold text-dh-gold">{player.stats.matches}</p>
                  </div>
                  <div className="bg-dh-black rounded-lg p-4 text-center">
                    <p className="text-dh-silver/60 text-sm mb-2">Runs</p>
                    <p className="font-display text-3xl font-bold text-dh-gold">{player.stats.runs}</p>
                  </div>
                  <div className="bg-dh-black rounded-lg p-4 text-center">
                    <p className="text-dh-silver/60 text-sm mb-2">Wickets</p>
                    <p className="font-display text-3xl font-bold text-dh-gold">{player.stats.wickets}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Financial Info */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-6">
              <h2 className="font-display text-2xl font-bold text-dh-white mb-6">Financial Status</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-dh-silver/60 text-sm mb-2">Total Dues</p>
                  <p className="font-display text-2xl font-bold text-dh-gold">₹{player.dues.total}</p>
                </div>
                <div>
                  <p className="text-dh-silver/60 text-sm mb-2">Paid</p>
                  <p className="text-green-400 font-bold">₹{player.dues.paid}</p>
                </div>
                <div>
                  <p className="text-dh-silver/60 text-sm mb-2">Due</p>
                  <p className={player.dues.due > 0 ? "text-dh-red font-bold" : "text-green-400 font-bold"}>
                    ₹{player.dues.due}
                  </p>
                </div>
                <div className="w-full h-3 bg-dh-black rounded-full overflow-hidden mt-4">
                  <div
                    className="h-full bg-gradient-to-r from-dh-gold to-dh-gold-dark transition-all"
                    style={{ width: `${duePercentage}%` }}
                  ></div>
                </div>
                {player.dues.due > 0 && (
                  <Button variant="primary" size="lg" className="w-full mt-4">
                    Pay Now
                  </Button>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-6">
              <h2 className="font-display text-xl font-bold text-dh-white mb-4">Contact</h2>
              <div className="space-y-3">
                <a
                  href={`tel:${player.phone}`}
                  className="flex items-center gap-3 p-3 bg-dh-black rounded-lg hover:bg-dh-gold/10 transition-colors group"
                >
                  <Phone size={18} className="text-dh-gold" />
                  <div>
                    <p className="text-xs text-dh-silver/60">Phone</p>
                    <p className="text-dh-white group-hover:text-dh-gold transition-colors">{player.phone}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${player.email}`}
                  className="flex items-center gap-3 p-3 bg-dh-black rounded-lg hover:bg-dh-gold/10 transition-colors group"
                >
                  <Mail size={18} className="text-dh-gold" />
                  <div>
                    <p className="text-xs text-dh-silver/60">Email</p>
                    <p className="text-dh-white group-hover:text-dh-gold transition-colors text-sm">{player.email}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

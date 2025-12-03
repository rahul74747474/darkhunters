import { MATCHES } from "@shared/data";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Play, Eye } from "lucide-react";

export default function Matches() {
  const liveMatch = MATCHES.find((m) => m.status === "live");
  const upcomingMatches = MATCHES.filter((m) => m.status === "upcoming");
  const completedMatches = MATCHES.filter((m) => m.status === "completed");

  return (
    <div className="min-h-screen bg-dh-black py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-dh-gold mb-8">Matches</h1>

        {/* Live Match */}
        {liveMatch && (
          <div className="mb-12 bg-gradient-to-r from-dh-gold/20 to-dh-gold/10 border-2 border-dh-gold rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="error" size="lg">
                LIVE
              </Badge>
              <span className="animate-pulse w-3 h-3 bg-dh-red rounded-full"></span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-video bg-dh-charcoal rounded-lg flex items-center justify-center border border-dh-silver/20">
                <Play size={48} className="text-dh-gold" />
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold text-dh-gold">
                  Dark Hunters vs {liveMatch.opponent}
                </h2>
                <p className="text-lg text-dh-silver">{liveMatch.venue}</p>
                <p className="text-dh-silver/70">{liveMatch.date}</p>
                <Button variant="primary" size="lg">
                  Watch Live
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Upcoming Matches */}
        {upcomingMatches.length > 0 && (
          <div className="mb-12">
            <h2 className="font-display text-3xl font-bold text-dh-white mb-6">Upcoming Matches</h2>
            <div className="space-y-4">
              {upcomingMatches.map((match) => (
                <div key={match.id} className="bg-dh-charcoal border border-dh-silver/20 rounded-lg p-6 hover:border-dh-gold/50 transition-all group">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div>
                      <p className="text-dh-silver/60 text-sm mb-2">Date & Time</p>
                      <p className="font-bold text-dh-white text-lg">{match.date}</p>
                    </div>
                    <div>
                      <p className="text-dh-silver/60 text-sm mb-2">Match</p>
                      <p className="font-display text-lg font-bold text-dh-gold">
                        Dark Hunters vs {match.opponent}
                      </p>
                      <p className="text-dh-silver/70 text-sm">{match.venue}</p>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" size="md">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Completed Matches */}
        {completedMatches.length > 0 && (
          <div>
            <h2 className="font-display text-3xl font-bold text-dh-white mb-6">Past Matches</h2>
            <div className="space-y-4">
              {completedMatches.map((match) => (
                <div key={match.id} className="bg-dh-charcoal border border-dh-silver/20 rounded-lg p-6 hover:border-dh-gold/50 transition-all">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div>
                      <p className="text-dh-silver/60 text-sm mb-2">Date</p>
                      <p className="font-bold text-dh-white text-lg">{match.date}</p>
                    </div>
                    <div>
                      <p className="text-dh-silver/60 text-sm mb-2">Result</p>
                      <p className="font-display text-lg font-bold text-green-400">{match.result}</p>
                      <p className="text-dh-silver/70 text-sm">vs {match.opponent}</p>
                    </div>
                    <div className="flex gap-4 justify-end">
                      <Button variant="outline" size="md" className="flex items-center gap-2">
                        <Eye size={16} />
                        Scorecard
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

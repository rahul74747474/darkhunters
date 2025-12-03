import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Player } from "@shared/data";
import { cn } from "@/lib/utils";

interface PlayerCardProps {
  player: Player;
  variant?: "carousel" | "grid" | "compact";
}

export const PlayerCard = ({ player, variant = "grid" }: PlayerCardProps) => {
  const duePercentage = player.dues.total > 0 ? (player.dues.paid / player.dues.total) * 100 : 100;

  if (variant === "carousel") {
    return (
      <div className="bg-gradient-to-br from-dh-charcoal to-dh-black rounded-xl overflow-hidden border border-dh-silver/20 hover:border-dh-gold/50 transition-all hover:shadow-gold-glow group">
        {/* Player Image */}
        <div className="aspect-square bg-gradient-to-br from-dh-gold/20 to-dh-gold/5 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
          👤
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-display text-xl font-bold text-dh-gold">{player.jerseyName}</h3>
            <p className="text-dh-silver/70 text-sm">{player.legalName}</p>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="gold"># {player.jerseyNumber}</Badge>
            <Badge variant="default">{player.playerType}</Badge>
          </div>

          {/* Dues progress */}
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-dh-silver">Dues Status</span>
              <span className="text-dh-gold">{Math.round(duePercentage)}%</span>
            </div>
            <div className="w-full h-2 bg-dh-black rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-dh-gold to-dh-gold-dark transition-all"
                style={{ width: `${duePercentage}%` }}
              ></div>
            </div>
          </div>

          <Link
            to={`/player/${player.jerseyNumber}`}
            className="inline-block text-dh-gold hover:text-dh-gold-dark font-bold text-sm transition-colors"
          >
            View Profile →
          </Link>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="bg-dh-charcoal rounded-lg border border-dh-silver/20 p-4 hover:border-dh-gold/50 transition-all hover:shadow-gold-glow group">
        <div className="flex gap-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-dh-gold/20 to-dh-gold/5 flex items-center justify-center flex-shrink-0 text-3xl group-hover:scale-105 transition-transform">
            👤
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-bold text-dh-white">{player.jerseyName} #{player.jerseyNumber}</h3>
                <p className="text-dh-silver/70 text-sm">{player.legalName}</p>
              </div>
              <Badge variant="gold" size="sm">
                {player.playerType}
              </Badge>
            </div>
            <div className="flex gap-2 text-xs text-dh-silver mb-3">
              <span>{player.kitSize}</span>
              <span>•</span>
              <span>{player.locality}</span>
            </div>
            <div className="flex gap-2">
              <Link
                to={`/player/${player.jerseyNumber}`}
                className="text-xs font-bold text-dh-gold hover:text-dh-gold-dark transition-colors"
              >
                Profile
              </Link>
              <button className="p-1 hover:bg-dh-black rounded transition-colors text-dh-silver hover:text-dh-gold">
                <Phone size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dh-charcoal rounded-xl overflow-hidden border border-dh-silver/20 hover:border-dh-gold/50 transition-all hover:shadow-gold-glow group flex flex-col h-full">
      {/* Player Image */}
      <div className="aspect-square bg-gradient-to-br from-dh-gold/20 to-dh-gold/5 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
        👤
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 space-y-4">
        <div>
          <h3 className="font-display text-lg font-bold text-dh-gold">{player.jerseyName}</h3>
          <p className="text-dh-silver/70 text-xs">{player.legalName}</p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="gold" size="sm">
            #{player.jerseyNumber}
          </Badge>
          <Badge variant="default" size="sm">
            {player.playerType}
          </Badge>
        </div>

        <div className="text-xs space-y-1">
          <div className="flex justify-between text-dh-silver">
            <span>{player.age} yrs</span>
            <span>{player.bloodGroup}</span>
          </div>
          <p className="text-dh-silver/60">{player.locality}</p>
        </div>

        <div className="pt-2 border-t border-dh-silver/10 mt-auto space-y-3">
          <Link
            to={`/player/${player.jerseyNumber}`}
            className="w-full block text-center px-5 py-2.5 text-xs border-2 border-dh-gold bg-transparent text-dh-gold hover:bg-dh-gold/10 active:scale-95 font-bold uppercase rounded-lg transition-all duration-300"
          >
            View Profile
          </Link>
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-dh-gold hover:bg-dh-black rounded-lg transition-colors">
            <Phone size={14} />
            Call
          </button>
        </div>
      </div>
    </div>
  );
};

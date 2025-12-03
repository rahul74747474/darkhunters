import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { PlayerCard } from "@/components/PlayerCard";
import { PLAYERS } from "@shared/data";

export default function Squad() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState<string | null>(null);
  const [localityFilter, setLocalityFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("jersey");

  const roles = ["Batsman", "Bowler", "All-Rounder", "Wicket Keeper"];
  const localities = Array.from(new Set(PLAYERS.map((p) => p.locality)));

  const filteredPlayers = useMemo(() => {
    let result = PLAYERS;

    if (searchTerm) {
      result = result.filter(
        (p) =>
          p.jerseyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.legalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.jerseyNumber.toString() === searchTerm
      );
    }

    if (roleFilter) {
      result = result.filter((p) => p.playerType === roleFilter);
    }

    if (localityFilter) {
      result = result.filter((p) => p.locality === localityFilter);
    }

    if (sortBy === "jersey") {
      result = [...result].sort((a, b) => a.jerseyNumber - b.jerseyNumber);
    } else if (sortBy === "name") {
      result = [...result].sort((a, b) => a.jerseyName.localeCompare(b.jerseyName));
    } else if (sortBy === "paid") {
      result = [...result].sort((a, b) => b.dues.paid - a.dues.paid);
    }

    return result;
  }, [searchTerm, roleFilter, localityFilter, sortBy]);

  return (
    <div className="min-h-screen bg-dh-black py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-dh-gold mb-8">Squad</h1>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-4">
              <h3 className="font-bold text-dh-white mb-4">Search</h3>
              <div className="relative">
                <Search className="absolute left-3 top-3 text-dh-silver/50" size={20} />
                <input
                  type="text"
                  placeholder="Name or jersey #"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white placeholder:text-dh-silver/50 focus:outline-none focus:border-dh-gold focus:ring-1 focus:ring-dh-gold/20"
                />
              </div>
            </div>

            {/* Role Filter */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-4">
              <h3 className="font-bold text-dh-white mb-4">Role</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setRoleFilter(null)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    !roleFilter
                      ? "bg-dh-gold text-dh-black font-bold"
                      : "hover:bg-dh-black text-dh-silver"
                  }`}
                >
                  All Roles
                </button>
                {roles.map((role) => (
                  <button
                    key={role}
                    onClick={() => setRoleFilter(role)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      roleFilter === role
                        ? "bg-dh-gold text-dh-black font-bold"
                        : "hover:bg-dh-black text-dh-silver"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* Locality Filter */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-4">
              <h3 className="font-bold text-dh-white mb-4">Locality</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                <button
                  onClick={() => setLocalityFilter(null)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    !localityFilter
                      ? "bg-dh-gold text-dh-black font-bold"
                      : "hover:bg-dh-black text-dh-silver"
                  }`}
                >
                  All Localities
                </button>
                {localities.map((locality) => (
                  <button
                    key={locality}
                    onClick={() => setLocalityFilter(locality)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      localityFilter === locality
                        ? "bg-dh-gold text-dh-black font-bold"
                        : "hover:bg-dh-black text-dh-silver"
                    }`}
                  >
                    {locality}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-4">
              <h3 className="font-bold text-dh-white mb-4">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white focus:outline-none focus:border-dh-gold"
              >
                <option value="jersey">Jersey No (Asc)</option>
                <option value="name">Name (Asc)</option>
                <option value="paid">Paid Amount (Desc)</option>
              </select>
            </div>
          </div>

          {/* Players Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 text-dh-silver/70">
              Found <span className="text-dh-gold font-bold">{filteredPlayers.length}</span> player(s)
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlayers.map((player) => (
                <PlayerCard key={player.id} player={player} variant="grid" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

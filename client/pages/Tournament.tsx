import { TOURNAMENTS, PLAYERS } from "@shared/data";
import { Badge } from "@/components/Badge";

export default function Tournament() {
  const tournament = TOURNAMENTS[0];

  return (
    <div className="min-h-screen bg-dh-black py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-dh-gold mb-8">Tournaments</h1>

        {tournament && (
          <div className="space-y-8">
            {/* Tournament Info */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-8">
              <h2 className="font-display text-3xl font-bold text-dh-white mb-6">{tournament.name}</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <p className="text-dh-silver/60 text-sm mb-2">Total Collected</p>
                  <p className="font-display text-2xl font-bold text-dh-gold">
                    ₹{tournament.totalCollected.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-dh-silver/60 text-sm mb-2">Outstanding</p>
                  <p className="font-display text-2xl font-bold text-dh-red">
                    ₹{tournament.totalOutstanding.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-dh-silver/60 text-sm mb-2">Settled</p>
                  <p className="font-display text-2xl font-bold text-green-400">{tournament.settledCount}</p>
                </div>
                <div>
                  <p className="text-dh-silver/60 text-sm mb-2">Pending</p>
                  <p className="font-display text-2xl font-bold text-dh-red">{tournament.pendingCount}</p>
                </div>
              </div>
            </div>

            {/* Dues Table */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-dh-silver/20">
                <h3 className="font-display text-2xl font-bold text-dh-white">Player Dues</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dh-silver/20 bg-dh-black/50">
                      <th className="px-6 py-4 text-left text-dh-silver/70 font-bold text-sm">Player</th>
                      <th className="px-6 py-4 text-right text-dh-silver/70 font-bold text-sm">Total</th>
                      <th className="px-6 py-4 text-right text-dh-silver/70 font-bold text-sm">Paid</th>
                      <th className="px-6 py-4 text-right text-dh-silver/70 font-bold text-sm">Due</th>
                      <th className="px-6 py-4 text-center text-dh-silver/70 font-bold text-sm">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PLAYERS.map((player) => (
                      <tr key={player.id} className="border-b border-dh-silver/10 hover:bg-dh-black/50 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-bold text-dh-white">{player.jerseyName}</p>
                            <p className="text-dh-silver/60 text-sm">#{player.jerseyNumber}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right text-dh-white">₹{player.tournamentOverview.total}</td>
                        <td className="px-6 py-4 text-right text-green-400">₹{player.tournamentOverview.paid}</td>
                        <td className="px-6 py-4 text-right text-dh-red">₹{player.tournamentOverview.due}</td>
                        <td className="px-6 py-4 text-center">
                          {player.tournamentOverview.due === 0 ? (
                            <Badge variant="success" size="sm">
                              Settled
                            </Badge>
                          ) : (
                            <Badge variant="error" size="sm">
                              Pending
                            </Badge>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

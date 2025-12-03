import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Users, Clock, TrendingUp, AlertCircle } from "lucide-react";

export default function Dashboard() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-dh-black py-12 md:py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="text-6xl">🔒</div>
          <h1 className="font-display text-4xl font-bold text-dh-gold">Access Restricted</h1>
          <p className="text-lg text-dh-silver/80">Please log in to access the dashboard.</p>
          <Button variant="primary" size="lg">
            Log In
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dh-black py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-dh-gold mb-8">Dashboard</h1>

        {/* Quick Summary */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-dh-gold/10 rounded-lg flex items-center justify-center">
                <Users className="text-dh-gold" size={24} />
              </div>
              <span className="text-dh-gold text-2xl font-bold">30</span>
            </div>
            <p className="text-dh-silver/70 text-sm">Active Players</p>
          </div>

          <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-dh-gold/10 rounded-lg flex items-center justify-center">
                <Clock className="text-dh-gold" size={24} />
              </div>
              <span className="text-dh-red text-2xl font-bold">2</span>
            </div>
            <p className="text-dh-silver/70 text-sm">Pending Joinees</p>
          </div>

          <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-dh-gold/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-dh-gold" size={24} />
              </div>
              <span className="text-dh-gold text-2xl font-bold">₹18K</span>
            </div>
            <p className="text-dh-silver/70 text-sm">Total Collected</p>
          </div>

          <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-dh-gold/10 rounded-lg flex items-center justify-center">
                <AlertCircle className="text-dh-red" size={24} />
              </div>
              <span className="text-dh-red text-2xl font-bold">₹4.2K</span>
            </div>
            <p className="text-dh-silver/70 text-sm">Outstanding Dues</p>
          </div>
        </div>

        {/* Main Dashboard */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Polls */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold text-dh-white">Polls</h2>
                <Button variant="primary" size="sm">
                  Create Poll
                </Button>
              </div>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-dh-black rounded-lg p-4 border border-dh-silver/10">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold text-dh-white">Match on June 30 - Will you be available?</p>
                      <Badge variant="success" size="sm">
                        Active
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-dh-silver/70">Yes</span>
                          <span className="text-dh-gold font-bold">18 (60%)</span>
                        </div>
                        <div className="w-full h-2 bg-dh-charcoal rounded-full overflow-hidden">
                          <div className="h-full w-3/5 bg-green-500"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-dh-silver/70">No</span>
                          <span className="text-dh-gold font-bold">7 (23%)</span>
                        </div>
                        <div className="w-full h-2 bg-dh-charcoal rounded-full overflow-hidden">
                          <div className="h-full w-1/4 bg-dh-red"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-dh-silver/70">Maybe</span>
                          <span className="text-dh-gold font-bold">5 (17%)</span>
                        </div>
                        <div className="w-full h-2 bg-dh-charcoal rounded-full overflow-hidden">
                          <div className="h-full w-1/6 bg-yellow-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Select XI */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold text-dh-white">Select XI</h2>
                <Button variant="primary" size="sm">
                  Create Selection
                </Button>
              </div>
              <div className="bg-dh-black rounded-lg p-4 border border-dh-silver/10">
                <p className="text-dh-silver/70">No active selection</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activities */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-6">
              <h3 className="font-display text-2xl font-bold text-dh-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { action: "Nikhil paid dues", time: "2 hours ago" },
                  { action: "New joinee application", time: "4 hours ago" },
                  { action: "Poll closed - 25 responses", time: "1 day ago" },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-dh-gold pl-4 py-2">
                    <p className="text-dh-white text-sm font-bold">{item.action}</p>
                    <p className="text-dh-silver/60 text-xs">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-6 space-y-3">
              <h3 className="font-display text-lg font-bold text-dh-white mb-4">Quick Actions</h3>
              <Button variant="secondary" size="md" className="w-full">
                View Dues
              </Button>
              <Button variant="secondary" size="md" className="w-full">
                Create Poll
              </Button>
              <Button variant="secondary" size="md" className="w-full">
                Select XI
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

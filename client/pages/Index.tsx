import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Users, Calendar, Trophy, Play , Eye } from "lucide-react";
import { Button } from "@/components/Button";
import { PlayerCard } from "@/components/PlayerCard";
import { Badge } from "@/components/Badge";
import { PLAYERS, MATCHES, TOURNAMENTS } from "@shared/data";
import { useScrollContext } from "../context/scrollContext";
import { cn } from "@/lib/utils";

export default function Index() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [joineeModalOpen, setJoineeModalOpen] = useState(false);
  const [joineeForm, setJoineeForm] = useState({ name: "", phone: "", email: "" });

  const upcomingMatch = MATCHES.find((m) => m.status === "upcoming") || MATCHES[0];
  const tournament = TOURNAMENTS[0];

  const liveMatch = MATCHES.find((m) => m.status === "live");
  const upcomingMatches = MATCHES.filter((m) => m.status === "upcoming");
  const completedMatches = MATCHES.filter((m) => m.status === "completed");


  const featuredPlayers = PLAYERS.slice(0, 6);
  const cardsPerView = { desktop: 3, tablet: 2, mobile: 1 };
  const [cardIndex, setCardIndex] = useState(0);

  const { setShowBrand } = useScrollContext();

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;

    const handleScroll = () => {
      const height = hero.offsetHeight;
      setShowBrand(window.scrollY > height - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [setShowBrand]);

  const nextSlide = () => {
    setCardIndex((prev) => (prev + 1) % (featuredPlayers.length - cardsPerView.desktop + 1 || 1));
  };

  const prevSlide = () => {
    setCardIndex((prev) =>
      prev === 0 ? (featuredPlayers.length - cardsPerView.desktop || 0) : prev - 1
    );
  };

  const handleJoineeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Joinee form:", joineeForm);
    setJoineeForm({ name: "", phone: "", email: "" });
    setJoineeModalOpen(false);
  };

  return (
    <div className="bg-dh-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24" id="hero-section">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-dh-gold/10 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Logo */}
          <div className="flex items-center justify-center md:justify-start">
  <div className="relative animate-scale-up">
    <img
      src="https://i.ibb.co/YFRKNpcJ/dh-removebg-preview.webp"
      alt="Dark Hunnters Logo"
      className="w-64 h-64 md:w-80 md:h-80 object-contain"
    />
  </div>
</div>

          {/* Right: Content */}
          <div className="text-center md:text-left space-y-6 animate-slide-up">
            <div>
              <h1 className="font-display text-6xl md:text-7xl font-bold text-dh-white mb-2">
                DARK HUNTERS
              </h1>
              
            </div>

            <p className="text-lg text-dh-silver/80 max-w-md mx-auto md:mx-0">
              An organized cricket club built on discipline, brotherhood, and competitive spirit.
              Born to hunt. Built to win.
            </p>

            <div className="flex gap-4 flex-col sm:flex-row justify-center md:justify-start pt-4">
              <Button
                onClick={() => setJoineeModalOpen(true)}
                variant="secondary"
                size="lg"
                className="text-base"
              >
                Join the Team
              </Button>
              <Button variant="primary" size="lg" className="text-base">
                Watch Live
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-dh-silver/20">
              <div className="text-center md:text-left">
                <div className="font-display text-3xl font-bold text-dh-gold">{PLAYERS.length}</div>
                <p className="text-sm text-dh-silver/60">Players</p>
              </div>
              <div className="text-center md:text-left">
                <div className="font-display text-3xl font-bold text-dh-gold">
                  {completedMatches.length}
                </div>
                <p className="text-sm text-dh-silver/60">Matches</p>
              </div>
              <div className="text-center md:text-left">
                <div className="font-display text-3xl font-bold text-dh-gold">
                  {TOURNAMENTS.length}
                </div>
                <p className="text-sm text-dh-silver/60">Tournaments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dh-black to-dh-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Total Players */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-6 hover:border-dh-gold/50 hover:shadow-gold-glow transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-dh-gold/10 rounded-lg flex items-center justify-center group-hover:bg-dh-gold/20 transition-colors">
                  <Users className="text-dh-gold" size={24} />
                </div>
                <span className="text-dh-silver/40 text-sm">This Season</span>
              </div>
              <h3 className="font-display text-4xl font-bold text-dh-gold mb-2">{PLAYERS.length}</h3>
              <p className="text-dh-silver/70">Active Players</p>
            </div>

            {/* Next Match */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-6 hover:border-dh-gold/50 hover:shadow-gold-glow transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-dh-gold/10 rounded-lg flex items-center justify-center group-hover:bg-dh-gold/20 transition-colors">
                  <Calendar className="text-dh-gold" size={24} />
                </div>
                <span className="text-dh-silver/40 text-sm">Upcoming</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-dh-gold mb-1">
                {upcomingMatch.date}
              </h3>
              <p className="text-dh-silver/70">vs {upcomingMatch.opponent}</p>
              <p className="text-dh-silver/50 text-sm mt-2">{upcomingMatch.venue}</p>
            </div>

            {/* Tournaments */}
            <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-6 hover:border-dh-gold/50 hover:shadow-gold-glow transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-dh-gold/10 rounded-lg flex items-center justify-center group-hover:bg-dh-gold/20 transition-colors">
                  <Trophy className="text-dh-gold" size={24} />
                </div>
                <span className="text-dh-silver/40 text-sm">Total</span>
              </div>
              <h3 className="font-display text-4xl font-bold text-dh-gold mb-2">
                {TOURNAMENTS.length}
              </h3>
              <p className="text-dh-silver/70">Tournaments Played</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Players Carousel */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-dh-white mb-2">
                Featured Players
              </h2>
              <p className="text-dh-silver/70">Top talents of Dark Hunters</p>
            </div>
            <Link
              to="/squad"
              className="flex items-center gap-2 text-dh-gold hover:text-dh-gold-dark font-bold transition-colors group"
            >
              View All
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPlayers.slice(cardIndex, cardIndex + 3).map((player) => (
                <div key={player.id} className="animate-slide-up">
                  <PlayerCard player={player} variant="carousel" />
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-3 bg-dh-charcoal border border-dh-silver/20 rounded-lg hover:border-dh-gold hover:bg-dh-black transition-all text-dh-gold"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-dh-charcoal border border-dh-silver/20 rounded-lg hover:border-dh-gold hover:bg-dh-black transition-all text-dh-gold"
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Momentos */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dh-black to-dh-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dh-white mb-2">
              Latest Momentos
            </h2>
            <p className="text-dh-silver/70">Highlights from our best players</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative group cursor-pointer rounded-xl overflow-hidden border border-dh-silver/20 hover:border-dh-gold/50 transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-dh-gold/20 to-dh-gold/5 flex items-center justify-center group-hover:from-dh-gold/30 group-hover:to-dh-gold/10 transition-all">
                  <div className="absolute w-16 h-16 bg-dh-gold/20 rounded-full flex items-center justify-center group-hover:bg-dh-gold/40 transition-all">
                    <Play className="text-dh-gold fill-dh-gold" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dh-charcoal to-transparent">
                  <p className="text-dh-white font-bold">Top Performer {i}</p>
                  <p className="text-dh-silver/70 text-sm">vs Rivals CC</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*  matches */}
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

      {/* CTA Strip */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-dh-gold/20 to-dh-gold/10 border-y border-dh-gold/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-dh-gold mb-2">
                Become a Dark Hunter
              </h2>
              <p className="text-lg text-dh-silver">Join our elite team of players</p>
            </div>
            <Button
              onClick={() => setJoineeModalOpen(true)}
              variant="primary"
              size="lg"
              className="text-base"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Joinee Modal */}
      {joineeModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-dh-charcoal border border-dh-gold/30 rounded-xl max-w-md w-full p-8 animate-scale-in">
            <h2 className="font-display text-2xl font-bold text-dh-gold mb-6">Join Dark Hunters</h2>
            <form onSubmit={handleJoineeSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-dh-white mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={joineeForm.name}
                  onChange={(e) => setJoineeForm({ ...joineeForm, name: e.target.value })}
                  className="w-full px-4 py-2 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white placeholder:text-dh-silver/50 focus:outline-none focus:border-dh-gold focus:ring-1 focus:ring-dh-gold/20 transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-dh-white mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={joineeForm.phone}
                  onChange={(e) => setJoineeForm({ ...joineeForm, phone: e.target.value })}
                  className="w-full px-4 py-2 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white placeholder:text-dh-silver/50 focus:outline-none focus:border-dh-gold focus:ring-1 focus:ring-dh-gold/20 transition-all"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-dh-white mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={joineeForm.email}
                  onChange={(e) => setJoineeForm({ ...joineeForm, email: e.target.value })}
                  className="w-full px-4 py-2 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white placeholder:text-dh-silver/50 focus:outline-none focus:border-dh-gold focus:ring-1 focus:ring-dh-gold/20 transition-all"
                  placeholder="Your email"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setJoineeModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-dh-gold text-dh-gold rounded-lg hover:bg-dh-gold/10 transition-colors font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-dh-gold text-dh-black rounded-lg hover:bg-dh-gold-dark transition-colors font-bold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

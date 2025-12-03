export default function About() {
  return (
    <div className="min-h-screen bg-dh-black py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-dh-gold mb-8">About Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-dh-silver/80">
              Dark Hunters is an organized cricket club founded on principles of discipline, brotherhood, and competitive excellence.
            </p>
            <p className="text-lg text-dh-silver/80">
              With over 30 active players, we compete in various local tournaments and maintain the highest standards of sportsmanship.
            </p>
            <h2 className="font-display text-3xl font-bold text-dh-white mt-8">Our Values</h2>
            <ul className="space-y-4">
              {["Discipline", "Brotherhood", "Competitive Spirit", "Safety"].map((value) => (
                <li key={value} className="flex items-center gap-3 text-dh-silver">
                  <span className="w-2 h-2 bg-dh-gold rounded-full"></span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-dh-charcoal border border-dh-silver/20 rounded-xl p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl mb-4">⚔️</div>
              <h3 className="font-display text-2xl font-bold text-dh-gold mb-6">Dark Hunters</h3>
              <div className="space-y-3 text-dh-silver">
                <p><span className="text-dh-gold font-bold">30+</span> Active Players</p>
                <p><span className="text-dh-gold font-bold">Avg Age:</span> 28 years</p>
                <p><span className="text-dh-gold font-bold">Regions:</span> Delhi NCR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

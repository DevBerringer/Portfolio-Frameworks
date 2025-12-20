export default function MeshGradientBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: [
            'radial-gradient(circle at 12% 20%, rgba(99, 102, 241, 0.32) 0%, transparent 52%)',
            'radial-gradient(circle at 85% 15%, rgba(236, 72, 153, 0.28) 0%, transparent 55%)',
            'radial-gradient(circle at 20% 85%, rgba(14, 165, 233, 0.28) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.32) 0%, transparent 55%)',
            'radial-gradient(circle at 50% 50%, rgba(15, 118, 110, 0.12) 0%, transparent 60%)',
          ].join(', '),
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/5 to-white/60" />
    </div>
  );
}

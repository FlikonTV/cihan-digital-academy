const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover opacity-30"
      >
        <source src="https://cdn.gpteng.co/videos/tech-background.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C]/95 via-[#2C1F3C]/95 to-[#1A1F2C]/95" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-[120px]" />
      
      {/* Abstract Shapes */}
      <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full border border-primary/20 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full border border-accent/20 animate-pulse" />
    </div>
  );
};

export default HeroBackground;
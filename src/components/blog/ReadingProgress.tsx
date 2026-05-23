import { useEffect, useState } from "react";

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);

      const headings = Array.from(document.querySelectorAll(".article-content h2"));
      let active = "";
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= 120) active = h.textContent || "";
      }
      if (active) setCurrentSection(active);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[9999] h-[3px] transition-none"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary) / 0.7))",
        }}
        aria-hidden="true"
      />
      {progress > 10 && currentSection && (
        <div className="fixed bottom-6 left-1/2 z-40 hidden -translate-x-1/2 lg:block">
          <div className="rounded-full bg-foreground/90 px-4 py-1.5 font-sans text-[11px] text-background shadow-lg backdrop-blur">
            {Math.round(progress)}% · {currentSection.length > 45 ? currentSection.slice(0, 45) + "…" : currentSection}
          </div>
        </div>
      )}
    </>
  );
};

export default ReadingProgress;

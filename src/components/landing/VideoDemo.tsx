import { useRef, useState } from "react";
import { Play } from "lucide-react";
import demoVideo from "@/assets/demo.mp4";
import demoPoster from "@/assets/demo-poster.jpg";

export function VideoDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-balance text-center text-3xl md:text-4xl" data-reveal>
          Comment recruter un développeur en 72h{" "}
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            (sans trier 100 CV)
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground" data-reveal>
          2 minutes pour comprendre comment CoinCarrière transforme votre recrutement.
        </p>
        <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-card/60 shadow-[var(--shadow-elegant)]" data-reveal>
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={demoVideo}
            poster={demoPoster}
            controls={playing}
            playsInline
            preload="metadata"
            onPause={() => setPlaying(false)}
            onPlay={() => setPlaying(true)}
          />
          {!playing && (
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 grid place-items-center transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Lire la vidéo de démonstration"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-transparent to-primary/20" />
              <span className="relative grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground glow-primary">
                <Play className="h-8 w-8 translate-x-0.5" fill="currentColor" />
                <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

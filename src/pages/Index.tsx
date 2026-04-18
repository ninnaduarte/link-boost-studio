import profileImg from "@/assets/profile.png";
import { Share2, MoreVertical, Instagram } from "lucide-react";

const links = [
  {
    label: "Instagram",
    icon: <Instagram className="h-6 w-6" />,
    href: "https://www.instagram.com/ninnasduarte?igsh=dzMxcnl2Zzd6NXYz",
  },
  {
    label: "Conteúdo Vip 🌶️ free",
    icon: (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(200_90%_55%)]">
        <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5">
          <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
        </svg>
      </div>
    ),
    href: "https://t.me/Nina_Duarte_bot",
    customIcon: true,
  },
];

const Index = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 py-6"
      style={{ background: "var(--gradient-bg)" }}
    >
      {/* Top bar */}
      <div className="w-full max-w-md flex justify-end items-center mb-8">
        <button className="h-10 w-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center hover:bg-white/25 transition">
          <Share2 className="h-4 w-4 text-foreground" />
        </button>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center text-center max-w-md w-full">
        <div className="h-24 w-24 rounded-full overflow-hidden ring-2 ring-white/40 shadow-2xl mb-4">
          <img
            src={profileImg}
            alt="Nina Duarte"
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-foreground drop-shadow-md">
          @ninaduartelinks
        </h1>
        <p className="text-foreground/95 mt-1 mb-8 font-medium drop-shadow">
          O meu melhor lado! 🍑
        </p>

        {/* Links */}
        <div className="w-full space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between w-full rounded-xl border border-white/70 bg-white/10 backdrop-blur-sm px-4 py-4 hover:bg-white/20 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center w-10">
                {link.customIcon ? link.icon : (
                  <span className="text-foreground">{link.icon}</span>
                )}
              </div>
              <span className="flex-1 text-center font-semibold text-foreground">
                {link.label}
              </span>
              <button className="w-10 flex justify-end opacity-70 hover:opacity-100">
                <MoreVertical className="h-5 w-5 text-foreground" />
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

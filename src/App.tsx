import { ArrowUpRight, Gamepad2, Lightbulb, Sparkles, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const links = [
  {
    title: "AI Odyssey 遊戲網站",
    description: "探索 AI 冒險世界的官方入口，開啟互動體驗。",
    href: "https://joelitw1015.github.io/AI_Odyssey_Web_Page/",
    icon: Gamepad2,
    thumb: "/game.png"
  },
  {
    title: "AI 素養課程 01：提示詞工程",
    description: "神奇料理機的秘密，帶孩子掌握提示工程的關鍵技巧。",
    href: "https://youtu.be/LMfiibCO7-8",
    icon: Sparkles,
    thumb: "https://img.youtube.com/vi/LMfiibCO7-8/hqdefault.jpg"
  },
  {
    title: "AI 素養課程 02：AI 的火眼金睛",
    description: "走進電腦視覺的世界，認識 AI 如何學會看東西。",
    href: "https://youtu.be/sMUZYoOPMUQ",
    icon: Lightbulb,
    thumb: "https://img.youtube.com/vi/sMUZYoOPMUQ/hqdefault.jpg"
  },
  {
    title: "AI Odyssey 記分板",
    description: "查看排行榜與分數，與同學一較高下！",
    href: "https://ai-odyssey-backend-rbzz.onrender.com/static/scoreboard.html",
    icon: Trophy,
    thumb: "/scoreboard.png"
  }
];

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* animated background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-fuchsia-400/25 via-violet-400/25 to-sky-400/25 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-44 -right-48 h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-emerald-400/20 via-sky-300/20 to-fuchsia-300/20 blur-3xl animate-float-slower" />
        <div className="absolute inset-0 animated-gradient opacity-[0.12]" />
      </div>
      <div className="min-h-screen py-10 sm:py-12">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <Card className="w-full backdrop-blur-lg bg-white/90 shadow-2xl">
          <CardHeader className="flex flex-col items-center text-center space-y-4">
            <Avatar>
              <AvatarImage src="/logo.png" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <CardTitle className="text-3xl font-bold">AI Odyssey</CardTitle>
              <p className="text-sm text-muted-foreground">
                帶領中小學生輕鬆踏入人工智慧的奇幻旅程，從遊戲到課程一次收藏。
              </p>
            </div>
          </CardHeader>
            <CardContent className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl border border-border bg-white hover:shadow-lg transition-shadow"
                  >
                    <div className="relative w-full pt-[56.25%] overflow-hidden">
                      {link.thumb ? (
                        <img
                          src={link.thumb}
                          alt={link.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/15 via-violet-200/40 to-sky-200/30">
                          <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                            <link.icon className="h-9 w-9" />
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-start justify-between gap-3 p-4 sm:p-5">
                      <div className="min-w-0">
                        <div className="truncate text-base font-semibold sm:text-[1.05rem]">
                          {link.title}
                        </div>
                        <div className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                          {link.description}
                        </div>
                      </div>
                      <ArrowUpRight className="mt-1 shrink-0 h-5 w-5 text-muted-foreground opacity-80 group-hover:opacity-100" />
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
          <footer className="mt-8 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} AI Odyssey. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;


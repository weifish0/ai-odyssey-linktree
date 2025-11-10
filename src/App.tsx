import { ArrowUpRight, Gamepad2, Lightbulb, Sparkles, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const links = [
  {
    title: "AI Odyssey 遊戲網站",
    description: "探索 AI 冒險世界的官方入口，開啟互動體驗。",
    href: "https://joelitw1015.github.io/AI_Odyssey_Web_Page/",
    icon: Gamepad2
  },
  {
    title: "AI Odyssey 記分板",
    description: "查看排行榜與分數，與同學一較高下！",
    href: "https://ai-odyssey-backend-rbzz.onrender.com/static/scoreboard.html",
    icon: Trophy
  },
  {
    title: "AI 素養課程 01：Prompt Engineering",
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
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="container flex min-h-screen flex-col items-center justify-center py-12">
        <Card className="w-full max-w-xl backdrop-blur-lg bg-white/90 shadow-xl">
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
          <CardContent className="space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="outline"
                  className="flex w-full items-center justify-between rounded-lg border border-border bg-white/80 px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent"
                >
                  <div className="flex items-center gap-4">
                    {link.thumb ? (
                      <img
                        src={link.thumb}
                        alt={link.title}
                        className="h-11 w-11 rounded-md border object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <link.icon className="h-5 w-5" />
                      </span>
                    )}
                    <div className="flex flex-col">
                      <span className="text-base font-semibold">{link.title}</span>
                      <span className="text-sm text-muted-foreground">{link.description}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                </Button>
              </a>
            ))}
          </CardContent>
        </Card>
        <footer className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AI Odyssey. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;


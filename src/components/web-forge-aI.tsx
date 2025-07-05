"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizonal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import { toast } from "sonner";
import aiAnimation from "../../public/animation/ai-assistant.json";

// ✅ Import your sound (or place in /public/sounds)
const soundUrl = "/sounds/button-appear.mp3";

export default function WebForgeAI() {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const hasAppearedRef = useRef(false); // ✅ Prevent multiple toasts/sounds

  // ✅ Handle play sound + toast when button appears
  useEffect(() => {
    if (!open && !hasAppearedRef.current) {
      hasAppearedRef.current = true;

      const audio = new Audio(soundUrl);
      audio.volume = 0.6;
      audio.play().catch(() => {}); // ignore autoplay errors

      toast("Generate website with WebForge AI", {
        duration: 5000,
      });
    }
  }, [open]);

  const handleSend = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult("");

    setTimeout(() => {
      const message = `✅ Website draft created for: "${prompt}"`;
      setResult(message);
      setLoading(false);
      setPrompt("");
      toast.success("Website generated successfully!", {
        description: message,
        duration: 4000,
      });
    }, 1000);
  };

  return (
    <>
      <Sheet open={open} onOpenChange={(val) => {
        setOpen(val);
        if (val) hasAppearedRef.current = false; // ✅ Reset on open
      }}>
        <SheetContent
          side="right"
          className="w-full max-w-md sm:max-w-sm bg-background text-foreground flex flex-col justify-between border-l backdrop-blur-md min-h-screen"
        >
          <div className="p-4 sm:p-5 flex flex-col gap-4 flex-1 overflow-y-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lottie
                  animationData={aiAnimation}
                  loop
                  style={{ height: 40, width: 40 }}
                />
                <h2 className="text-lg sm:text-xl font-semibold">
                  WebForge AI
                </h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Describe the website you want. WebForge AI will generate it in
              seconds.
            </p>

            <div className="flex flex-col gap-3 mt-4">
              <Textarea
                rows={3}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. Landing page with pricing, testimonials & blog"
                className="resize-none text-sm"
              />
              <Button
                onClick={handleSend}
                disabled={!prompt.trim() || loading}
                className="w-full text-sm"
              >
                {loading ? (
                  "Generating..."
                ) : (
                  <>
                    <SendHorizonal className="mr-2 h-4 w-4" />
                    Generate Website
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-right">
                Press ⏎ to generate
              </p>
            </div>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-muted rounded text-sm"
              >
                {result}
              </motion.div>
            )}
          </div>

          <div className="p-3 text-xs text-center text-muted-foreground">
            Built with ❤️ by Viyaga
          </div>
        </SheetContent>
      </Sheet>

      {/* Floating Button */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.8 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.6,
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
            className="fixed bottom-2 right-2 sm:bottom-6 sm:right-6 z-50"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer rounded-full shadow-xl backdrop-blur-md transition"
              onClick={() => setOpen(true)}
            >
              <Lottie
                animationData={aiAnimation}
                loop
                className="sm:w-[100px] sm:h-[100px] w-16 h-16"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
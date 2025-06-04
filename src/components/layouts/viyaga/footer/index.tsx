export default function Footer() {
    return (
      <footer className="py-8 border-t text-center text-sm text-muted-foreground bg-gradient-to-b from-[#f0f9ff] to-[#deecf5] dark:from-[#0f172a] dark:to-[#0e172d]">
        <p>© {new Date().getFullYear()} Viyaga Enterprises. All rights reserved.</p>
      </footer>
    );
  }
  
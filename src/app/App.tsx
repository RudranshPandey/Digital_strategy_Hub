import React, { useState, useEffect } from "react";
import { Download, Smartphone, Monitor, Briefcase, Plus, ArrowLeft, Camera, Users, Award, TrendingUp, BookOpen, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Toaster, toast } from "sonner";

// --- Components ---

// 1. Install Prompt Screen
const InstallPrompt = ({
  onInstall,
  isStandalone,
}: {
  onInstall: () => void;
  isStandalone: boolean;
}) => {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black -z-10 rounded-b-[60px]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center w-full flex flex-col items-center max-w-md"
      >
        <img
          src="https://latestlogo.com/wp-content/uploads/2024/11/nippon-india-mutual-fund-logo.png"
          alt="Logo"
          className="w-40 object-contain mb-6"
        />

        <div className="bg-red-600 w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-200 mb-10">
          <Briefcase className="text-white w-12 h-12" />
        </div>

        <h1 className="text-3xl font-extrabold text-black dark:text-white mb-4 tracking-tight px-4 leading-tight">
          Digital Business Digital Hub
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg leading-relaxed px-2">
          Access your investor manuals and business guides instantly.
        </p>

        {/* ✅ CTA BUTTON */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={onInstall}
          className="w-full max-w-xs py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-xl flex items-center justify-center gap-3 text-lg cursor-pointer"
        >
          {isStandalone ? (
            "Open Main Menu"
          ) : (
            <>
              <Plus className="w-6 h-6" strokeWidth={3} />
              Add to Home Screen
            </>
          )}
        </motion.button>

        {/* ✅ SHOW ONLY IF NOT INSTALLED */}
        {!isStandalone && (
          <p className="mt-8 text-sm text-gray-400 font-medium">
            Install for offline access
          </p>
        )}
      </motion.div>
    </div>
  );
};

// 2. Main App Screen (Strategy Hub)
const StrategyHub = ({ onGoBack }: { onGoBack: () => void }) => {
  const topCards = [
    {
      id: 1,
      title: "Who Are We?",
      icon: <Users className="w-7 h-7 text-red-600" />,
      description: "Learn about our organization and mission.",
      fileSize: "1.2 MB"
    },
    {
      id: 2,
      title: "Digital Snapshot",
      icon: <Camera className="w-7 h-7 text-red-600" />,
      description: "Overview of our digital business landscape.",
      fileSize: "3.2 MB"
    },
    {
      id: 3,
      title: "External Recognition",
      icon: <Award className="w-7 h-7 text-red-600" />,
      description: "Performance metrics and recognition programs.",
      fileSize: "2.1 MB"
    },
    {
      id: 4,
      title: "Year of Scale & Momentum",
      icon: <TrendingUp className="w-7 h-7 text-red-600" />,
      description: "Growth strategies and momentum initiatives.",
      fileSize: "2.8 MB"
    }
  ];

  const manuals = [
    {
      id: 1,
      title: "Investor Website Manual",
      icon: <Monitor className="w-7 h-7 text-red-600" />,
      description: "Complete guide for navigating the investor portal.",
      fileSize: "2.4 MB",
      link: "https://nipponindiaim-my.sharepoint.com/:b:/p/rashmi_singh/IQDJIDWK1o3ESKVyw3a2jNWoAWlMWnC2g9V_z2ilrdlVyg0?e=ewWgim&download=1"
    },
    {
      id: 2,
      title: "Investor App Manual",
      icon: <Smartphone className="w-7 h-7 text-red-600" />,
      description: "Mobile application usage and features documentation.",
      fileSize: "1.8 MB",
      link: "https://nipponindiaim-my.sharepoint.com/:b:/p/ann_renny/IQDt4IYkaMrpRabYeE8xzok1Affe8K-hwObYn0b6AekN4CI?e=NQfeLB"
    },
    {
      id: 3,
      title: "Business Easy Manual",
      icon: <Briefcase className="w-7 h-7 text-red-600" />,
      description: "Simplified strategies for business operations.",
      fileSize: "3.1 MB",
      link: "https://nipponindiaim-my.sharepoint.com/:b:/p/anna_sangma/IQALdTMtyHBkQb_jo-B1VgfHAUk_NofPa8wXGcf9ZNPD3AA?e=PqINPR"
    },
    {
      id: 4,
      title: "WhatsApp for Investors",
      icon: <MessageCircle className="w-7 h-7 text-red-600" />,
      description: "Connect with investors through WhatsApp.",
      fileSize: "1.5 MB",
      link: "https://nipponindiaim-my.sharepoint.com/:b:/p/ann_renny/IQAv6UqYKQ9kSofWZVz4RI7_AWolWrn7Q1r9sEyjJpVqn8I?e=Yaf2Eu"
    }
  ];

  const handleDownload = (manual: { title: string; link?: string }) => {
    if (manual.link) {
      window.open(manual.link, '_blank');
      return;
    }
    toast.success(`Downloading ${manual.title}...`);
    setTimeout(() => {
      toast.success(`${manual.title} downloaded successfully.`);
    }, 1500);
  };

  return (
    
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col relative">
      
      {/* Header */}
      <header className="bg-white dark:bg-gray-950 shadow-sm dark:shadow-gray-800/50 pt-5 pb-5 px-6 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button 
            onClick={onGoBack}
            className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-black dark:text-white leading-none">
              Digital Business
            </h1>
            <h2 className="text-xs font-bold text-red-600 dark:text-red-500 uppercase tracking-widest mt-1">
              Strategy Hub
            </h2>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full p-6 overflow-y-auto pb-20 max-w-2xl mx-auto">
        
        {/* Top Cards Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">NAMI's Digital Business</h3>
          
          <div className="flex flex-col gap-5">
            {topCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: card.id * 0.1 }}
                onClick={() => handleDownload({ title: card.title })}
                className="bg-white dark:bg-gray-950 p-5 rounded-2xl shadow-sm dark:shadow-gray-800/50 border border-gray-100 dark:border-gray-800 active:scale-[0.97] transition-transform cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 dark:bg-red-950/30 rounded-bl-[50px] -mr-6 -mt-6 transition-transform group-hover:scale-110" />
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-xl shrink-0 group-hover:bg-red-100 dark:group-hover:bg-red-900/40 transition-colors">
                    {card.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg leading-tight mb-2 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">{card.title}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-md">PDF</span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">{card.fileSize}</span>
                    </div>
                  </div>
                  <div className="self-center">
                    <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 dark:group-hover:border-red-600 transition-all shadow-sm">
                      <Download className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Know your Digital Platform Section */}
        <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Know your Digital Platform(KYDP)</h3>
            <p className="text-gray-500 dark:text-gray-400">Select a manual to start downloading.</p>
        </div>

        <div className="flex flex-col gap-5">
          {manuals.map((manual, index) => (
            <motion.div
              key={manual.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (topCards.length + index) * 0.1 }}
              onClick={() => handleDownload(manual)}
              className="bg-white dark:bg-gray-950 p-5 rounded-2xl shadow-sm dark:shadow-gray-800/50 border border-gray-100 dark:border-gray-800 active:scale-[0.97] transition-transform cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 dark:bg-red-950/30 rounded-bl-[50px] -mr-6 -mt-6 transition-transform group-hover:scale-110" />
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-xl shrink-0 group-hover:bg-red-100 dark:group-hover:bg-red-900/40 transition-colors">
                  {manual.icon}
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg leading-tight mb-2 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">{manual.title}</h4>
                  <div className="flex items-center gap-3">
                     <span className="text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-md">PDF</span>
                     <span className="text-xs text-gray-400 dark:text-gray-500">{manual.fileSize}</span>
                  </div>
                </div>
                <div className="self-center">
                    <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 dark:group-hover:border-red-600 transition-all shadow-sm">
                        <Download className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

       {/* Bottom Navigation / Indicator */}
       <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full opacity-50 pointer-events-none"></div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    const ios =
      /iphone|ipad|ipod/.test(userAgent) &&
      !(window as any).MSStream;

    setIsIOS(ios);

    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;

    setIsStandalone(standalone);

    // 🔥 If app opened from home screen → go to dashboard
    if (standalone) {
      setIsInstalled(true);
    }

    // 🔥 Capture install prompt (Android/Chrome)
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      toast.success("App installed successfully!");
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    // ✅ If already installed → open dashboard
    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // 🍎 iOS (no install prompt)
    if (isIOS) {
      toast.message("To install: Tap Share → Add to Home Screen");
      return;
    }

    // 🤖 Android / Chrome install
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        setIsInstalled(true);
      }

      setDeferredPrompt(null);
    } else {
      toast.message("Install not available yet. Try in Chrome.");
    }
  };

  const handleGoBack = () => {
    setIsInstalled(false);
  };

  return (
    <>
      <Toaster position="top-center" richColors />

      <AnimatePresence mode="wait">
        {!isInstalled ? (
          <motion.div
            key="install"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <InstallPrompt 
        onInstall={handleInstallClick} 
        isStandalone={isStandalone} 
      />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <StrategyHub onGoBack={handleGoBack} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
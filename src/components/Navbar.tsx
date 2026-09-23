import React from 'react';
import { SectionTab } from '../types/hydrocephalus';
import { 
  Brain, 
  Activity, 
  GitBranch, 
  Scan, 
  Stethoscope, 
  ClipboardCheck, 
  HelpCircle, 
  BookOpen, 
  GraduationCap,
  Gauge
} from 'lucide-react';

interface NavbarProps {
  activeTab: SectionTab;
  setActiveTab: (tab: SectionTab) => void;
  completedCasesCount: number;
  totalCasesCount: number;
  quizScore: { correct: number; total: number } | null;
  onOpenValveModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  completedCasesCount,
  totalCasesCount,
  quizScore,
  onOpenValveModal
}) => {
  const navItems: { id: SectionTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'atlas', label: 'Atlas & Histologia', icon: <Brain className="w-4 h-4" /> },
    { id: 'fisiopatologia', label: 'Fisiopatologia & Monro-Kellie', icon: <Activity className="w-4 h-4" /> },
    { id: 'etiologia', label: 'Etiologias & África', icon: <GitBranch className="w-4 h-4" /> },
    { id: 'diagnostico', label: 'Diagnóstico & Imagem', icon: <Scan className="w-4 h-4" /> },
    { id: 'cirurgia', label: 'Técnicas Neurocirúrgicas', icon: <Stethoscope className="w-4 h-4" /> },
    { id: 'protocolo', label: 'Algoritmo & HCN', icon: <ClipboardCheck className="w-4 h-4" /> },
    { 
      id: 'casos', 
      label: 'Casos Clínicos', 
      icon: <GraduationCap className="w-4 h-4" />,
      badge: `${completedCasesCount}/${totalCasesCount}`
    },
    { 
      id: 'quiz', 
      label: 'Quiz & Flashcards', 
      icon: <HelpCircle className="w-4 h-4" />,
      badge: quizScore ? `${quizScore.correct}/${quizScore.total}` : undefined
    },
    { id: 'referencias', label: 'Referências & Síntese', icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-cyan-950/60 shadow-xl">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between border-b border-slate-800/50">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 via-teal-500 to-sky-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/40">
            <Brain className="w-5 h-5 text-slate-950 font-bold" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                NeuroHydro <span className="text-xs uppercase px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 font-mono font-medium">Atlas Clínico</span>
              </h1>
            </div>
            <p className="text-xs text-slate-300 hidden sm:block">
              Por <span className="text-cyan-300 font-semibold">Abdoulaye Marega</span> <span className="text-slate-400">• Residente em Neurocirurgia-HCN</span>
            </p>
          </div>
        </div>

        {/* Global Key indicators / Quick status */}
        <div className="flex items-center space-x-2.5 text-xs">
          {onOpenValveModal && (
            <button
              onClick={onOpenValveModal}
              className="flex items-center gap-1.5 bg-gradient-to-r from-cyan-950 to-slate-900 hover:from-cyan-900 hover:to-slate-800 border border-cyan-700/70 text-cyan-300 px-2.5 sm:px-3 py-1.5 rounded-lg font-bold shadow-md transition hover:border-cyan-500"
              title="Abrir tabela de calibração e pressões das válvulas de shunts (mmH₂O / cmH₂O)"
            >
              <Gauge className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Pressão das Válvulas</span>
              <span className="sm:hidden">Válvulas</span>
            </button>
          )}

          <div className="hidden lg:flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-[11px] text-cyan-300">Turnover: ~3,3x/dia (~500 mL/dia)</span>
          </div>

          <div className="flex items-center gap-1.5 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1.5 rounded-lg text-cyan-300 text-xs">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-medium">Casos: {completedCasesCount}/{totalCasesCount}</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <nav className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center space-x-1 overflow-x-auto py-2 scrollbar-none text-sm">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all duration-200 text-xs sm:text-sm ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <span className={isActive ? 'text-cyan-400' : 'text-slate-400'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-cyan-500/30 text-cyan-200' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

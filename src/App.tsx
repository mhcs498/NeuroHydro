/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SectionTab } from './types/hydrocephalus';
import { CLINICAL_CASES } from './data/contentData';
import { Navbar } from './components/Navbar';
import { AtlasVentricular } from './components/AtlasVentricular';
import { MonroKellieSim } from './components/MonroKellieSim';
import { EtiologyAndAfrica } from './components/EtiologyAndAfrica';
import { NeuroimagingTools } from './components/NeuroimagingTools';
import { NeurosurgicalProcedures } from './components/NeurosurgicalProcedures';
import { ProtocolDecisionTree } from './components/ProtocolDecisionTree';
import { ClinicalCasesSimulator } from './components/ClinicalCasesSimulator';
import { QuizAndFlashcards } from './components/QuizAndFlashcards';
import { ReferencesAndNotes } from './components/ReferencesAndNotes';
import { ValvePressureModal } from './components/ValvePressureModal';
import { 
  Brain, 
  ArrowRight, 
  Heart, 
  BookOpen, 
  GraduationCap, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<SectionTab>('atlas');
  const [isValveModalOpen, setIsValveModalOpen] = useState<boolean>(false);
  const [completedCases, setCompletedCases] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('neurohydro_completed_cases');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [quizScore, setQuizScore] = useState<{ correct: number; total: number } | null>(() => {
    try {
      const saved = localStorage.getItem('neurohydro_quiz_score');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('neurohydro_completed_cases', JSON.stringify(completedCases));
    } catch {}
  }, [completedCases]);

  useEffect(() => {
    try {
      if (quizScore) {
        localStorage.setItem('neurohydro_quiz_score', JSON.stringify(quizScore));
      }
    } catch {}
  }, [quizScore]);

  const handleCompleteCase = (caseId: string) => {
    if (!completedCases.includes(caseId)) {
      setCompletedCases((prev) => [...prev, caseId]);
    }
  };

  const handleQuizComplete = (score: { correct: number; total: number }) => {
    setQuizScore(score);
  };

  // Quick next module jump helper
  const tabsOrder: SectionTab[] = [
    'atlas',
    'fisiopatologia',
    'etiologia',
    'diagnostico',
    'cirurgia',
    'protocolo',
    'casos',
    'quiz',
    'referencias'
  ];

  const currentTabIndex = tabsOrder.indexOf(activeTab);
  const nextTab = currentTabIndex < tabsOrder.length - 1 ? tabsOrder[currentTabIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        completedCasesCount={completedCases.length}
        totalCasesCount={CLINICAL_CASES.length}
        quizScore={quizScore}
        onOpenValveModal={() => setIsValveModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'atlas' && <AtlasVentricular />}
        {activeTab === 'fisiopatologia' && <MonroKellieSim />}
        {activeTab === 'etiologia' && <EtiologyAndAfrica />}
        {activeTab === 'diagnostico' && <NeuroimagingTools />}
        {activeTab === 'cirurgia' && (
          <NeurosurgicalProcedures onOpenValveModal={() => setIsValveModalOpen(true)} />
        )}
        {activeTab === 'protocolo' && <ProtocolDecisionTree />}
        {activeTab === 'casos' && (
          <ClinicalCasesSimulator
            completedCases={completedCases}
            onCompleteCase={handleCompleteCase}
          />
        )}
        {activeTab === 'quiz' && (
          <QuizAndFlashcards onQuizComplete={handleQuizComplete} />
        )}
        {activeTab === 'referencias' && <ReferencesAndNotes />}

        {/* Modal Window for Shunt Valve Pressure */}
        <ValvePressureModal
          isOpen={isValveModalOpen}
          onClose={() => setIsValveModalOpen(false)}
        />

        {/* Bottom Next Step Floating Banner */}
        {nextTab && (
          <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-semibold block uppercase">
                Próxima Etapa Pedagógica
              </span>
              <span className="text-sm font-bold text-white capitalize">
                Continuar para: {nextTab.replace('_', ' ')}
              </span>
            </div>

            <button
              onClick={() => {
                setActiveTab(nextTab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition shadow-md shadow-cyan-500/20"
            >
              Avançar Módulo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3">
            <div className="flex items-center space-x-2">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-200 font-bold">
                NeuroHydro: Atlas Didático & Clínico de Hidrocefalia
              </span>
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-cyan-400 font-medium text-[11px]">
              Autor: Abdoulaye Marega – Residente em Neurocirurgia-HCN
            </span>
          </div>

          <p className="text-center md:text-right text-[11px] text-slate-400">
            Ambiente pedagógico e didático estruturado para graduação e residência neurocirúrgica • Baseado em evidências científicas e no protocolo do Hospital Central de Nampula (Moçambique).
          </p>
        </div>
      </footer>
    </div>
  );
}

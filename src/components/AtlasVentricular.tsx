import React, { useState } from 'react';
import { VENTRICULAR_STRUCTURES } from '../data/contentData';
import { VentricleStructure } from '../types/hydrocephalus';
import { 
  Play, 
  Pause, 
  AlertTriangle, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Waves,
  ArrowRight,
  Info
} from 'lucide-react';

export const AtlasVentricular: React.FC = () => {
  const [selectedStructure, setSelectedStructure] = useState<VentricleStructure>(VENTRICULAR_STRUCTURES[0]);
  const [activeObstruction, setActiveObstruction] = useState<'none' | 'aqueduct' | 'monro' | 'outlets'>('none');
  const [flowSpeed, setFlowSpeed] = useState<number>(1);
  const [isFlowing, setIsFlowing] = useState<boolean>(true);
  const [histologyView, setHistologyView] = useState<'ependyma' | 'choroid'>('choroid');
  const [damageMode, setDamageMode] = useState<boolean>(false);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 rounded-2xl border border-cyan-900/40 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-semibold mb-2">
              <Layers className="w-3.5 h-3.5" />
              Módulo I: Anatomia Ventricular & Histologia Ultramicroscópica
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Sistema Ventricular & Histologia do LCR
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-3xl">
              Compreenda a via anatômica contínua do líquor, a histologia diferencial entre o epêndima e o plexo coroideu (barreira sangue-LCR) e simule os pontos clássicos de obstrução hidrocefálica.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-800/70 p-2 rounded-xl border border-slate-700/60 self-start md:self-auto">
            <button
              onClick={() => setIsFlowing(!isFlowing)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs transition shadow-sm"
            >
              {isFlowing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isFlowing ? 'Pausar Fluxo' : 'Iniciar Fluxo'}
            </button>
            <button
              onClick={() => setFlowSpeed(flowSpeed === 1 ? 2 : 1)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-mono transition"
            >
              {flowSpeed}x
            </button>
          </div>
        </div>
      </div>

      {/* Anatomy Interactive Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Interactive SVG Diagram - 7 Columns */}
        <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 p-5 flex flex-col shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Waves className="w-4 h-4 text-cyan-400" />
                Corte Sagital Ventricular & Dinâmica do LCR
              </h3>
              <p className="text-xs text-slate-400">
                Selecione estruturas anatômicas ou simule padrões de obstrução mecânica
              </p>
            </div>

            {/* Obstruction Simulation Toggle */}
            <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800 text-xs">
              <span className="text-[11px] text-slate-400 px-2 font-medium">Simular:</span>
              <button
                onClick={() => setActiveObstruction('none')}
                className={`px-2.5 py-1 rounded text-xs transition ${
                  activeObstruction === 'none' 
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Normal
              </button>
              <button
                onClick={() => setActiveObstruction('aqueduct')}
                className={`px-2.5 py-1 rounded text-xs transition flex items-center gap-1 ${
                  activeObstruction === 'aqueduct' 
                    ? 'bg-rose-500/20 text-rose-300 font-bold border border-rose-500/40' 
                    : 'text-slate-400 hover:text-rose-300'
                }`}
              >
                Estenose Aqueduto
              </button>
              <button
                onClick={() => setActiveObstruction('monro')}
                className={`px-2.5 py-1 rounded text-xs transition ${
                  activeObstruction === 'monro' 
                    ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40' 
                    : 'text-slate-400 hover:text-amber-300'
                }`}
              >
                Cisto de Monro
              </button>
            </div>
          </div>

          {/* SVG Diagram Canvas */}
          <div className="relative w-full aspect-[4/3] bg-slate-950/90 rounded-xl my-4 flex items-center justify-center p-2 border border-slate-800/80 overflow-hidden">
            {/* Visual anatomical SVG representing lateral ventricles, 3rd, aqueduct, 4th ventricle, subarachnoid space */}
            <svg 
              viewBox="0 0 500 380" 
              className="w-full h-full max-h-[380px]"
              aria-label="Corte sagital do sistema ventricular"
            >
              <defs>
                <linearGradient id="brainSilhouette" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e293b" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.7" />
                </linearGradient>
                <linearGradient id="ventricleNormal" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0369a1" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="ventricleDilated" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.98" />
                </linearGradient>
                <linearGradient id="choroidPlexus" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f43f5e" />
                  <stop offset="100%" stopColor="#be123c" />
                </linearGradient>
                <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Cranial outline & brain parenchyma background */}
              <path
                d="M 80 230 C 60 160 90 70 210 50 C 330 30 430 90 440 190 C 445 250 410 290 380 320 C 340 350 280 340 270 340 C 240 340 230 365 210 365 C 190 365 170 330 160 300 C 130 285 90 270 80 230 Z"
                fill="url(#brainSilhouette)"
                stroke="#334155"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Corpus Callosum arch */}
              <path
                d="M 170 125 C 230 85 320 85 360 145 C 345 135 250 100 180 135 Z"
                fill="#475569"
                opacity="0.35"
              />

              {/* Subarachnoid space outer boundary / superior sagittal sinus indication */}
              <path
                d="M 90 210 C 80 130 140 60 230 55 C 330 50 420 100 425 210"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeOpacity="0.4"
                className={isFlowing ? "flow-animation" : ""}
              />

              {/* 1. Lateral Ventricle (anterior horn, body, atrium, posterior/occipital, inferior/temporal horn) */}
              {activeObstruction === 'aqueduct' || activeObstruction === 'monro' ? (
                // Dilated Lateral Ventricle
                <path
                  d="M 145 140 C 130 100 240 75 365 110 C 410 120 425 185 390 210 C 355 220 345 185 320 170 C 270 150 230 165 195 195 C 165 220 135 200 145 140 Z"
                  fill="url(#ventricleDilated)"
                  stroke="#38bdf8"
                  strokeWidth="3"
                  filter="url(#glowEffect)"
                  className="cursor-pointer transition-all duration-500"
                  onClick={() => setSelectedStructure(VENTRICULAR_STRUCTURES[0])}
                />
              ) : (
                // Normal Lateral Ventricle
                <path
                  d="M 170 145 C 160 120 235 105 340 125 C 375 132 385 170 365 185 C 345 192 335 170 310 160 C 270 148 235 155 210 175 C 185 195 165 180 170 145 Z"
                  fill="url(#ventricleNormal)"
                  stroke="#0ea5e9"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300 hover:brightness-125"
                  onClick={() => setSelectedStructure(VENTRICULAR_STRUCTURES[0])}
                />
              )}

              {/* Choroid Plexus in Lateral Ventricle (Glomus in Atrium) */}
              <path
                d="M 270 135 C 310 135 345 155 350 175 C 340 172 315 150 270 140 Z"
                fill="url(#choroidPlexus)"
                stroke="#fda4af"
                strokeWidth="1.5"
                className="cursor-pointer"
                onClick={() => {
                  setSelectedStructure(VENTRICULAR_STRUCTURES[0]);
                  setHistologyView('choroid');
                }}
              />

              {/* 2. Foramen of Monro */}
              <circle
                cx="235"
                cy="158"
                r={activeObstruction === 'monro' ? 8 : 4.5}
                fill={activeObstruction === 'monro' ? "#ef4444" : "#38bdf8"}
                stroke="#ffffff"
                strokeWidth="1.5"
                className="cursor-pointer"
                onClick={() => setSelectedStructure(VENTRICULAR_STRUCTURES[1])}
              />
              {activeObstruction === 'monro' && (
                <text x="250" y="162" fill="#ef4444" fontSize="11" fontWeight="bold">
                  Obstrução (Cisto Colóide)
                </text>
              )}

              {/* 3. Third Ventricle */}
              {activeObstruction === 'aqueduct' ? (
                // Dilated 3rd Ventricle
                <path
                  d="M 225 160 C 265 155 295 165 295 195 C 295 220 270 235 240 230 C 220 225 215 195 225 160 Z"
                  fill="url(#ventricleDilated)"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  className="cursor-pointer transition-all duration-500"
                  onClick={() => setSelectedStructure(VENTRICULAR_STRUCTURES[2])}
                />
              ) : (
                // Normal 3rd Ventricle
                <path
                  d="M 230 162 C 260 160 280 168 280 190 C 280 208 260 218 240 215 C 225 210 220 188 230 162 Z"
                  fill="url(#ventricleNormal)"
                  stroke="#0ea5e9"
                  strokeWidth="1.8"
                  className="cursor-pointer hover:brightness-125"
                  onClick={() => setSelectedStructure(VENTRICULAR_STRUCTURES[2])}
                />
              )}

              {/* ETV Landmark: Floor of 3rd ventricle (Premammillary membrane) */}
              <circle
                cx="238"
                cy="222"
                r="3.5"
                fill="#22c55e"
                stroke="#ffffff"
                strokeWidth="1"
              />
              <text x="215" y="245" fill="#86efac" fontSize="9" fontWeight="bold">
                Alvo ETV (Assoalho III V)
              </text>

              {/* 4. Cerebral Aqueduct of Sylvius */}
              <path
                d="M 275 200 C 285 225 295 245 295 260"
                fill="none"
                stroke={activeObstruction === 'aqueduct' ? "#ef4444" : "#38bdf8"}
                strokeWidth={activeObstruction === 'aqueduct' ? "1" : "3.5"}
                strokeLinecap="round"
                className="cursor-pointer"
                onClick={() => setSelectedStructure(VENTRICULAR_STRUCTURES[3])}
              />
              {activeObstruction === 'aqueduct' && (
                <g>
                  <circle cx="285" cy="228" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="300" y="232" fill="#f87171" fontSize="10" fontWeight="bold">
                    Estenose do Aqueduto
                  </text>
                </g>
              )}

              {/* 5. Fourth Ventricle (Diamond shaped in posterior fossa) */}
              <polygon
                points={
                  activeObstruction === 'aqueduct'
                    ? "290,260 275,280 290,298 305,280" // Collapsed/Normal IV ventricle when aqueduct obstructed
                    : "295,260 275,285 295,310 315,285" // Normal/slightly dilated IV ventricle
                }
                fill={activeObstruction === 'aqueduct' ? "#0369a1" : "url(#ventricleNormal)"}
                stroke={activeObstruction === 'aqueduct' ? "#64748b" : "#0ea5e9"}
                strokeWidth="2"
                className="cursor-pointer hover:brightness-125"
                onClick={() => setSelectedStructure(VENTRICULAR_STRUCTURES[4])}
              />

              {/* Choroid Plexus in 4th Ventricle */}
              <circle
                cx="295"
                cy="295"
                r="3"
                fill="url(#choroidPlexus)"
              />

              {/* 6. Outlets: Foramen of Magendie (inferior) & Luschka (lateral) */}
              <circle
                cx="295"
                cy="312"
                r="3"
                fill="#38bdf8"
                className="cursor-pointer"
                onClick={() => setSelectedStructure(VENTRICULAR_STRUCTURES[5])}
              />
              <path
                d="M 295 312 C 290 335 250 345 220 350"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeDasharray="3 3"
              />

              {/* Spinal Central Canal */}
              <line x1="295" y1="312" x2="295" y2="350" stroke="#0284c7" strokeWidth="2" />

              {/* Dynamic Flow Particles */}
              {isFlowing && activeObstruction === 'none' && (
                <g>
                  {/* From lateral ventricle to Monro */}
                  <circle cx="210" cy="150" r="2.5" fill="#ffffff" className="animate-ping" />
                  <circle cx="235" cy="158" r="2" fill="#a5f3fc" />
                  {/* In 3rd ventricle */}
                  <circle cx="255" cy="180" r="2.5" fill="#ffffff" />
                  {/* In aqueduct */}
                  <circle cx="280" cy="220" r="2" fill="#ffffff" />
                  {/* In 4th ventricle */}
                  <circle cx="295" cy="285" r="2.5" fill="#a5f3fc" />
                  {/* Cisterna Magna */}
                  <circle cx="290" cy="330" r="2" fill="#ffffff" />
                </g>
              )}

              {/* Anatomical Labels */}
              <text x="175" y="115" fill="#93c5fd" fontSize="11" fontWeight="bold">Ventrículo Lateral</text>
              <text x="210" y="145" fill="#38bdf8" fontSize="10">F. Monro</text>
              <text x="250" y="200" fill="#bae6fd" fontSize="10">III Ventrículo</text>
              <text x="305" y="240" fill="#7dd3fc" fontSize="10">Aqueduto de Sylvius</text>
              <text x="315" y="295" fill="#38bdf8" fontSize="10">IV Ventrículo</text>
              <text x="270" y="340" fill="#94a3b8" fontSize="9">Magendie & Luschka</text>
            </svg>
          </div>

          {/* Quick Flow Summary Bar */}
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs flex items-center justify-between overflow-x-auto text-slate-300">
            <span className="font-semibold text-cyan-400 whitespace-nowrap">Vetor do Fluxo:</span>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400 overflow-x-auto">
              <span className="text-rose-400 font-semibold">Plexos Coroideos</span>
              <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />
              <span className="text-cyan-300">Ventrículos Lat.</span>
              <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />
              <span className="text-sky-300">F. Monro</span>
              <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />
              <span className="text-cyan-300">III Ventrículo</span>
              <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />
              <span className="text-amber-300">Aqueduto Sylvius</span>
              <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />
              <span className="text-cyan-300">IV Ventrículo</span>
              <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />
              <span className="text-emerald-300">Cisternas Basais</span>
            </div>
          </div>
        </div>

        {/* Selected Anatomical Structure Detail Panel - 5 Columns */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-lg">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                Estrutura em Foco
              </span>
              <span className="text-xs text-slate-400 italic">
                {selectedStructure.latinName}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mt-3">
              {selectedStructure.name}
            </h3>

            <div className="mt-4 space-y-3 text-xs">
              <div>
                <span className="text-slate-400 font-medium block mb-1">Localização Anatômica:</span>
                <p className="text-slate-200 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                  {selectedStructure.location}
                </p>
              </div>

              <div>
                <span className="text-slate-400 font-medium block mb-1">Papel Fisiológico & Dinâmica:</span>
                <p className="text-slate-200 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                  {selectedStructure.role}
                </p>
              </div>

              <div>
                <span className="text-rose-400 font-medium flex items-center gap-1.5 mb-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Risco Patológico & Relevância Neurocirúrgica:
                </span>
                <p className="text-rose-200/90 bg-rose-950/30 p-2.5 rounded-lg border border-rose-900/40">
                  {selectedStructure.pathologyRisk}
                </p>
              </div>
            </div>

            {/* Quick buttons to select structures */}
            <div className="mt-5 pt-4 border-t border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-2 font-medium">Navegação Rápida:</span>
              <div className="flex flex-wrap gap-1.5">
                {VENTRICULAR_STRUCTURES.map((struct) => (
                  <button
                    key={struct.id}
                    onClick={() => setSelectedStructure(struct)}
                    className={`text-xs px-2.5 py-1 rounded-md transition ${
                      selectedStructure.id === struct.id
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                    }`}
                  >
                    {struct.name.split(' ')[0]} {struct.name.split(' ')[1] || ''}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Key Didactic Concept Callout */}
          <div className="bg-gradient-to-br from-cyan-950/40 to-slate-900 p-4 rounded-xl border border-cyan-800/40 text-xs space-y-2">
            <div className="flex items-center gap-2 text-cyan-300 font-bold">
              <Info className="w-4 h-4 text-cyan-400" />
              Conceito Clássico vs Visão Moderna (Liu et al., 2024)
            </div>
            <p className="text-slate-300 leading-relaxed">
              A hidrocefalia não é meramente &quot;excesso de líquido&quot; por desbalanço hidráulico estático. Trata-se de uma falência dinâmica complexa que envolve pulsatilidade arterial, resistência da microcirculação meníngea, reabsorção pelo sistema glinfático e a biomecânica complacente do parênquima cerebral.
            </p>
          </div>
        </div>
      </div>

      {/* HISTOLOGY DEEP-DIVE SECTION */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-teal-950/80 border border-teal-800/80 text-teal-300 text-xs font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Microscopia & Barreira Hematoliquórica
            </div>
            <h3 className="text-xl font-bold text-white">
              Histologia do Sistema Ventricular: Epêndima vs Plexo Coroideu
            </h3>
          </div>

          {/* Histology Switcher */}
          <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setHistologyView('choroid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                histologyView === 'choroid'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Plexo Coroideu (Barreira Sangue-LCR)
            </button>
            <button
              onClick={() => setHistologyView('ependyma')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                histologyView === 'ependyma'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Epêndima Comum (Cílios & Glia)
            </button>
          </div>
        </div>

        {/* View 1: Choroid Plexus Ultra-Structure */}
        {histologyView === 'choroid' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Interactive Microscopy Diagram */}
            <div className="lg:col-span-6 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                <span className="font-semibold text-rose-400">Ultraestrutura: Capilar fenestrado → Epitélio Coroideu → LCR</span>
                <span className="text-slate-500 font-mono text-[10px]">Aumento 15.000x esquemático</span>
              </div>

              {/* Schematic SVG of Choroid Plexus Layers */}
              <div className="w-full aspect-[16/10] bg-slate-900 rounded-lg p-3 relative overflow-hidden flex flex-col justify-between border border-slate-800">
                {/* 1. Fenestrated Capillary Lumen (Blood side) */}
                <div className="bg-rose-950/60 border border-rose-700/60 rounded-lg p-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span className="text-xs font-bold text-rose-200">Lúmen Capilar Sanguíneo (Eritrócitos & Plasma)</span>
                  </div>
                  <span className="text-[10px] bg-rose-900/60 text-rose-300 px-2 py-0.5 rounded font-mono">Alta pressão hidrostática</span>
                </div>

                {/* Capillary Endothelium with FENESTRAE */}
                <div className="relative py-1 flex items-center justify-around border-y border-dashed border-rose-500/40 my-1">
                  <span className="text-[10px] text-rose-400 font-mono font-semibold">Endotélio Fenestrado (com poros permeáveis a água e solutos)</span>
                </div>

                {/* 2. Connective Stroma & Resident Immune Cells */}
                <div className="bg-amber-950/40 border border-amber-700/40 rounded-lg p-2.5 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-200 block">Estroma Conjuntivo & Matriz Extracelular</span>
                    <span className="text-[10px] text-amber-300/80">Fibroblastos, macrófagos residentes e lâmina basal contínua</span>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                </div>

                {/* 3. Choroid Epithelial Cells with TIGHT JUNCTIONS */}
                <div className="bg-cyan-950/60 border-2 border-cyan-500/80 rounded-lg p-2.5 relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-cyan-200 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                        Epitélio Coroideu (Barreira Sangue–LCR)
                      </span>
                      <span className="text-[10px] text-cyan-300/80">
                        Junções de oclusão (Tight Junctions: Claudinas e Ocludinas) contínuas!
                      </span>
                    </div>
                    <span className="text-[10px] bg-cyan-900 text-cyan-200 px-2 py-0.5 rounded font-mono">Na+/K+-ATPase Apical</span>
                  </div>

                  {/* Microvilli on apical surface */}
                  <div className="flex justify-around pt-1 text-cyan-400 font-mono text-[9px]">
                    <span>|||||</span>
                    <span>|||||</span>
                    <span>|||||</span>
                    <span>|||||</span>
                    <span>|||||</span>
                  </div>
                </div>

                {/* 4. Ventricular CSF Lumen */}
                <div className="bg-sky-950/40 border border-sky-800 rounded-lg p-2 flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-300">Líquido Cefalorraquidiano (LCR Ventricular Puro)</span>
                  <span className="text-[10px] text-sky-400 font-mono">Proteínas baixas (&lt;45 mg/dL)</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 italic">
                Ao contrário do endotélio cerebral (onde a barreira hematoencefálica reside nos próprios capilares), no plexo coroideu os capilares são FENESTRADOS e a barreira fisiológica se localiza nas zônulas de oclusão do epitélio!
              </p>
            </div>

            {/* Scientific Explanation & Modern Roles */}
            <div className="lg:col-span-6 space-y-3 text-xs">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                O Plexo Coroideu: Muito Além de uma &quot;Fábrica de LCR&quot;
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Historicamente visto como um filtro mecânico, o plexo coroideu é hoje reconhecido como um <strong className="text-cyan-300">órgão neuroendócrino e imunológico ativo</strong> (Deng et al., 2025; Liu et al., 2022).
              </p>

              <div className="space-y-2 pt-1">
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <span className="font-bold text-cyan-300 block mb-0.5">Mecanismo Iônico de Produção:</span>
                  <p className="text-slate-300">
                    A bomba <span className="font-mono text-cyan-400">Na+/K+-ATPase</span> apical e o cotransportador <span className="font-mono text-cyan-400">NKCC1</span> bombeiam íons de sódio e cloro para a cavidade ventricular. A água segue por gradiente osmótico transcelular através de canais de <strong className="text-white">Aquaporina-1 (AQP1)</strong>.
                  </p>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <span className="font-bold text-amber-300 block mb-0.5">Imunidade & Vigilância do SNC:</span>
                  <p className="text-slate-300">
                    O estroma coroideu abriga células dendríticas e macrófagos residentes. Durante meningites ou sangramentos, libera citocinas quimiotáticas (IL-1β, TNF-α) que modulam a resposta inflamatória e a gliose pós-infecciosa.
                  </p>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <span className="font-bold text-emerald-300 block mb-0.5">Fundamento da Cauterização (CPC):</span>
                  <p className="text-slate-300">
                    A coagulação térmica endoscópica do plexo coroideu (CPC) destrói este epitélio secretor nos ventrículos laterais, reduzindo a taxa de geração de LCR em 30 a 50%, essencial em lactentes africanos com falência absortiva distal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View 2: Ependyma Microscopic Architecture & Pathology */}
        {histologyView === 'ependyma' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Ependyma Normal vs Damaged Interactive SVG */}
            <div className="lg:col-span-6 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                <span className="font-semibold text-cyan-400">Revestimento Ependimário & Glia Subependimária</span>
                <button
                  onClick={() => setDamageMode(!damageMode)}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition ${
                    damageMode 
                      ? 'bg-rose-500 text-slate-950' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {damageMode ? 'Estado: Hidrocefalia (Lesão)' : 'Simular Dano por Hidrocefalia'}
                </button>
              </div>

              {/* Graphic Comparison Box */}
              <div className="w-full aspect-[16/10] bg-slate-900 rounded-lg p-3 relative flex flex-col justify-between border border-slate-800">
                <div className="text-[11px] text-cyan-300 font-mono text-center">
                  Cavidade Ventricular (LCR)
                </div>

                {/* Ependymal Cells Row */}
                <div className="flex justify-between items-end gap-1 px-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((cellIndex) => {
                    const isDestroyed = damageMode && (cellIndex === 3 || cellIndex === 4);
                    const hasLostCilia = damageMode && (cellIndex === 2 || cellIndex === 5);
                    return (
                      <div key={cellIndex} className="flex-1 flex flex-col items-center">
                        {/* Cilia representation */}
                        {!isDestroyed && (
                          <div className={`h-4 flex items-center justify-around w-full ${hasLostCilia ? 'opacity-20' : 'text-cyan-400 animate-pulse'}`}>
                            <span className="text-[10px]">~</span>
                            <span className="text-[10px]">~</span>
                          </div>
                        )}
                        {/* Cell Body */}
                        <div
                          className={`w-full h-14 rounded-t-sm flex flex-col items-center justify-center text-[10px] font-bold transition-all ${
                            isDestroyed
                              ? 'bg-rose-950/30 border border-dashed border-rose-700/50 text-rose-500'
                              : 'bg-cyan-900/80 border border-cyan-600 text-cyan-100 shadow'
                          }`}
                        >
                          {isDestroyed ? 'Falha' : 'Célula Epend.'}
                          <span className="w-2 h-2 rounded-full bg-cyan-300/60 mt-1"></span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Subependymal Parenchyma & Astrocytes */}
                <div className={`p-3 rounded-lg border transition-all ${
                  damageMode 
                    ? 'bg-rose-950/40 border-rose-800/60 text-rose-200' 
                    : 'bg-slate-950 border-slate-800 text-slate-300'
                }`}>
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span>Substância Branca Periventricular & Astrócitos</span>
                    {damageMode && (
                      <span className="text-[10px] bg-rose-900 text-rose-200 px-2 py-0.5 rounded">
                        Edema Transependimário + Isquemia
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] mt-1 text-slate-400">
                    {damageMode
                      ? 'Desnudamento ependimário focal, influxo anormal de LCR no parênquima, estiramento de axônios motores e gliose reativa.'
                      : 'Junções permeáveis permitem troca fisiológica bidirecional controlada entre LCR e fluido intersticial cerebral.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Neuropathological Mechanisms */}
            <div className="lg:col-span-6 space-y-3 text-xs">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Dano Histopatológico na Ventriculomegalia (Del Bigio, 1993)
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Com o aumento da pressão transmural e dilatação dos ventrículos, a monocamada ependimária sofre deformação mecânica crítica com consequências neurológicas diretas:
              </p>

              <div className="space-y-2">
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <strong className="text-rose-400 block mb-0.5">1. Perda Ciliar & Desnudamento Ependimário:</strong>
                  <span className="text-slate-300">
                    A tração rompe os desmossomos e junções intercelulares. Cílios sofrem amputação ou descoordenação motora, abolindo a propulsão ciliar orientada do LCR.
                  </span>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <strong className="text-rose-400 block mb-0.5">2. Compressão Axonal dos Tratos Corticoespinhais:</strong>
                  <span className="text-slate-300">
                    As fibras motoras que descem da área motora primária curvam-se rente aos cornos frontais. A sua compressão causa hipertonia, clônus e a típica alteração da marcha (apraxia da marcha no idoso e espasticidade nos lactentes).
                  </span>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <strong className="text-rose-400 block mb-0.5">3. Deformação Capilar & Hipoperfusão:</strong>
                  <span className="text-slate-300">
                    Pequenos vasos perfurantes periventriculares são alongados e colapsados, gerando isquemia crônica da substância branca, detectável como hipodensidade periventricular na TAC ou hipersinal T2/FLAIR na RM.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

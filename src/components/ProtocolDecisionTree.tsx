import React, { useState } from 'react';
import { HCN_PROTOCOL_GROUPS } from '../data/contentData';
import { 
  ClipboardCheck, 
  ArrowDown, 
  MapPin, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight,
  Shield,
  Clock,
  Sparkles
} from 'lucide-react';

export const ProtocolDecisionTree: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedGroup, setSelectedGroup] = useState<string>('Grupo I');

  // Interactive decision flow simulator choices
  const [isAcute, setIsAcute] = useState<boolean | null>(null);
  const [isObstructive, setIsObstructive] = useState<boolean | null>(null);
  const [patientType, setPatientType] = useState<'infant_africa' | 'adult_tumor' | 'elderly_inph' | 'acute_bleed' | null>(null);

  const resetDecisionFlow = () => {
    setIsAcute(null);
    setIsObstructive(null);
    setPatientType(null);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 rounded-2xl border border-cyan-900/40 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-semibold mb-2">
          <ClipboardCheck className="w-3.5 h-3.5" />
          Módulo VI: Algoritmo Neurocirúrgico & Protocolo HCN
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Algoritmo Prático em 5 Passos & Protocolo do HCN
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-3xl">
          Protocolo institucional estruturado em 5 grupos operacionais para o Hospital Central de Nampula (Moçambique) e algoritmo de tomada de decisão passo a passo.
        </p>
      </div>

      {/* INTERACTIVE 5-STEP ALGORITHM FLOWCHART */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Algoritmo Neurocirúrgico Geral (5 Passos de Decisão)
            </h3>
            <p className="text-xs text-slate-400">
              Clique nos passos para explorar a fundamentação diagnóstica e conduta correspondente.
            </p>
          </div>
          <button
            onClick={resetDecisionFlow}
            className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 transition"
          >
            Reiniciar Simulador de Decisão
          </button>
        </div>

        {/* 5 Steps Navigation Line */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
          {[
            { num: 1, title: 'Confirmar Hidrocefalia', desc: 'Clínica + TAC/RM' },
            { num: 2, title: 'Aguda vs Crônica', desc: 'Avaliar risco de herniação' },
            { num: 3, title: 'Obstrutiva vs Comunicante', desc: 'Local do bloqueio' },
            { num: 4, title: 'Identificar Causa', desc: 'Etiologia subjacente' },
            { num: 5, title: 'Escolher Intervenção', desc: 'DVE, ETV, ETV/CPC ou DVP' },
          ].map((s) => (
            <button
              key={s.num}
              onClick={() => setActiveStep(s.num)}
              className={`p-3 rounded-xl text-left border transition ${
                activeStep === s.num
                  ? 'bg-cyan-500/20 border-cyan-500 text-white shadow-md'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] mb-1.5 ${
                activeStep === s.num ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}>
                {s.num}
              </span>
              <span className="font-bold block text-white text-xs">{s.title}</span>
              <span className="text-[10px] text-slate-400">{s.desc}</span>
            </button>
          ))}
        </div>

        {/* Active Step Details */}
        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 text-xs space-y-3">
          {activeStep === 1 && (
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-cyan-300">PASSO 1 — Confirmar Hidrocefalia Real vs Atrofia</h4>
              <p className="text-slate-300 leading-relaxed">
                Integrar história clínica, exame neurológico e neuroimagem (TAC sem contraste na urgência ou RM sequenciada com T1, T2, FLAIR, DWI e estudos de fluxo se disponíveis).
                <br /><strong>Ponto Crítico:</strong> Índice de Evans &gt; 0,30 indica ventriculomegalia, mas deve ser confrontado com a clínica e sinais de hipertensão ativa (edema transependimário periventricular) para afastar hidrocefalia ex-vacuo associada ao envelhecimento fisiológico ou demências corticais.
              </p>
            </div>
          )}

          {activeStep === 2 && (
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-cyan-300">PASSO 2 — Determinar Acuidade: Aguda vs Crônica</h4>
              <p className="text-slate-300 leading-relaxed">
                <strong>Hidrocefalia Aguda:</strong> Rebaixamento rápido do Glasgow, Tríade de Cushing (bradicardia, hipertensão sistêmica e alteração ventilatória), edema de papila com hemorragias retinianas ou assimetria pupilar.
                <br />→ <em>Conduta:</em> Emergência cirúrgica com drenagem externa de alívio (DVE) em minutos a poucas horas para evitar óbito por herniação cerebral.
                <br /><strong>Hidrocefalia Crônica:</strong> Adaptação progressiva, macrocefalia lenta em lactentes ou tríade de Hakim-Adams no idoso. Permite investigação etiológica detalhada pré-operatória.
              </p>
            </div>
          )}

          {activeStep === 3 && (
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-cyan-300">PASSO 3 — Classificar o Mecanismo: Obstrutiva vs Comunicante</h4>
              <p className="text-slate-300 leading-relaxed">
                • <strong>Obstrutiva (Não Comunicante):</strong> Há interrupção física antes do LCR atingir o espaço subaracnoideo basal (ex: estenose do aqueduto com dilatação do III e laterais e colapso do IV ventrículo; ou cisto colóide de Monro).
                <br />• <strong>Comunicante:</strong> Ventrículos pérvios com dilatação harmônica ou panventricular, decorrente de dano nas granulações aracnoideias, vasos linfáticos meníngeos ou sistema glinfático (pós-meningite, pós-HSA, iNPH).
              </p>
            </div>
          )}

          {activeStep === 4 && (
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-cyan-300">PASSO 4 — Investigar a Etiologia Específica</h4>
              <p className="text-slate-300 leading-relaxed">
                Classificar a causa de base:
                <br />1. Tumor obstrutivo (pineal, tectal, fossa posterior, cisto colóide).
                <br />2. Infecção do SNC (meningite bacteriana prévia, tuberculose com aracnoidite, malária cerebral).
                <br />3. Hemorragia prévia (traumática, intraventricular no prematuro ou aneurismática).
                <br />4. Malformação congênita (Chiari II / mielomeningocele, Dandy-Walker).
                <br />5. iNPH do idoso com padrão DESH.
              </p>
            </div>
          )}

          {activeStep === 5 && (
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-cyan-300">PASSO 5 — Selecionar a Modalidade Neurocirúrgica de Eleição</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                  <strong className="text-rose-400 block">Aguda com Deterioração:</strong>
                  <span>DVE de emergência no ponto de Kocher (Grupo I).</span>
                </div>
                <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                  <strong className="text-cyan-400 block">Obstrutiva Aquedutal / Tumoral:</strong>
                  <span>ETV (ou ETV com biópsia tumoral) (Grupo II).</span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                  <strong className="text-amber-400 block">Lactente Pós-Infeccioso em África:</strong>
                  <span>ETV + CPC como primeira escolha anatômica (Grupo IV).</span>
                </div>
                <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                  <strong className="text-emerald-400 block">Comunicante do Adulto ou iNPH:</strong>
                  <span>DVP com válvula regulável/anti-sifão (Grupo III / V).</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* HOSPITAL CENTRAL DE NAMPULA (HCN) 5 GROUPS PROTOCOL */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-white">
                Protocolo do Hospital Central de Nampula (HCN) — 5 Grupos
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Diretriz prática de estratificação adaptada à realidade neurocirúrgica de Moçambique.
            </p>
          </div>
          <span className="text-xs bg-amber-950/80 text-amber-300 px-3 py-1 rounded-full border border-amber-800 font-mono font-bold">
            Diretriz HCN Nampula
          </span>
        </div>

        {/* 5 Group Selector Pills */}
        <div className="flex flex-wrap gap-2">
          {HCN_PROTOCOL_GROUPS.map((grp) => (
            <button
              key={grp.group}
              onClick={() => setSelectedGroup(grp.group)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                selectedGroup === grp.group
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-850'
              }`}
            >
              {grp.group}: {grp.name.split(' ')[0]} {grp.name.split(' ')[1] || ''}
            </button>
          ))}
        </div>

        {/* Selected Group Card View */}
        {(() => {
          const grpData = HCN_PROTOCOL_GROUPS.find((g) => g.group === selectedGroup) || HCN_PROTOCOL_GROUPS[0];
          return (
            <div className="bg-slate-950 rounded-xl border border-slate-800 p-5 space-y-4 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-800 gap-2">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                    {grpData.group}
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    {grpData.name}
                  </h4>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-lg border border-slate-700 text-slate-200">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-semibold">{grpData.urgency}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <span className="font-bold text-slate-400 block">Perfil Clínico e Cenário:</span>
                  <p className="text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-slate-800 leading-relaxed">
                    {grpData.profile}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-bold text-cyan-400 block">Abordagem Cirúrgica Inicial:</span>
                  <p className="text-cyan-200/90 bg-cyan-950/30 p-3 rounded-lg border border-cyan-800/40 leading-relaxed font-semibold">
                    {grpData.initialAction}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-bold text-emerald-400 block">Objetivos e Peculiaridades em Nampula:</span>
                  <p className="text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-slate-800 leading-relaxed">
                    {grpData.keyGoals}
                  </p>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

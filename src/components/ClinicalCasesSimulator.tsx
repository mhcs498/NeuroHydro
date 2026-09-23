import React, { useState } from 'react';
import { CLINICAL_CASES } from '../data/contentData';
import { ClinicalCase } from '../types/hydrocephalus';
import { 
  GraduationCap, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  RotateCcw, 
  Scan, 
  User, 
  FileText,
  AlertTriangle,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ClinicalCasesSimulatorProps {
  completedCases: string[];
  onCompleteCase: (caseId: string) => void;
}

export const ClinicalCasesSimulator: React.FC<ClinicalCasesSimulatorProps> = ({
  completedCases,
  onCompleteCase,
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CLINICAL_CASES[0].id);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const activeCase: ClinicalCase = CLINICAL_CASES.find((c) => c.id === selectedCaseId) || CLINICAL_CASES[0];

  const handleSelectCase = (id: string) => {
    setSelectedCaseId(id);
    setSelectedOptionId(null);
    setIsSubmitted(false);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId) return;
    setIsSubmitted(true);
    const chosenOption = activeCase.options.find((o) => o.id === selectedOptionId);
    if (chosenOption && chosenOption.isCorrect) {
      onCompleteCase(activeCase.id);
      // Fire small confetti celebration
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (e) {
        // Fallback gracefully if canvas-confetti is not loaded
      }
    }
  };

  const handleResetCurrentCase = () => {
    setSelectedOptionId(null);
    setIsSubmitted(false);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 rounded-2xl border border-cyan-900/40 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-semibold mb-2">
          <GraduationCap className="w-3.5 h-3.5" />
          Módulo VII: Raciocínio Clínico & Simulação de Casos Reais
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Casos Clínicos Interativos de Tomada de Decisão
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-3xl">
          Coloque em prática o conhecimento de histologia, neuroimagem, parâmetros de Evans e os protocolos neurocirúrgicos do HCN em situações clínicas autênticas.
        </p>
      </div>

      {/* CASES SELECTOR TABS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {CLINICAL_CASES.map((c) => {
          const isDone = completedCases.includes(c.id);
          const isCurrent = c.id === activeCase.id;

          return (
            <button
              key={c.id}
              onClick={() => handleSelectCase(c.id)}
              className={`p-3.5 rounded-xl text-left border transition relative flex flex-col justify-between ${
                isCurrent
                  ? 'bg-cyan-500/20 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="font-mono text-cyan-400">{c.protocolGroup}</span>
                  {isDone && (
                    <span className="flex items-center gap-1 text-emerald-400 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Resolvido
                    </span>
                  )}
                </div>
                <h4 className="text-xs font-bold text-white line-clamp-2">
                  {c.title}
                </h4>
              </div>
              <span className="text-[10px] text-slate-400 mt-2 block">
                {c.category}
              </span>
            </button>
          );
        })}
      </div>

      {/* ACTIVE CASE CONTAINER */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
        {/* Case Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                {activeCase.protocolGroup}
              </span>
              <span className="text-xs text-slate-400 font-semibold">
                {activeCase.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">
              {activeCase.title}
            </h3>
          </div>

          <button
            onClick={handleResetCurrentCase}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 self-start sm:self-auto transition"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Recomeçar Caso
          </button>
        </div>

        {/* Patient Profile & Physical Exam */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
          {/* History */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-cyan-300 flex items-center gap-1.5 text-sm">
              <User className="w-4 h-4" />
              História Clínica & Identificação
            </span>
            <div className="text-slate-400 space-y-1">
              <div><strong className="text-slate-300">Idade & Sexo:</strong> {activeCase.patientProfile.age}, {activeCase.patientProfile.gender}</div>
              <div><strong className="text-slate-300">Origem:</strong> {activeCase.patientProfile.origin}</div>
            </div>
            <p className="text-slate-300 pt-1 leading-relaxed border-t border-slate-800/80">
              {activeCase.patientProfile.history}
            </p>
          </div>

          {/* Physical Exam */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-cyan-300 flex items-center gap-1.5 text-sm">
              <FileText className="w-4 h-4" />
              Exame Físico & Neurológico
            </span>
            <ul className="space-y-1 text-slate-300 list-disc list-inside">
              {activeCase.patientProfile.physicalExam.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Neuroimaging Panel */}
        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="font-bold text-amber-300 flex items-center gap-1.5 text-sm">
              <Scan className="w-4 h-4" />
              Achados de Neuroimagem ({activeCase.imaging.modality})
            </span>
            <div className="flex items-center gap-2">
              <span className="bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono font-bold px-2 py-0.5 rounded">
                Índice de Evans = {activeCase.imaging.evansIndex}
              </span>
              {activeCase.imaging.callosalAngle && (
                <span className="bg-amber-950 text-amber-300 border border-amber-800 font-mono font-bold px-2 py-0.5 rounded">
                  Ângulo Caloso = {activeCase.imaging.callosalAngle}°
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-slate-400 font-medium block mb-1">Laudo Descritivo:</span>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                {activeCase.imaging.findings.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            {activeCase.imaging.specialSigns && (
              <div>
                <span className="text-slate-400 font-medium block mb-1">Sinais & Conclusões Tomográficas:</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeCase.imaging.specialSigns.map((s, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* DECISION QUESTION & OPTIONS */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Decisão Neurocirúrgica: Qual a melhor conduta terapêutica para este paciente?
          </h4>

          <div className="space-y-2.5">
            {activeCase.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              let optionStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';

              if (isSubmitted) {
                if (opt.isCorrect) {
                  optionStyle = 'bg-emerald-950/50 border-emerald-500 text-emerald-200';
                } else if (isSelected && !opt.isCorrect) {
                  optionStyle = 'bg-rose-950/50 border-rose-500 text-rose-200';
                }
              } else if (isSelected) {
                optionStyle = 'bg-cyan-950/50 border-cyan-400 text-white';
              }

              return (
                <div
                  key={opt.id}
                  onClick={() => !isSubmitted && setSelectedOptionId(opt.id)}
                  className={`p-3.5 rounded-xl border text-xs transition cursor-pointer flex items-start gap-3 ${optionStyle}`}
                >
                  <div className="mt-0.5">
                    {isSubmitted ? (
                      opt.isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : isSelected ? (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-slate-600" />
                      )
                    ) : (
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected ? 'border-cyan-400 bg-cyan-400' : 'border-slate-600'
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 space-y-1">
                    <span className="font-semibold block">{opt.label}</span>
                    {isSubmitted && (
                      <p className="text-[11px] text-slate-300 pt-1 border-t border-slate-800/60 leading-relaxed">
                        {opt.explanation}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submit Button */}
          {!isSubmitted && (
            <div className="pt-2 flex justify-end">
              <button
                disabled={!selectedOptionId}
                onClick={handleSubmitAnswer}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-slate-950 font-bold text-xs transition shadow-md shadow-cyan-500/20"
              >
                Confirmar Conduta Cirúrgica
              </button>
            </div>
          )}

          {/* Discussion Box upon Submission */}
          {isSubmitted && (
            <div className="bg-gradient-to-br from-cyan-950/40 via-slate-950 to-slate-950 p-5 rounded-xl border border-cyan-800/60 text-xs space-y-2 mt-4 animate-fadeIn">
              <span className="font-bold text-cyan-300 flex items-center gap-1.5 text-sm">
                <Award className="w-4 h-4 text-cyan-400" />
                Discussão Baseada em Evidências & Protocolo do HCN:
              </span>
              <p className="text-slate-300 leading-relaxed">
                {activeCase.discussion}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { REFERENCES_APA } from '../data/contentData';
import { 
  BookOpen, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText, 
  Download,
  Info
} from 'lucide-react';

export const ReferencesAndNotes: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handlePrintSummary = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 rounded-2xl border border-cyan-900/40 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-semibold mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          Módulo IX: Referências APA 7ª Edição & Síntese Neurocirúrgica
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Biblioteca de Referências Científicas & Glossário
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-3xl">
          Consulte as fontes bibliográficas primárias (NEJM, Child&apos;s Nervous System, Aging & Disease, Molecular Neurobiology) e a síntese rápida dos termos anatômicos e cirúrgicos.
        </p>
      </div>

      {/* AUTHOR & INSTITUTIONAL CARD */}
      <div className="bg-slate-900/90 p-5 rounded-2xl border border-cyan-800/40 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-cyan-950 border border-cyan-700/60 flex items-center justify-center text-cyan-300 font-bold text-base shadow-md">
            AM
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white">
                Abdoulaye Marega
              </h3>
              <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                Autor & Curador
              </span>
            </div>
            <p className="text-xs text-slate-300">
              Residente em Neurocirurgia – Hospital Central de Nampula (HCN), Moçambique
            </p>
          </div>
        </div>

        <div className="text-xs text-slate-400 border-t sm:border-t-0 sm:border-l border-slate-800 sm:pl-4 max-w-sm">
          Desenvolvido para fins de ensino e formação médica continuada, residência médica e suporte à decisão neurocirúrgica adaptada a Moçambique.
        </div>
      </div>

      {/* QUICK SUMMARY CHEAT SHEET */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            Síntese Rápida dos Valores & Fórmulas Essenciais
          </h3>
          <button
            onClick={handlePrintSummary}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-300 transition"
          >
            <Download className="w-3.5 h-3.5" /> Imprimir Resumo
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-cyan-300 block">Doutrina de Monro-Kellie</span>
            <p className="text-slate-400 font-mono text-[11px]">
              V_intracraniano = V_cérebro (80%) + V_sangue (10%) + V_LCR (10%) ≈ Constante
            </p>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-cyan-300 block">Cinética do LCR</span>
            <p className="text-slate-400 font-mono text-[11px]">
              Produção: ~500 mL/dia (~20 mL/h) | Volume: ~150 mL | Turnover: 3,3x/dia
            </p>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-cyan-300 block">Índice de Evans & Ângulo Caloso</span>
            <p className="text-slate-400 font-mono text-[11px]">
              EI = Largura Cornos Frontais / Largura Calvária (&gt;0,30 = Ventriculomegalia) | Ângulo &lt;90° (iNPH)
            </p>
          </div>
        </div>
      </div>

      {/* FULL BIBLIOGRAPHY LIST (APA 7th) */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          Referências Bibliográficas — APA 7.ª Edição
        </h3>

        <div className="space-y-3">
          {REFERENCES_APA.map((ref, idx) => (
            <div
              key={idx}
              className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-2 hover:border-slate-700 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-slate-200 leading-relaxed font-serif">
                  {ref.citation}
                </p>

                <button
                  onClick={() => copyToClipboard(ref.citation, idx)}
                  className="text-slate-500 hover:text-cyan-400 transition shrink-0 p-1"
                  title="Copiar referência APA"
                >
                  {copiedIndex === idx ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-900 gap-2">
                <span className="text-cyan-400/90">
                  <strong className="text-slate-400">Relevância:</strong> {ref.relevance}
                </span>

                <a
                  href={ref.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-400 hover:text-cyan-300 font-mono"
                >
                  <span>DOI</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GLOSSARY */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-4 text-xs">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-400" />
          Glossário Neurocirúrgico Rápido
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <strong className="text-cyan-300 block mb-0.5">Ponto de Kocher:</strong>
            <span className="text-slate-300">Ponto craniano a 1 cm anterior à sutura coronal e ~2,5 a 3 cm da linha média, rota padrão para canulação do corno frontal do ventrículo lateral.</span>
          </div>

          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <strong className="text-cyan-300 block mb-0.5">Membrana Pré-Mamilar:</strong>
            <span className="text-slate-300">Área avascular translúcida no assoalho do terceiro ventrículo, anterior aos corpos mamilares, alvo exato da perfuração durante a ETV.</span>
          </div>

          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <strong className="text-cyan-300 block mb-0.5">Tríade de Hakim-Adams:</strong>
            <span className="text-slate-300">Sintomatologia clássica da iNPH: apraxia da marcha, déficit cognitivo subcortical e incontinência urinária.</span>
          </div>

          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <strong className="text-cyan-300 block mb-0.5">Sinal do Sol Poente (Sunset Eyes):</strong>
            <span className="text-slate-300">Desvio tônico dos globos oculares para baixo com exposição da esclera superior em lactentes, sinal de hipertensão tectal mesencefálica.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

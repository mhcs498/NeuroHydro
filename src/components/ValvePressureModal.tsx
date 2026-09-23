import React, { useState } from 'react';
import { 
  Gauge, 
  X, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  Scale, 
  ShieldCheck, 
  ArrowRight,
  Sliders
} from 'lucide-react';

interface ValvePressureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PressureLevel {
  level: string;
  mmH2O: string;
  cmH2O: string;
  approxMmHg: string;
  colorClass: string;
  badgeClass: string;
  clinicalProfile: string;
  mainIndications: string[];
  risksAndPrecautions: string;
  hcnRecommendation: string;
}

export const VALVE_PRESSURE_DATA: PressureLevel[] = [
  {
    level: 'Baixa',
    mmH2O: '50–80',
    cmH2O: '5–8',
    approxMmHg: '3,7–5,9 mmHg',
    colorClass: 'text-sky-400',
    badgeClass: 'bg-sky-950 text-sky-300 border-sky-800',
    clinicalProfile: 'Drenagem precoce com menor limiar de abertura valvular.',
    mainIndications: [
      'Hidrocefalia de Pressão Normal (iNPH) selecionada após boa resposta ao Tap Test;',
      'Hidrocefalia crônica com complacência cerebral muito reduzida;',
      'Pacientes que não respondem satisfatoriamente à drenagem com válvulas de pressão média (subdrenagem persistente).'
    ],
    risksAndPrecautions: 'Elevado risco de hiperdrenagem postural (ortostática), cefaleia de baixa pressão, colapso ventricular excessivo e formação de higromas ou hematomas subdurais (especialmente em idosos com atrofia cortical associada). Recomenda-se associação com dispositivo anti-sifão.',
    hcnRecommendation: 'Usar com extrema cautela no HCN se a válvula for de pressão fixa, devido à impossibilidade de reajuste não-invasivo em caso de hematoma subdural.'
  },
  {
    level: 'Moderada',
    mmH2O: '100–150',
    cmH2O: '10–15',
    approxMmHg: '7,4–11,0 mmHg',
    colorClass: 'text-emerald-400',
    badgeClass: 'bg-emerald-950 text-emerald-300 border-emerald-800',
    clinicalProfile: 'Faixa de pressão fisiológica habitual — Válvula de Primeira Linha.',
    mainIndications: [
      'Padrão-ouro inicial para a grande maioria dos lactentes e crianças com hidrocefalia pós-infecciosa (HPI) ou congênita;',
      'Adultos com hidrocefalia comunicante ou obstrutiva subaguda/crônica;',
      'Válvula de escolha em centros onde válvulas programáveis não estão disponíveis rotineiramente.'
    ],
    risksAndPrecautions: 'Excelente balanço de segurança entre o controle da hipertensão intracraniana e a prevenção de hiperdrenagem precoce.',
    hcnRecommendation: 'Válvula padrão mais utilizada e recomendada no Hospital Central de Nampula para shunts definitivos em crianças e adultos.'
  },
  {
    level: 'Alta',
    mmH2O: '180–200',
    cmH2O: '18–20',
    approxMmHg: '13,2–14,7 mmHg',
    colorClass: 'text-amber-400',
    badgeClass: 'bg-amber-950 text-amber-300 border-amber-800',
    clinicalProfile: 'Maior resistência à abertura para evitar descompressão excessiva.',
    mainIndications: [
      'Pacientes com histórico prévio de hiperdrenagem ou hematoma subdural após implante de válvula média/baixa;',
      'Ventrículos em fenda (Slit-Ventricle Syndrome);',
      'Craniossinostoses sindrômicas ou pacientes com fístulas liquóricas prévias.'
    ],
    risksAndPrecautions: 'Risco de subdrenagem se a pressão liquórica do paciente for limítrofe, podendo manter sintomas de hipertensão intracraniana crônica ou ventriculomegalia residual sintomática.',
    hcnRecommendation: 'Reservada para revisões cirúrgicas de pacientes que complicaram previamente com coleções subdurais por hiperdrenagem.'
  },
  {
    level: 'Muito alta',
    mmH2O: '250',
    cmH2O: '25',
    approxMmHg: '18,4 mmHg',
    colorClass: 'text-rose-400',
    badgeClass: 'bg-rose-950 text-rose-300 border-rose-800',
    clinicalProfile: 'Resistência máxima de abertura.',
    mainIndications: [
      'Casos altamente selecionados com hipotensão intracraniana postural extrema;',
      'Tentativa de "desmame" ou redução drástica de fluxo em pacientes dependentes de shunt com hiperexpansão cortical;',
      'Situações especiais em válvulas programáveis após tratamento cirúrgico de volumoso hematoma subdural secundário.'
    ],
    risksAndPrecautions: 'Elevadíssimo risco de ineficácia da derivação e recidiva dos sintomas de hipertensão intracraniana se a causa obstrutiva/comunicante ainda exigir drenagem ativa contínua.',
    hcnRecommendation: 'Praticamente exclusiva de válvulas com regulação magnética externa (programáveis).'
  }
];

export const ValvePressureModal: React.FC<ValvePressureModalProps> = ({ isOpen, onClose }) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('Moderada');

  if (!isOpen) return null;

  const currentLevelData = VALVE_PRESSURE_DATA.find((item) => item.level === selectedLevel) || VALVE_PRESSURE_DATA[1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-slate-900 border border-cyan-800/60 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-700/60 flex items-center justify-center text-cyan-400 shadow-md">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Tabela de Calibração e Pressões das Válvulas de Shunts
                </h3>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-semibold">
                  Guia Neurocirúrgico
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Parâmetros manométricos de abertura em mmH₂O, cmH₂O e correlação clínica
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-xs text-slate-300">
          {/* Main User Requested Table */}
          <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden shadow-inner">
            <div className="p-3 border-b border-slate-800 bg-slate-900/60 flex items-center justify-between">
              <span className="font-bold text-slate-200 text-xs flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-cyan-400" />
                Tabela Manométrica Oficial de Calibração
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                1 cmH₂O = 10 mmH₂O ≈ 0,735 mmHg
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/80 font-mono text-[11px]">
                    <th className="py-2.5 px-4 text-right">Pressão</th>
                    <th className="py-2.5 px-4 text-right">mmH₂O</th>
                    <th className="py-2.5 px-4 text-right">cmH₂O</th>
                    <th className="py-2.5 px-4 text-right">≈ mmHg</th>
                    <th className="py-2.5 px-4 text-left">Ação & Seleção</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70 font-mono">
                  {VALVE_PRESSURE_DATA.map((row) => {
                    const isSelected = selectedLevel === row.level;
                    return (
                      <tr 
                        key={row.level}
                        onClick={() => setSelectedLevel(row.level)}
                        className={`cursor-pointer transition ${
                          isSelected ? 'bg-cyan-950/40 text-cyan-200 font-bold' : 'hover:bg-slate-900/60 text-slate-300'
                        }`}
                      >
                        <td className={`py-3 px-4 text-right font-sans font-bold ${row.colorClass}`}>
                          {row.level}
                        </td>
                        <td className="py-3 px-4 text-right font-extrabold text-white">
                          {row.mmH2O}
                        </td>
                        <td className="py-3 px-4 text-right font-extrabold text-cyan-300">
                          {row.cmH2O}
                        </td>
                        <td className="py-3 px-4 text-right text-slate-400">
                          {row.approxMmHg}
                        </td>
                        <td className="py-3 px-4 text-left font-sans">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedLevel(row.level);
                            }}
                            className={`px-2.5 py-1 rounded text-[11px] font-bold transition flex items-center gap-1 ${
                              isSelected
                                ? 'bg-cyan-500 text-slate-950 shadow-md'
                                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-700'
                            }`}
                          >
                            <span>Detalhes</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive Card with Clinical Insights for Selected Pressure */}
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
              <div className="flex items-center gap-2.5">
                <span className={`text-base font-black ${currentLevelData.colorClass}`}>
                  Válvula de Pressão: {currentLevelData.level}
                </span>
                <span className={`px-2.5 py-0.5 rounded font-mono font-bold text-xs border ${currentLevelData.badgeClass}`}>
                  {currentLevelData.mmH2O} mmH₂O ({currentLevelData.cmH2O} cmH₂O)
                </span>
              </div>
              <span className="text-slate-400 font-mono text-[11px]">
                Equivalente aproximado: {currentLevelData.approxMmHg}
              </span>
            </div>

            <p className="text-slate-200 text-xs font-semibold leading-relaxed">
              {currentLevelData.clinicalProfile}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Indications */}
              <div className="bg-slate-900/70 p-3.5 rounded-lg border border-slate-800 space-y-2">
                <span className="font-bold text-cyan-300 flex items-center gap-1.5 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Principais Indicações Clínicas:
                </span>
                <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                  {currentLevelData.mainIndications.map((ind, i) => (
                    <li key={i} className="leading-relaxed">{ind}</li>
                  ))}
                </ul>
              </div>

              {/* Risks & Precautions */}
              <div className="bg-slate-900/70 p-3.5 rounded-lg border border-slate-800 space-y-2">
                <span className="font-bold text-amber-400 flex items-center gap-1.5 text-xs">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  Riscos e Precauções:
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {currentLevelData.risksAndPrecautions}
                </p>
              </div>
            </div>

            {/* HCN & Developing World Context */}
            <div className="bg-cyan-950/30 p-3.5 rounded-lg border border-cyan-800/40 text-xs space-y-1">
              <span className="font-bold text-cyan-300 flex items-center gap-1.5 text-[11px]">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Conduta no Hospital Central de Nampula (HCN):
              </span>
              <p className="text-slate-300 leading-relaxed">
                {currentLevelData.hcnRecommendation}
              </p>
            </div>
          </div>

          {/* Theoretical Note: Fixed vs Programmable Valves */}
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-xs space-y-2 text-slate-400">
            <span className="font-bold text-slate-200 flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-cyan-400" />
              Nota Técnica: Válvulas de Pressão Fixa vs. Válvulas Programáveis (Ajustáveis)
            </span>
            <p className="leading-relaxed">
              Enquanto as <strong>válvulas de pressão fixa</strong> exigem uma nova intervenção cirúrgica para troca mecânica caso o paciente evolua com hiperdrenagem (hematoma subdural) ou subdrenagem, as <strong>válvulas programáveis</strong> permitem a calibração transcutânea da pressão de abertura no consultório por meio de um programador magnético não-invasivo. A adição de um mecanismo gravitacional / anti-sifão é fundamental para compensar o aumento do gradiente de pressão hidrostática quando o paciente passa da posição decúbito dorsal para a posição ortostática.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 border-t border-slate-800 bg-slate-950/70 flex items-center justify-between text-xs">
          <span className="text-slate-400 font-mono text-[11px]">
            NeuroHydro • Hospital Central de Nampula
          </span>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition shadow-md shadow-cyan-500/20"
          >
            Fechar Janela
          </button>
        </div>
      </div>
    </div>
  );
};

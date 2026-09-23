import React, { useState } from 'react';
import { 
  Activity, 
  Layers, 
  HelpCircle, 
  RefreshCw,
  Zap,
  Clock,
  HeartPulse
} from 'lucide-react';

export const MonroKellieSim: React.FC = () => {
  // Volume slider representing additional ventricular CSF expansion in mL (0 to 120 mL)
  const [csfExcess, setCsfExcess] = useState<number>(35);
  // Custom absorption deficit percentage slider for quantitative calculator
  const [absorptionDeficitPercent, setAbsorptionDeficitPercent] = useState<number>(15);

  // Normal cranial compartment percentages (Total ~1500 mL in adult)
  // Brain tissue ~ 80% (1200 mL), Blood ~ 10% (150 mL), Baseline CSF ~ 10% (150 mL)
  const brainBase = 80; // %
  const bloodBase = 10; // %
  const csfBase = 10; // %

  // Monro-Kellie compensation calculation
  // Up to ~30mL excess: blood is squeezed out (mostly venous), CSF displaced to spinal theca
  let compensatedBlood = bloodBase;
  let compensatedSpinalCsf = csfBase;
  let currentIcp = 10; // baseline normal mmHg

  if (csfExcess <= 30) {
    // Stage 1: Compensated phase
    compensatedBlood = Math.max(5, bloodBase - (csfExcess * 0.12));
    currentIcp = Math.round(10 + (csfExcess * 0.15));
  } else if (csfExcess <= 60) {
    // Stage 2: Impending decompensation
    compensatedBlood = Math.max(3, bloodBase - 3.6 - (csfExcess - 30) * 0.1);
    currentIcp = Math.round(14.5 + Math.pow((csfExcess - 30), 1.25));
  } else {
    // Stage 3: Frank severe intracranial hypertension
    compensatedBlood = 2; // minimum venous reserve
    currentIcp = Math.round(25 + Math.pow((csfExcess - 55), 1.6));
  }

  // Cap ICP display at 65 mmHg
  const displayIcp = Math.min(65, currentIcp);

  // Status classification
  let phaseStatus = {
    title: 'Fase 1: Compensação Volumétrica Adequada',
    color: 'emerald',
    badge: 'PIC Normal (Complacência Alta)',
    description: 'O crânio rígido acomoda a expansão ventricular drenando sangue venoso através dos seios durais e deslocando LCR para o espaço subaracnoideo espinhal (bolsa dural lombar). PIC permanece em faixa segura.'
  };

  if (displayIcp > 20 && displayIcp <= 30) {
    phaseStatus = {
      title: 'Fase 2: Esgotamento da Complacência (Ponto de Inflexão)',
      color: 'amber',
      badge: 'PIC Limítrofe / Elevada (Complacência Baixa)',
      description: 'As reservas venosas e espinhais foram consumidas. Qualquer aumento milimétrico adicional no volume causará elevação desproporcional da pressão intracraniana.'
    };
  } else if (displayIcp > 30) {
    phaseStatus = {
      title: 'Fase 3: Hipertensão Intracraniana Descompensada Grave',
      color: 'rose',
      badge: 'Emergência Neurocirúrgica Imediata',
      description: 'Pressão de perfusão cerebral (PPC = PAM - PIC) em colapso. Risco iminente de isquemia global, herniação cerebral (uncal ou amigdalar) e Tríade de Cushing (hipertensão arterial reflexa, bradicardia e respiração irregular).'
    };
  }

  // Quantitative absorption deficit calculation
  const dailyProduction = 500; // mL
  const normalHourlyAbsorption = 20.8; // mL/h
  const effectiveAbsorptionRate = normalHourlyAbsorption * (1 - absorptionDeficitPercent / 100);
  const hourlyAccumulation = (normalHourlyAbsorption - effectiveAbsorptionRate);
  const dailyAccumulation = Math.round(hourlyAccumulation * 24);
  const weeklyAccumulation = Math.round(dailyAccumulation * 7);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 rounded-2xl border border-cyan-900/40 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-semibold mb-2">
          <Activity className="w-3.5 h-3.5" />
          Módulo II: Dinâmica do LCR, Complacência e Fisiopatologia
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Doutrina de Monro-Kellie & Hidrodinâmica
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-3xl">
          Simule as forças físicas dentro do compartimento craniano inextensível: relação volume-pressão, ponto de inflexão de elastância e o modelo moderno de absorção glinfática e meníngea.
        </p>
      </div>

      {/* MONRO-KELLIE SIMULATOR & ICP CURVE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Simulator Controls & Compartment Stack (6 Cols) */}
        <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-5 shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                Doutrina de Monro-Kellie: Compartimento Fechado
              </h3>
              <p className="text-xs font-mono text-cyan-400/90 mt-0.5">
                V_intracraniano = V_cérebro + V_sangue + V_LCR ≈ Constante
              </p>
            </div>
            <button
              onClick={() => setCsfExcess(0)}
              className="text-xs flex items-center gap-1 text-slate-400 hover:text-cyan-300 transition"
              title="Resetar para normal"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>

          {/* Slider for Ventricular Expansion */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-200">
                Expansão Ventricular / Retenção Liquórica:
              </span>
              <span className="font-mono text-cyan-300 font-bold bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                +{csfExcess} mL
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={csfExcess}
              onChange={(e) => setCsfExcess(Number(e.target.value))}
              className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0 mL (Euvolemia)</span>
              <span>30 mL (Fim da Reserva)</span>
              <span>60 mL (Descompensação)</span>
              <span>100 mL (Herniação)</span>
            </div>
          </div>

          {/* Cranial Container Visual Representation */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-300 block">
              Distribuição Volumétrica no Crânio Rígido:
            </span>
            <div className="w-full h-12 rounded-xl bg-slate-950 border border-slate-800 p-1.5 flex gap-1 overflow-hidden shadow-inner">
              {/* Brain Tissue (80%) */}
              <div 
                style={{ width: `${brainBase}%` }} 
                className="bg-slate-700/80 rounded flex items-center justify-center text-[11px] font-bold text-slate-200 overflow-hidden text-ellipsis whitespace-nowrap px-1 transition-all"
              >
                Parênquima Cerebral (1200 mL)
              </div>
              {/* Blood (Venous/Arterial) */}
              <div 
                style={{ width: `${Math.max(2, compensatedBlood)}%` }} 
                className="bg-rose-600/90 rounded flex items-center justify-center text-[10px] font-bold text-white overflow-hidden text-ellipsis whitespace-nowrap px-1 transition-all"
              >
                Sangue
              </div>
              {/* CSF (Expanding) */}
              <div 
                style={{ width: `${csfBase + (csfExcess * 0.15)}%` }} 
                className="bg-cyan-500 rounded flex items-center justify-center text-[10px] font-bold text-slate-950 overflow-hidden text-ellipsis whitespace-nowrap px-1 transition-all"
              >
                LCR ({150 + csfExcess} mL)
              </div>
            </div>
          </div>

          {/* Dynamic ICP Meter Gauge */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block font-medium">Pressão Intracraniana (PIC) Estimada:</span>
              <div className="flex items-baseline justify-center gap-1 mt-1">
                <span className={`text-3xl font-extrabold font-mono ${
                  displayIcp <= 15 ? 'text-emerald-400' : displayIcp <= 25 ? 'text-amber-400' : 'text-rose-500'
                }`}>
                  {displayIcp}
                </span>
                <span className="text-xs text-slate-400">mmHg</span>
              </div>
              <span className="text-[10px] text-slate-500">Normal adulto: 7 - 15 mmHg</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block font-medium">Complacência Intracraniana (ΔV/ΔP):</span>
              <div className="flex items-baseline justify-center gap-1 mt-1">
                <span className={`text-xl font-extrabold font-mono ${
                  csfExcess < 25 ? 'text-emerald-400' : csfExcess < 55 ? 'text-amber-400' : 'text-rose-500'
                }`}>
                  {csfExcess < 25 ? 'Alta' : csfExcess < 55 ? 'Reduzida' : 'Crítica (~0)'}
                </span>
              </div>
              <span className="text-[10px] text-slate-500">Capacidade de amortecimento</span>
            </div>
          </div>

          {/* Status Message */}
          <div className={`p-4 rounded-xl border text-xs space-y-1.5 ${
            phaseStatus.color === 'emerald'
              ? 'bg-emerald-950/30 border-emerald-800/50 text-emerald-200'
              : phaseStatus.color === 'amber'
              ? 'bg-amber-950/30 border-amber-800/50 text-amber-200'
              : 'bg-rose-950/30 border-rose-800/50 text-rose-200'
          }`}>
            <div className="flex items-center justify-between font-bold">
              <span>{phaseStatus.title}</span>
              <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-slate-950/80 font-mono">
                {phaseStatus.badge}
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {phaseStatus.description}
            </p>
          </div>
        </div>

        {/* Dynamic Curve Volume-Pressure (Langfitt curve) (6 Cols) */}
        <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4 shadow-lg flex flex-col justify-between">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              Curva de Volume-Pressão Intracraniana (Langfitt)
            </h3>
            <p className="text-xs text-slate-400">
              O ponto pulsante indica a posição fisiopatológica em tempo real do paciente
            </p>
          </div>

          {/* SVG Graph */}
          <div className="w-full aspect-[16/10] bg-slate-950 rounded-xl p-3 relative border border-slate-800/80">
            <svg viewBox="0 0 400 240" className="w-full h-full">
              {/* Grid lines */}
              <line x1="50" y1="20" x2="50" y2="200" stroke="#334155" strokeWidth="1.5" />
              <line x1="50" y1="200" x2="380" y2="200" stroke="#334155" strokeWidth="1.5" />

              {/* Threshold line: ICP 20 mmHg */}
              <line x1="50" y1="120" x2="380" y2="120" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
              <text x="55" y="115" fill="#f59e0b" fontSize="9" fontWeight="bold">Limite de HIC: 20 mmHg</text>

              {/* Critical threshold: ICP 40 mmHg */}
              <line x1="50" y1="60" x2="380" y2="60" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
              <text x="55" y="55" fill="#ef4444" fontSize="9" fontWeight="bold">Risco de Herniação: 40 mmHg</text>

              {/* Axis labels */}
              <text x="18" y="30" fill="#94a3b8" fontSize="10" fontWeight="bold">PIC (mmHg)</text>
              <text x="310" y="225" fill="#94a3b8" fontSize="10" fontWeight="bold">Volume Adicional (mL)</text>

              {/* Y Axis ticks */}
              <text x="30" y="195" fill="#64748b" fontSize="9">10</text>
              <text x="30" y="125" fill="#64748b" fontSize="9">20</text>
              <text x="30" y="65" fill="#64748b" fontSize="9">40</text>
              <text x="30" y="25" fill="#64748b" fontSize="9">60</text>

              {/* The Classic Exponential Elastance Curve */}
              {/* (50, 190) -> (170, 180) -> (250, 130) -> (320, 30) */}
              <path
                d="M 50 190 C 130 190, 190 185, 230 155 C 270 125, 300 75, 340 25"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Current operating point calculated based on csfExcess */}
              {/* x ranges from 50 (at 0mL) to 340 (at 100mL) */}
              {(() => {
                const ptX = 50 + (csfExcess / 100) * 290;
                // calculate ptY along the curve
                let ptY = 190;
                if (csfExcess <= 30) {
                  ptY = 190 - (csfExcess / 30) * 10;
                } else if (csfExcess <= 60) {
                  ptY = 180 - Math.pow((csfExcess - 30) / 30, 1.25) * 55;
                } else {
                  ptY = 125 - Math.pow((csfExcess - 60) / 40, 1.4) * 100;
                }
                ptY = Math.max(25, ptY);

                return (
                  <g>
                    {/* Pulsing ring */}
                    <circle cx={ptX} cy={ptY} r="10" fill="none" stroke="#22d3ee" strokeWidth="2" className="animate-ping" opacity="0.6" />
                    {/* Core Point */}
                    <circle cx={ptX} cy={ptY} r="6" fill={displayIcp <= 15 ? "#10b981" : displayIcp <= 25 ? "#f59e0b" : "#ef4444"} stroke="#ffffff" strokeWidth="2" />
                    <text x={ptX + 10} y={ptY - 8} fill="#ffffff" fontSize="10" fontWeight="bold" className="bg-slate-900">
                      {displayIcp} mmHg
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

          {/* Clinical correlation callout */}
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-300">
            <span className="font-bold text-cyan-400 block mb-1">Por que a descompensação é tão súbita?</span>
            <p className="leading-relaxed">
              Enquanto houver sangue venoso para espremer para fora do crânio, a PIC se mantém quase normal. No momento em que o volume de reserva se esgota, a complacência cai a zero e <strong>apenas 2 a 3 mL adicionais de LCR disparam a PIC para &gt; 40 mmHg</strong>, precipitando herniação.
            </p>
          </div>
        </div>
      </div>

      {/* QUANTITATIVE CSF TURNOVER & ABSORPTION CALCULATOR */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-semibold mb-1">
            <Clock className="w-3.5 h-3.5" />
            Cálculo Quantitativo do LCR
          </div>
          <h3 className="text-xl font-bold text-white">
            Produção, Circulação e a Matemática do Turnover Diário
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Como alterações milimétricas na absorção contínua geram dilatações ventriculares devastadoras.
          </p>
        </div>

        {/* 4 Quantitative Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
            <span className="text-xs text-slate-400">Volume Total no Adulto</span>
            <div className="text-2xl font-black font-mono text-cyan-400 my-1">~150 mL</div>
            <span className="text-[10px] text-slate-500">~25 mL ventricular + ~125 mL subaracnoideo</span>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
            <span className="text-xs text-slate-400">Produção Diária Contínua</span>
            <div className="text-2xl font-black font-mono text-cyan-400 my-1">~500 mL/dia</div>
            <span className="text-[10px] text-slate-500">~20,8 mL/hora (0,33 a 0,35 mL/minuto)</span>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
            <span className="text-xs text-slate-400">Taxa de Renovação (Turnover)</span>
            <div className="text-2xl font-black font-mono text-emerald-400 my-1">3,3 vezes/dia</div>
            <span className="text-[10px] text-slate-500">Todo o LCR é trocado a cada ~7 a 8 horas</span>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
            <span className="text-xs text-slate-400">Pressão de Abertura (PL)</span>
            <div className="text-2xl font-black font-mono text-sky-400 my-1">10 - 20 cmH₂O</div>
            <span className="text-[10px] text-slate-500">Em decúbito lateral (~7 - 15 mmHg)</span>
          </div>
        </div>

        {/* Interactive Accumulation Calculator */}
        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-rose-400" />
                Simulador de Acúmulo por Déficit de Reabsorção
              </h4>
              <p className="text-xs text-slate-400">
                Se as granulações aracnoideas ou vasos linfáticos perderem sua eficácia (ex: após meningite ou HSA):
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400">Déficit de Absorção:</span>
              <span className="font-mono text-rose-400 font-bold bg-rose-950 px-2 py-0.5 rounded border border-rose-800">
                {absorptionDeficitPercent}%
              </span>
            </div>
          </div>

          <input
            type="range"
            min="5"
            max="80"
            value={absorptionDeficitPercent}
            onChange={(e) => setAbsorptionDeficitPercent(Number(e.target.value))}
            className="w-full accent-rose-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-center">
            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Retenção em 1 Hora</span>
              <span className="text-lg font-bold font-mono text-rose-400">+{hourlyAccumulation.toFixed(1)} mL/h</span>
            </div>
            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Retenção em 24 Horas</span>
              <span className="text-lg font-bold font-mono text-rose-400">+{dailyAccumulation} mL/dia</span>
            </div>
            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Excesso em 7 Dias (Sem Shunt)</span>
              <span className="text-lg font-bold font-mono text-rose-400">+{weeklyAccumulation} mL</span>
            </div>
          </div>
        </div>

        {/* CONTEMPORARY ABSORPTION MODEL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-amber-400 block">1. O Modelo Tradicional (Parcialmente Incompleto):</span>
            <p className="text-slate-300 leading-relaxed">
              O modelo clássico de Cushing e Weed postulava que 100% da absorção ocorria passivamente através das <em>granulações aracnóideas de Pacchioni</em> diretamente para o seio sagital superior em função de um gradiente hidrostático.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-cyan-400 block">2. O Paradigma Contemporâneo Multivias (Liu et al., 2024):</span>
            <p className="text-slate-300 leading-relaxed">
              Hoje sabe-se que a drenagem envolve ativamente:
              <br />• <strong>Vasos linfáticos meníngeos</strong> ao longo dos seios durais e nervos cranianos (I par/lâmina cribriforme até linfonodos cervicais profundos).
              <br />• <strong>Sistema Glinfático:</strong> fluxo convectivo intersticial perivascular mediado por canais de Aquaporina-4 (AQP4) nos pés astrocitários.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

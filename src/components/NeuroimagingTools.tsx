import React, { useState } from 'react';
import { 
  Scan, 
  Ruler, 
  Compass, 
  CheckSquare, 
  HelpCircle, 
  AlertTriangle, 
  ChevronRight,
  TrendingUp
} from 'lucide-react';

export const NeuroimagingTools: React.FC = () => {
  // Evans Index State (in mm)
  const [frontalHornWidth, setFrontalHornWidth] = useState<number>(44);
  const [internalSkullWidth, setInternalSkullWidth] = useState<number>(120);

  // Callosal Angle State (in degrees)
  const [callosalAngle, setCallosalAngle] = useState<number>(75);

  // DESH Criteria State
  const [deshSylvianFissures, setDeshSylvianFissures] = useState<boolean>(true);
  const [deshTightConvexity, setDeshTightConvexity] = useState<boolean>(true);
  const [deshVentriculomegaly, setDeshVentriculomegaly] = useState<boolean>(true);
  const [deshFocalSulcalDilation, setDeshFocalSulcalDilation] = useState<boolean>(false);

  // Tap Test (TUG) State in seconds
  const [preTugSeconds, setPreTugSeconds] = useState<number>(25);
  const [postTugSeconds, setPostTugSeconds] = useState<number>(17);

  // Evans Calculation
  const evansIndex = Number((frontalHornWidth / internalSkullWidth).toFixed(2));
  const isVentriculomegaly = evansIndex > 0.30;

  // TUG Calculation
  const tugImprovementPercent = Math.round(((preTugSeconds - postTugSeconds) / preTugSeconds) * 100);
  const isTapTestPositive = tugImprovementPercent >= 20 || (preTugSeconds - postTugSeconds) >= 5;

  // DESH Score
  const deshScore = (deshSylvianFissures ? 1 : 0) + (deshTightConvexity ? 1 : 0) + (deshVentriculomegaly ? 1 : 0);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 rounded-2xl border border-cyan-900/40 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-semibold mb-2">
          <Scan className="w-3.5 h-3.5" />
          Módulo IV: Neuroimagem Quantitativa, Índices e Testes Funcionais
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Diagnóstico por Imagem: Evans, Ângulo Caloso & DESH
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-3xl">
          Utilize réguas radiológicas interativas para medir o Índice de Evans, calcular o ângulo caloso, auditar o padrão DESH (Diretrizes Japonesas 2021) e simular a resposta motora ao Tap Test.
        </p>
      </div>

      {/* TOOL 1: INTERACTIVE EVANS INDEX CALCULATOR WITH VISUAL AXIAL CT */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Ruler className="w-5 h-5 text-cyan-400" />
              Calculadora Dinâmica do Índice de Evans (EI)
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              EI = (Maior diâmetro dos cornos frontais) / (Maior diâmetro interno da calvária)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
              isVentriculomegaly 
                ? 'bg-amber-950/80 text-amber-300 border-amber-800' 
                : 'bg-emerald-950/80 text-emerald-300 border-emerald-800'
            }`}>
              EI = {evansIndex.toFixed(2)} ({isVentriculomegaly ? 'Ventriculomegalia > 0,30' : 'Dentro dos limites normais'})
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Visual SVG Axial CT Representation */}
          <div className="lg:col-span-6 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center">
            <div className="w-full flex justify-between text-[11px] text-slate-400 font-mono mb-2">
              <span>Corte Axial Tomográfico (Nível de Forames de Monro)</span>
              <span className="text-cyan-400">Régua Calibrada</span>
            </div>

            <svg viewBox="0 0 320 320" className="w-full max-w-[280px] aspect-square">
              {/* Outer skull (Bone is white/bright) */}
              <ellipse cx="160" cy="160" rx="135" ry="145" fill="#1e293b" stroke="#f8fafc" strokeWidth="6" />
              {/* Brain parenchyma */}
              <ellipse cx="160" cy="160" rx="125" ry="135" fill="#0f172a" />

              {/* Internal skull diameter measurement line (B) */}
              {(() => {
                const skullHalf = (internalSkullWidth / 150) * 125;
                const x1 = 160 - skullHalf;
                const x2 = 160 + skullHalf;
                return (
                  <g>
                    <line x1={x1} y1="160" x2={x2} y2="160" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx={x1} cy="160" r="3" fill="#38bdf8" />
                    <circle cx={x2} cy="160" r="3" fill="#38bdf8" />
                    <text x="160" y="175" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">
                      B: {internalSkullWidth} mm
                    </text>
                  </g>
                );
              })()}

              {/* Frontal Horns of Lateral Ventricles */}
              {(() => {
                const hornHalf = (frontalHornWidth / 80) * 55;
                // Left horn
                const pathL = `M 155 100 C ${160 - hornHalf} 110 ${160 - hornHalf} 145 155 155 Z`;
                // Right horn
                const pathR = `M 165 100 C ${160 + hornHalf} 110 ${160 + hornHalf} 145 165 155 Z`;

                return (
                  <g>
                    {/* Left & Right Frontal Horns filled with CSF (dark on CT) */}
                    <path d={pathL} fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
                    <path d={pathR} fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />

                    {/* Measurement Line A across widest tips of frontal horns */}
                    <line x1={160 - hornHalf} y1="130" x2={160 + hornHalf} y2="130" stroke="#f43f5e" strokeWidth="2" />
                    <circle cx={160 - hornHalf} cy="130" r="3" fill="#f43f5e" />
                    <circle cx={160 + hornHalf} cy="130" r="3" fill="#f43f5e" />
                    <text x="160" y="125" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">
                      A: {frontalHornWidth} mm
                    </text>
                  </g>
                );
              })()}

              {/* 3rd ventricle slice in middle */}
              <ellipse cx="160" cy="180" rx="4" ry="12" fill="#0284c7" />
              {/* Occipital horns */}
              <path d="M 135 210 C 130 235 140 250 145 250 C 145 235 140 215 135 210 Z" fill="#0284c7" />
              <path d="M 185 210 C 190 235 180 250 175 250 C 175 235 180 215 185 210 Z" fill="#0284c7" />
            </svg>
          </div>

          {/* Interactive Controls & Pedagogical Caution */}
          <div className="lg:col-span-6 space-y-4 text-xs">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span className="text-rose-400">A: Maior Largura dos Cornos Frontais:</span>
                  <span className="font-mono text-white">{frontalHornWidth} mm</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="70"
                  value={frontalHornWidth}
                  onChange={(e) => setFrontalHornWidth(Number(e.target.value))}
                  className="w-full accent-rose-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span className="text-cyan-400">B: Maior Diâmetro Interno da Calvária:</span>
                  <span className="font-mono text-white">{internalSkullWidth} mm</span>
                </div>
                <input
                  type="range"
                  min="90"
                  max="150"
                  value={internalSkullWidth}
                  onChange={(e) => setInternalSkullWidth(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Crucial Pedagogical Pearl */}
            <div className="bg-amber-950/30 p-3.5 rounded-xl border border-amber-800/50 space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <AlertTriangle className="w-4 h-4" />
                Aviso Clínico Fundamental: EI &gt; 0,30 ≠ Diagnóstico Isolado!
              </div>
              <p className="text-slate-300 leading-relaxed">
                Um Índice de Evans superior a 0,30 apenas confirma a existência de <strong>ventriculomegalia</strong>. Ele <em>não diferencia hidrocefalia ativa de dilatação ventricular compensatória por atrofia cerebral difusa (ventriculomegalia ex-vacuo)</em>. Nunca indique cirurgia baseando-se exclusivamente no Índice de Evans sem correlacionar a clínica, o ângulo caloso e o padrão dos sulcos!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TOOL 2: CALLOSAL ANGLE & DESH PATTERN (2 COLUMNS) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Callosal Angle Calculator */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4 shadow-lg">
          <div className="border-b border-slate-800 pb-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              Ângulo Caloso (Corte Coronal na Comissura Posterior)
            </h3>
            <p className="text-xs text-slate-400">
              Crucial na diferenciação entre iNPH (ângulo agudo) e Doença de Alzheimer / Atrofia senil (ângulo obtuso).
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center">
            {/* Visual Angle representation */}
            <svg viewBox="0 0 240 140" className="w-full max-w-[220px]">
              {/* Vertex at (120, 30) */}
              {(() => {
                const rad = (callosalAngle / 2) * (Math.PI / 180);
                const len = 90;
                const xL = 120 - len * Math.sin(rad);
                const yL = 30 + len * Math.cos(rad);
                const xR = 120 + len * Math.sin(rad);
                const yR = 30 + len * Math.cos(rad);

                return (
                  <g>
                    {/* Angle lines representing the roof of lateral ventricles / corpus callosum */}
                    <line x1="120" y1="30" x2={xL} y2={yL} stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="120" y1="30" x2={xR} y2={yR} stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="120" cy="30" r="4" fill="#ffffff" />
                    {/* Arc */}
                    <path
                      d={`M ${120 - 30 * Math.sin(rad)} ${30 + 30 * Math.cos(rad)} A 30 30 0 0 0 ${120 + 30 * Math.sin(rad)} ${30 + 30 * Math.cos(rad)}`}
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2"
                    />
                    <text x="120" y="75" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">
                      {callosalAngle}°
                    </text>
                  </g>
                );
              })()}
            </svg>

            <div className="w-full mt-3">
              <input
                type="range"
                min="50"
                max="130"
                value={callosalAngle}
                onChange={(e) => setCallosalAngle(Number(e.target.value))}
                className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>50° (Muito Agudo)</span>
                <span>90° (Ponto de Corte)</span>
                <span>130° (Muito Obtuso)</span>
              </div>
            </div>
          </div>

          <div className={`p-3 rounded-xl border text-xs ${
            callosalAngle < 90
              ? 'bg-cyan-950/40 border-cyan-800/60 text-cyan-200'
              : 'bg-slate-950 border-slate-800 text-slate-300'
          }`}>
            <span className="font-bold block mb-1">
              Interpretação para {callosalAngle}°:
            </span>
            {callosalAngle < 90 ? (
              <p>
                <strong>Ângulo Caloso Agudo (&lt; 90°):</strong> Altamente característico de <strong>iNPH</strong>. Ocorre porque a expansão ventricular empurra o corpo caloso verticalmente contra a foice cerebral.
              </p>
            ) : (
              <p>
                <strong>Ângulo Caloso Obtuso (100° - 120°):</strong> Mais característico de <strong>Atrofia Cerebral ex-vacuo (ex: Alzheimer)</strong>, onde os sulcos corticais e as fissuras colapsam de forma generalizada e o teto ventricular se alarga horizontalmente.
              </p>
            )}
          </div>
        </div>

        {/* DESH Pattern Checklist (Japanese Guidelines 2021) */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4 shadow-lg">
          <div className="border-b border-slate-800 pb-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-cyan-400" />
              Padrão DESH (Diretrizes Japonesas 2021)
            </h3>
            <p className="text-xs text-slate-400">
              Disproportionately Enlarged Subarachnoid-space Hydrocephalus
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <label className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition">
              <input
                type="checkbox"
                checked={deshSylvianFissures}
                onChange={(e) => setDeshSylvianFissures(e.target.checked)}
                className="mt-0.5 rounded text-cyan-500 accent-cyan-400"
              />
              <div>
                <span className="font-bold text-white block">1. Dilatação das Fissuras de Sylvius</span>
                <span className="text-slate-400 text-[11px]">Alargamento evidente dos espaços liquóricos nas fossas laterais</span>
              </div>
            </label>

            <label className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition">
              <input
                type="checkbox"
                checked={deshTightConvexity}
                onChange={(e) => setDeshTightConvexity(e.target.checked)}
                className="mt-0.5 rounded text-cyan-500 accent-cyan-400"
              />
              <div>
                <span className="font-bold text-white block">2. Estreitamento dos Sulcos na Alta Convexidade</span>
                <span className="text-slate-400 text-[11px]">Aparência de &quot;sulcos apertados&quot; junto ao vértice parassagital</span>
              </div>
            </label>

            <label className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition">
              <input
                type="checkbox"
                checked={deshVentriculomegaly}
                onChange={(e) => setDeshVentriculomegaly(e.target.checked)}
                className="mt-0.5 rounded text-cyan-500 accent-cyan-400"
              />
              <div>
                <span className="font-bold text-white block">3. Ventriculomegalia Desproporcional</span>
                <span className="text-slate-400 text-[11px]">Índice de Evans &gt; 0,30 sem dilatação difusa de sulcos</span>
              </div>
            </label>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs flex items-center justify-between">
            <span className="font-semibold text-slate-300">Classificação Radiológica DESH:</span>
            <span className={`font-bold px-2.5 py-1 rounded font-mono ${
              deshScore === 3 
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' 
                : 'bg-amber-950 text-amber-300 border border-amber-800'
            }`}>
              {deshScore === 3 ? 'DESH Típico (Alta Resposta à DVP)' : 'DESH Incompleto / Incerto'}
            </span>
          </div>
        </div>
      </div>

      {/* TOOL 3: TAP TEST (PUNÇÃO LOMBAR EVACUADORA) SIMULATOR */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              Simulador do Teste de Punção Lombar (Tap Test & TUG)
            </h3>
            <p className="text-xs text-slate-400">
              Retirada controlada de 30 a 50 mL de LCR para predição de resposta favorável ao shunt na iNPH.
            </p>
          </div>
          <span className="text-xs bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 text-slate-300 font-mono">
            Critério: Melhora &ge; 20% no tempo do TUG
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs items-center">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between font-semibold">
              <span className="text-slate-400">TUG Pré-Drenagem:</span>
              <span className="font-mono text-cyan-300 font-bold">{preTugSeconds} segundos</span>
            </div>
            <input
              type="range"
              min="12"
              max="50"
              value={preTugSeconds}
              onChange={(e) => setPreTugSeconds(Number(e.target.value))}
              className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
            <span className="text-[10px] text-slate-500 block">Tempo para levantar da cadeira, andar 3m, virar e sentar</span>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between font-semibold">
              <span className="text-slate-400">TUG Pós-Drenagem (30-50 mL):</span>
              <span className="font-mono text-emerald-400 font-bold">{postTugSeconds} segundos</span>
            </div>
            <input
              type="range"
              min="8"
              max="45"
              value={postTugSeconds}
              onChange={(e) => setPostTugSeconds(Number(e.target.value))}
              className="w-full accent-emerald-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
            <span className="text-[10px] text-slate-500 block">Avaliado tipicamente 2h a 24h após a punção lombar</span>
          </div>

          <div className={`p-4 rounded-xl border text-center space-y-1 ${
            isTapTestPositive
              ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-200'
              : 'bg-amber-950/40 border-amber-800/60 text-amber-200'
          }`}>
            <span className="text-[11px] block font-medium">Variação no Tempo de Marcha:</span>
            <div className="text-2xl font-black font-mono">
              {tugImprovementPercent > 0 ? `-${tugImprovementPercent}%` : `+${Math.abs(tugImprovementPercent)}%`}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider block">
              {isTapTestPositive ? '✓ Resposta Positiva (Alto Valor Preditivo)' : 'Resposta Duvidosa / Negativa'}
            </span>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 italic bg-slate-950 p-3 rounded-lg border border-slate-800">
          *Lembrete essencial das diretrizes: Uma melhora objetiva documentada no Tap Test é fortemente preditiva de sucesso com a DVP. Contudo, <strong>um teste negativo NÃO exclui a possibilidade de benefício cirúrgico</strong> (alta taxa de falsos negativos; se a suspeita clínica for forte com DESH, teste de drenagem lombar externa prolongada por 72h pode ser indicado).
        </p>
      </div>
    </div>
  );
};

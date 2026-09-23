import React, { useState } from 'react';
import { 
  GitBranch, 
  Globe2, 
  Baby, 
  User, 
  AlertCircle, 
  MapPin, 
  ShieldAlert, 
  Dna,
  BookOpen
} from 'lucide-react';

export const EtiologyAndAfrica: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'congenital' | 'obstructive' | 'communicating' | 'africa' | 'inph'>('all');
  const [ageGroupView, setAgeGroupView] = useState<'infants' | 'children' | 'adults' | 'elderly'>('infants');

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Module Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 rounded-2xl border border-cyan-900/40 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-semibold mb-2">
          <GitBranch className="w-3.5 h-3.5" />
          Módulo III: Etiologias, Quadro Clínico e Contexto Global
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Etiologia da Hidrocefalia & Particularidades em África
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-3xl">
          Da genética das formas congênitas às etiologias pós-infecciosas predominantes na África subsaariana (análise sistemática de 12.355 crianças), além das manifestações clínicas conforme a idade do paciente.
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap items-center gap-2">
        {[
          { id: 'all', label: 'Todas as Etiologias' },
          { id: 'africa', label: '🌍 Destaque: África Subsaariana & Nampula' },
          { id: 'congenital', label: '🧬 Congênita & Genética' },
          { id: 'obstructive', label: '🚧 Obstrutiva (Não-Comunicante)' },
          { id: 'communicating', label: '🌊 Comunicante & Infecciosa' },
          { id: 'inph', label: '👴 Hidrocefalia de Pressão Normal (iNPH)' },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveCategory(btn.id as any)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeCategory === btn.id
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* SPECIAL FEATURED BOX: AFRICA & NAMPULA REALITY */}
      {(activeCategory === 'all' || activeCategory === 'africa') && (
        <div className="bg-gradient-to-br from-amber-950/30 via-slate-900 to-slate-900 rounded-2xl border border-amber-600/40 p-6 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-amber-900/50 gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  Hidrocefalia Pediátrica em África: O Desafio Pós-Infeccioso
                </h3>
                <span className="text-xs text-amber-400/90 font-mono">
                  Baseado na Revisão Sistemática Africana de 74 Estudos (12.355 Crianças)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-950 border border-amber-800 text-amber-300 text-xs">
              <MapPin className="w-3.5 h-3.5" />
              <span>Hospital Central de Nampula (HCN), Moçambique</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="font-bold text-amber-400 block text-sm">1. Etiologia Preponderante</span>
              <p className="text-slate-300 leading-relaxed">
                Ao contrário dos países de alta renda (onde predomina a prematuridade com hemorragia intraventricular), em África a <strong className="text-white">Hidrocefalia Pós-Infecciosa (HPI)</strong> responde por mais de 50-60% dos casos. É desencadeada por sepse neonatal, meningite bacteriana e formas graves de malária cerebral com exsudato inflamatório e fibrose das vias liquóricas.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="font-bold text-amber-400 block text-sm">2. Desafios Logísticos & Diagnósticos</span>
              <p className="text-slate-300 leading-relaxed">
                • Diagnóstico tardio com macrocefalia volumosa extrema.
                <br />• Distâncias geográficas imensas entre aldeias e hospitais terciários.
                <br />• Acesso escasso ou nulo à Ressonância Magnética; a <strong>TAC de crânio e a Ultrassonografia Transfontanelar</strong> são as ferramentas esteio no HCN.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="font-bold text-amber-400 block text-sm">3. Por Que ETV/CPC Revolucionou o Tratamento?</span>
              <p className="text-slate-300 leading-relaxed">
                Como demonstrado pelo ensaio pioneiro em Uganda (Kulkarni et al., NEJM), o implante de válvula de DVP em pacientes de áreas remotas expõe a criança a 30-40% de falência/infecção com risco de morte rápida por falta de revisão cirúrgica local. A <strong className="text-cyan-300">ETV associada à Cauterização do Plexo (ETV/CPC)</strong> oferece independência de dispositivos valvulares.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ETIOLOGIC CATEGORIES MATRIX */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        {/* Congenital & Genetic */}
        {(activeCategory === 'all' || activeCategory === 'congenital') && (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-3 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Dna className="w-4 h-4 text-cyan-400" />
                Hidrocefalia Congênita & Malformativa
              </h4>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded font-mono">Pré-natal & Neonatal</span>
            </div>

            <ul className="space-y-2 text-slate-300">
              <li className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <strong className="text-white block">Estenose do Aqueduto de Sylvius:</strong>
                Forma congênita mais comum. Ligada ao cromossomo X através de mutações no gene <span className="font-mono text-cyan-400">L1CAM</span> (síndrome de Bickers-Adams), além de mutações nos genes <span className="font-mono text-cyan-400">AP1S2, MPDZ e CCDC88C</span> relacionados à ciliogênese.
              </li>
              <li className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <strong className="text-white block">Malformação de Chiari Tipo II & Mielomeningocele:</strong>
                Herniação do vermis cerebelar e tronco através do forame magno, causando obstrução na saída do quarto ventrículo em quase 80-90% das crianças com espinha bífida aberta.
              </li>
              <li className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <strong className="text-white block">Síndrome de Dandy-Walker:</strong>
                Agenesia/hipoplasia do vermis cerebelar associada à dilatação cística do quarto ventrículo e elevação do tentório e dos seios transversos.
              </li>
            </ul>
          </div>
        )}

        {/* Obstructive (Non-communicating) */}
        {(activeCategory === 'all' || activeCategory === 'obstructive') && (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-3 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                Hidrocefalia Obstrutiva (Sítios & Causas Típicas)
              </h4>
              <span className="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded font-mono">Bloqueio Mecânico</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-[11px] text-slate-400">
                    <th className="py-1.5 px-2">Local do Bloqueio</th>
                    <th className="py-1.5 px-2">Etiologias Típicas</th>
                    <th className="py-1.5 px-2">Padrão Tomográfico</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-[11px] text-slate-300">
                  <tr>
                    <td className="py-2 px-2 font-bold text-cyan-300">Forame de Monro</td>
                    <td className="py-2 px-2">Cisto colóide, subependimoma, neurocitoma</td>
                    <td className="py-2 px-2 text-slate-400">Ventrículo lateral ipsilateral ou bilateral dilatado; III e IV normais</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-bold text-cyan-300">Terceiro Ventrículo</td>
                    <td className="py-2 px-2">Craniofaringioma, glioma quiasmático, germinoma</td>
                    <td className="py-2 px-2 text-slate-400">Laterais dilatados; III ventrículo deformado</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-bold text-amber-300">Aqueduto de Sylvius</td>
                    <td className="py-2 px-2">Estenose congênita, tumores da pineal, gliose pós-HSA</td>
                    <td className="py-2 px-2 text-amber-300 font-semibold">Triventriculomegalia: Laterais + III volumosos; IV normal</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-bold text-rose-300">Quarto Ventrículo / Saídas</td>
                    <td className="py-2 px-2">Meduloblastoma, ependimoma, aracnoidite de Magendie</td>
                    <td className="py-2 px-2 text-slate-400">Panventriculomegalia (todos os 4 ventrículos dilatados)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Communicating & Post-Hemorrhagic / Post-Traumatic */}
        {(activeCategory === 'all' || activeCategory === 'communicating') && (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-3 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-sky-400" />
                Hidrocefalia Comunicante (Dano Absortivo & Meníngeo)
              </h4>
              <span className="text-[10px] bg-sky-950 text-sky-300 px-2 py-0.5 rounded font-mono">Sem Bloqueio Interno</span>
            </div>

            <p className="text-slate-300">
              O líquor flui livremente pelos ventrículos e atinge o espaço subaracnoideo, mas encontra resistência crítica à reabsorção periférica:
            </p>

            <ul className="space-y-1.5 text-slate-300">
              <li className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                <strong className="text-sky-300">Meningite Bacteriana e Tuberculosa:</strong> Exsudato fibrino-purulento oclui os espaços perivasculares e granulações aracnoideias, evoluindo com fibrose cicatricial crônica.
              </li>
              <li className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                <strong className="text-sky-300">Hemorragia Subaracnoidea (HSA) e Intraventricular (HIV):</strong> Produtos de degradação da hemoglobina e macrófagos com hemossiderina entopem mecanicamente as vilosidades de Pacchioni e os vasos linfáticos meníngeos.
              </li>
              <li className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                <strong className="text-sky-300">Trauma Cranioencefálico (TCE) & Pós-AVC:</strong> Combinação de hemorragia, edema cerebral e perda da complacência elástica do encéfalo.
              </li>
            </ul>
          </div>
        )}

        {/* iNPH / Elderly */}
        {(activeCategory === 'all' || activeCategory === 'inph') && (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-3 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <User className="w-4 h-4 text-emerald-400" />
                Hidrocefalia de Pressão Normal Idiopática (iNPH)
              </h4>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-mono">Hakim-Adams</span>
            </div>

            <p className="text-slate-300">
              Condição complexa do idoso (&gt; 65 anos) com pressão liquórica manométrica aparentemente normal na punção lombar isolada, mas com grave alteração na complacência e drenagem glinfática:
            </p>

            <div className="bg-emerald-950/40 p-3 rounded-xl border border-emerald-800/60 space-y-2">
              <span className="text-emerald-300 font-bold block">A Tríade Clássica de Hakim-Adams:</span>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-slate-950 p-2 rounded border border-slate-800">
                  <span className="font-bold text-white block">1. Marcha</span>
                  <span className="text-[10px] text-slate-400">Magnética / em pequenos passos</span>
                </div>
                <div className="bg-slate-950 p-2 rounded border border-slate-800">
                  <span className="font-bold text-white block">2. Cognição</span>
                  <span className="text-[10px] text-slate-400">Lentificação e déficit executivo</span>
                </div>
                <div className="bg-slate-950 p-2 rounded border border-slate-800">
                  <span className="font-bold text-white block">3. Urinário</span>
                  <span className="text-[10px] text-slate-400">Urgência e incontinência</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 italic">
              *Nota pedagógica: A tríade completa não precisa estar presente simultaneamente para suspeição diagnóstica (Nakajima et al., 2021). O distúrbio de marcha costuma ser o sintoma mais precoce e que melhor responde ao shunt.
            </p>
          </div>
        )}
      </div>

      {/* CLINICAL MANIFESTATIONS BY AGE TAB */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Baby className="w-4 h-4 text-cyan-400" />
              Manifestações Clínicas por Faixa Etária
            </h3>
            <p className="text-xs text-slate-400">
              O crânio do lactente com suturas abertas expande-se; o crânio rígido do adulto descompensa rapidamente.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setAgeGroupView('infants')}
              className={`px-2.5 py-1 rounded-lg transition ${
                ageGroupView === 'infants' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Lactentes (&lt; 2 anos)
            </button>
            <button
              onClick={() => setAgeGroupView('children')}
              className={`px-2.5 py-1 rounded-lg transition ${
                ageGroupView === 'children' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Crianças Maiores
            </button>
            <button
              onClick={() => setAgeGroupView('adults')}
              className={`px-2.5 py-1 rounded-lg transition ${
                ageGroupView === 'adults' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Adultos
            </button>
            <button
              onClick={() => setAgeGroupView('elderly')}
              className={`px-2.5 py-1 rounded-lg transition ${
                ageGroupView === 'elderly' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Idosos (iNPH)
            </button>
          </div>
        </div>

        {/* Content per age */}
        <div className="text-xs">
          {ageGroupView === 'infants' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="font-bold text-cyan-300 block">Sinais Físicos de Acometimento Craniofacial:</span>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li><strong className="text-white">Macrocefalia progressiva:</strong> Perímetro cefálico cruzando percentis ascendentes nas curvas da OMS.</li>
                  <li><strong className="text-white">Fontanela anterior ampla e tensa:</strong> Abaulada mesmo em repouso e sem choro.</li>
                  <li><strong className="text-white">Diástase de suturas cranianas:</strong> Separação tátil das suturas coronais, sagitais e lambdoides.</li>
                  <li><strong className="text-white">Turgescência de veias epicranianas:</strong> Dilatação venosa visível no couro cabeludo devido à inversão de drenagem colateral.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-rose-400 block">Sinais Neurológicos e de Alarme:</span>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li><strong className="text-white">Sinal do &quot;Sol Poente&quot; (Sunset eyes):</strong> Desvio conjugado dos olhos para baixo com esclera superior visível, por compressão tectal do mesencéfalo.</li>
                  <li><strong className="text-white">Irritabilidade e choro agudo e inconsolável</strong> com recusa alimentar e vômitos repetidos.</li>
                  <li><strong className="text-white">Hipertonia e hiper-reflexia em MMII</strong> por compressão das fibras piramidais paraventriculares.</li>
                </ul>
              </div>
            </div>
          )}

          {ageGroupView === 'children' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="font-bold text-cyan-300 block">Tríade de Hipertensão Intracraniana Típica:</span>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li><strong className="text-white">Cefaleia matinal:</strong> Piora com o decúbito noturno e ao tossir/esforço físico.</li>
                  <li><strong className="text-white">Vômitos &quot;em jato&quot;:</strong> Freqüentemente matinais, sem precedência de náusea pronunciada.</li>
                  <li><strong className="text-white">Papiledema bilateral:</strong> Edema e hemorragias da papila óptica ao exame de fundo de olho.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-amber-300 block">Déficits Focais e Comportamentais:</span>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li><strong className="text-white">Paresia do VI par craniano (abducente):</strong> Diplopia horizontal (falso sinal localizatório decorrente de estiramento mecânico sob a tenda).</li>
                  <li><strong className="text-white">Queda no rendimento escolar,</strong> sonolência diurna e alterações de humor/comportamento.</li>
                </ul>
              </div>
            </div>
          )}

          {ageGroupView === 'adults' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="font-bold text-cyan-300 block">Apresentação Aguda vs Subaguda:</span>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li><strong className="text-white">Cefaleia holocraniana refratária</strong> a analgésicos habituais.</li>
                  <li><strong className="text-white">Deterioração do nível de consciência:</strong> Sonolência progressiva, torpor e coma se não descompressa.</li>
                  <li><strong className="text-white">Tríade de Cushing:</strong> Bradicardia, hipertensão arterial sistêmica com alargamento da pressão de pulso e bradipneia/respiração irregular (alarme iminente de herniação).</li>
                </ul>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-rose-400 block">Emergência Neurocirúrgica:</span>
                <p className="text-slate-300 leading-relaxed">
                  Em adultos com hematoma, traumatismo ou hidrocefalia obstrutiva aguda, o crânio fechado não permite aumento volumétrico. O risco de morte por herniação uncal ou amigdalar é de horas, demandando <strong>DVE imediata</strong>.
                </p>
              </div>
            </div>
          )}

          {ageGroupView === 'elderly' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="font-bold text-emerald-300 block">Semiologia Detalhada da Marcha em iNPH:</span>
                <p className="text-slate-300 leading-relaxed">
                  Marcha aprática / magnética caracterizada por passos curtos, base de sustentação alargada, pés que parecem &quot;colados ao chão&quot; e dificuldade expressiva em realizar manobras de giro (precisa de 4 ou mais passos para girar 180°). Alta frequência de quedas.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-sky-300 block">Perfil Cognitivo e Urinário:</span>
                <p className="text-slate-300 leading-relaxed">
                  Déficit cognitivo do tipo <strong>subcortical-frontal</strong>: lentificação psicomotora, apatia, disfunção executiva e desatenção (distinta da perda de memória episódica cortical precoce do Alzheimer). O sintoma urinário inicia-se com noctúria e urgência miccional, progredindo para incontinência reflexa.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

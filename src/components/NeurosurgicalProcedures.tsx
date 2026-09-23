import React, { useState } from 'react';
import { 
  Stethoscope, 
  ShieldCheck, 
  AlertTriangle, 
  Layers, 
  CheckCircle2, 
  XCircle, 
  Scale, 
  Activity,
  ArrowRight,
  Gauge
} from 'lucide-react';

interface NeurosurgicalProceduresProps {
  onOpenValveModal?: () => void;
}

export const NeurosurgicalProcedures: React.FC<NeurosurgicalProceduresProps> = ({ onOpenValveModal }) => {
  const [selectedTech, setSelectedTech] = useState<'etv_cpc' | 'etv' | 'dvp' | 'dve'>('etv_cpc');
  const [valveType, setValveType] = useState<'fixed' | 'programmable' | 'antisiphon'>('programmable');

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 rounded-2xl border border-cyan-900/40 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-semibold mb-2">
          <Stethoscope className="w-3.5 h-3.5" />
          Módulo V: Procedimentos Neurocirúrgicos & Comparador ETV vs DVP
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Tratamento Neurocirúrgico: DVE, DVP, ETV e ETV/CPC
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-3xl">
          Conheça as indicações técnicas, trajetos anatômicos, tipos de válvulas reguláveis, cateteres impregnados com antibióticos (Diretrizes CNS) e a meta-análise contemporânea de desfechos.
        </p>
      </div>

      {/* PROCEDURE SELECTOR BUTTONS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { id: 'etv_cpc', label: 'ETV + CPC', subtitle: 'Endoscopia + Cauterização' },
          { id: 'etv', label: 'ETV Isolada', subtitle: 'Ventriculostomia III V' },
          { id: 'dvp', label: 'DVP', subtitle: 'Derivação Ventriculoperitoneal' },
          { id: 'dve', label: 'DVE', subtitle: 'Derivação Ventricular Externa' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedTech(item.id as any)}
            className={`p-3 rounded-xl text-left border transition ${
              selectedTech === item.id
                ? 'bg-cyan-500/20 border-cyan-500/80 text-white shadow-lg shadow-cyan-500/10'
                : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span className="text-xs sm:text-sm font-bold block text-white">{item.label}</span>
            <span className="text-[11px] text-cyan-400/90">{item.subtitle}</span>
          </button>
        ))}
      </div>

      {/* SELECTED PROCEDURE PROFILE */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
        {selectedTech === 'etv_cpc' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  ETV + CPC: Ventriculostomia do III Ventrículo + Cauterização do Plexo Coroideu
                </h3>
                <span className="text-xs text-cyan-400 font-mono">
                  Coulter et al. (2021); Kulkarni et al., NEJM (2017)
                </span>
              </div>
              <span className="text-xs bg-cyan-950 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800 font-semibold self-start sm:self-auto">
                Estratégia Chave em Lactentes Africanos
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-cyan-300 block text-sm">Princípio Anatômico Duplo:</span>
                <p className="text-slate-300 leading-relaxed">
                  1. <strong>ETV:</strong> Fenestração do assoalho do III ventrículo (membrana pré-mamilar) comunicando diretamente com a cisterna interpeduncular para escoamento.
                  <br />
                  2. <strong>CPC:</strong> Coagulação com probe bipolar de alta frequência do plexo coroideu em ambos os ventrículos laterais, reduzindo a produção total de LCR em 30 a 50%.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-emerald-400 block text-sm">Vantagens Primordiais:</span>
                <p className="text-slate-300 leading-relaxed">
                  • <strong>Independência total de implantes:</strong> Sem válvula mecânica propensa a quebra, desconexão ou infecção por corpo estranho.
                  <br />
                  • <strong>Excelente para locais remotos:</strong> Ideal para populações que vivem longe de centros neurocirúrgicos onde a revisão de shunt de emergência é logisticamente inviável.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-amber-400 block text-sm">Critérios de Elegibilidade:</span>
                <p className="text-slate-300 leading-relaxed">
                  • Idade ideal em lactentes &lt; 1-2 anos com hidrocefalia pós-infecciosa ou mielomeningocele.
                  <br />
                  • Assoalho do III ventrículo transparente/translúcido e cisternas basais livres de fibrose obliterativa densa.
                  <br />
                  • Forame de Monro permeável que permita a passagem segura do endoscópio rígido ou flexível.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedTech === 'etv' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  ETV Isolada (Ventriculostomia Endoscópica do Terceiro Ventrículo)
                </h3>
                <span className="text-xs text-cyan-400 font-mono">
                  Minta et al., Meta-análise 2024
                </span>
              </div>
              <span className="text-xs bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800 font-semibold self-start sm:self-auto">
                Padrão-Ouro na Obstrução Aquedutal
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-cyan-300 block text-sm">Passo a Passo Cirúrgico:</span>
                <p className="text-slate-300 leading-relaxed">
                  1. Trepanação no ponto de Kocher (direito, preferencialmente).
                  <br />2. Canulação do corno frontal e entrada no III ventrículo via Forame de Monro.
                  <br />3. Identificação dos marcos anatômicos: corpos mamilares, quiasma óptico, recesso infundibular.
                  <br />4. Perfuração e dilatação com cateter balão (Fogarty) na membrana pré-mamilar, visualizando a artéria basilar e cisternas.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-emerald-400 block text-sm">Indicações Típicas:</span>
                <p className="text-slate-300 leading-relaxed">
                  • Estenose congênita ou adquirida do aqueduto de Sylvius.
                  <br />• Tumores da região pineal e fossa posterior comprimindo o fluxo a jusante.
                  <br />• Cistos colóides obstrutivos do III ventrículo.
                  <br />• Crianças &gt; 1-2 anos e adultos com hidrocefalia não comunicante.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-rose-400 block text-sm">Riscos Críticos:</span>
                <p className="text-slate-300 leading-relaxed">
                  • Lesão do ápice da artéria basilar ou seus ramos perfurantes (risco de hemorragia fatal).
                  <br />• Contusão transitória do fórnix (amnésia anterógrada).
                  <br />• Lesão hipotalâmica com diabetes insípido transitório ou hipertermia central.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedTech === 'dvp' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  DVP: Derivação Ventriculoperitoneal Definitiva
                </h3>
                <span className="text-xs text-cyan-400 font-mono">
                  Sistemas Valvulares & Prevenção de Complicações
                </span>
              </div>
              <span className="text-xs bg-sky-950 text-sky-300 px-3 py-1 rounded-full border border-sky-800 font-semibold self-start sm:self-auto">
                Pilar da Hidrocefalia Comunicante & iNPH
              </span>
            </div>

            {/* Valve Types Selector */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
              <span className="font-semibold text-slate-300 block">
                Escolha da Válvula & Tecnologia Anti-Hiperdrenagem:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'fixed', label: 'Pressão Fixa (Baixa / Média / Alta)' },
                  { id: 'programmable', label: 'Pressão Programável / Ajustável (Magnética)' },
                  { id: 'antisiphon', label: 'Mecanismo Anti-Sifão / Gravitacional' },
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setValveType(v.id as any)}
                    className={`px-3 py-1.5 rounded-lg transition ${
                      valveType === v.id
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>

              {valveType === 'fixed' && (
                <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                  <strong>Válvula de Pressão Fixa:</strong> Mais acessível, muito comum em centros de países em desenvolvimento. Desvantagem: se o paciente evoluir com hiperdrenagem (hematoma subdural) ou subdrenagem, exige nova cirurgia para troca física da válvula.
                </p>
              )}

              {valveType === 'programmable' && (
                <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                  <strong>Válvula Programável / Ajustável:</strong> Permite alterar a pressão de abertura percutaneamente por ímã externo no consultório sem cirurgia. <em>Padrão de eleição na iNPH</em> para ajustar gradualmente a pressão liquórica e evitar colapso ventricular abrupto.
                </p>
              )}

              {valveType === 'antisiphon' && (
                <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                  <strong>Dispositivo Anti-Sifão:</strong> Evita a sucção por pressão hidrostática negativa que ocorre quando o paciente fica em pé (ortostatismo), reduzindo dramaticamente a incidência de cefaleia postural e higroma/hematoma subdural.
                </p>
              )}
            </div>

            {/* Valve Pressure Table Quick View */}
            <div className="bg-slate-950 p-4 rounded-xl border border-cyan-800/50 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold text-white text-xs">
                    Pressões de Abertura das Válvulas dos Shunts
                  </span>
                </div>
                {onOpenValveModal && (
                  <button
                    onClick={onOpenValveModal}
                    className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition shadow-sm self-start sm:self-auto"
                  >
                    <span>Abrir Janela Detalhada</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                      <th className="py-2 px-3 text-right">Pressão</th>
                      <th className="py-2 px-3 text-right">mmH₂O</th>
                      <th className="py-2 px-3 text-right">cmH₂O</th>
                      <th className="py-2 px-3 text-left">Perfil Clínico & Indicação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300 font-mono text-xs">
                    <tr>
                      <td className="py-2 px-3 text-right font-bold text-sky-400 font-sans">Baixa</td>
                      <td className="py-2 px-3 text-right font-extrabold text-white">50–80</td>
                      <td className="py-2 px-3 text-right font-extrabold text-cyan-300">5–8</td>
                      <td className="py-2 px-3 text-left font-sans text-[11px] text-slate-400">iNPH selecionada / hidrocefalia crônica; risco de hiperdrenagem e hematoma subdural.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-right font-bold text-emerald-400 font-sans">Moderada</td>
                      <td className="py-2 px-3 text-right font-extrabold text-white">100–150</td>
                      <td className="py-2 px-3 text-right font-extrabold text-cyan-300">10–15</td>
                      <td className="py-2 px-3 text-left font-sans text-[11px] text-slate-300 font-semibold">Padrão habitual / primeira escolha no HCN para lactentes e adultos.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-right font-bold text-amber-400 font-sans">Alta</td>
                      <td className="py-2 px-3 text-right font-extrabold text-white">180–200</td>
                      <td className="py-2 px-3 text-right font-extrabold text-cyan-300">18–20</td>
                      <td className="py-2 px-3 text-left font-sans text-[11px] text-slate-400">Histórico prévio de hiperdrenagem, coleções subdurais ou ventrículos em fenda.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-right font-bold text-rose-400 font-sans">Muito alta</td>
                      <td className="py-2 px-3 text-right font-extrabold text-white">250</td>
                      <td className="py-2 px-3 text-right font-extrabold text-cyan-300">25</td>
                      <td className="py-2 px-3 text-left font-sans text-[11px] text-slate-400">Casos excepcionais, desmame de derivação ou hipotensão ortostática grave.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CNS Guidelines for Antibiotic Impregnated Catheters */}
            <div className="bg-emerald-950/40 p-4 rounded-xl border border-emerald-800/60 text-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-300 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Diretrizes Pediátricas do Congress of Neurological Surgeons (CNS)
              </div>
              <p className="text-slate-300 leading-relaxed">
                As diretrizes de medicina baseada em evidências do CNS recomendam expressamente o uso de <strong>cateteres impregnados com antibióticos (Rifampicina + Clindamicina)</strong> na implantação primária de shunts em crianças. Eles demonstraram reduzir as taxas de infecção de ~12-15% para &lt; 3-5%, diminuindo reoperações e atrasos no desenvolvimento psicomotor.
              </p>
            </div>
          </div>
        )}

        {selectedTech === 'dve' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                  DVE: Derivação Ventricular Externa
                </h3>
                <span className="text-xs text-rose-400 font-mono">
                  Emergência & Drenagem Temporária
                </span>
              </div>
              <span className="text-xs bg-rose-950 text-rose-300 px-3 py-1 rounded-full border border-rose-800 font-semibold self-start sm:self-auto">
                Salvação Imediata em HIC Aguda
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-rose-400 block text-sm">Indicações de Emergência:</span>
                <p className="text-slate-300 leading-relaxed">
                  • Hemorragia intraventricular aguda com moldagem de sangue (TCE ou ruptura de aneurisma).
                  <br />• Hipertensão intracraniana descompensada refratária com risco iminente de herniação.
                  <br />• Ventriculite ou infecção ativa de shunt prévio (permite drenagem e infusão intratecal).
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-cyan-300 block text-sm">Técnica & Ponto de Kocher:</span>
                <p className="text-slate-300 leading-relaxed">
                  Trepanação a <strong>1 cm anterior à sutura coronal e 2,5 a 3 cm lateral da linha média</strong> (linha hemiclavicular). Trajeto direcionado em direção ao canto interno do olho ipsilateral e meato acústico externo para alcançar o corno frontal. Nível da coluna graduada calibrado no forame de Monro (tragus do ouvido).
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-amber-400 block text-sm">Limitação Fundamental:</span>
                <p className="text-slate-300 leading-relaxed">
                  A DVE é <strong>temporária (geralmente mantida por 5 a 14 dias)</strong>. Risco exponencial de ventriculite bacteriana e colonização por <em>Staphylococcus aureus / epidermidis</em> à medida que os dias passam. Não é solução definitiva.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* HEAD-TO-HEAD COMPARISON: ETV vs DVP (MINTA ET AL. 2024 META-ANALYSIS) */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-4">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-cyan-400" />
              Comparador ETV vs DVP (Evidência da Meta-Análise de 2024)
            </h3>
            <p className="text-xs text-slate-400">
              Minta, Kannan & Kaliaperumal (2024), Child&apos;s Nervous System (revisão de ensaios e coortes comparativas).
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 bg-slate-950">
                <th className="py-2.5 px-3">Critério Clínico</th>
                <th className="py-2.5 px-3 text-cyan-300 font-bold">ETV (ou ETV/CPC)</th>
                <th className="py-2.5 px-3 text-sky-300 font-bold">DVP (Derivação Ventriculoperitoneal)</th>
                <th className="py-2.5 px-3 text-slate-300 font-semibold">Veredito da Literatura</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="py-3 px-3 font-semibold text-white">Taxa de Sucesso Geral</td>
                <td className="py-3 px-3">~65% a 75% em pacientes bem selecionados</td>
                <td className="py-3 px-3">~70% a 80% nos primeiros meses</td>
                <td className="py-3 px-3 text-slate-400">Sem diferença estatística na sobrevida global a longo prazo em estudos comparativos (Minta et al., 2024).</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-white">Curva de Falência Temporal</td>
                <td className="py-3 px-3 text-amber-300">Falências concentram-se nos primeiros 3-6 meses (estoma fecha cedo)</td>
                <td className="py-3 px-3 text-rose-300">Falência contínua e linear (5-10% a cada ano por toda a vida)</td>
                <td className="py-3 px-3 text-slate-400">Após 1 ano de sucesso com a ETV, a chance de falência tardia é mínima. Com o shunt, o risco dura para sempre.</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-white">Risco Infeccioso</td>
                <td className="py-3 px-3 text-emerald-400 font-bold">Extremamente baixo (&lt; 1-2%)</td>
                <td className="py-3 px-3 text-rose-400 font-bold">Significativo (5-15% sem cateter impregnado)</td>
                <td className="py-3 px-3 text-slate-400">A ausência de implante definitivo confere enorme superioridade à ETV quanto a infecções de prótese.</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-white">Dependência de Acompanhamento</td>
                <td className="py-3 px-3 text-emerald-300">Baixa após consolidação do estoma</td>
                <td className="py-3 px-3 text-amber-400">Alta e perpétua (revisões cirúrgicas frequentes)</td>
                <td className="py-3 px-3 text-slate-400">Fator decisivo para África subsaariana e Hospital Central de Nampula.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* COMPLICATION MANAGEMENT CHEAT SHEET */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          Quadro Didático: Manejo de Complicações Pós-Operatórias
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-rose-400 block">Obstrução de Cateter Proximal</span>
            <p className="text-slate-400">Causa: invasão do lúmen por plexo coroideu ou debris. Conduta: revisão com reposicionamento ou troca do cateter ventricular.</p>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-amber-400 block">Hiperdrenagem / Hematoma Subdural</span>
            <p className="text-slate-400">Causa: colapso ventricular excessivo e estiramento de veias-ponte. Conduta: elevar a pressão da válvula ajustável ou adicionar dispositivo anti-sifão.</p>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-cyan-400 block">Infecção do Shunt / Ventriculite</span>
            <p className="text-slate-400">Causa: <em>S. epidermidis</em>. Conduta: exteriorização obrigatória do sistema com DVE + antibioticoterapia direcionada por antibiograma.</p>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-emerald-400 block">Pseudocisto Abdominal</span>
            <p className="text-slate-400">Causa: reação inflamatória peritoneal ou infecção subclínica. Conduta: exteriorização ou conversão temporária para shunt ventriculopleural ou atrial.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

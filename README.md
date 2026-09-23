# NeuroHydro: Atlas Didático e Clínico de Hidrocefalia

> **Autor:** **ABDOULAYE MAREGA** – Residente em Neurocirurgia, Hospital Central de Nampula (HCN, Moçambique)  
> **Plataforma didática e pedagógica de alta fidelidade para o estudo da histologia do sistema ventricular, fisiopatologia, diagnóstico por imagem e tratamento neurocirúrgico da hidrocefalia.**  
> Alinhada com a literatura internacional contemporânea e adaptada ao protocolo de conduta do **Hospital Central de Nampula (HCN, Moçambique)**.

---

## 👨‍⚕️ Autoria & Filiação Institucional

- **Autor:** Abdoulaye Marega
- **Cargo / Titulação:** Residente em Neurocirurgia
- **Instituição:** Hospital Central de Nampula (HCN), Província de Nampula, Moçambique
- **Objetivo do Projeto:** Desenvolvimento de uma ferramenta didática, pedagógica e clínica para estudantes de medicina, médicos internos e residentes em neurocirurgia, visando o aprimoramento do diagnóstico, da histopatologia e da tomada de decisão cirúrgica na hidrocefalia em contextos com recursos tecnológicos desafiadores e com alta prevalência de causas pós-infecciosas.

---

## 📋 Sumário
- [Sobre a Aplicação](#sobre-a-aplicação)
- [Objetivos Pedagógicos](#objetivos-pedagógicos)
- [Módulos & Recursos Interativos](#módulos--recursos-interativos)
  - [1. Atlas Ventricular & Histologia Ultramicroscópica](#1-atlas-ventricular--histologia-ultramicroscópica)
  - [2. Fisiopatologia, Complacência & Doutrina de Monro-Kellie](#2-fisiopatologia-complacência--doutrina-de-monro-kellie)
  - [3. Etiologias & Particularidades em África Subsaariana](#3-etiologias--particularidades-em-áfrica-subsaariana)
  - [4. Ferramentas Quantitativas de Neuroimagem](#4-ferramentas-quantitativas-de-neuroimagem)
  - [5. Técnicas Neurocirúrgicas & Comparador ETV vs DVP](#5-técnicas-neurocirúrgicas--comparador-etv-vs-dvp)
  - [6. Algoritmo Prático & Protocolo do HCN](#6-algoritmo-prático--protocolo-do-hcn)
  - [7. Simulador de Casos Clínicos Interativos](#7-simulador-de-casos-clínicos-interativos)
  - [8. Quiz Formativo & Flashcards de Repetição Ativa](#8-quiz-formativo--flashcards-de-repetição-ativa)
  - [9. Biblioteca de Referências em Formato APA 7.ª Edição](#9-biblioteca-de-referências-em-formato-apa-7ª-edição)
- [Público-Alvo](#público-alvo)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Referências Bibliográficas Principais](#referências-bibliográficas-principais)

---

## 🧠 Sobre a Aplicação

A hidrocefalia não é meramente uma consequência de "excesso de líquido" ventricular estático. Trata-se de uma síndrome dinâmica complexa que envolve produção, circulação, absorção perivascular e linfática, além da complacência viscoelástica do parênquima cerebral e das meninges (*Liu et al., 2024*).

O **NeuroHydro** foi desenvolvido para transformar esse conteúdo médico denso em uma experiência de aprendizado ativa, visual e orientada à tomada de decisão clínica, integrando simulações biomecânicas, microscopia esquemática, calculadoras radiológicas e casos clínicos reais.

---

## 🎯 Objetivos Pedagógicos

1. **Diferenciação Histológica Funcional:** Compreender as diferenças ultramicroscópicas entre o epêndima ventricular comum (cílios sincronizados e junções permeáveis) e o epitélio do plexo coroideu (endotélio fenestrado, estroma e *tight junctions* formando a Barreira Sangue–LCR).
2. **Biomecânica da Pressão Intracraniana:** Visualizar a Doutrina de Monro-Kellie e compreender por que a descompensação da PIC ocorre de forma exponencial (curva de elastância de Langfitt).
3. **Contextualização Epidemiológica Global:** Analisar a relevância da hidrocefalia pós-infecciosa (HPI) na África subsaariana a partir de dados da revisão sistemática de 12.355 crianças.
4. **Precisão Diagnóstica por Imagem:** Dominar o cálculo do Índice de Evans, a medição do ângulo caloso no corte coronal e o reconhecimento do padrão DESH (Diretrizes Japonesas de 2021).
5. **Indicação Cirúrgica Personalizada:** Compreender a seleção precisa entre DVE, DVP (com válvulas ajustáveis e cateteres impregnados com antibióticos conforme as diretrizes do CNS), ETV e ETV associada à Cauterização do Plexo Coroideu (ETV/CPC).
6. **Estratificação por Protocolo Institucional:** Aplicar a árvore de decisão dos 5 Grupos desenvolvida para o Hospital Central de Nampula.

---

## 🚀 Módulos & Recursos Interativos

### 1. Atlas Ventricular & Histologia Ultramicroscópica
- **Corte Sagital Ventricular em SVG Interativo:** Representação das cavidades ventriculares (*Ventrículos Laterais $\rightarrow$ Forames de Monro $\rightarrow$ Terceiro Ventrículo $\rightarrow$ Aqueduto de Sylvius $\rightarrow$ Quarto Ventrículo $\rightarrow$ Forames de Magendie e Luschka $\rightarrow$ Cisternas Basais*).
- **Simulador de Obstrução:** Permite simular a oclusão do aqueduto de Sylvius em tempo real, demonstrando a dilatação a montante (triventriculomegalia) com quarto ventrículo preservado.
- **Deep-Dive Histológico:**
  - *Plexo Coroideu:* Análise das 4 camadas (lúmen com hemácias $\rightarrow$ capilar fenestrado $\rightarrow$ estroma perivascular com macrófagos $\rightarrow$ epitélio coroideu com bombas $\text{Na}^+/\text{K}^+$-ATPase apicais, cotransportadores NKCC1 e canais de Aquaporina-1).
  - *Epêndima Comum:* Simulação do dano histopatológico decorrente da ventriculomegalia (desnudamento, perda ciliar, estiramento axonal da substância branca e edema transependimário).

### 2. Fisiopatologia, Complacência & Doutrina de Monro-Kellie
- **Simulador Interativo da Doutrina de Monro-Kellie:**
  $$\text{Volume Intracraniano} = V_{\text{cérebro}} (80\%) + V_{\text{sangue}} (10\%) + V_{\text{LCR}} (10\%) \approx \text{Constante}$$
- **Curva Volume-Pressão de Langfitt:** Gráfico dinâmico onde um ponto luminoso representa a PIC do paciente conforme o volume ventricular é expandido, ilustrando a passagem da fase compensada para o ponto de inflexão e a crise de HIC com risco de herniação e Tríade de Cushing.
- **Calculadora Quantitativa da Cinética do LCR:**
  - Produção diária: $\approx 500\text{ mL/dia}$ ($\approx 20,8\text{ mL/h}$, $\approx 0,33-0,35\text{ mL/min}$).
  - Volume adulto: $\approx 150\text{ mL}$.
  - Turnover: $\approx 3,3\text{ vezes ao dia}$.
  - Simulador de retenção líquica diária e semanal com base no déficit percentual de reabsorção.
- **Modelo Contemporâneo de Drenagem:** Vias linfáticas meníngeas cervicais profundas e circulação intersticial pelo Sistema Glinfático astroglial (AQP4).

### 3. Etiologias & Particularidades em África Subsaariana
- **Contexto de Moçambique & HCN:** Discussão baseada em revisão sistemática de 74 estudos envolvendo 12.355 crianças africanas, destacando sepse neonatal, meningite bacteriana e malária cerebral como etiologias predominantes.
- **Formas Congênitas & Genética:** Mutações nos genes *L1CAM* (estenose aquedutal ligada ao X), *AP1S2, MPDZ e CCDC88C*, Malformação de Chiari Tipo II (mielomeningocele) e Síndrome de Dandy-Walker.
- **Classificação por Sítio Obstrutivo:** Monro (cisto colóide), Terceiro Ventrículo, Aqueduto de Sylvius e Quarto Ventrículo.
- **Semiologia por Idade:** Comparativo interativo entre lactentes (macrocefalia, sinal do sol poente, fontanela tensa), crianças maiores (cefaleia em jato, papiledema, paresia do VI par), adultos e idosos (iNPH com Tríade de Hakim-Adams).

### 4. Ferramentas Quantitativas de Neuroimagem
- **Calculadora Interativa do Índice de Evans (EI):**
  $$EI = \frac{\text{Maior diâmetro dos cornos frontais}}{\text{Maior diâmetro interno do crânio}}$$
  Régua digital com visualização em corte tomográfico axial realístico e alerta pedagógico sobre *ventriculomegalia ex-vacuo*.
- **Avaliador do Ângulo Caloso:** Simulação no corte coronal ao nível da comissura posterior ($< 90^\circ$ na iNPH vs. $100^\circ-120^\circ$ na atrofia senil/Alzheimer).
- **Checklist dos Critérios DESH (Diretrizes Japonesas de 2021):** Avaliação de fissuras de Sylvius dilatadas e sulcos colapsados na alta convexidade parassagital.
- **Simulador do Tap Test (Punção Lombar):** Cálculo de variação percentual do teste *Timed Up and Go (TUG)* pré e pós-drenagem de 30-50 mL de LCR.

### 5. Técnicas Neurocirúrgicas & Comparador ETV vs DVP
- **DVE (Derivação Ventricular Externa):** Técnica de punção no Ponto de Kocher (1 cm anterior à sutura coronal, 2,5-3 cm da linha média), alinhamento manométrico no forame de Monro e manejo de urgência.
- **DVP (Derivação Ventriculoperitoneal):** Comparação entre válvulas de pressão fixa, programáveis/ajustáveis por campo magnético externo e dispositivos anti-sifão. Diretrizes do CNS para uso de cateteres impregnados com antimicrobianos (Rifampicina + Clindamicina).
- **Janela Interativa: Tabela de Calibração e Pressões das Válvulas dos Shunts:**

|    Pressão |   mmH₂O | cmH₂O | Perfil Clínico & Indicação Principal |
| ---------: | ------: | ----: | :----------------------------------- |
|      Baixa |   50–80 |   5–8 | iNPH selecionada / hidrocefalia crônica; risco de hiperdrenagem e coleções subdurais. |
|   Moderada | 100–150 | 10–15 | Faixa fisiológica / primeira escolha habitual no HCN para lactentes e adultos. |
|       Alta | 180–200 | 18–20 | Histórico prévio de hiperdrenagem, hematomas subdurais ou ventrículos em fenda. |
| Muito alta |     250 |    25 | Casos excepcionais, desmame de derivação ou hipotensão postural severa. |

- **ETV (Ventriculostomia Endoscópica do Terceiro Ventrículo):** Rota endoscópica através da membrana pré-mamilar para a cisterna interpeduncular.
- **ETV/CPC:** Cauterização concomitante do plexo coroideu para reduzir a taxa de secreção em lactentes, diminuindo a dependência de válvulas em regiões sem infraestrutura de emergência para revisões periódicas.
- **Meta-análise ETV vs DVP (Minta et al., 2024):** Análise das curvas de falência precoce vs tardia e taxas de infecção.

### 6. Algoritmo Prático & Protocolo do HCN
- **Algoritmo Geral em 5 Passos:**
  1. *Confirmar Hidrocefalia* (Clínica + Imagem)
  2. *Determinar Acuidade* (Aguda/Herniação vs Crônica)
  3. *Mecanismo* (Obstrutiva vs Comunicante)
  4. *Identificar Etiologia*
  5. *Escolher Tratamento*
- **Protocolo dos 5 Grupos do Hospital Central de Nampula:**
  - **Grupo I:** Hidrocefalia Aguda com Deterioração $\rightarrow$ DVE imediata.
  - **Grupo II:** Hidrocefalia Obstrutiva $\rightarrow$ ETV $\pm$ tratamento da causa.
  - **Grupo III:** Hidrocefalia Comunicante $\rightarrow$ DVP.
  - **Grupo IV:** Hidrocefalia Pediátrica em Cenário de Recursos Limitados $\rightarrow$ ETV/CPC ou DVP.
  - **Grupo V:** Hidrocefalia de Pressão Normal (iNPH) $\rightarrow$ Tap Test $\rightarrow$ DVP ajustável.

### 7. Simulador de Casos Clínicos Interativos
- **Caso 1:** Lactente de 4 meses com macrocefalia progressiva pós-sepse neonatal em Nampula.
- **Caso 2:** Idoso de 73 anos com marcha magnética, quedas, incontinência e padrão DESH.
- **Caso 3:** Adolescente de 16 anos com cefaleia noturna matinal, vômitos e massa obstrutiva do aqueduto.
- **Caso 4:** Vítima de TCE grave com hemorragia intraventricular aguda e Tríade de Cushing incipiente.
- Sistema de confirmação de conduta com justificativas científicas completas e registro de progresso no navegador (*localStorage*).

### 8. Quiz Formativo & Flashcards de Repetição Ativa
- **Quiz:** Questões de múltipla escolha com justificativas fundamentadas na literatura e animação de comemoração com alta pontuação.
- **Flashcards:** Cartões interativos (pergunta/resposta) com opção de marcar cartões como dominados.

### 9. Biblioteca de Referências em Formato APA 7.ª Edição
- Citações completas dos artigos primários com botões para copiar a referência e links diretos para os DOIs oficiais.
- Glossário neurocirúrgico dos termos anatômicos mais utilizados.

---

## 👥 Público-Alvo

- **Estudantes de Graduação em Medicina:** Fixação de anatomia e histologia funcional do SNC e semiologia da hipertensão intracraniana.
- **Residentes de Neurocirurgia e Neurologia:** Estudo do planejamento cirúrgico, seleção de sistemas de derivação e protocolos de tratamento.
- **Médicos de Pediatria e Cuidados Primários:** Reconhecimento precoce do perímetro cefálico anômalo e encaminhamento oportuno de lactentes com risco de atraso neuropsicomotor.

---

## 🛠 Tecnologias Utilizadas

- **React 19 & TypeScript:** Interface modular baseada em componentes funcionais e tipagem estrita.
- **Tailwind CSS v4:** Estilização médica dark-mode com paleta clínica de alto contraste (*Slate*, *Cyan*, *Teal*, *Rose*, *Amber*).
- **Lucide Icons:** Iconografia técnica e anatômica padronizada.
- **Vite 8:** Bundler e ambiente de compilação rápido.
- **Canvas-Confetti:** Feedback visual positivo ao concluir casos clínicos e testes avaliativos.

---

## 💻 Como Executar o Projeto

1. **Instalar as dependências:**
   ```bash
   npm install
   ```

2. **Executar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   A aplicação estará disponível em: `http://localhost:3000`

3. **Verificação de tipagem (Lint):**
   ```bash
   npm run lint
   ```

4. **Compilar para produção:**
   ```bash
   npm run build
   ```

---

## 📚 Referências Bibliográficas Principais

- **Coulter, I. C., Dewan, M. C., Tailor, J., Ibrahim, G. M., & Kulkarni, A. V. (2021).** Endoscopic third ventriculostomy and choroid plexus cauterization (ETV/CPC) for hydrocephalus of infancy: A technical review. *Child's Nervous System*, 37(11), 3509–3519. https://doi.org/10.1007/s00381-021-05209-5
- **Del Bigio, M. R. (1993).** Neuropathological changes caused by hydrocephalus. *Acta Neuropathologica*, 85(6), 573–585. https://doi.org/10.1007/BF00334666
- **Deng, Z., et al. (2025).** The role of choroid plexus in hydrocephalus from the perspective of structure and function: A therapeutic target. *Molecular Neurobiology*, 62(7), 9133–9150. https://doi.org/10.1007/s12035-025-04823-7
- **Kelley, D. H., & Thomas, J. H. (2023).** Cerebrospinal fluid flow. *Annual Review of Fluid Mechanics*, 55, 237–264. https://doi.org/10.1146/annurev-fluid-120720-011638
- **Kulkarni, A. V., Schiff, S. J., Mbabazi-Kabachelor, E., et al. (2017).** Endoscopic treatment versus shunting for infant hydrocephalus in Uganda. *New England Journal of Medicine*, 377(25), 2456–2464. https://doi.org/10.1056/NEJMoa1707568
- **Liu, X., Zhi, H., Czosnyka, M., Robba, C., et al. (2024).** Advancing hydrocephalus management: Pathogenesis insights, therapeutic innovations, and emerging challenges. *Aging and Disease*, 17(1), 185–225. https://doi.org/10.14336/AD.2024.1434
- **Liu, R., Zhang, Z., Chen, Y., et al. (2022).** Choroid plexus epithelium and its role in neurological diseases. *Frontiers in Molecular Neuroscience*, 15, 949231. https://doi.org/10.3389/fnmol.2022.949231
- **Minta, K. J., Kannan, S., & Kaliaperumal, C. (2024).** Outcomes of endoscopic third ventriculostomy (ETV) and ventriculoperitoneal shunt (VPS) in the treatment of paediatric hydrocephalus: Systematic review and meta-analysis. *Child's Nervous System*, 40(4), 1045–1052. https://doi.org/10.1007/s00381-023-06225-3
- **Nakajima, M., Yamada, S., Miyajima, M., Ishii, K., et al. (2021).** Guidelines for management of idiopathic normal pressure hydrocephalus (third edition): Endorsed by the Japanese Society of Normal Pressure Hydrocephalus. *Neurologia Medico-Chirurgica*, 61(2), 63–97. https://doi.org/10.2176/nmc.st.2020-0292
- **Peña Pino, I., et al. (2024).** Structural and functional connectivity in hydrocephalus: A scoping review. *Neurosurgical Review*, 47(1), 201. https://doi.org/10.1007/s10143-024-02430-z
- **Tullberg, M., et al. (2024).** Classification of chronic hydrocephalus in adults: A systematic review and analysis. *World Neurosurgery*, 183, 113–122. https://doi.org/10.1016/j.wneu.2023.12.094

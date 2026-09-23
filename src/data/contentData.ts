import { VentricleStructure, ClinicalCase, Flashcard, QuizQuestion } from '../types/hydrocephalus';

export const VENTRICULAR_STRUCTURES: VentricleStructure[] = [
  {
    id: 'lateral',
    name: 'Ventrículos Laterais (I e II)',
    latinName: 'Ventriculi laterales',
    role: 'Principal local de produção de LCR através de volumosos plexos coroideus nos cornos temporal, corpo e átrio.',
    location: 'Telencéfalo (hemisférios cerebrais direito e esquerdo)',
    histologyLink: 'choroid',
    pathologyRisk: 'Ventriculomegalia simétrica ou assimétrica; compressão do corpo caloso e estiramento da substância branca periventricular.',
    coordinates: { x: 38, y: 32 }
  },
  {
    id: 'monro',
    name: 'Forames Interventriculares de Monro',
    latinName: 'Foramina interventricularia',
    role: 'Conectam cada ventrículo lateral ao terceiro ventrículo. Limite anatômico entre telencéfalo e diencéfalo.',
    location: 'Entre o fórnix (anterior) e a extremidade anterior do tálamo',
    histologyLink: 'ependyma',
    pathologyRisk: 'Obstrução univentricular ou biventricular por cistos colóides, subependimomas ou neurocitomas centrais.',
    coordinates: { x: 44, y: 44 }
  },
  {
    id: 'third',
    name: 'Terceiro Ventrículo',
    latinName: 'Ventriculus tertius',
    role: 'Cavidade estreita na linha média que recebe LCR de ambos os forames de Monro e abriga plexo coroideu no teto.',
    location: 'Diencéfalo (entre os tálamos e hipotálamo)',
    histologyLink: 'ependyma',
    pathologyRisk: 'Alvo neurocirúrgico primário para a ETV (através do assoalho do III ventrículo na membrana pré-mamilar para a cisterna interpeduncular).',
    coordinates: { x: 49, y: 50 }
  },
  {
    id: 'aqueduct',
    name: 'Aqueduto Cerebral de Sylvius',
    latinName: 'Aqueductus cerebri',
    role: 'Canal estreito (~15 mm de comprimento, 1-2 mm de diâmetro) que drena o III para o IV ventrículo.',
    location: 'Mesencéfalo (dorsal aos pedúnculos cerebrais e ventral aos colículos tectais)',
    histologyLink: 'ependyma',
    pathologyRisk: 'Ponto crítico mais estreito do sistema. Sítio clássico de estenose congênita (L1CAM), membranas e gliose pós-infecciosa/hemorrágica (causa dilatação do III e laterais com IV ventrículo normal).',
    coordinates: { x: 55, y: 60 }
  },
  {
    id: 'fourth',
    name: 'Quarto Ventrículo',
    latinName: 'Ventriculus quartus',
    role: 'Cavidade rômbica entre a ponte/bulbo e o cerebelo. Possui plexo coroideu em seu teto inferior (tela coroideia).',
    location: 'Fossa posterior (tronco encefálico e cerebelo)',
    histologyLink: 'choroid',
    pathologyRisk: 'Compressão por meduloblastomas, ependimomas ou cistos de Dandy-Walker; risco de "quarto ventrículo isolado" pós-derivação.',
    coordinates: { x: 58, y: 70 }
  },
  {
    id: 'outlets',
    name: 'Forames de Magendie e Luschka',
    latinName: 'Apertura mediana et laterales ventriculi quarti',
    role: 'Vias de saída anatômicas do sistema ventricular interno para as cisternas do espaço subaracnoideo basal (cisterna magna e pontina).',
    location: 'Magendie (mediano/posterior) e Luschka (dois laterais nos recessos)',
    histologyLink: 'subarachnoid',
    pathologyRisk: 'Oclusão pós-meningítica por exsudato inflamatório organizado e fibrose aracnoideia, frequente em África subsaariana.',
    coordinates: { x: 62, y: 79 }
  },
  {
    id: 'subarachnoid',
    name: 'Espaço Subaracnoideo e Drenagem',
    latinName: 'Spatium subarachnoideum',
    role: 'Circulação do LCR em torno dos hemisférios e medula espinhal até os locais de absorção venosa e linfática.',
    location: 'Entre a aracnoide-máter e a pia-máter',
    histologyLink: 'subarachnoid',
    pathologyRisk: 'Bloqueio da reabsorção (hidrocefalia comunicante) por hemorragia subaracnoidea, meningite, aracnoidite e alteração no iNPH.',
    coordinates: { x: 30, y: 15 }
  }
];

export const QUANTITATIVE_DATA = {
  totalVolumeAdult: 150, // mL
  ventricularVolume: 25, // mL (~15-25mL)
  subarachnoidVolume: 125, // mL
  dailyProduction: 500, // mL/dia (faixa 400-600)
  hourlyProduction: 20.8, // mL/h
  minuteProduction: 0.35, // mL/min
  dailyTurnover: 3.3, // vezes ao dia
  normalICPAdult: '7 - 15 mmHg',
  normalICPLactente: '1.5 - 6 mmHg',
  normalOpenPressurePL: '10 - 20 cmH2O (7 - 15 mmHg)',
};

export const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: 'case-1',
    title: 'Lactente de 4 meses com Macrocefalia Progressiva em Nampula',
    category: 'Subsaariana / Pós-Infecciosa',
    patientProfile: {
      age: '4 meses',
      gender: 'Masculino',
      origin: 'Distrito de Meconta, Província de Nampula, Moçambique',
      history: 'Mãe relata parto domiciliar sem complicações aparentes. Aos 40 dias de vida apresentou quadro febril com irritabilidade e convulsões, tratado em centro de saúde periférico como suspeita de malária/sepsis neonatal. Há 6 semanas a família nota crescimento acelerado do crânio, choro inconsolável e episódios de vômitos.',
      physicalExam: [
        'Perímetro cefálico: 48 cm (> percentil 99, curva cruzando percentis rapidamente)',
        'Fontanela anterior ampla (5x5 cm), tensa, abaulada e não pulsátil',
        'Diástase evidente das suturas coronais e sagitais com veias do couro cabeludo túrgidas',
        'Sinal do "sol poente" (Sunset eyes) bilateralmente com limitação do olhar conjugado superior',
        'Hipertonia em membros inferiores com clônus exaurível'
      ]
    },
    imaging: {
      modality: 'TAC',
      findings: [
        'Dilatação acentuada de ambos os ventrículos laterais e do terceiro ventrículo',
        'Quarto ventrículo de dimensões preservadas/normais',
        'Afilamento acentuado do manto cortical cerebral (espessura frontal < 10 mm)',
        'Sinais de hipoatenuação periventricular compatível com transudação transependimária de LCR'
      ],
      evansIndex: 0.58,
      specialSigns: ['Estenose do aqueduto secundária a gliose pós-infecciosa', 'Quarto ventrículo normal']
    },
    options: [
      {
        id: 'opt-a',
        label: 'Derivação Ventriculoperitoneal (DVP) convencional isolada com válvula padrão',
        technique: 'DVP isolada',
        isCorrect: false,
        explanation: 'Embora a DVP seja uma alternativa viável, no contexto subsaariano com alta incidência de disfunção/infecção tardia de válvula e dificuldades de seguimento a longo prazo em áreas remotas, procedimentos endoscópicos definitivos têm papel primordial comprovado.'
      },
      {
        id: 'opt-b',
        label: 'Ventriculostomia Endoscópica do Terceiro Ventrículo associada a Cauterização do Plexo Coroideu (ETV/CPC)',
        technique: 'ETV/CPC',
        isCorrect: true,
        explanation: 'CORRETO! O estudo de Kulkarni et al. (NEJM) e a revisão de Coulter et al. demonstraram a eficácia da ETV/CPC na hidrocefalia pós-infecciosa em lactentes africanos. A ETV contorna a estenose do aqueduto e a CPC reduz a taxa de produção de LCR, permitindo independência de implante de shunt num contexto com limitações de revisão cirúrgica periódica.'
      },
      {
        id: 'opt-c',
        label: 'Punções lombares evacuadoras seriadas semanais',
        technique: 'Punção lombar seriada',
        isCorrect: false,
        explanation: 'CONTRAINDICADO! Trata-se de uma hidrocefalia obstrutiva (aquedutal). A punção lombar não alivia a hipertensão supra-aquedutal e pode precipitar herniação transtentorial descendente.'
      },
      {
        id: 'opt-d',
        label: 'Tratamento medicamentoso conservador com acetazolamida isolada',
        technique: 'Tratamento clínico com inibidor de anidrase carbônica',
        isCorrect: false,
        explanation: 'Inadequado para ventriculomegalia grave com afilamento cortical e hipertensão intracraniana manifesta em lactente; atrasa a intervenção cirúrgica descompressiva urgente.'
      }
    ],
    discussion: 'No contexto de Moçambique e do Hospital Central de Nampula, a hidrocefalia pós-infecciosa pediátrica é um dos maiores desafios. A abordagem com ETV/CPC (conforme Grupo IV do protocolo do HCN) é a estratégia neurocirúrgica preferencial quando a anatomia ventricular é favorável, pois liberta a criança da dependência crônica de cateteres abdominais propensos a infecção e obstrução.',
    protocolGroup: 'Grupo IV'
  },
  {
    id: 'case-2',
    title: 'Idoso de 73 anos com Lentificação Cognitiva, Quedas e Incontinência',
    category: 'iNPH / Idoso',
    patientProfile: {
      age: '73 anos',
      gender: 'Feminino',
      origin: 'Maputo',
      history: 'Apresenta há 14 meses dificuldade progressiva na marcha, descrita pelos filhos como "passos curtos e pés colados ao chão", com três episódios de quedas nos últimos meses. Subsequentemente, desenvolveu apatia, esquecimentos para fatos recentes e urge-incontinência urinária há 4 meses.',
      physicalExam: [
        'Marcha com base alargada, passos curtos e hesitantes (marcha magnética/aprática)',
        'Teste Timed Up and Go (TUG): 28 segundos (anormal)',
        'Mini-Mental (MEEM): 21/30 (déficit executivo e lentificação psicomotora)',
        'Sem rigidez em roda dentada clássica, sem tremores de repouso'
      ]
    },
    imaging: {
      modality: 'RM',
      findings: [
        'Ventriculomegalia desproporcional sem evidência de obstrução do fluxo interno',
        'Padrão DESH: dilatação das fissuras de Sylvius com estreitamento acentuado dos sulcos na convexidade superior e linha média',
        'Ângulo caloso no corte coronal ao nível da comissura posterior: 74° (< 90°)'
      ],
      evansIndex: 0.38,
      callosalAngle: 74,
      specialSigns: ['Padrão DESH positivo', 'Ângulo Caloso < 90°', 'Ausência de sulcos dilatados na alta convexidade']
    },
    options: [
      {
        id: 'opt-a',
        label: 'Rotular como Doença de Alzheimer avançada e prescrever apenas anticolinesterásicos',
        technique: 'Tratamento clínico de demência degenerativa',
        isCorrect: false,
        explanation: 'Incorreto. A tríade clínica de Hakim-Adams com padrão de neuroimagem típico (DESH e ângulo caloso < 90°) aponta fortemente para Hidrocefalia de Pressão Normal Idiopática (iNPH), uma das raras formas potencialmente reversíveis de déficit neurológico no idoso.'
      },
      {
        id: 'opt-b',
        label: 'Realizar Teste de Punção Lombar (Tap Test com retirada de 30-50 mL) e indicar DVP com válvula ajustável se resposta positiva',
        technique: 'Tap Test prognóstico seguido de DVP',
        isCorrect: true,
        explanation: 'CORRETO! Conforme as Diretrizes Japonesas de 2021 (Nakajima et al.), o Tap Test permite documentar melhora objetiva da marcha (TUG e velocidade) e cognição, selecionando os pacientes que se beneficiarão de uma Derivação Ventriculoperitoneal (DVP).'
      },
      {
        id: 'opt-c',
        label: 'Ventriculostomia Endoscópica do Terceiro Ventrículo de urgência',
        technique: 'ETV primária',
        isCorrect: false,
        explanation: 'A iNPH é uma hidrocefalia comunicante; a ETV tem taxas de resposta significativamente inferiores à DVP nesta condição e não é a primeira escolha preconizada pelas diretrizes internacionais.'
      },
      {
        id: 'opt-d',
        label: 'Indicação de craniectomia descompressiva',
        technique: 'Craniectomia',
        isCorrect: false,
        explanation: 'Não há hipertensão intracraniana aguda refratária com efeito de massa expansivo que justifique descompressão craniana.'
      }
    ],
    discussion: 'Este caso exemplifica a Hidrocefalia de Pressão Normal (iNPH, Grupo V). A tríade de Hakim-Adams (marcha magnética, déficit cognitivo subcortical e distúrbio urinário) combinada ao padrão DESH e ângulo caloso agudo (<90°) prediz alta probabilidade de benefício após derivação com válvula de pressão ajustável.',
    protocolGroup: 'Grupo V'
  },
  {
    id: 'case-3',
    title: 'Adolescente de 16 anos com Cefaleia Noturna, Vômitos e Diplopia',
    category: 'Obstrutiva Tumoral',
    patientProfile: {
      age: '16 anos',
      gender: 'Masculino',
      origin: 'Hospital Central de Nampula',
      history: 'Encaminhado com história de 3 semanas de cefaleia holocraniana intensa matinal e que o desperta à noite, acompanhada de vômitos em jato sem náusea prévia. Há 4 dias começou a queixar-se de visão dupla horizontal ao olhar para os lados.',
      physicalExam: [
        'Escala de Coma de Glasgow: 14 (sonolento, mas orientado)',
        'Fundoscopia: papiledema bilateral acentuado com hemorragias em chama de vela',
        'Paresia do VI nervo craniano (abducente) bilateral (falso sinal localizatório de HIC)',
        'Reflexos osteotendíneos vivos, sem déficits motores focais'
      ]
    },
    imaging: {
      modality: 'TAC',
      findings: [
        'Massa arredondada hiperatenuante com áreas císticas na região da fossa posterior / tecto mesencefálico comprimindo o aqueduto de Sylvius',
        'Dilatação maciça dos ventrículos laterais e do terceiro ventrículo',
        'Quarto ventrículo colapsado e deslocado anteriormente',
        'Apagamento das cisternas perimesencefálicas'
      ],
      evansIndex: 0.44,
      specialSigns: ['Obstrução aquedutal por lesão tumoral', 'Quarto ventrículo colabado', 'Urgência cirúrgica']
    },
    options: [
      {
        id: 'opt-a',
        label: 'Ventriculostomia Endoscópica do Terceiro Ventrículo (ETV) prévia ou simultânea à biópsia/ressecção tumoral',
        technique: 'ETV descompressiva',
        isCorrect: true,
        explanation: 'CORRETO! Na hidrocefalia obstrutiva pura por lesão que oblitera o aqueduto, a ETV restaura prontamente a drenagem do LCR contornando a obstrução antes ou durante a abordagem da lesão primária, evitando a necessidade de um shunt permanente com risco de infecção e metástases peritoneais.'
      },
      {
        id: 'opt-b',
        label: 'Punção lombar imediata para alívio tensional da cefaleia',
        technique: 'Punção lombar diagnóstica/evacuadora',
        isCorrect: false,
        explanation: 'ABSOLUTAMENTE CONTRAINDICADA! Punção lombar na presença de hidrocefalia obstrutiva com gradiente pressórico e lesão expansiva na fossa posterior precipitará herniação de tonsilas cerebelares no forame magno com parada respiratória iminente.'
      },
      {
        id: 'opt-c',
        label: 'Aguardar 14 dias para nova tomografia de controle',
        technique: 'Conduta expectante',
        isCorrect: false,
        explanation: 'Inadmissível. Paciente em risco crítico de deterioração neurológica por hipertensão intracraniana descompensada.'
      },
      {
        id: 'opt-d',
        label: 'Diuréticos orais (espironolactona) e alta ambulatorial',
        technique: 'Medicação ambulatorial',
        isCorrect: false,
        explanation: 'Completamente ineficaz para compressão mecânica tumoral do aqueduto de Sylvius.'
      }
    ],
    discussion: 'Este paciente enquadra-se no Grupo II (Hidrocefalia Obstrutiva com Hipertensão Intracraniana). A ETV é a intervenção de eleição para o controle urgente do LCR, permitindo também inspeção endoscópica ventricular e eventual biópsia antes da cirurgia definitiva da fossa posterior.',
    protocolGroup: 'Grupo II'
  },
  {
    id: 'case-4',
    title: 'Vítima de TCE Grave com Hemorragia Intraventricular e Rebaixamento',
    category: 'Adulto / TCE',
    patientProfile: {
      age: '29 anos',
      gender: 'Masculino',
      origin: 'Emergência Cirúrgica do HCN',
      history: 'Vítima de colisão moto x obstáculo fixo sem capacete. Entrada na sala de emergência intubado. TAC de admissão revelou hemorragia subaracnoidea traumática difusa e volumosa hemorragia intraventricular (HIV) com moldagem hemática dos ventrículos.',
      physicalExam: [
        'Glasgow motor: 3 (localiza estímulos na admissão, evoluindo 6 horas depois para postura de decorticação)',
        'Pupila direita discretamente maior que a esquerda com reflexo fotomotor lentificado',
        'Bradicardia (FC 48 bpm) e elevação pressórica (PA 175/100 mmHg) — Tríade de Cushing incipiente'
      ]
    },
    imaging: {
      modality: 'TAC',
      findings: [
        'Hemorragia intraventricular com coágulos nos cornos occipitais e forames de Monro',
        'Ventriculomegalia aguda com arredondamento dos cornos frontais e temporais',
        'Efeito compressivo agudo com perda dos sulcos corticais difusos'
      ],
      evansIndex: 0.39,
      specialSigns: ['HIV com coágulos obstrutivos', 'Tríade de Cushing', 'Hipertensão intracraniana refratária']
    },
    options: [
      {
        id: 'opt-a',
        label: 'Instalação Imediata de Derivação Ventricular Externa (DVE) com Cateter no Ponto de Kocher',
        technique: 'DVE de emergência',
        isCorrect: true,
        explanation: 'CORRETO! Trata-se de uma emergência neurocirúrgica aguda (Grupo I). A DVE permite drenagem urgente e contínua do LCR hemorrágico, alívio da PIC descompensada e monitorização manométrica contínua da pressão intracraniana.'
      },
      {
        id: 'opt-b',
        label: 'Implante imediato de Derivação Ventriculoperitoneal (DVP) permanente definitiva',
        technique: 'DVP definitiva de emergência',
        isCorrect: false,
        explanation: 'Contraindicado na fase hemática aguda! O LCR com alta carga de sangue e proteínas (hematócrito e debris) causa obstrução imediata da válvula e do cateter distal peritoneal em quase 100% dos casos.'
      },
      {
        id: 'opt-c',
        label: 'Ventriculostomia Endoscópica do Terceiro Ventrículo (ETV)',
        technique: 'ETV no LCR sanguinolento',
        isCorrect: false,
        explanation: 'Visibilidade quase nula pelo sangue nos ventrículos, além do risco de hemorragia e insucesso por falha na reabsorção aracnoidea basal.'
      },
      {
        id: 'opt-d',
        label: 'Hiperventilação prolongada isolada e repouso no leito a 0 graus',
        technique: 'Conduta clínica inadequada',
        isCorrect: false,
        explanation: 'Elevação do leito deve ser a 30°; hiperventilação excessiva causa isquemia cerebral por vasoconstrição sem resolver o bloqueio liquórico mecânico.'
      }
    ],
    discussion: 'No Grupo I (Emergência com Deterioração Neurológica), a DVE é o padrão-ouro salvador de vidas. Restaura a complacência craniana na curva de Monro-Kellie antes da ocorrência de lesão isquêmica irreversível ou herniação uncal.',
    protocolGroup: 'Grupo I'
  }
];

export const FLASHCARDS: Flashcard[] = [
  {
    id: 'fc-1',
    category: 'Histologia',
    question: 'Qual a diferença histológica crítica entre o epêndima comum e o epitélio do plexo coroideu?',
    answer: 'O epêndima comum possui junções intercelulares permeáveis e cílios para fluxo local. O epitélio do plexo coroideu possui zônulas de oclusão (tight junctions) contínuas, formando a Barreira Sangue–LCR.',
    details: 'Enquanto o epêndima permite troca livre entre o parênquima cerebral e o LCR, o epitélio coroideu bloqueia a difusão passiva a partir dos capilares fenestrados subjacentes.'
  },
  {
    id: 'fc-2',
    category: 'Quantitativo',
    question: 'Quais são os volumes de LCR: volume total, produção diária e taxa de renovação (turnover)?',
    answer: 'Volume total: ~150 mL (adulto). Produção diária: ~500 mL/dia (~20 mL/h ou 0,33-0,35 mL/min). Renovação diária: ~3,3 vezes ao dia.',
    details: 'Uma falha contínua mínima na taxa de absorção de apenas alguns mililitros por hora leva à retenção maciça em 24 horas.'
  },
  {
    id: 'fc-3',
    category: 'Anatomia e Fluxo',
    question: 'Descreva a sequência completa de circulação do LCR desde a sua produção principal até as cisternas basais.',
    answer: 'Plexos coroideus → Ventrículos laterais → Forames de Monro → Terceiro ventrículo → Aqueduto de Sylvius → Quarto ventrículo → Forames de Magendie e Luschka → Espaço subaracnoideo basal e espinhal.',
    details: 'A partir do espaço subaracnoideo, o LCR é absorvido pelas granulações aracnoideias, vasos linfáticos meníngeos e sistema glinfático.'
  },
  {
    id: 'fc-4',
    category: 'Doutrina de Monro-Kellie',
    question: 'O que preconiza a Doutrina de Monro-Kellie e como ela explica a transição para a hipertensão intracraniana descompensada?',
    answer: 'V_intracraniano = V_cérebro + V_sangue + V_LCR ≈ constante. Quando os mecanismos compensatórios (deslocamento venoso e de LCR) esgotam-se, pequenos aumentos de volume causam elevação exponencial da PIC.',
    details: 'Na curva de complacência intracraniana, atinge-se o ponto de inflexão crítico onde a complacência cai a zero.'
  },
  {
    id: 'fc-5',
    category: 'Neuroimagem',
    question: 'Como é calculado o Índice de Evans e qual o ponto de corte para ventriculomegalia?',
    answer: 'Índice de Evans = (Maior diâmetro dos cornos frontais) / (Maior diâmetro interno da tábua óssea craniana no mesmo corte). Valor > 0,30 indica ventriculomegalia.',
    details: 'Importante: Ventriculomegalia isolada NÃO equivale a hidrocefalia ativa, pois ocorre também na atrofia cerebral ex-vacuo.'
  },
  {
    id: 'fc-6',
    category: 'iNPH / Idoso',
    question: 'Quais são os componentes da Tríade de Hakim-Adams e o que define o padrão radiológico DESH?',
    answer: 'Tríade: Distúrbio da marcha (magnética/aprática), Déficit cognitivo (lentificação subcortical) e Incontinência urinária. DESH: Fissuras de Sylvius dilatadas com colapso dos sulcos na alta convexidade.',
    details: 'DESH = Disproportionately Enlarged Subarachnoid-space Hydrocephalus. É um forte preditor de boa resposta à derivação na iNPH.'
  },
  {
    id: 'fc-7',
    category: 'Cirurgia Endoscópica',
    question: 'Qual o mecanismo e a anatomia da ETV (Ventriculostomia Endoscópica do Terceiro Ventrículo)?',
    answer: 'Consiste na perfuração controlada do assoalho do terceiro ventrículo (membrana pré-mamilar, anterior aos corpos mamilares e posterior ao quiasma) comunicando com a cisterna interpeduncular.',
    details: 'Cria um bypass interno natural para o LCR contornar a obstrução do aqueduto ou quarto ventrículo sem a presença de corpo estranho.'
  },
  {
    id: 'fc-8',
    category: 'Contexto Africano / HCN',
    question: 'Por que a associação ETV + CPC (cauterização do plexo coroideu) é de valor estratégico em lactentes africanos com hidrocefalia pós-infecciosa?',
    answer: 'Porque reduz a taxa de produção de LCR em até 30-50% e cria saída interna, evitando shunts com risco elevado de infecção e complicações mecânicas em áreas com acesso cirúrgico limitado para revisões periódicas.',
    details: 'Comprovado no estudo clínico de Uganda por Kulkarni et al. (NEJM, 2017) e revisão de Coulter et al. (2021).'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    topic: 'Histologia Ventricular',
    question: 'Sobre as células ependimárias que revestem o sistema ventricular encefálico, assinale a afirmação histológica CORRETA:',
    options: [
      'Apresentam zônulas de oclusão impermeáveis contínuas que impedem a troca hídrica com o parênquima cerebral.',
      'Possuem cílios apicais com batimento sincronizado que auxiliam a propulsão direcional do LCR e microvilosidades na superfície apical.',
      'São derivadas da crista neural e não estabelecem qualquer contato funcional com astrócitos subependimários.',
      'São as únicas responsáveis pela produção de 100% do LCR contido no neuroeixo.'
    ],
    correctIndex: 1,
    explanation: 'As células ependimárias são cúbicas ou colunares, dotadas de cílios apicais cujo movimento sincronizado orienta o fluxo do LCR ao longo das cavidades ventriculares, com microvilosidades para absorção e contato íntimo com astrócitos subjacentes. A barreira hematoliquórica oclusiva reside no epitélio do plexo coroideu, não no epêndima comum.',
    reference: 'Liu, R. et al. (2022); Deng, Z. et al. (2025)'
  },
  {
    id: 'q2',
    topic: 'Dinâmica Quantitativa',
    question: 'Considerando um volume total de LCR de aproximadamente 150 mL em um adulto hígido e uma produção diária média de 500 mL, qual é o turnover aproximado do LCR por dia?',
    options: [
      'Aproximadamente 1 vez a cada 48 horas.',
      'Aproximadamente 3,3 vezes por dia (ou ~20 mL/hora).',
      'Exatamente 10 vezes por dia.',
      'Menos de 0,5 vezes por dia.'
    ],
    correctIndex: 1,
    explanation: 'A taxa de turnover é calculada dividindo a produção diária pelo volume total: 500 mL / 150 mL ≈ 3,3 renovações diárias, correspondendo a cerca de 20 a 21 mL por hora ou 0,33 a 0,35 mL por minuto.',
    reference: 'Kelley, D. H., & Thomas, J. H. (2023)'
  },
  {
    id: 'q3',
    topic: 'Etiologia & Obstrução',
    question: 'Um paciente pediátrico apresenta estenose congênita do aqueduto de Sylvius. Quais cavidades ventriculares apresentarão dilatação no exame de neuroimagem?',
    options: [
      'Apenas o quarto ventrículo dilatado, com os demais colapsados.',
      'Dilatação dos ventrículos laterais e do terceiro ventrículo, com o quarto ventrículo de dimensões normais ou reduzidas.',
      'Dilatação uniforme e simétrica de todos os quatro ventrículos.',
      'Dilatação isolada do espaço subaracnoideo da convexidade sem ventriculomegalia.'
    ],
    correctIndex: 1,
    explanation: 'Como o aqueduto de Sylvius comunica o terceiro com o quarto ventrículo, uma obstrução aquedutal retém o LCR a montante, dilatando os ventrículos laterais e o terceiro ventrículo (triventriculomegalia), enquanto o quarto ventrículo permanece normal.',
    reference: 'Tullberg, M. et al. (2024)'
  },
  {
    id: 'q4',
    topic: 'Diagnóstico & Neuroimagem',
    question: 'Em relação ao Índice de Evans e à neuroimagem da hidrocefalia, é CORRETO afirmar:',
    options: [
      'Um Índice de Evans > 0,30 é patognomônico e fecha isoladamente o diagnóstico de hidrocefalia sem necessidade de correlação clínica.',
      'O Índice de Evans relaciona o diâmetro dos cornos temporais com o diâmetro do forame magno.',
      'O Índice de Evans > 0,30 indica ventriculomegalia, mas não é específico, exigindo distinção cuidadosa com ventriculomegalia por atrofia cerebral (ex-vacuo).',
      'O ângulo caloso em indivíduos com iNPH é tipicamente obtuso, medindo sempre mais de 120 graus.'
    ],
    correctIndex: 2,
    explanation: 'O Índice de Evans é calculado pela razão entre a maior largura dos cornos frontais e a maior largura interna da calvária no mesmo corte tomográfico ou de RM. Embora > 0,30 indique ventriculomegalia, a atrofia senil também dilata os ventrículos (ex-vacuo), demandando sinais adicionais como DESH e ângulo caloso < 90°.',
    reference: 'Nakajima, M. et al. (2021)'
  },
  {
    id: 'q5',
    topic: 'Técnica Neurocirúrgica',
    question: 'Qual é o fundamento técnico e o sítio anatômico de abertura na Ventriculostomia Endoscópica do Terceiro Ventrículo (ETV)?',
    options: [
      'Abertura do assoalho do quarto ventrículo comunicando com o canal medular ependimário.',
      'Fenestração do assoalho do terceiro ventrículo, na membrana pré-mamilar, comunicando com a cisterna interpeduncular.',
      'Punção transparietal direta na fissura silviana com introdução de cateter metálico.',
      'Ressecção total bilateral dos plexos coroideus dos ventrículos laterais por craniotomia ampla.'
    ],
    correctIndex: 1,
    explanation: 'A ETV é realizada avançando o endoscópio através do corno frontal do ventrículo lateral, forame de Monro até o interior do terceiro ventrículo, onde se perfura o assoalho na membrana pré-mamilar para comunicar a cavidade com a cisterna interpeduncular (espaço subaracnoideo basal).',
    reference: 'Coulter, I. C. et al. (2021); Minta, K. J. et al. (2024)'
  },
  {
    id: 'q6',
    topic: 'Realidade em África & HCN',
    question: 'Em hospitais com infraestrutura de países de baixa e média renda (como o Hospital Central de Nampula em Moçambique), qual a principal justificativa clínica para priorizar ETV/CPC em lactentes com hidrocefalia pós-infecciosa quando anatomicamente indicada?',
    options: [
      'A ETV/CPC tem custo material superior à DVP programável importada.',
      'A dependência de shunts (DVP) acarreta alto risco de obstrução e infecção com taxas graves de mortalidade se as revisões cirúrgicas imediatas forem inviáveis devido à distância geográfica.',
      'A DVP é proibida pela Organização Mundial da Saúde em menores de 2 anos.',
      'A CPC erradica completamente as células da glia cerebral.'
    ],
    correctIndex: 1,
    explanation: 'No contexto subsaariano, as famílias frequentemente residem a centenas de quilômetros de centros neurocirúrgicos com transporte precário. A falência mecânica ou infecção de uma DVP é frequentemente fatal. O tratamento endoscópico (ETV/CPC) visa conferir independência duradoura de dispositivos valvulares implantados.',
    reference: 'Kulkarni, A. V. et al. (NEJM, 2017)'
  },
  {
    id: 'q7',
    topic: 'Fisiopatologia & Monro-Kellie',
    question: 'Qual a consequência mecânica da expansão ventricular prolongada sobre o parênquima cerebral segundo a histopatologia e a doutrina de Monro-Kellie?',
    options: [
      'Aumento da proliferação axonal e espessamento do córtex cerebral.',
      'Desnudamento focal do epêndima, compressão da substância branca periventricular, estiramento axonal e isquemia microvascular.',
      'Proliferação compensatória imediata de granulações aracnoideias no interior dos ventrículos.',
      'Aumento progressivo da complacência intracraniana que protege os neurônios indefectivelmente.'
    ],
    correctIndex: 1,
    explanation: 'A pressão transmural aumentada estira e desnuda o revestimento ependimário, comprime a substância branca periventricular (onde passam os tratos corticoespinhais motores), deforma a microcirculação e induz edema transependimário e degeneração axonal.',
    reference: 'Del Bigio, M. R. (1993); Peña Pino, I. et al. (2024)'
  }
];

export const REFERENCES_APA = [
  {
    citation: 'Coulter, I. C., Dewan, M. C., Tailor, J., Ibrahim, G. M., & Kulkarni, A. V. (2021). Endoscopic third ventriculostomy and choroid plexus cauterization (ETV/CPC) for hydrocephalus of infancy: A technical review. Child\'s Nervous System, 37(11), 3509–3519.',
    doi: 'https://doi.org/10.1007/s00381-021-05209-5',
    relevance: 'Técnica cirúrgica da ETV/CPC, indicações pediátricas e experiência em hidrocefalia pós-infecciosa.'
  },
  {
    citation: 'Del Bigio, M. R. (1993). Neuropathological changes caused by hydrocephalus. Acta Neuropathologica, 85(6), 573–585.',
    doi: 'https://doi.org/10.1007/BF00334666',
    relevance: 'Dano tecidual periventricular, desnudamento ependimário e compressão da substância branca cerebral.'
  },
  {
    citation: 'Deng, Z., Wang, H., Zhong, K., Li, Y., Deng, H., Gao, B., Huang, K., Tong, A., & Zhou, L. (2025). The role of choroid plexus in hydrocephalus from the perspective of structure and function: A therapeutic target. Molecular Neurobiology, 62(7), 9133–9150.',
    doi: 'https://doi.org/10.1007/s12035-025-04823-7',
    relevance: 'Histologia e biologia molecular do plexo coroideu como estrutura ativa e alvo terapêutico moderno.'
  },
  {
    citation: 'Kelley, D. H., & Thomas, J. H. (2023). Cerebrospinal fluid flow. Annual Review of Fluid Mechanics, 55, 237–264.',
    doi: 'https://doi.org/10.1146/annurev-fluid-120720-011638',
    relevance: 'Biomecânica, hidrodinâmica do LCR, pulsatilidade e circulação ventricular contemporânea.'
  },
  {
    citation: 'Kulkarni, A. V., Schiff, S. J., Mbabazi-Kabachelor, E., Mugamba, J., Ssenyonga, P., Donnelly, B., Levenbach, J., Monga, V., Peterson, M., MacDonald, M., et al. (2017). Endoscopic treatment versus shunting for infant hydrocephalus in Uganda. New England Journal of Medicine, 377(25), 2456–2464.',
    doi: 'https://doi.org/10.1056/NEJMoa1707568',
    relevance: 'Ensaio clínico de referência mundial comparando ETV/CPC e derivação ventriculoperitoneal em lactentes africanos.'
  },
  {
    citation: 'Liu, X., Zhi, H., Czosnyka, M., Robba, C., Czosnyka, Z., Summers, J. L., Yu, H., Tong, X., Gao, G., Xiao, G., et al. (2024). Advancing hydrocephalus management: Pathogenesis insights, therapeutic innovations, and emerging challenges. Aging and Disease, 17(1), 185–225.',
    doi: 'https://doi.org/10.14336/AD.2024.1434',
    relevance: 'Fisiopatologia moderna, interação neurovascular, sistema glinfático e inovação no manejo clínico-cirúrgico.'
  },
  {
    citation: 'Liu, R., Zhang, Z., Chen, Y., Liao, J., Wang, Y., Liu, J., Lin, Z., & Xiao, G. (2022). Choroid plexus epithelium and its role in neurological diseases. Frontiers in Molecular Neuroscience, 15, 949231.',
    doi: 'https://doi.org/10.3389/fnmol.2022.949231',
    relevance: 'Barreira sangue–LCR, junções comunicantes e resposta imune local.'
  },
  {
    citation: 'Minta, K. J., Kannan, S., & Kaliaperumal, C. (2024). Outcomes of endoscopic third ventriculostomy (ETV) and ventriculoperitoneal shunt (VPS) in the treatment of paediatric hydrocephalus: Systematic review and meta-analysis. Child\'s Nervous System, 40(4), 1045–1052.',
    doi: 'https://doi.org/10.1007/s00381-023-06225-3',
    relevance: 'Meta-análise comparando taxas de sobrevida livre de falha e complicações entre ETV e DVP em crianças.'
  },
  {
    citation: 'Nakajima, M., Yamada, S., Miyajima, M., Ishii, K., et al. (2021). Guidelines for management of idiopathic normal pressure hydrocephalus (third edition): Endorsed by the Japanese Society of Normal Pressure Hydrocephalus. Neurologia Medico-Chirurgica, 61(2), 63–97.',
    doi: 'https://doi.org/10.2176/nmc.st.2020-0292',
    relevance: 'Diretrizes oficiais japonesas de 2021 para diagnóstico de iNPH, critérios DESH, ângulo caloso e seleção cirúrgica.'
  },
  {
    citation: 'Peña Pino, I., Fellows, E., McGovern, R. A., Chen, C. C., & Sandoval-Garcia, C. (2024). Structural and functional connectivity in hydrocephalus: A scoping review. Neurosurgical Review, 47(1), 201.',
    doi: 'https://doi.org/10.1007/s10143-024-02430-z',
    relevance: 'Conectividade e redes de substância branca cerebral acometidas na ventriculomegalia crônica.'
  },
  {
    citation: 'Tullberg, M., Toma, A. K., Yamada, S., Laurell, K., Miyajima, M., Watkins, L. D., & Wikkelsø, C. (2024). Classification of chronic hydrocephalus in adults: A systematic review and analysis. World Neurosurgery, 183, 113–122.',
    doi: 'https://doi.org/10.1016/j.wneu.2023.12.094',
    relevance: 'Classificação moderna da hidrocefalia do adulto além do paradigma estrito obstrutiva vs comunicante.'
  }
];

export const HCN_PROTOCOL_GROUPS = [
  {
    group: 'Grupo I',
    name: 'Hidrocefalia Aguda com Deterioração Neurológica',
    urgency: 'Emergência Imediata (< 2 horas)',
    profile: 'TCE, hemorragia intraventricular maciça, tumores em herniação iminente com rebaixamento de consciência ou Tríade de Cushing.',
    initialAction: 'Instalação de Derivação Ventricular Externa (DVE) de urgência no ponto de Kocher.',
    keyGoals: 'Alívio manométrico imediato da PIC descompensada, monitorização e estabilização para intervenção etiológica secundária.'
  },
  {
    group: 'Grupo II',
    name: 'Hidrocefalia Obstrutiva (Não Comunicante)',
    urgency: 'Urgente a Eletiva Rápida',
    profile: 'Estenose aquedutal, cisto colóide de Monro, tumores de fossa posterior ou pineal obstruindo vias internas.',
    initialAction: 'Avaliar preferencialmente Ventriculostomia Endoscópica do Terceiro Ventrículo (ETV).',
    keyGoals: 'Restauração do fluxo fisiológico por bypass pré-mamilar sem implante de corpo estranho permanente. Biópsia associada se tumoral.'
  },
  {
    group: 'Grupo III',
    name: 'Hidrocefalia Comunicante do Adulto / Secundária',
    urgency: 'Eletiva Prioritária',
    profile: 'Pós-meningite no adulto, pós-hemorragia subaracnoidea tardia, pós-traumática não obstrutiva.',
    initialAction: 'Avaliar Derivação Ventriculoperitoneal (DVP) com válvula de pressão apropriada.',
    keyGoals: 'Drenagem contínua para cavidade com alta capacidade de reabsorção (peritônio). Considerar cateter impregnado com antimicrobiano.'
  },
  {
    group: 'Grupo IV',
    name: 'Hidrocefalia Pediátrica em Cenário com Recursos Limitados',
    urgency: 'Prioritária (Prevenção de dano neurocognitivo)',
    profile: 'Lactentes e crianças com hidrocefalia pós-infecciosa (meningite/sepsis neonatal) ou congênita (mielomeningocele/estenose).',
    initialAction: 'Abordagem combinada: ETV + Cauterização do Plexo Coroideu (ETV/CPC) como 1ª escolha anatômica, ou DVP se cisterna inacessível.',
    keyGoals: 'Independência permanente de shunt na realidade do HCN / Moçambique, mitigando complicações por perda de seguimento geográfico.'
  },
  {
    group: 'Grupo V',
    name: 'Hidrocefalia de Pressão Normal (iNPH)',
    urgency: 'Eletiva Programada',
    profile: 'Idosos com alteração da marcha, déficit executivo e urgência miccional (Hakim-Adams), com imagem sugestiva (DESH, ângulo caloso < 90°).',
    initialAction: 'Avaliação clínica rigorosa + Teste de Punção Lombar (Tap Test com TUG pré e pós-drenagem) → DVP com válvula programável.',
    keyGoals: 'Reversão de sintomas motores e cognitivos com menor risco de hiperdrenagem ou hematoma subdural.'
  }
];

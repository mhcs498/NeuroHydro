export type SectionTab = 
  | 'atlas' 
  | 'fisiopatologia' 
  | 'etiologia' 
  | 'diagnostico' 
  | 'cirurgia' 
  | 'protocolo' 
  | 'casos' 
  | 'quiz' 
  | 'referencias';

export interface VentricleStructure {
  id: string;
  name: string;
  latinName: string;
  role: string;
  location: string;
  histologyLink?: 'ependyma' | 'choroid' | 'subarachnoid';
  pathologyRisk: string;
  coordinates: { x: number; y: number };
}

export interface HistologyLayer {
  name: string;
  description: string;
  keyFeatures: string[];
  clinicalRelevance: string;
  cellTypes: string;
}

export interface ClinicalCase {
  id: string;
  title: string;
  category: 'Pediátrico' | 'Adulto / TCE' | 'iNPH / Idoso' | 'Subsaariana / Pós-Infecciosa' | 'Obstrutiva Tumoral';
  patientProfile: {
    age: string;
    gender: string;
    origin: string;
    history: string;
    physicalExam: string[];
  };
  imaging: {
    modality: 'TAC' | 'RM' | 'Ultrassonografia Transfontanelar';
    findings: string[];
    evansIndex: number;
    callosalAngle?: number;
    specialSigns?: string[];
  };
  options: {
    id: string;
    label: string;
    technique: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  discussion: string;
  protocolGroup: 'Grupo I' | 'Grupo II' | 'Grupo III' | 'Grupo IV' | 'Grupo V';
}

export interface Flashcard {
  id: string;
  category: string;
  question: string;
  answer: string;
  details: string;
}

export interface QuizQuestion {
  id: string;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  reference: string;
}

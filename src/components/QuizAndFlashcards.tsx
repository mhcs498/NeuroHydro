import React, { useState } from 'react';
import { QUIZ_QUESTIONS, FLASHCARDS } from '../data/contentData';
import { QuizQuestion, Flashcard } from '../types/hydrocephalus';
import { 
  HelpCircle, 
  RotateCw, 
  CheckCircle2, 
  XCircle, 
  Award, 
  BookOpen, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  BookmarkCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizAndFlashcardsProps {
  onQuizComplete: (score: { correct: number; total: number }) => void;
}

export const QuizAndFlashcards: React.FC<QuizAndFlashcardsProps> = ({ onQuizComplete }) => {
  const [activeMode, setActiveMode] = useState<'quiz' | 'flashcards'>('quiz');

  // Quiz State
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: number }>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);

  // Flashcards State
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredCards, setMasteredCards] = useState<string[]>([]);

  // Current Question
  const question: QuizQuestion = QUIZ_QUESTIONS[currentQIndex];
  const isAnswered = userAnswers[question.id] !== undefined;

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setUserAnswers((prev) => ({ ...prev, [question.id]: idx }));
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setShowExplanation(userAnswers[QUIZ_QUESTIONS[currentQIndex + 1].id] !== undefined);
    } else {
      // Calculate score and finish quiz
      let correctCount = 0;
      QUIZ_QUESTIONS.forEach((q) => {
        if (userAnswers[q.id] === q.correctIndex) {
          correctCount++;
        }
      });
      setIsQuizFinished(true);
      onQuizComplete({ correct: correctCount, total: QUIZ_QUESTIONS.length });

      if (correctCount >= QUIZ_QUESTIONS.length * 0.7) {
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (e) {}
      }
    }
  };

  const handlePrevQuestion = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex((prev) => prev - 1);
      setShowExplanation(userAnswers[QUIZ_QUESTIONS[currentQIndex - 1].id] !== undefined);
    }
  };

  const handleRestartQuiz = () => {
    setUserAnswers({});
    setCurrentQIndex(0);
    setShowExplanation(false);
    setIsQuizFinished(false);
  };

  // Flashcard Handlers
  const currentCard: Flashcard = FLASHCARDS[cardIndex];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % FLASHCARDS.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
  };

  const toggleMastered = (id: string) => {
    setMasteredCards((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Quiz Score Summary
  const calculatedCorrect = QUIZ_QUESTIONS.filter((q) => userAnswers[q.id] === q.correctIndex).length;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 rounded-2xl border border-cyan-900/40 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-semibold mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          Módulo VIII: Avaliação Formativa & Repetição Ativa
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Quiz de Fixação & Flashcards Neurocirúrgicos
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-3xl">
          Teste seus conhecimentos com questões baseadas em evidências científicas e revise os conceitos-chave com flashcards de repetição espaçada.
        </p>
      </div>

      {/* MODE TOGGLE */}
      <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 w-fit">
        <button
          onClick={() => setActiveMode('quiz')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition ${
            activeMode === 'quiz'
              ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Award className="w-4 h-4" />
          Quiz de Múltipla Escolha ({QUIZ_QUESTIONS.length} Questões)
        </button>
        <button
          onClick={() => setActiveMode('flashcards')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition ${
            activeMode === 'flashcards'
              ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <RotateCw className="w-4 h-4" />
          Flashcards de Revisão ({FLASHCARDS.length} Cartões)
        </button>
      </div>

      {/* QUIZ MODE */}
      {activeMode === 'quiz' && (
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
          {!isQuizFinished ? (
            <div className="space-y-6">
              {/* Question Header & Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-cyan-400 font-bold">
                    Questão {currentQIndex + 1} de {QUIZ_QUESTIONS.length}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 font-medium">
                    {question.topic}
                  </span>
                </div>

                <div className="w-full h-2 rounded-full bg-slate-950 border border-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 transition-all duration-300"
                    style={{ width: `${((currentQIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Statement */}
              <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                {question.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((opt, idx) => {
                  const isChosen = userAnswers[question.id] === idx;
                  const isCorrect = idx === question.correctIndex;

                  let cardStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-850';

                  if (isAnswered) {
                    if (isCorrect) {
                      cardStyle = 'bg-emerald-950/50 border-emerald-500 text-emerald-200';
                    } else if (isChosen && !isCorrect) {
                      cardStyle = 'bg-rose-950/50 border-rose-500 text-rose-200';
                    } else {
                      cardStyle = 'bg-slate-950/60 border-slate-800 text-slate-500 opacity-60';
                    }
                  }

                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm transition flex items-start gap-3 cursor-pointer ${cardStyle}`}
                    >
                      <div className="mt-0.5">
                        {isAnswered ? (
                          isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : isChosen ? (
                            <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-700" />
                          )
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center font-mono text-[10px] text-slate-400">
                            {String.fromCharCode(65 + idx)}
                          </div>
                        )}
                      </div>
                      <span className="leading-relaxed">{opt}</span>
                    </div>
                  );
                })}
              </div>

              {/* Formative Explanation Box */}
              {isAnswered && (
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    Comentário Formativo Baseado em Evidências:
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {question.explanation}
                  </p>
                  <span className="text-[11px] text-slate-500 block font-mono pt-1 border-t border-slate-800">
                    Fonte: {question.reference}
                  </span>
                </div>
              )}

              {/* Navigation controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={currentQIndex === 0}
                  onClick={handlePrevQuestion}
                  className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-800 disabled:opacity-30 text-slate-300 text-xs flex items-center gap-1.5 transition"
                >
                  <ChevronLeft className="w-4 h-4" /> Anterior
                </button>

                <button
                  disabled={!isAnswered}
                  onClick={handleNextQuestion}
                  className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition shadow-md shadow-cyan-500/20"
                >
                  {currentQIndex === QUIZ_QUESTIONS.length - 1 ? 'Concluir Quiz' : 'Próxima Questão'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Quiz Completed View */
            <div className="text-center py-8 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto shadow-xl">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">Quiz Concluído!</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Seu aproveitamento no teste de hidrocefalia:
                </p>
              </div>

              <div className="inline-block bg-slate-950 px-8 py-4 rounded-2xl border border-slate-800 font-mono">
                <span className="text-4xl font-extrabold text-cyan-400">
                  {calculatedCorrect} / {QUIZ_QUESTIONS.length}
                </span>
                <span className="text-xs text-slate-400 block mt-1">
                  ({Math.round((calculatedCorrect / QUIZ_QUESTIONS.length) * 100)}% de acerto)
                </span>
              </div>

              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                {calculatedCorrect === QUIZ_QUESTIONS.length
                  ? 'Excepcional! Você dominou todos os aspectos histológicos, fisiopatológicos e neurocirúrgicos da hidrocefalia.'
                  : calculatedCorrect >= QUIZ_QUESTIONS.length * 0.7
                  ? 'Ótimo desempenho! Você compreendeu os pilares cruciais para a prática clínica e tomada de decisão cirúrgica.'
                  : 'Bom esforço! Recomendamos revisar os módulos de Histologia e Protocolo HCN antes de tentar novamente.'}
              </p>

              <button
                onClick={handleRestartQuiz}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition shadow-md"
              >
                Refazer Quiz Completo
              </button>
            </div>
          )}
        </div>
      )}

      {/* FLASHCARDS MODE */}
      {activeMode === 'flashcards' && (
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
            <span className="font-mono text-cyan-400 font-bold">
              Cartão {cardIndex + 1} de {FLASHCARDS.length}
            </span>
            <div className="flex items-center gap-2">
              <span className="bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                {currentCard.category}
              </span>
              <button
                onClick={() => toggleMastered(currentCard.id)}
                className={`flex items-center gap-1 px-2.5 py-0.5 rounded transition ${
                  masteredCards.includes(currentCard.id)
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <BookmarkCheck className="w-3.5 h-3.5" />
                {masteredCards.includes(currentCard.id) ? 'Dominado' : 'Marcar como Dominado'}
              </button>
            </div>
          </div>

          {/* Flashcard Box (Click to Flip) */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[220px] bg-slate-950 rounded-2xl border-2 border-dashed border-slate-800 hover:border-cyan-500/60 p-6 flex flex-col justify-between cursor-pointer transition-all shadow-inner"
          >
            <div className="text-[11px] font-mono text-slate-500 flex items-center justify-between">
              <span>{isFlipped ? 'RESPOSTA CLÍNICA' : 'PERGUNTA / CONCEITO'}</span>
              <span className="text-cyan-400 flex items-center gap-1">
                <RotateCw className="w-3 h-3" /> Clique para virar
              </span>
            </div>

            <div className="py-6 text-center">
              {!isFlipped ? (
                <h4 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                  {currentCard.question}
                </h4>
              ) : (
                <div className="space-y-3 animate-fadeIn">
                  <p className="text-sm sm:text-base font-semibold text-emerald-300 leading-relaxed">
                    {currentCard.answer}
                  </p>
                  <p className="text-xs text-slate-400 italic">
                    {currentCard.details}
                  </p>
                </div>
              )}
            </div>

            <div className="text-center text-[10px] text-slate-600 font-mono">
              NeuroHydro Flashcards • Memorização Ativa
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrevCard}
              className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs flex items-center gap-1.5 transition"
            >
              <ChevronLeft className="w-4 h-4" /> Anterior
            </button>

            <span className="text-xs text-slate-400">
              {masteredCards.length} de {FLASHCARDS.length} dominados
            </span>

            <button
              onClick={handleNextCard}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition shadow-md shadow-cyan-500/20"
            >
              Próximo <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

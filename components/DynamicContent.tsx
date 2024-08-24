"use client";
import { useState, useEffect } from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const sentenceArray = [
    [
      { text: "Interbot", className: "text-blue-500 dark:text-blue-500 text-5xl" },
      { text: "guides", className: "font-light" },
      { text: "me", className: "font-light" },
      { text: "through", className: "font-light" },
      { text: "a", className: "font-light" },
      { text: "step-by-step", className: "font-light" },
      { text: "strategy", className: "font-light" },
      { text: "to", className: "font-light" },
      { text: "prepare", className: "font-light" },
      { text: "for", className: "font-light" },
      { text: "a", className: "font-light" },
      { text: "Product", className: "font-light" },
      { text: "Manager", className: "font-light" },
      { text: "interview.", className: "font-light" }
    ],
    [
      { text: "Interbot", className: "text-blue-500 dark:text-blue-500 text-5xl" },
      { text: "analyzes", className: "font-light" },
      { text: "my", className: "font-light" },
      { text: "answer", className: "font-light" },
      { text: "to", className: "font-light" },
      { text: "this", className: "font-light" },
      { text: "behavioral", className: "font-light" },
      { text: "question", className: "font-light" },
      { text: "and", className: "font-light" },
      { text: "suggests", className: "font-light" },
      { text: "improvements.", className: "font-light" }
    ],
    [
      { text: "MCQ", className: "text-blue-500 dark:text-blue-500 text-5xl" },
      { text: "Bot", className: "text-blue-500 dark:text-blue-500 text-5xl" },
      { text: "lets", className: "font-light" },
      { text: "you", className: "font-light" },
      { text: "practice", className: "font-light" },
      { text: "targeted", className: "font-light" },
      { text: "MCQs", className: "font-light" },
      { text: "across", className: "font-light" },
      { text: "various", className: "font-light" },
      { text: "subjects", className: "font-light" },
      { text: "and", className: "font-light" },
      { text: "track", className: "font-light" },
      { text: "your", className: "font-light" },
      { text: "performance", className: "font-light" },
      { text: "instantly.", className: "font-light" }
    ],
    [
      { text: "MCQ", className: "text-blue-500 dark:text-blue-500 text-5xl" },
      { text: "Bot", className: "text-blue-500 dark:text-blue-500 text-5xl" },
      { text: "adapts", className: "font-light" },
      { text: "to", className: "font-light" },
      { text: "your", className: "font-light" },
      { text: "level,", className: "font-light" },
      { text: "providing", className: "font-light" },
      { text: "questions", className: "font-light" },
      { text: "that", className: "font-light" },
      { text: "challenge", className: "font-light" },
      { text: "and", className: "font-light" },
      { text: "expand", className: "font-light" },
      { text: "your", className: "font-light" },
      { text: "knowledge.", className: "font-light" }
    ],
    [
      { text: "Commbot", className: "text-blue-500 dark:text-blue-500 text-5xl" },
      { text: "helps", className: "font-light" },
      { text: "me", className: "font-light" },
      { text: "refine", className: "font-light" },
      { text: "my", className: "font-light" },
      { text: "response", className: "font-light" },
      { text: "to", className: "font-light" },
      { text: "the", className: "font-light" },
      { text: "'Tell", className: "font-light" },
      { text: "me", className: "font-light" },
      { text: "about", className: "font-light" },
      { text: "yourself'", className: "font-light" },
      { text: "question", className: "font-light" },
      { text: "for", className: "font-light" },
      { text: "a", className: "font-light" },
      { text: "consulting", className: "font-light" },
      { text: "interview.", className: "font-light" }
    ],
    [
      { text: "Commbot", className: "text-blue-500 dark:text-blue-500 text-5xl" },
      { text: "guides", className: "font-light" },
      { text: "me", className: "font-light" },
      { text: "on", className: "font-light" },
      { text: "how", className: "font-light" },
      { text: "to", className: "font-light" },
      { text: "handle", className: "font-light" },
      { text: "difficult", className: "font-light" },
      { text: "questions", className: "font-light" },
      { text: "while", className: "font-light" },
      { text: "maintaining", className: "font-light" },
      { text: "a", className: "font-light" },
      { text: "positive", className: "font-light" },
      { text: "tone", className: "font-light" },
      { text: "during", className: "font-light" },
      { text: "interviews.", className: "font-light" }
    ],
    [
      { text: "Resume", className: "text-blue-500 dark:text-blue-500 text-5xl" },
      { text: "Bot", className: "text-blue-500 dark:text-blue-500 text-5xl" },
      { text: "prepares", className: "font-light" },
      { text: "you", className: "font-light" },
      { text: "for", className: "font-light" },
      { text: "HR", className: "font-light" },
      { text: "and", className: "font-light" },
      { text: "technical", className: "font-light" },
      { text: "rounds", className: "font-light" },
      { text: "with", className: "font-light" },
      { text: "questions", className: "font-light" },
      { text: "tailored", className: "font-light" },
      { text: "specifically", className: "font-light" },
      { text: "to", className: "font-light" },
      { text: "your", className: "font-light" },
      { text: "resume.", className: "font-light" }
    ],
    [
      { text: "Resume", className: "text-blue-500 dark:text-blue-500 text-5xl" },
      { text: "Bot", className: "text-blue-500 dark:text-blue-500 text-5xl" },
      { text: "helps", className: "font-light" },
      { text: "you", className: "font-light" },
      { text: "identify", className: "font-light" },
      { text: "potential", className: "font-light" },
      { text: "gaps", className: "font-light" },
      { text: "in", className: "font-light" },
      { text: "your", className: "font-light" },
      { text: "experience", className: "font-light" },
      { text: "with", className: "font-light" },
      { text: "focused", className: "font-light" },
      { text: "questions", className: "font-light" },
      { text: "based", className: "font-light" },
      { text: "on", className: "font-light" },
      { text: "your", className: "font-light" },
      { text: "past", className: "font-light" },
      { text: "roles", className: "font-light" },
      { text: "and", className: "font-light" },
      { text: "achievements.", className: "font-light" }
    ]
  ];
  
  
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentenceIndex((prevIndex) =>
        prevIndex === sentenceArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSentenceIndex((prevIndex) =>
        prevIndex === sentenceArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearTimeout(timeout);
  }, [currentSentenceIndex]);

  return (
    <div className="flex flex-col h-screen bg-left p-10 w-8/12">
      <h1 className="font-bold">INTERAIN</h1>
      <div className="h-full w-full flex items-center">
        {sentenceArray.length > 0 && (
          <TypewriterEffect
            key={currentSentenceIndex}
            words={sentenceArray[currentSentenceIndex]}
          />
        )}
      </div>

    </div>
  );
}

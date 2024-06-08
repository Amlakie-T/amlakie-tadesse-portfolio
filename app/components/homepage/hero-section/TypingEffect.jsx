"use client";

import React, { useEffect, useState, useCallback } from 'react';

const TypingEffect = () => {
  const textArray = [
    'Developer',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer'
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cycleComplete, setCycleComplete] = useState(false);

  const type = useCallback(() => {
    const currentText = textArray[index];
    setText(prevText =>
      isDeleting
        ? currentText.substring(0, prevText.length - 1)
        : currentText.substring(0, prevText.length + 1)
    );

    let typeSpeed = 100; // Slower typing speed
    if (isDeleting) {
      typeSpeed = 50; // Slower deleting speed
    }

    if (!isDeleting && text === currentText) {
      if (index === textArray.length - 1) {
        setCycleComplete(true); // Signal cycle complete
        setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Longer pause at end of cycle
      } else {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end of typing each text
      }
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      if (cycleComplete) {
        setCycleComplete(false); // Reset cycle complete
        setTimeout(type, 2000); // Longer pause after completing the cycle
        return;
      }
    }

    setTimeout(type, typeSpeed);
  }, [text, isDeleting, index, textArray, cycleComplete]);

  useEffect(() => {
    const timeoutId = setTimeout(type, 200);
    return () => clearTimeout(timeoutId);
  }, [type]);

  return (
    <div>
      <h1 id="typing-text">
        <span style={{ color: '#16f2b3', fontWeight: 500 }}>{text}</span>
        <span className="typing-cursor" style={{ width: '5px' }}></span>
      </h1>
      <style>{`
        .typing-cursor {
          display: inline-block;
          width: 4px; /* Adjust cursor width */
          height: 25px; /* Adjust cursor height */
          background-color: #b30059; /* Adjust cursor color */
          animation: blink-animation 1.2s infinite;
          font-weight: 600; /* Adjust cursor weight */
        }

        @keyframes blink-animation {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default TypingEffect;

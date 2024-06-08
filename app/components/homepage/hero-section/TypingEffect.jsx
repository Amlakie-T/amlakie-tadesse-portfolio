"use client";

import React, { useEffect, useState, useCallback } from 'react';

const TypingEffect = () => {
  const textArray = [
    'Developer',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [waitingTime, setWaitingTime] = useState(1000); // Customizable waiting time

  const type = useCallback(() => {
    const currentText = textArray[index];
    setText((prevText) =>
      isDeleting
        ? currentText.substring(0, prevText.length - 1)
        : currentText.substring(0, prevText.length + 1)
    );

    const typeSpeed = 50; // Adjust typing speed

    if (!isDeleting && text === currentText) {
      setTimeout(() => {
        setIsDeleting(true);
      }, typeSpeed); // Wait before deleting
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      const nextIndex = (index + 1) % textArray.length;

      setTimeout(() => {
        setIndex(nextIndex);
        type();
      }, waitingTime); // Consistent waiting time after deletion
    } else {
      setTimeout(type, typeSpeed);
    }
  }, [text, isDeleting, index, textArray, waitingTime]);

  useEffect(() => {
    const timeoutId = setTimeout(type, 500);
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
          width: 5px; /* Adjust cursor width */
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

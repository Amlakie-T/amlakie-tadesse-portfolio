"use client";

import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    const type = () => {
      const currentText = textArray[index];
      setText(prevText =>
        isDeleting
          ? currentText.substring(0, prevText.length - 1)
          : currentText.substring(0, prevText.length + 1)
      );

      let typeSpeed = 100; // Adjust typing speed here
      if (isDeleting) {
        typeSpeed /= 2; // Adjust deleting speed here
      }

      if (!isDeleting && text === currentText) {
        typeSpeed = 1500; // Pause at end, adjust as needed
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }

      setTimeout(type, typeSpeed);
    };

    const timeoutId = setTimeout(type, 100);

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, index, textArray]);

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

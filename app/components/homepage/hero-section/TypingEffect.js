
// TypingEffect.js

import React, { useState, useEffect } from 'react';

const TypingEffect = ({ textArray, typingSpeed }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = textArray[index];

      if (isDeleting) {
        setText(currentText.substring(0, text.length - 1));
      } else {
        setText(currentText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentText) {
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((index + 1) % textArray.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, index, isDeleting, textArray, typingSpeed]);

  return <span>{text}</span>;
};

export default TypingEffect;

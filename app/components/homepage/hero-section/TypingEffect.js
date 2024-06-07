import React, { useEffect, useState } from 'react';

function TypingEffect() {
  const [text, setText] = useState('');
  const textArray = [
    "Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer"
  ];
  let index = 0;
  let isDeleting = false;

  useEffect(() => {
    const type = () => {
      const currentText = textArray[index];
      if (isDeleting) {
        setText(currentText.substring(0, text.length - 1));
      } else {
        setText(currentText.substring(0, text.length + 1));
      }

      let typeSpeed = 100; // Adjust typing speed here

      if (isDeleting) {
        typeSpeed /= 2; // Adjust deleting speed here
      }

      if (!isDeleting && text === currentText) {
        typeSpeed = 1000; // Pause at end, adjust as needed
        isDeleting = true;
      } else if (isDeleting && text === '') {
        isDeleting = false;
        index++;
        if (index === textArray.length) {
          index = 0;
        }
      }

      setTimeout(type, typeSpeed);
    };

    type();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span className="text-[#16f2b3]">
      {text}<span className="typing-cursor"></span>
    </span>
  );
}

export default TypingEffect;

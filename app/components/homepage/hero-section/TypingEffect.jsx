
"use client";
import React from "react";
import Typewriter from "typewriter-effect";

function TypingEffect() {
    return (
        <div>
            <h1 id="typing-text">
                <Typewriter
                    options={{
                        strings: [
                            "Developer",
                            "Software Engineer",
                            "Frontend Developer",
                            "Backend Developer",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 150, // Slower typing speed
                        deleteSpeed: 100, // Slower deleting speed
                        pauseFor: 2000, // Pause before deleting
                    }}
                />
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
}

export default TypingEffect;

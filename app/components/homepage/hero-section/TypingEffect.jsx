
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
                            "Web Developer",
                            "Front-End Developer",
                            "Back-End Developer",
                            "Mobile Developer",
                            "Software Developer",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 150, // Slower typing speed
                        deleteSpeed: 100, // Slower deleting speed
                        pauseFor: 2000, // Pause before deleting
                    }}
                />

                <span> </span>
            </h1>
        </div>
    );
}

export default TypingEffect;

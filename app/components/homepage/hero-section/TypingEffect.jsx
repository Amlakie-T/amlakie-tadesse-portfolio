
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
                            "Android Developer",
                            "Expert in Kotlin and Java",
                            "Web Developer",
                            "Expert in JavaScript and modern Frameworks",
                            "IT Support Engineer",
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

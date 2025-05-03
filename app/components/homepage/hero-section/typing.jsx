import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
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
                deleteSpeed: 50,
            }}
        />
    );
}

export default typing;

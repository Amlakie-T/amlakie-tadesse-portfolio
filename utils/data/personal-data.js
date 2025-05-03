export const personalData = {
  name: "Amlakie Tadesse",
  profile: '/amlakie_t.png',
  designation: "Android Developer, Web Developer, IT Support Engineer",
  description: "I'm Amlakie, an experienced Android Developer and Web Developer adept at creating robust solutions for both mobile apps and websites. Skilled in Android development using Kotlin and Java. Proficient in front-end technologies (HTML, CSS, JavaScript with React.js) and back-end development with Node.js and PHP. Known for problem-solving, mastering new technologies quickly, and collaborating effectively to deliver innovative projects. I am available for any kind of job opportunity that suits my skills and interests.",
  email: 'amlakie.tadese@gmail.com',
  phone: '+251-912-416946',
  address: 'Addis Ababa, Ethiopia',
  github: 'https://github.com/Amlakie-T',
  facebook: 'https://www.facebook.com/Amlakie-T/',
  linkedIn: 'https://www.linkedin.com/in/amlakie/',
  upwork: 'https://www.upwork.com/freelancers/amlakiet/',
  twitter: 'https://twitter.com/Amlakie_T',
  stackOverflow: 'https://stackoverflow.com/users/25429126/amlakie-tadesse',
  leetcode: "https://leetcode.com/amlakie-t/",
  devUsername: "Amlakie-T",
  resume: "https://drive.google.com/file/d/1MaVa0zETs4R4vVpBMhnKmb-h6ade7ujS/view?usp=drive_link"
}

if (process.browser) {
  const designationSpan = document.getElementById("designation");
  const text = personalData.designation;
  let index = 0;

  function type() {
    if (index < text.length) {
      designationSpan.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // Adjust the typing speed here (in milliseconds)
    }
  }

  type();
}

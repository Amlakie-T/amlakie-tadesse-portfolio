export const personalData = {
  name: "Amlakie Tadesse",
  profile: '/amlakie_t.png',
  designation: "Full Stack Developer",
  description: "I'm Amlakie Tadesse, an experienced developer. I work with mobile apps using Java, Kotlin, Flutter, and React Native, and for websites, I use JavaScript with frameworks like React.js, Angular, and Vue.js to create dynamic and responsive web applications. I love solving problems and quickly learning new tech. I am available for any kind of job opportunity that suits my skills and interests.",
  email: 'amlakietad@gmail.com',
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
  resume: "https://drive.google.com/file/d/15IIh_EWX5ouN9mOuuxGjnRzoQ1uTwmHl/view?usp=drive_link"
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

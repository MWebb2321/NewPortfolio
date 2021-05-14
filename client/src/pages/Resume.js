import React from "react";
// import Pdf from "../../public/assets/PDF/Matthew_Webb_Resume";

function Resume() {
  return (
    <div className="resume">
      <h1>Matthew Webb's Resume</h1>
      <embed
        src="./assets/PDF/Matthew_Webb_Resume.PDF"
        view="fit"
        width="80%"
        height="800px"
      />
      <p>
        My coding <a href="./assets/PDF/Matthew_Webb_Resume.PDF">resume</a>.
      </p>
    </div>
  );
}

export default Resume;

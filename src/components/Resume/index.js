import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Elyor Doniyorov</h2>
          <ul>
            <li>
              Full-Stack Web Development, QA Engineering
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/elyor-doniyorov/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="linkedIn"
              />
            </a>
          </p>

          <a
            href="https://docs.google.com/document/d/13cNdAyU89PSpzVD_iZp0HdGQJ_8uI2cwwZ2jBKQgzyw/edit?usp=sharing"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
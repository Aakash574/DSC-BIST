import React from "react";

import "../styles/faq.css";

const Faq = () => {
  return (
    <section id="faq-section">
      <div id="faq-warper" className="container">
        <h1 className="faq-heading">Frequently Asked Questions</h1>
        <div className="row no-gutters">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="question-box">
              <h2>Who can become a member ?</h2>{" "}
              <p>
                The clubs is open to any student, ranging from novice developers
                who are just starting, to advanced developers who want to
                further their skills.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="question-box">
              <h2>How frequently do events and workshops occur?</h2>{" "}
              <p>
                We hold events and workshops two or three in a month mostly
                according to the requirements of the learners as well as team
                members.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="question-box">
              <h2>What should I carry when attending a sessions?</h2>{" "}
              <p>
                We recommend you carry with you a notebook, pen and a laptop
                because more often than not we make our hands dirty with code.
                Most importantly, carry along a healthy dose of curiosity and
                enthusiasm.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="question-box">
              <h2>Who should I reach out to if I have any questions?</h2>{" "}
              <p>
                If you have any questions or comments, please don't hesitate to
                contact us. We would be happy to stay engaged via email even
                after the event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

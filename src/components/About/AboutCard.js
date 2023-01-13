import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saurabh Singh </span>
            from <span className="purple"> New Delhi, India.</span> <br />
            <br /> <span className="purple">Masters of Computer Application, May 2020  </span>
            <br />    Institute of Engineering & Technology, Lucknow Uttar-Pradesh.
            <br />
            <br /> <span className="purple">Bachelors of Science, May 2017 </span>
            <br />  Dr. Rammanohar Lohia Avadh University”, Ayodhya Uttar-Pradesh.
            <br />

          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import "./FAQ.css";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQ() {

  const [active, setActive] = useState(0);

  const faqs = [

    {
      question: "Who can donate blood?",
      answer:
        "Any healthy person between 18 and 65 years of age who meets the medical eligibility criteria can donate blood."
    },

    {
      question: "How often can I donate blood?",
      answer:
        "Generally, men can donate every 3 months and women every 4 months, depending on medical advice."
    },

    {
      question: "Is blood donation safe?",
      answer:
        "Yes. HemoMatch partners only with verified hospitals and blood banks that follow strict medical safety protocols."
    },

    {
      question: "How do I find blood donors near me?",
      answer:
        "Use the 'Find Blood' search by selecting your blood group and location. HemoMatch will display verified nearby donors."
    },

    {
      question: "How are donors verified?",
      answer:
        "Every donor profile is reviewed and verified by the HemoMatch administration before becoming visible to recipients."
    },

    {
      question: "Can I register for blood donation camps?",
      answer:
        "Yes. Visit the Camps section, choose an upcoming event, and click Register to reserve your participation."
    }

  ];

  return (

    <section className="faq-section">

      <div className="container">

        <div className="section-title">

          <span>FAQ</span>

          <h2>Frequently Asked Questions</h2>

          <p>

            Find answers to the most common questions about blood donation
            and using the HemoMatch platform.

          </p>

        </div>

        <div className="faq-container">

          {

            faqs.map((item,index)=>(

              <div
              className={
                active===index
                ? "faq-card active"
                : "faq-card"
              }
              key={index}
              >

                <div
                className="faq-question"
                onClick={()=>setActive(active===index?-1:index)}
                >

                  <h3>{item.question}</h3>

                  {

                    active===index

                    ?

                    <FaChevronUp/>

                    :

                    <FaChevronDown/>

                  }

                </div>

                {

                  active===index &&

                  <div className="faq-answer">

                    <p>

                      {item.answer}

                    </p>

                  </div>

                }

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default FAQ;
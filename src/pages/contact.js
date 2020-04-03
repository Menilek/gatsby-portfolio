import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactForm = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        <h1>GET IN CONTACT</h1>
        <div className="uk-child-width-1-2" uk-grid>
          <form action="https://formspree.io/mknvwrqp" method="POST" className="uk-grid-small uk-align-center">
            <fieldset className="uk-fieldset">
              {/* <legend className="uk-legend">SEND A MESSAGE</legend> */}

                <label className="uk-form-label" for="name">FULL NAME:</label><br />
                <div className="uk-margin">
                  <input className="uk-input" type="text" id="name" name="name" required/>
                </div>

                <label className="uk-form-label" for="email">EMAIL ADDRESS:</label><br />
                <div className="uk-margin">
                    <input className="uk-input" type="email" id="email" name="email" required/>
                </div>

                <label className="uk-form-label" for="subject">SUBJECT:</label><br />
                <div className="uk-margin">
                    <input className="uk-input" type="text" id="subject" name="subject" required/>
                </div>

                <label className="uk-form-label" for="message">MESSAGE:</label><br />
                <div className="uk-margin">
                    <textarea className="uk-textarea" rows="5" id="message" name="message" required></textarea>
                </div>

                <button className="uk-button uk-button-default uk-margin submitBtn">Submit</button>

            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactForm

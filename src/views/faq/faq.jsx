import React from 'react';
import { Layout } from '../../components/layout/Layout';
import './faq.css';

const faq = () => {
  return (
    <Layout>
      <div className="faqContainerHolder">
        <div className="faqContainer container ">
          <div className="faqTitleContainer">
            <p id="faqTitle">
              Welcome to e-robots, the premier online store for robots of all
              types. Below are some frequently asked questions about our store
              and products:
            </p>
          </div>{' '}
          <div className="faqContainerContent">
            <div className="faqLeftColumn">
              <div className="faqImgContainerHolder">
                <img
                  src={require('../../assets/images/robotQuestion.png')}
                  alt=""
                />
                <img
                  src={require('../../assets/images/robotBuidingRobot.png')}
                  alt=""
                />
                <img
                  src={require('../../assets/images/robotCarryBox.png')}
                  alt=""
                />
                <img
                  src={require('../../assets/images/robotSmiling.png')}
                  alt=""
                />
              </div>
            </div>
            <div className="faqRightColumn">
              <div>
                <p className="faqQuestion">
                  Q: What kind of robots do you sell?{' '}
                </p>
                <p className="faqAnswear">
                  A: We sell a wide range of robots for home, business, and
                  companionship. This includes cleaning robots, cooking robots,
                  security robots, companion robots, educational robots, and
                  many more.
                </p>
              </div>
              <div>
                <p className="faqQuestion">
                  Q: Are your products reliable and functional?{' '}
                </p>
                <p className="faqAnswear">
                  A: Yes, we take pride in curating only the highest-quality
                  robots in the market, ensuring that they are reliable and
                  functional. We also provide a warranty for all our products.{' '}
                </p>
              </div>
              <div>
                <p className="faqQuestion">Q: Can I customize my robot?</p>
                <p className="faqAnswear">
                  A: Yes, we offer customization options to personalize your
                  companion robot to suit your preferences. This will make it
                  truly unique and one-of-a-kind.
                </p>
              </div>
              <div>
                <p className="faqQuestion">
                  Q: How do I know which robot is right for me?{' '}
                </p>
                <p className="faqAnswear">
                  A: Our team of experts is passionate about robots and their
                  potential to change the world. We can guide you in choosing
                  the right robot for your specific needs. You can also contact
                  our customer service for assistance.
                </p>
              </div>
              <div>
                <p className="faqQuestion">Q: What is your return policy? </p>
                <p className="faqAnswear">
                  A: If for any reason you are not satisfied with your purchase,
                  you can return it within 30 days for a full refund.{' '}
                </p>{' '}
              </div>
              <div>
                <p className="faqQuestion">
                  {' '}
                  Q: How do I contact customer support?
                </p>{' '}
                <p className="faqAnswear">
                  {' '}
                  A: You can contact us via email, phone, or live chat. Our team
                  is available 24/7 to assist you.{' '}
                </p>
              </div>
              <div>
                <p className="faqQuestion">
                  Q: Do you offer international shipping?{' '}
                </p>
                <p className="faqAnswear">
                  A: Yes, we offer international shipping. However, shipping
                  fees may vary depending on the destination.
                </p>{' '}
              </div>
              <div>
                <p className="faqQuestion">
                  {' '}
                  Q: Is it safe to shop on your website?
                </p>{' '}
                <p className="faqAnswear">
                  {' '}
                  A: Yes, we use the latest encryption technology to ensure that
                  all transactions on our website are secure. We also never
                  share your personal information with third parties.{' '}
                </p>{' '}
              </div>
              <div>
                <p className="faqQuestion">
                  {' '}
                  Q: What payment methods do you accept?
                </p>
                <p className="faqAnswear">
                  A: We accept major credit cards, PayPal, and bank transfers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default faq;

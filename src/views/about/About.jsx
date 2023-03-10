import React from 'react';
import { Layout } from '../../components/layout/Layout';
import './About.css';
import './About.css';

const About = () => {
  return (
    <Layout>
      <div className="outterAboutContainer ">
        <div className="image">
          <img
            id=""
            src={require('../../assets/images/robotdarkbg.png')}
            alt=""
          />
        </div>
        <div className="text">
          <div>
            <h2 className="title">About us...</h2>
          </div>
          <div className="description ">
            <p>
              Welcome to <span>e-robots</span>, the premier online store for
              robots of all types. We believe that technology has the power to
              enhance and improve our lives, and our mission is to bring this
              innovative potential to the masses. From robots for the home, to
              those for industry, business, and companionship, we have something
              for everyone. At <span>e-robots</span>, we are dedicated to
              providing our customers with the best possible shopping
              experience. Our extensive selection of robots is carefully curated
              to include only the highest-quality products, ensuring that you
              receive a product that is both reliable and functional. We
              understand that every customer is unique and has specific needs,
              which is why we offer the ability to customize your companion
              robots to suit your preferences. Our customization options allow
              you to personalize your companion robot in ways that best suit
              your needs, making it truly one-of-a-kind. Our team of experts is
              passionate about robots and their potential to change the world.
              We are committed to providing exceptional customer service and
              support, and our goal is to ensure that you have the best possible
              experience when shopping with us. Whether you are looking for a
              robot for your home, business, or as a companion, we are here to
              help you find the perfect product for your needs. Browse our
              collection of robots today and discover the limitless
              possibilities of technology. At <span>e-robots</span>, we believe
              that the future is now, and we're excited to be a part of it.
            </p>
            <p>(Text generated by AI on chat-GPT-3 in February 2023)</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

import React from 'react';
import './About.css'; // import the CSS file

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>

      <p>
      At our web app, we recognize the importance of accurate and reliable information in the agriculture industry. That's why we've developed a platform that allows you to access real-time insights on vegetable prices in your region. Our app provides you with a comprehensive view of the price changes of various vegetables across different states, districts, and mandis. You can select your desired location, commodity, and variety to generate customized reports on price trends, historical data, and other valuable insights.
      </p>
      <p>
      One of the key benefits of our app is that it helps you make informed decisions about buying or selling vegetables. Whether you're a farmer looking to sell your produce, a wholesaler trying to find the best prices, or a consumer trying to save money, our app can help you make smarter decisions based on data. With our user-friendly interface and powerful analytics, you can easily analyze market trends and identify opportunities to grow your business.
      </p>
      <p>
      Our app is also designed to be accessible to a wide range of users, from small-scale farmers to large agribusinesses. We understand that different users have different needs and requirements, and we've designed our platform to be flexible and customizable to suit those needs. For example, farmers can use our app to track prices in their local mandis and plan their crop rotations accordingly, while wholesalers can use our app to identify the best markets for their produce and maximize their profits.
      </p>
      <p>
      Overall, our web app is a valuable tool for anyone interested in the agriculture industry. It provides real-time insights, powerful analytics, and a user-friendly interface to help you make informed decisions about buying or selling vegetables. We are committed to providing you with reliable and transparent data that can empower you to make better decisions and drive growth in the agriculture industry. Join our community today and start exploring the world of vegetable prices!
      </p>
      {/* <p>Our web app provides insights on the price changes of various vegetables based on the geographical location. Users can select the state, district, mandi, commodity (vegetable), and the variety to get insights based on the data stored in our MongoDB server.</p>
      <p>Our mission is to help farmers, retailers, and consumers make informed decisions by providing accurate and up-to-date information on vegetable prices.</p> */}
      <h2>Meet the Team</h2>
      <ul>
        <li>Nimit Khanna</li>
        <li>Utkarsh Purbey</li>
      </ul>
    </div>
  );
};

export default About;

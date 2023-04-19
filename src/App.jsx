import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";

const App = () => {
  return (
    <div>
      <Header />
      <Notes
        title="React.js Bootcamp"
        description="We learned the basics of Web-Development, JavaScript, JSX, React, ReactDOM and created a project at the very end of the bootcamp as well."
      />
      <Notes
        title="Learn Everything about AI in 7 Days"
        description="This is a free bootcamp from Devtown called <Learn Everything about AI in 7 Days> which starts from 24th April. Do register now!"
      />
      <Notes
        title="Learn DevOps for web development"
        description="This is another free bootcamp from Devtown called <Learn DevOps for web development> which starts from 01st May. Do register now!"
      />
      <Notes
        title="Python Master Class Zero to Hero"
        description="This is another free bootcamp from Devtown called <Python Master Class Zero to Hero> which starts from 08th May. Do register now!"
      />
      <Notes
        title="Frontend Web Development with JavaScript & React.js"
        description="This bootcamp called <FWD with JavaScript & React.js> is completed but you can watch the series on youtube."
      />
      <Notes
        title="Web animations using CSS"
        description="This bootcamp called <Web animations using CSS> is completed but you can watch the series on youtube."
      />
      <Notes
        title="Google Drive Clone using HTML & CSS"
        description="This bootcamp called <Google Drive Clone using HTML & CSS> is completed but you can watch the series on youtube."
      />
      <Notes
        title="Hands-on cloud computing with AWS"
        description="This bootcamp called <Hands-on cloud computing with AWS> is completed but you can watch the series on youtube."
      />

      <Footer />
    </div>
  );
};

export default App;

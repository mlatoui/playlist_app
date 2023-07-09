export const About = () => {
  return (
    <>
      <div className="about-container">
        <h2 className="about-icon">
          <i className="fa-solid fa-users"></i>
        </h2>
        <p className="about-text">
          Introducing PlaylistLab, a React application developed by three
          students from McGill School of Continuing Studies during their
          Advanced React class as part of the JavaScript Full Stack Development
          program.
          <br />
          <br />
          With PlaylistLab, you can explore the Deezer API and search for your
          favorite songs to create personalized playlists. The application
          provides a straightforward interface for searching and adding tracks,
          allowing you to easily curate your own collection of music. Designed
          and developed by Jingwen Bai, Mourad Latoui, and Junior Vigneault,
          Playlist Lab serves as a demonstration of key concepts in React. Our
          team has worked diligently to build and style the application,
          showcasing our proficiency in React development.
        </p>
        <br />
        <div className="about-links">
          <div className="link">
            Jingwen Bai
            <a href="" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/baibai27" target="">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="link">
            Mourad Latoui
            <a
              href="https://www.linkedin.com/in/mourad-latoui-63386854/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/mlatoui" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="link">
            Junior Vigneault
            <a
              href="https://www.linkedin.com/in/junior-vigneault-a81073139/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/juniorvigneault/" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

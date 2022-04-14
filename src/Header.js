const Header = () => {
  return (
    <nav className="Header--nav">
      <ul className="Header--ul">
        <li className="first-li">
          <img
            className="Header--trollface"
            src="https://www.picng.com/upload/trollface/png_trollface_92287.png"
            alt="Trollface"
          />{" "}
          <p>Meme Generator</p>
        </li>
        <li>React Course - Project 3</li>
      </ul>
    </nav>
  );
};

export default Header;

/*
    Footer Component  
*/

export function Footer(): JSX.Element {
  /*
         --------------------------------------
        |                                      |
        |               Top Nav                |
        |                                      |
         --------------------------------------
        |                                      |
        |                                      |
        |            Main Contents             |
        |                                      |
        |                                      |
         --------------------------------------
        |                                      |
        |            *   Footer   *            |
        |                                      |
         --------------------------------------
    */
  return (
    <ul
      id="sns"
      className="ph0 pv2 h3 flex justify-center items-center list mv0 overflow-hidden bt footer"
    >
      <li className="mh1 dib br3">
        <a
          className="dib tc f4 h1 white"
          href="https://github.com/YoshimasaIwano"
        ></a>
      </li>
      <li className="mh1 dib br3">
        <a
          className="dib tc f4 h1 white"
          href="https://www.linkedin.com/in/yoshi-fukuoka/"
        ></a>
      </li>
      <li className="mh1 dib br3">
        <a
          className="dib tc f4 h1 white"
          href="https://www.facebook.com/profile.php?id=100028308006480"
        ></a>
      </li>
      <li className="mh1 dib br3">
        <a
          className="dib tc f4 h1 white"
          href="https://www.instagram.com/yoshimasa_iwano/"
        ></a>
      </li>
      <li className="mh1 dib br3">
        <a
          className="dib tc f4 h1 white"
          href="https://note.com/yoshimasa_iwano/"
        ></a>
      </li>
    </ul>
  );
}

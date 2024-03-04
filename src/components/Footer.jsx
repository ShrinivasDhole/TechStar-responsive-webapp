import "../styles/footer.scss";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Techstar</h1>
        <p>@all rights reserved</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <div>
          <div>
            <AiFillInstagram />
            <a href="https://instagram.com/_xhriiiii" target={"blank"}>
              Instagram
            </a>
          </div>
          <div>
            <AiFillGithub />

            <a href="https://github.com/ShrinivasDhole " target={"blank"}>
              GitHub
            </a>
          </div>

          <div>
            <AiFillTwitterCircle />
            <a
              href="https://x.com/shrii_81?s=21&t=mgnuL_3Ik_pww35iJ7A0eg"
              target={"blank"}
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div> 
          <h1>Who are you?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut
            praesentium ipsam illo nisi qui explicabo veritatis molestias nulla.
            Autem voluptates quaerat quasi tenetur animi vel dicta ex
            atexplicabo dolore. Iste architecto, repellendus sint dolores ipsa
            quisquam placeat veritatis ullam maiores laudantium quia quaerat
            iure eum eos blanditiis fuga natus minus sed? Voluptas reiciendis
            blanditiis quo ioluta molestiae incidunt! Ducimus voluptatibus amet
            repellat, quas eligendi quo quidem sit doloremque corporis
            asperiores odit accusamus alias consequuntur quod cum distinctio.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;

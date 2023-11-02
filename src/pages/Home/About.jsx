import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 rounded-lg">
      <div className="hero-content flex-col lg:flex-row gap-10 p-14">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-4/5 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute right-3 top-1/2 rounded-lg shadow-2xl border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h3 className="text-orange-500 text-xl font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <button className="bg-orange-500 py-1.5 px-3 text-lg font-medium rounded-md text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

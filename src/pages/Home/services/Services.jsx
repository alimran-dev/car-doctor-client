import { useState } from "react";
import { useEffect } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState(null);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-2">
        <h3 className="text-lg font-bold text-orange-500">Services</h3>
        <h1 className="text-5xl font-semibold">Our Service Area</h1>
        <p className="">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don&apos;t look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-14 lg:p-0">
        {services?.map((service) => (
          <ServicesCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;

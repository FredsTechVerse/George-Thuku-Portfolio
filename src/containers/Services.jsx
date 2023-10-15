// COMPONENTS
import { ServiceCard, SectionHeading } from "../components";

// IMAGES
import PCBDesignImage from "../assets/PCB_Design.png";
import MechanicalDesignImage from "../assets/mechanical-design.webp";
import FirmwareImage from "../assets/Hardware_Development.jpg";
import PLCImage from "../assets/plc-programming.jpg";

const Services = () => {
  return (
    <article
      id="services"
      className=" relative w-full bg-black/30  backdrop-blur-lg py-16 service"
    >
      <SectionHeading subTitle="Services" title="What we offer" />
      <section className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5 place-items-center px-5 tablet:px-10 laptop:px-15">
        <ServiceCard
          image={MechanicalDesignImage}
          heading="Mechanical Design Proficiency"
          body="Experienced in precision mechanical design using industry-standard tools such as AutoCAD and SolidWorks. Proficient in creating detailed 3D models, assemblies, and engineering drawings. Skilled in translating conceptual ideas into manufacturable designs, ensuring optimal functionality and performance."
        />

        {/* PCB Design Card */}
        <ServiceCard
          image={PCBDesignImage}
          heading="PCB Design Proficiency"
          body="Experienced in designing high-quality printed circuit boards for optimal electronic performance. Proficient in PCB layout, schematic capture, and ensuring manufacturability. Demonstrated ability to create reliable and efficient electronic systems."
        />

        {/* Firmware Development Card */}
        <ServiceCard
          image={FirmwareImage}
          heading="Firmware Development Expertise"
          body="Skilled in developing robust and efficient firmware for embedded systems. Proficient in programming languages such as C and C++ for microcontrollers. Proven ability to optimize code for performance, reliability, and power efficiency."
        />

        {/* PLC Programming Card */}
        <ServiceCard
          image={PLCImage}
          heading="PLC Programming Proficiency"
          body="Expertise in designing, implementing, and optimizing industrial processes through precise PLC programming. Proven ability to enhance system efficiency, reduce downtime, and deliver reliable automation solutions."
        />
      </section>
    </article>
  );
};

export default Services;

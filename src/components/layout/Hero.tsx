import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <h1>Everything is better with a Pizza</h1>
      <p>
        Pizza is the missing piecer that makes every day complete, a simple yes
        delicious joy in life
      </p>
      <Image
       src="https://buckettesting21.s3.amazonaws.com/005b8bcd-b7bb-4c01-9ba9-8cac698f4d02-clone_UPBUNDLE.jpg"
       alt="hola"
       height={200}
       width={200}
      />
    </section>
  );
};

export default Hero;

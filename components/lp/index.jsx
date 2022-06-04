import React from "react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div>
      {/* <div className="dag-vid-mask absolute w-screen min-h-screen">
        <video
          className="fixed right-0 bottom-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/test.mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div> */}

      <div className="main-lp flex h-screen justify-center items-center">
        <Image
          src="/images/DAG_hpart.png"
          objectFit="contain"
          layout="fill"
          objectPosition="center"
          alt="Defiant Apes Gang"
        />
        <h1 className="main-h1 align-middle flex m-auto z-10">
          <span className="text-9xl">D</span>
          <div className="lp-ape">
            <Image
              src="/images/DAG_ape_v1.png"
              width={260}
              height={300}
              objectFit="center"
              layout="responsive"
              alt="Defiant Apes Gang"
            />
          </div>
          <span className="text-9xl">G</span>
        </h1>
        {/* <h1 className="main-h1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p>APES GANG</p>
        </h1> */}
      </div>
    </div>
  );
};

export default LandingPage;

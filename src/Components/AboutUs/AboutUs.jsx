import React from "react";

const AboutUs = () => {
  return (
    <div id="aboutUs" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-5xl font-bold mb-4">About MedCare</h2>
            <p className="text-1xl text-gray-600 mb-8">
              MedCare is a leading healthcare provider dedicated to delivering
              comprehensive and personalized medical services to our community.
              With a team of experienced and compassionate professionals, we
              strive to improve the well-being of our patients through
              innovative treatments and a patient-centric approach. At MedCare,
              we believe in a holistic view of health, integrating advanced
              medical technology with a deep understanding of each individual's
              unique healthcare journey. Our goal is not only to treat
              conditions but to empower our patients with the knowledge and
              support needed for long-term wellness. Whether through preventive
              care, specialized treatments, or ongoing health management,
              MedCare is here to support every step toward a healthier, happier
              life.
            </p>
            <a
              href="/about"
              className="text-blue-500 font-medium hover:text-blue-700"
            >
              Learn More
            </a>
          </div>
          <div className="md:pl-8">
            <img
              // src="https://png.pngtree.com/png-vector/20220120/ourlarge/pngtree-medical-personnel-png-image_4349297.png"
              src="https://media.licdn.com/dms/image/D4D12AQGRP3d8rlSkMQ/article-cover_image-shrink_600_2000/0/1709730992563?e=2147483647&v=beta&t=rmnsASsmRpni-MndpE-czaPL6YnucWSiDHcaN75RVIw"
              alt="About Us"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

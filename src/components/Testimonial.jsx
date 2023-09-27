import React from "react";

const testimonials = [
  {
    type: "client",
    name: "Sarah T.",
    message:
      "I was in urgent need of legal assistance, and Legal Marketplace came to my rescue! Within hours, I found a highly skilled attorney who guided me through my legal issue with expertise and care. I can't thank this platform enough for connecting me with the right legal professional.",
  },
  {
    type: "legal Professional",
    name: "David R.",
    message:
      "As a legal service provider, Legal Marketplace has been a game-changer for me. The platform is user-friendly, and it's incredibly easy to connect with clients who need my expertise. It has expanded my client base and made my legal practice more efficient.",
  },
  {
    type: "client",
    name: "John M.",
    message:
      "I was hesitant at first, but using Legal Marketplace was a breeze. I could browse profiles of legal professionals, check their credentials, and choose the perfect attorney for my case. The platform's transparency and convenience made my legal journey stress-free.",
  },
  {
    type: "legal Professional",
    name: "Lisa K.",
    message:
      "Legal Marketplace has given me the exposure I needed as a solo practitioner. The ability to showcase my skills and connect with clients who genuinely require my services has been a fantastic experience. It's a win-win for both clients and legal professionals.",
  },
  {
    type: "client",
    name: "Michael S.",
    message:
      "Legal Marketplace offers a wide range of legal experts. I needed a specialized attorney for my business matter, and I found the perfect match here. The platform's search filters made it easy to pinpoint the right professional for my needs.",
  },
  {
    type: "legal Professional",
    name: "Jessica L.",
    message:
      "Joining Legal Marketplace has been a smart decision for my law firm. The platform's tools for managing inquiries, scheduling consultations, and securing clients are top-notch. It's a great platform for legal practitioners looking to expand their horizons.",
  },
];

function Testimonial() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            {testimonials.map((testimonial, index) => (
              <div className="p-4 md:w-1/2 w-full" key={index}>
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">{testimonial.message}</p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="https://dummyimage.com/106x106"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        {testimonial.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {testimonial.type}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;

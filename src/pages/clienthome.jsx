import React from 'react';

function LawyersCards() {
  const lawyers = [
    {
      name: 'John Doe',
      department: 'Criminal Defense',
      description:
        'Experienced criminal defense lawyer with a track record of successful cases in misdemeanor and felony charges.',
      imageUrl: 'https://example.com/john-doe.jpg', // Replace with actual image URL
    },
    {
      name: 'Jane Smith',
      department: 'Family Law',
      description:
        'Dedicated family law attorney specializing in divorce, child custody, and family mediation cases.',
      imageUrl: 'https://example.com/jane-smith.jpg', // Replace with actual image URL
    },
    {
      name: 'Michael Johnson',
      department: 'Real Estate',
      description:
        'Real estate lawyer with expertise in property transactions, contract review, and real estate litigation.',
      imageUrl: 'https://example.com/michael-johnson.jpg', // Replace with actual image URL
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {lawyers.map((lawyer, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={lawyer.imageUrl}
              alt={lawyer.name}
              className="object-cover h-40 w-full"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {lawyer.name}
              </h2>
              <p className="text-gray-600 mt-2">{lawyer.department}</p>
              <p className="text-gray-600 mt-2">{lawyer.description}</p>
            </div>
            <div className="p-4 bg-gray-100">
              <a href="#" className="text-blue-500 hover:underline">
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LawyersCards;

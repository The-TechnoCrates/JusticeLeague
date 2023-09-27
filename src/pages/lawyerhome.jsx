import React from 'react';

function UserFormCards() {
  const userForms = [
    {
      title: 'Criminal Defense',
      description:
        "I'm looking for a criminal defense lawyer to represent me in a legal case. The case involves a misdemeanor charge, and I need expert legal counsel.",
    },
    {
      title: 'Family Law',
      description:
        "I require a family law attorney to assist me with a divorce and child custody case. It's important to me to find an attorney who can provide guidance and support during this difficult time.",
    },
    {
      title: 'Real Estate',
      description:
        "I'm in need of a real estate lawyer to review a property purchase agreement. I want to ensure that all legal aspects are covered before finalizing the transaction.",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {userForms.map((form, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {form.title}
              </h2>
              <p className="text-gray-600 mt-2">{form.description}</p>
            </div>
            <div className="p-4 bg-gray-100">
              <a href="#" className="text-blue-500 hover:underline">
                Show More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserFormCards;

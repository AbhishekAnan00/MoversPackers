import React from 'react';

const PageForCarrer = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Careers Section */}
      <div className="w-full bg-orange-500 py-16 px-8 shadow-lg rounded-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Careers</h1>
            <p className="text-lg mb-6">
              Lorem ipsum dolor adipiscing tempor labore dolore magna mollis, purus semper tellus nullam vehicula ipsum ligula ullamcorper malesuada proin libero interdum lorem ipsum purus semper tellus nullam vehicula ipsum ligula ullamcorper malesuada proin libero interdum.
            </p>
            <p className="text-base">
              Lorem ipsum dolor adipiscing tempor labore dolore magna mollis, purus semper tellus nullam vehicula ipsum ligula ullamcorper malesuada proin libero interdum lorem ipsum purus semper tellus nullam vehicula ipsum ligula ullamcorper malesuada proin libero interdum.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://npfulfilment.com/wp-content/uploads/2014/07/shutterstock_99544760-1000x667.jpg"
              alt="Moving company professional"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Why Borneo Mover Section */}
      <div className="w-full py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Borneo Mover?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card */}
            <div className="p-6 bg-white shadow-md rounded-md text-center">
              <div className="mb-4">
                <img src="path/to/your/icon1.svg" alt="Icon" className="w-12 h-12 mx-auto"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Meaningful Impact</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor adipiscing tempor labore dolore magna mollis, purus semper tellus nullam vehicula ipsum ligula ullamcorper malesuada proin libero interdum lorem ipsum purus.
              </p>
            </div>
            {/* Feature Card */}
            <div className="p-6 bg-white shadow-md rounded-md text-center">
              <div className="mb-4">
                <img src="path/to/your/icon2.svg" alt="Icon" className="w-12 h-12 mx-auto"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovative Environment</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor adipiscing tempor labore dolore magna mollis, purus semper tellus nullam vehicula ipsum ligula ullamcorper malesuada proin libero interdum lorem ipsum purus.
              </p>
            </div>
            {/* Feature Card */}
            <div className="p-6 bg-white shadow-md rounded-md text-center">
              <div className="mb-4">
                <img src="path/to/your/icon3.svg" alt="Icon" className="w-12 h-12 mx-auto"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Career Growth</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor adipiscing tempor labore dolore magna mollis, purus semper tellus nullam vehicula ipsum ligula ullamcorper malesuada proin libero interdum lorem ipsum purus.
              </p>
            </div>
            {/* Feature Card */}
            <div className="p-6 bg-white shadow-md rounded-md text-center">
              <div className="mb-4">
                <img src="path/to/your/icon4.svg" alt="Icon" className="w-12 h-12 mx-auto"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor adipiscing tempor labore dolore magna mollis, purus semper tellus nullam vehicula ipsum ligula ullamcorper malesuada proin libero interdum lorem ipsum purus.
              </p>
            </div>
            {/* Feature Card */}
            <div className="p-6 bg-white shadow-md rounded-md text-center">
              <div className="mb-4">
                <img src="path/to/your/icon5.svg" alt="Icon" className="w-12 h-12 mx-auto"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Remote First</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor adipiscing tempor labore dolore magna mollis, purus semper tellus nullam vehicula ipsum ligula ullamcorper malesuada proin libero interdum lorem ipsum purus.
              </p>
            </div>
            {/* Feature Card */}
            <div className="p-6 bg-white shadow-md rounded-md text-center">
              <div className="mb-4">
                <img src="path/to/your/icon6.svg" alt="Icon" className="w-12 h-12 mx-auto"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Collaborative Culture</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor adipiscing tempor labore dolore magna mollis, purus semper tellus nullam vehicula ipsum ligula ullamcorper malesuada proin libero interdum lorem ipsum purus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-gray-100 py-8 text-center">
        <p className="text-gray-600">
          Join us in our mission to revolutionize drug development and drive positive change. Lorem ipsum dolor adipiscing tempor labore dolore magna mollis, purus semper tellus nullam vehicula ipsum ligula ullamcorper!
        </p>
      </div>
      {/* 4th */}
      <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Current Openings</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <h2 className="text-lg font-medium">Customer Service</h2>
          </div>
          <div className="flex items-center justify-end">
            <p className="text-gray-600">Onsite</p>
          </div>
          <div className="flex items-center">
            <h2 className="text-lg font-medium">Backend Developer</h2>
          </div>
          <div className="flex items-center justify-end">
            <p className="text-gray-600">Career Site</p>
          </div>
          <div className="flex items-center">
            <h2 className="text-lg font-medium">Graphic Designer</h2>
          </div>
          <div className="flex items-center justify-end">
            <p className="text-gray-600">WFH</p>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Apply Jobs
          </button>
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Start the conversation</h2>
          <p className="text-lg mb-8">Ready to take the first step? Let's talk about your next move.</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Stay updated</h2>
          <p className="text-lg mb-8">Get the latest news, tips, and insights from our experts.</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PageForCarrer;

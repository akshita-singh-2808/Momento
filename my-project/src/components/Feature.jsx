import { features } from "../constants";

function Feature() {
  return (
    <>
      {/* Main Wrapper */}
      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        
        {/* Heading Section */}
        <div className="text-center">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Feature
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
            Easily Book{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              Your Tickets!
            </span>
          </h2>
        </div>

        {/* Features Section */}
        <div className="flex flex-wrap mt-10 lg:mt-20 justify-center">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="flex items-start space-x-4">
                
                {/* Feature Icon */}
                <div className="flex h-12 w-12 p-3 bg-neutral-900 text-orange-700 justify-center items-center rounded-md">
                  {feature.icon}
                </div>
                
                {/* Feature Text */}
                <div>
                  <h5 className="mt-1 mb-2 text-xl font-semibold">{feature.text}</h5>
                  <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Feature;

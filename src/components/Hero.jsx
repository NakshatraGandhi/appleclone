import React from 'react';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';
import hero5 from '../assets/hero5.jpg';
import hero6 from '../assets/hero6.jpg';

const Hero = () => {
  const Button = ({ children }) => (
    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
      {children}
    </button>
  );

  return (
    <div className="flex flex-col gap-4">

      {/* Hero 1 */}
      <section className="relative text-center bg-black text-white">
        <img src={hero1} alt="iPhone 15 Pro" className="w-full object-cover max-h-[700px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-16 sm:pt-28">
          <h1 className="text-4xl sm:text-6xl font-semibold">iPhone 15 Pro</h1>
          <p className="text-lg sm:text-xl mt-2">Titanium. So strong. So light. So Pro.</p>
          <div className="flex gap-4 mt-4">
            <Button>Learn more</Button>
            <Button>Shop iPhone</Button>
          </div>
        </div>
      </section>

      {/* Hero 2 */}
      <section className="relative text-center bg-white text-black">
        <img src={hero2} alt="iPhone 15" className="w-full object-cover max-h-[700px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-16 sm:pt-28">
          <h1 className="text-4xl sm:text-6xl font-semibold">iPhone 15</h1>
          <p className="text-lg sm:text-xl mt-2">New camera. New design. Newphoria.</p>
          <div className="flex gap-4 mt-4">
            <Button>Learn more</Button>
            <Button>Buy</Button>
          </div>
        </div>
      </section>

      {/* Grid 2x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Hero 3 */}
        <section className="relative text-center bg-black text-white">
          <img src={hero3} alt="MacBook Air" className="w-full object-cover h-[500px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-10">
            <h1 className="text-3xl sm:text-4xl font-semibold">MacBook Air</h1>
            <p className="text-lg mt-2">Sky blue colour. Sky high performance with M4</p>
            <div className="flex gap-4 mt-3">
              <Button>Learn more</Button>
              <Button>Buy</Button>
            </div>
          </div>
        </section>

        {/* Hero 4 */}
        <section className="relative text-center bg-black text-white">
          <img src={hero4} alt="Apple Watch" className="w-full object-cover h-[500px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-10">
            <h1 className="text-3xl sm:text-4xl font-semibold">Apple Watch Series 9</h1>
            <p className="text-lg mt-2">Smarter. Brighter. Mightier.</p>
            <div className="flex gap-4 mt-3">
              <Button>Learn more</Button>
              <Button>Buy</Button>
            </div>
          </div>
        </section>

        {/* Hero 5 */}
        <section className="relative text-center bg-white text-black">
          <img src={hero5} alt="iPad" className="w-full object-cover h-[500px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-10">
            <h1 className="text-3xl sm:text-4xl font-semibold">iPad</h1>
            <p className="text-lg mt-2">Lovable. Drawable. Magical.</p>
            <div className="flex gap-4 mt-3">
              <Button>Learn more</Button>
              <Button>Shop iPad</Button>
            </div>
          </div>
        </section>

        {/* Hero 6 */}
        <section className="relative text-center bg-black text-white">
          <img src={hero6} alt="AirPods" className="w-full object-cover h-[500px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-10">
            <h1 className="text-3xl sm:text-4xl font-semibold">AirPods Pro</h1>
            <p className="text-lg mt-2">Adaptive Audio. Now playing.</p>
            <div className="flex gap-4 mt-3">
              <Button>Learn more</Button>
              <Button>Buy</Button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Hero;

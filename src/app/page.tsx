"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import {
  FaMapMarkedAlt,
  FaCamera,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { GiLion, GiAfrica } from "react-icons/gi";

type ItineraryDay = {
  day: number;
  title: string;
  content: string[];
  highlights: string[];
  meals: string;
};

const Home = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [showBooking, setShowBooking] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(calculateTimeLeft());

  function calculateTimeLeft(): number {
    const offerDate = new Date("2023-08-14");
    const now = new Date();
    return Math.ceil(
      (offerDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 86400000);
    return () => clearInterval(timer);
  }, []);

  const itineraryDays: ItineraryDay[] = [
    {
      day: 1,
      title: "Arrival & First Game Drive",
      content: [
        "Pickup from JKIA airport at 7AM",
        "Scenic drive through Nairobi National Park",
        "Great Rift Valley photo stop",
        "Afternoon game drive in Talek/Topi plains",
        "Evening campfire experience",
      ],
      highlights: [
        "White Rhino Spotting",
        "Topi Pride Lions",
        "Rift Valley Views",
      ],
      meals: "LD",
    },
    {
      day: 2,
      title: "Morning Safari & Big Cat Tracking",
      content: [
        "Sunrise game drive",
        "Bush breakfast experience",
        "Cheetah tracking",
        "Leopard search afternoon drive",
        "Campfire storytelling",
      ],
      highlights: ["Sunrise Photography", "Hyena Watch", "Leopard Tracking"],
      meals: "BLD",
    },
    {
      day: 3,
      title: "Full Day Mara Exploration",
      content: [
        "Border exploration at Sand River",
        "Full day game drive with packed meals",
        "Rhino tracking in special reserve",
        "Farewell game drive",
        "Final campfire gathering",
      ],
      highlights: [
        "Border Crossing Experience",
        "Big Five Challenge",
        "Rhino Tracking",
      ],
      meals: "BLD",
    },
    {
      day: 4,
      title: "Departure & Farewell",
      content: [
        "Leisurely breakfast",
        "Group experience sharing",
        "Return journey to Nairobi",
        "Airport drop-off",
      ],
      highlights: [
        "Last-minute Photography",
        "Group Reflections",
        "Safari Certification",
      ],
      meals: "B",
    },
  ];

  const BookingTriggers = () => (
    <div className="fixed bottom-4 right-4 space-y-2 z-50">
      <button
        onClick={() => setShowBooking(true)}
        className="bg-safari-gold hover:bg-safari-brown text-white p-4 rounded-full shadow-lg flex items-center animate-pulse"
      >
        <FaHandHoldingHeart className="mr-2" />
        Lock Special Price
      </button>
      <div className="bg-white p-2 rounded-lg shadow-md text-sm">
        🎉 {timeLeft} Days Left for Offer!
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-safari-tan">
      <section className="relative h-screen bg-gradient-to-b from-safari-brown/80 to-safari-green/80 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/safari-bg.mp4" type="video/mp4" />
        </video>

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-center text-white max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                <GiAfrica className="inline mr-4" />
                Big Cats Week at Maasai Mara
                <GiLion className="inline ml-4" />
              </h1>
              <p className="text-xl mb-8">
                Diwali 2023 Special - November 14th to 17th
              </p>
              <div className="bg-safari-green/80 p-4 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold">
                  Anniversary Special: 20% Discount!
                </h2>
                <p>Celebrating 1 Year of Nairobi Operations</p>
              </div>
            </div>
          </div>
        </div>
        <BookingTriggers />
      </section>
      {/* <section className="py-16 bg-safari-cream">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
            <GiElephant className="text-4xl text-safari-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Big Five Guarantee</h3>
            <p className="text-gray-600">4-day intensive tracking program with expert Maasai guides</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
            <FaSun className="text-4xl text-safari-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Golden Hour Magic</h3>
            <p className="text-gray-600">Special sunrise/sunset photography sessions included</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
            <FaUmbrellaBeach className="text-4xl text-safari-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Luxury Camp Experience</h3>
            <p className="text-gray-600">Stay at award-winning eco-camps with premium amenities</p>
          </div>
        </div>
      </section> */}
      
      <section className="py-16 bg-safari-cream">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
            <Image
              src="/big-five.png"
              width={300}
              height={200}
              alt="Big Five Safari"
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Big Five Guarantee</h3>
            <p className="text-gray-600">
              4-day intensive tracking program with expert Maasai guides
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
            <Image
              src="/golden-hour.png"
              width={300}
              height={200}
              alt="Golden Hour Safari"
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Golden Hour Magic</h3>
            <p className="text-gray-600">
              Special sunrise/sunset photography sessions included
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
            <Image
              src="/luxury-camp.png"
              width={300}
              height={200}
              alt="Luxury Safari Camp"
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Luxury Camp Experience</h3>
            <p className="text-gray-600">
              Stay at award-winning eco-camps with premium amenities
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-safari-tan">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Safari Experience Timeline
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 space-y-4">
              {itineraryDays.map((day) => (
                <button
                  key={day.day}
                  onClick={() => setActiveDay(day.day)}
                  className={`w-full p-4 text-left rounded-lg transition-all ${
                    activeDay === day.day
                      ? "bg-safari-gold text-white shadow-lg"
                      : "bg-white hover:bg-safari-cream"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-bold">Day {day.day}</div>
                      <div className="text-sm">{day.title}</div>
                    </div>
                    <div className="bg-white/20 px-2 rounded">{day.meals}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">Day {activeDay} Details</h3>
                <div className="bg-safari-green text-white px-3 py-1 rounded-full text-sm">
                  {itineraryDays[activeDay - 1].meals} Included
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Activities</h4>
                  <ul className="space-y-3">
                    {itineraryDays[activeDay - 1].content.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <FaMapMarkedAlt className="text-safari-green mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Key Highlights</h4>
                  <ul className="space-y-3">
                    {itineraryDays[activeDay - 1].highlights.map((h, i) => (
                      <li key={i} className="flex items-center">
                        <FaCamera className="text-safari-gold mr-2 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-safari-green text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Exclusive Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Standard Pricing</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Adult (10+ years)</span>
                  <span>$1582</span>
                </div>
                <div className="flex justify-between">
                  <span>Child (4-9 years)</span>
                  <span>$1400</span>
                </div>
              </div>
            </div>

            <div className="bg-safari-gold/90 p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 transform rotate-12 translate-x-2 -translate-y-2">
                {timeLeft} Days Left!
              </div>
              <h3 className="text-xl font-bold mb-4">Independence Offer</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Adult</span>
                  <span>
                    $1322 <span className="text-sm line-through">$1582</span>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Child</span>
                  <span>
                    $1127 <span className="text-sm line-through">$1400</span>
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowBooking(true)}
                className="w-full mt-6 bg-safari-brown text-white py-3 rounded-lg hover:bg-safari-green transition-colors"
              >
                Claim Discounted Rate
              </button>
            </div>
          </div>
        </div>
      </section>
      {showBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-lg w-full p-8 relative">
            <button
              onClick={() => setShowBooking(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-safari-brown"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-6">
              Start Your Safari Journey
            </h3>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Adults</label>
                  <input
                    type="number"
                    min="1"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-safari-gold"
                    placeholder="Number of adults"
                  />
                </div>
                <div>
                  <label className="block mb-2">Children (4-9)</label>
                  <input
                    type="number"
                    min="0"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-safari-gold"
                    placeholder="Number of children"
                  />
                </div>
              </div>

              <div className="bg-safari-cream p-4 rounded-lg">
                <h4 className="font-bold mb-2">Special Offers Applied</h4>
                <ul className="list-disc pl-5">
                  <li>Independence Day Discount (20%)</li>
                  <li>Group Discount Available (5+ people)</li>
                  <li>Free Photography Workshop Included</li>
                </ul>
              </div>

              <button className="w-full bg-safari-gold text-white py-3 rounded-lg hover:bg-safari-brown transition-colors">
                Continue to Secure Booking →
              </button>
            </div>
          </div>
        </div>
      )}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Important Information
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <details className="border rounded-lg p-4">
              <summary className="font-bold cursor-pointer">Inclusions</summary>
              <ul className="mt-2 pl-5 list-disc">
                <li>All transfers in 4x4 Landcruisers</li>
                <li>Luxury camp accommodation</li>
                <li>Professional guide services</li>
                <li>All meals as specified</li>
              </ul>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-bold cursor-pointer">
                Health & Safety
              </summary>
              <ul className="mt-2 pl-5 list-disc">
                <li>Yellow Fever vaccination required</li>
                <li>Travel insurance mandatory</li>
                <li>Medical disclosure form</li>
              </ul>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-bold cursor-pointer">
                Payment Terms
              </summary>
              <ul className="mt-2 pl-5 list-disc">
                <li>100% payment at booking</li>
                <li>50% credit for 60+ day cancellations</li>
                <li>No refund within 30 days</li>
              </ul>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

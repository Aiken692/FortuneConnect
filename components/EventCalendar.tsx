"use client";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Event } from "./types/portfolio";
import axios from "axios";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
// const events = [
//   {
//     id: 1,
//     title: "Tech Conference 2024",
//     time: "9:00 AM - 5:00 PM",
//     description:
//       "Join industry leaders for a day of insights and networking at the annual Tech Conference. Explore the latest trends in technology and innovation.",
//   },
//   {
//     id: 2,
//     title: "Art & Culture Festival",
//     time: "10:00 AM - 6:00 PM",
//     description:
//       "Celebrate creativity at the Art & Culture Festival. Enjoy exhibitions, live performances, and workshops from local artists.",
//   },
//   {
//     id: 3,
//     title: "Health and Wellness Retreat",
//     time: "8:00 AM - 3:00 PM",
//     description:
//       "Escape the hustle and bustle of daily life at the Health and Wellness Retreat. Participate in yoga sessions, nutrition workshops, and mindfulness activities.",
//   },
//   {
//     id: 4,
//     title: "Business Networking Mixer",
//     time: "6:00 PM - 9:00 PM",
//     description:
//       "Expand your professional network at the Business Networking Mixer. Connect with local entrepreneurs and industry experts while enjoying light refreshments.",
//   },
//   {
//     id: 5,
//     title: "Summer Music Festival",
//     time: "2:00 PM - 11:00 PM",
//     description:
//       "Join us for a day of live music, food trucks, and fun at the Summer Music Festival. Enjoy performances from local bands and artists.",
//   },
//   {
//     id: 6,
//     title: "Coding Bootcamp",
//     time: "10:00 AM - 4:00 PM",
//     description:
//       "Learn to code in a day at our intensive Coding Bootcamp. Perfect for beginners and those looking to sharpen their skills.",
//   },
// ];

interface Eventresponse {
  events: Event[];
}

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  const [items, setItems] = useState<Event[]>([]);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get<Eventresponse>(
          "https://run.mocky.io/v3/fce8ccd5-ae78-4270-a17a-bf5dba482e03"
        );

        if (response.data && response.data.events && isMounted) {
          setItems(response.data.events);
        }
      } catch (error) {
        console.error("Error fetching the events:", error);
      }
    };

    fetchEvents();

    return () => setIsMounted(false); // Cleanup function to set isMounted to false when component unmounts
  }, []);

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />

      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <div className="flex flex-col gap-4 h-80 overflow-y-auto">
        {items.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;

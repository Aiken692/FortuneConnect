import { useEffect, useState } from "react";
import { CardProps } from "../types/portfolio";
import NotificationCard from "./NotificationCard";
import axios from "axios";

interface NotificationResponse {
  notifications: CardProps[];
}

const Notifications = () => {
  const [items, setItems] = useState<CardProps[]>([]);
  const [isMounted, setIsMounted] = useState(true); // Track if component is mounted

  useEffect(() => {
    const fetchnotifications = async () => {
      try {
        const response = await axios.get<NotificationResponse>(
          "https://run.mocky.io/v3/baba0ae2-8f6a-4aa0-9f5c-26113c9a50f7"
        );

        if (response.data && response.data.notifications && isMounted) {
          setItems(response.data.notifications);
        }
      } catch (error) {
        console.error("Error fetching the notifications:", error);
      }
    };

    fetchnotifications();

    return () => setIsMounted(false); // Cleanup function to set isMounted to false when component unmounts
  }, []);

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Notifications</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4 h-60 overflow-y-auto">
        {items.map((item: CardProps, index: number) => (
          <NotificationCard
            key={index}
            color={item.color}
            title={item.title}
            date={item.date}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Notifications;

//Json body
// const data : CardProps[] = [
//   {
//     color: "bg-lamaSkyLight",
//     title: "Update on Project Alpha",
//     date: "2025-01-01",
//     content: "The initial phase of Project Alpha has been completed successfully."
//   },
//   {
//     color: "bg-lamaPurpleLight",
//     title: "Meeting Reminder",
//     date: "2025-01-02",
//     content: "Don't forget the team meeting scheduled for tomorrow at 10 AM."
//   },
//   {
//     color: "bg-lamaYellowLight",
//     title: "New Feature Released",
//     date: "2025-01-03",
//     content: "The new reporting feature is now live. Check it out!"
//   },
//   {
//     color: "bg-lamaGreenLight",
//     title: "System Maintenance Notification",
//     date: "2025-01-04",
//     content: "Scheduled maintenance will occur on January 5th from 12 AM to 2 AM."
//   },
//   {
//     color: "bg-lamaRedLight",
//     title: "Urgent: Security Update Required",
//     date: "2025-01-05",
//     content: "Please update your software to the latest version to ensure security."
//   },
//   {
//     color: "bg-lamaOrangeLight",
//     title: "Feedback Requested",
//     date: "2025-01-06",
//     content: "We value your feedback. Please fill out the survey about our recent changes."
//   }
// ]

import React from "react";
import { CardProps } from "../types/portfolio";

const NotificationCard = ({ color, title, date, content }: CardProps) => {
  return (
    <div className={`rounded-md p-4 ${color}`}>
      <div className="flex items-center justify-between">
        <h2 className="font-medium">{title}</h2>
        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
          {date}
        </span>
      </div>
      <p className="text-sm text-gray-400 mt-1">{content}</p>
    </div>
  );
};

export default NotificationCard;

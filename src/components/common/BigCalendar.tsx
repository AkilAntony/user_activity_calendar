import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {  format } from "date-fns";
import { dummyData } from "@/lib/apiResponse";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<"month" | "week" | "day" | "agenda">(
    "month"
  );
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedData, setSelectedData] = useState<any[]>([]);

  const demoEvents = [
    {
      title: "Data Available",
      start: moment("2025-12-05").startOf("day").toDate(),
      end: moment("2025-12-05").endOf("day").toDate(),
      allDay: true,
    },
    {
      title: "Data Available",
      start: moment("2025-12-23").startOf("day").toDate(),
      end: moment("2025-12-23").endOf("day").toDate(),
      allDay: true,
    },
    {
      title: "Data Available",
      start: moment("2025-12-08").startOf("day").toDate(),
      end: moment("2025-12-08").endOf("day").toDate(),
      allDay: true,
    },
    {
      title: "Data Available",
      start: moment("2025-12-12").startOf("day").toDate(),
      end: moment("2025-12-12").endOf("day").toDate(),
      allDay: true,
    },
  ];

  const dayPropGetter = (date: Date) => {
    const isSelected =
      selectedDate &&
      moment(date).format("YYYY-MM-DD") ===
        moment(selectedDate).format("YYYY-MM-DD");

    const hasEvent = demoEvents.some((event) => {
      const eventDate = moment(event.start).startOf("day");
      const currentDate = moment(date).startOf("day");
      return eventDate.isSame(currentDate);
    });

    if (isSelected) {
      return {
        style: {
          backgroundColor: "#e1bee7",  
          border: "2px solid #8e24aa",
        },
      };
    }

    if (hasEvent) {
      return {
        style: {
          backgroundColor: "#c8e6c9",
        },
      };
    }
    return {};
  };

  const handleDateClick = (slot: any) => {
    const selectedEventStartDate = format(slot.start, "dd-MM-yyyy");
    const selectedDateDetails = dummyData[selectedEventStartDate];

    setSelectedDate(slot.start);
    setSelectedData(selectedDateDetails);
  };

  return (
    <div style={{ height: "700px" }}>
      <Calendar
        selectable
        localizer={localizer}
        events={demoEvents}
        startAccessor="start"
        endAccessor="end"
        view={view}
        date={date}
        onView={setView}
        onNavigate={setDate}
        dayPropGetter={dayPropGetter}
        onSelectSlot={handleDateClick}
      />
    </div>
  );
};

export default BigCalendar;

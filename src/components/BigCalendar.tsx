import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse } from "date-fns";
import { dummyData } from "@/lib/apiResponse";
import { setSelectedDateInfo } from "@/store/slices/calendarSlice";
import { useAppDispatch } from "@/hooks/useDispatch";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<"month" | "week" | "day" | "agenda">(
    "month"
  );
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const dispatch = useAppDispatch();

  const calendarEvents = Object.keys(dummyData).map((key) => {
    const date = format(parse(key, "dd-MM-yyyy", new Date()), "yyyy-MM-dd");
    return {
      title: "Data Available",
      start: moment(date).startOf("day").toDate(),
      end: moment(date).endOf("day").toDate(),
    };
  });

  const dayPropGetter = (date: Date) => {
    const isSelected =
      selectedDate &&
      moment(date).format("YYYY-MM-DD") ===
        moment(selectedDate).format("YYYY-MM-DD");

    const hasEvent = calendarEvents.some((event) => {
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

    dispatch(
      setSelectedDateInfo({
        date: slot.start,
        data: selectedDateDetails || [],
      })
    );

    setSelectedDate(slot.start);
  };

  return (
    <div style={{ height: "700px" }}>
      <Calendar
        selectable
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        view={view}
        views={["month"]}
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

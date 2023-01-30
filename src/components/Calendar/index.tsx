import type { Dispatch, FC, SetStateAction } from "react";
import ReactCalendar from "react-calendar";
import { add, format } from "date-fns";
import {
  STORE_OPENING_TIME,
  STORE_CLOSING_TIME,
  INTERVAL,
} from "../../constants/config";
import { type DateTime } from "@types";

interface indexProps {
  date: DateTime;
  setDate: Dispatch<SetStateAction<DateTime>>;
}

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}

const index: FC<indexProps> = ({ setDate, date }) => {
  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;

    const beginning = add(justDate, { hours: STORE_OPENING_TIME });
    const end = add(justDate, { hours: STORE_CLOSING_TIME });
    const interval = INTERVAL;

    const times = [];
    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }

    return times;
  };
  const times = getTimes();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {date.justDate ? (
        <div className="flex max-w-lg flex-wrap gap-4">
          {times?.map((time, i) => (
            <div
              key={`time-${i}`}
              className="rounded-full border-2 bg-gray-100 px-3 py-2"
            >
              <button
                type="button"
                onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}
              >
                {format(time, "hh:mm")}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <ReactCalendar
          minDate={new Date()}
          className="REACT-CALENDAR p-2"
          view="month"
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
        />
      )}
    </div>
  );
};

export default index;

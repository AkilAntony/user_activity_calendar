import "./App.css";
import ActivityDetailsPopup from "./components/ActivityDetailsPopup";
import BigCalendar from "./components/BigCalendar";
import { useAppSelector } from "./hooks/useDispatch";

function App() {
  const selectedDateInfo = useAppSelector(
    (state) => state.calendar.selectedDateInfo
  );

  console.log(selectedDateInfo, "selectedDateInfo");
  return (
    <div className="">
      <BigCalendar />

      {selectedDateInfo?.date ? (
        <ActivityDetailsPopup
          selectedDateDetails={selectedDateInfo}
          isOpen={!!selectedDateInfo}
        />
      ) : null}
    </div>
  );
}

export default App;

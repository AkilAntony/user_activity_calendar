import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { SelectedDateData } from "@/types/common";
import UserActivityChart from "./UserActivityChart";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedDateInfo } from "@/store/slices/calendarSlice";
import { format } from "date-fns";

interface Props {
  selectedDateDetails: SelectedDateData;
  isOpen: boolean;
}

const ActivityDetailsPopup = ({ selectedDateDetails, isOpen }: Props) => {
  const dispatch = useDispatch();

  const [isPopupOpen, setIsPopupOpen] = useState(isOpen);

  const handleClose = () => {
    setIsPopupOpen(false);
    dispatch(
      setSelectedDateInfo({
        date: null,
        data: [],
      })
    );
  };
  return (
    <Dialog open={isPopupOpen} onOpenChange={handleClose}>
      <DialogTrigger></DialogTrigger>
      <DialogContent
        className="bg-white w-[90%]"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>
            {selectedDateDetails.data.length > 0
              ? `User Activity - ${format(
                  selectedDateDetails.date?.toString() as string,
                  "dd-mm-yyyy"
                )}`
              : "Warning"}
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div>
          {selectedDateDetails.data.length > 0 ? (
            <UserActivityChart selectedDateDetails={selectedDateDetails.data} />
          ) : (
            `No data found for the selected date ${format(
              selectedDateDetails.date?.toString() as string,
              "dd-mm-yyyy"
            )}`
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ActivityDetailsPopup;

import { useState } from "react";
import { CalendarStep } from "./CalendarStep/index.page";
import { ConfirmStep } from "./ConfirmStep/index.page";

export function ScheduleForm() {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>();

  function handleClearSelectedTime() {
    setSelectedDateTime(null);
  }

  if (selectedDateTime) {
    return (
      <ConfirmStep
        schedulingDate={selectedDateTime}
        onCancelConfirmation={handleClearSelectedTime}
      />
    );
  }

  return <CalendarStep onSelectDateTime={setSelectedDateTime} />;
}

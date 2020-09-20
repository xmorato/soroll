import React from "react";
import { DateRangePicker } from "materialui-daterange-picker/dist";

export const ChoiceCalendar = props => {
  const [open, setOpen] = React.useState(true);
  //const [dateRange, setDateRange] = useState({});

  const toggle = () => {
    setOpen(!open);
    //props.onToggle();
  }

  const handleChange = (range) => {
    //  setDateRange(range);
    console.log("Range:", range);
    props.onChangeDate(range)
  }

  return (
    <>
      <DateRangePicker
        open={true}
        toggle={toggle}
        closeOnClickOutside={false}
        onChange={(range) => { handleChange(range) }}
      />
    </>
  );
}

import { Popover, Typography } from "@material-ui/core";
import { ChoiceCalendar } from "./ChoiceCalendar";
import React from "react";

export const ShowDateRangePicker = ({
  showCalendar,
  handleClose,
  onChangeDateOnCalendar,
}) => {
  return showCalendar ? (
    <Popover
      open={showCalendar}
      onClose={handleClose}
      elevation={20}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
      <Typography align="center">
        {" "}
        Selecciona dues dates o un rang a la columna de la dreta - ESC per
        sortir
      </Typography>
      <ChoiceCalendar onChangeDate={onChangeDateOnCalendar} />
    </Popover>
  ) : null;
};

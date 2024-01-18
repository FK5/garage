"use client";

import { FC, useState, ChangeEvent } from "react";
import TextInput from "@/components/TextInput";

import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

const AppointmentSection: FC = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [makeModel, setMakeModel] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [caseDescription, setCaseDescription] = useState<string>("");

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
    setFunction: Function
  ) {
    if (event && event.target) {
      const targetElement = event.target as HTMLInputElement;
      setFunction(targetElement.value);
    }
  }

  return (
    <>
      <div className="sm:flex flex-col bg-white px-5 sm:px-20 sm:pt-20 pb-20 hidden">
        <p className="font-bold text-6xl w-1/3 mb-24">GET FREE APPOINTMENT</p>
        <div className="flex mb-20">
          <div className="w-4/12 pr-12">
            <Input
              onChange={(event) => {
                handleChange(event, setName);
              }}
              value={name}
              size="lg"
              color="red"
              variant="standard"
              label="Name"
              placeholder="Name"
              crossOrigin={undefined}
            />
          </div>
          <div className="w-4/12 pr-12">
            <Input
              onChange={(event) => {
                handleChange(event, setPhone);
              }}
              value={phone}
              color="red"
              variant="standard"
              label="Phone"
              placeholder="Phone"
              crossOrigin={undefined}
            />
          </div>
          <div className="w-5/12">
            <Input
              onChange={(event) => {
                handleChange(event, setEmail);
              }}
              value={email}
              color="red"
              variant="standard"
              label="Email"
              placeholder="Email"
              crossOrigin={undefined}
            />
          </div>
        </div>

        <div className="flex mb-20">
          <div className="w-7/12 pr-12">
            <Input
              onChange={(event) => {
                handleChange(event, setMakeModel);
              }}
              value={makeModel}
              color="red"
              variant="standard"
              label="Vehicle Make/Model and Year"
              placeholder="Vehicle Make/Model and Year"
              crossOrigin={undefined}
            />
          </div>
          <div className="w-7/12">
            <Popover placement="bottom">
              <PopoverHandler>
                <Input
                  label="Select a Date"
                  variant="standard"
                  onChange={() => null}
                  value={date ? format(date, "PPP") : ""}
                  crossOrigin={undefined}
                />
              </PopoverHandler>
              <PopoverContent placeholder={undefined}>
                <DayPicker
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  showOutsideDays
                  className="border-0"
                  classNames={{
                    caption:
                      "flex justify-center py-2 mb-4 relative items-center",
                    caption_label: "text-sm font-medium text-gray-900",
                    nav: "flex items-center",
                    nav_button:
                      "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                    nav_button_previous: "absolute left-1.5",
                    nav_button_next: "absolute right-1.5",
                    table: "w-full border-collapse",
                    head_row: "flex font-medium text-gray-900",
                    head_cell: "m-0.5 w-9 font-normal text-sm",
                    row: "flex w-full mt-2",
                    cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                    day: "h-9 w-9 p-0 font-normal",
                    day_range_end: "day-range-end",
                    day_selected:
                      "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                    day_today: "rounded-md bg-gray-200 text-gray-900",
                    day_outside:
                      "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                    day_disabled: "text-gray-500 opacity-50",
                    day_hidden: "invisible",
                  }}
                  components={{
                    IconLeft: ({ ...props }) => (
                      <ChevronLeftIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                    IconRight: ({ ...props }) => (
                      <ChevronRightIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex mb-20">
          <Input
            onChange={(event) => {
              handleChange(event, setCaseDescription);
            }}
            value={caseDescription}
            color="red"
            variant="standard"
            label="Case Descripition"
            placeholder="Case Descripition"
            crossOrigin={undefined}
          />
        </div>

        <div className="bg-black w-36 h-10 text-white px-5 py-8 flex jsutify-center items-center hover:cursor-pointer">
          <p className="font-bold text-sm">SEND</p>
          <ArrowRightIcon className="h-4 w-4 ml-4" />
        </div>
      </div>
      <div className="sm:hidden flex flex-col bg-white px-5 sm:px-20">
        <p className="font-bold text-4xl mb-8">GET FREE APPOINTMENT</p>
        <div className="mb-4">
          <Input
            onChange={(event) => {
              handleChange(event, setName);
            }}
            value={name}
            color="red"
            variant="standard"
            label="Name"
            placeholder="Name"
            crossOrigin={undefined}
          />
        </div>
        <div className="mb-4">
          <Input
            onChange={(event) => {
              handleChange(event, setPhone);
            }}
            value={phone}
            color="red"
            variant="standard"
            label="Phone"
            placeholder="Phone"
            crossOrigin={undefined}
          />
        </div>
        <div className="mb-4">
          <Input
            onChange={(event) => {
              handleChange(event, setEmail);
            }}
            value={email}
            color="red"
            variant="standard"
            label="Email"
            placeholder="Email"
            crossOrigin={undefined}
          />
        </div>
        <div className="mb-8">
          <Input
            onChange={(event) => {
              handleChange(event, setMakeModel);
            }}
            value={makeModel}
            color="red"
            variant="standard"
            label="Vehicle Make/Model and Year"
            placeholder="Vehicle Make/Model and Year"
            crossOrigin={undefined}
          />
        </div>
        <div className="mb-8">
          <Popover placement="bottom">
            <PopoverHandler>
              <Input
                label="Select a Date"
                variant="standard"
                onChange={() => null}
                value={date ? format(date, "PPP") : ""}
                crossOrigin={undefined}
              />
            </PopoverHandler>
            <PopoverContent placeholder={undefined}>
              <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
                showOutsideDays
                className="border-0"
                classNames={{
                  caption:
                    "flex justify-center py-2 mb-4 relative items-center",
                  caption_label: "text-sm font-medium text-gray-900",
                  nav: "flex items-center",
                  nav_button:
                    "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                  nav_button_previous: "absolute left-1.5",
                  nav_button_next: "absolute right-1.5",
                  table: "w-full border-collapse",
                  head_row: "flex font-medium text-gray-900",
                  head_cell: "m-0.5 w-9 font-normal text-sm",
                  row: "flex w-full mt-2",
                  cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: "h-9 w-9 p-0 font-normal",
                  day_range_end: "day-range-end",
                  day_selected:
                    "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                  day_today: "rounded-md bg-gray-200 text-gray-900",
                  day_outside:
                    "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                  day_disabled: "text-gray-500 opacity-50",
                  day_hidden: "invisible",
                }}
                components={{
                  IconLeft: ({ ...props }) => (
                    <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                  ),
                  IconRight: ({ ...props }) => (
                    <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                  ),
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="mb-8">
          <Input
            onChange={(event) => {
              handleChange(event, setCaseDescription);
            }}
            value={caseDescription}
            color="red"
            variant="standard"
            label="Case Descripition"
            placeholder="Case Descripition"
            crossOrigin={undefined}
          />
        </div>

        <div className="bg-black w-1/3 mx-auto h-6 text-white px-5 py-6 flex jsutify-center items-center hover:cursor-pointer">
          <p className="font-bold text-sm">SEND</p>
          <ArrowRightIcon className="h-4 w-4 ml-4" />
        </div>
      </div>
    </>
  );
};

export default AppointmentSection;

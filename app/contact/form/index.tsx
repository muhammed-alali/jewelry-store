"use client";
import ButtonCom from "@/components/btn";
import {
  Button,
  Checkbox,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const COUNTRIES = ["Turkey (+90)", "Syria (+963)", "USA (+1)"];
const CODES = ["+90", "+963", "+1"];
export default function Form() {
  const [country, setCountry] = React.useState(0);
  return (
    <>
      <form className="mt-8 mb-2">
        <div className="xs:mb-4 mb-1 ">
          <div className=" xs:max-w-[24rem] ">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              اسمك الكامل
            </Typography>
            <Input
              size="lg"
              type="text"
              placeholder="اسمك الكامل"
              className="  !border-gray-500 "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className=" xs:max-w-[24rem] my-4">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              رقم التليفون
            </Typography>
            <div className="relative flex  xs:">
              <Menu placement="bottom-start">
                <MenuList className="max-h-[20rem] max-w-[18rem]">
                  {COUNTRIES.map((country, index) => {
                    return (
                      <MenuItem
                        key={country}
                        value={country}
                        onClick={() => setCountry(index)}
                      >
                        {country}
                      </MenuItem>
                    );
                  })}
                </MenuList>
                <MenuHandler>
                  <Button
                    ripple={false}
                    variant="text"
                    color="blue-gray"
                    className="h-11 w-14 shrink-0 rounded-l-none border border-l-0 border-blue-gray-200 bg-transparent px-3"
                  >
                    {CODES[country]}
                  </Button>
                </MenuHandler>
              </Menu>
              <Input
                type="tel"
                pattern="[0-9]*"
                inputMode="numeric"
                maxLength={12}
                placeholder="***-***-****"
                className=" !rounded-r-none text-right !border-gray-500 placeholder:text-blue-gray-300 placeholder:opacity-100   appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                containerProps={{
                  className: "min-w-0 h-11",
                }}
              />
            </div>
          </div>
          <div className=" xs:max-w-[24rem] mb-4">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              بريد إلكتروني
            </Typography>
            <Input
              size="lg"
              type="text"
              placeholder="بريد إلكتروني"
              className="  !border-gray-500 "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className=" ">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              رسالة
            </Typography>
            <div className=" xs:max-w-[24rem]">
              <Textarea
                placeholder="رسالة"
                variant="outlined"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                className="h-[190px] !border-gray-500 "
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <ButtonCom title="ارسال" hight="3.5rem" paddingX="2.75rem" />
        </div>
      </form>
    </>
  );
}

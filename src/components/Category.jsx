import React from "react";
import { Stack, Button, Box, Heading } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import Carousel from "./Carousel";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
let module = require("./CategoryNameList.js")
let categoryNames = module.categoryNames

export const Category = () => {

  return (
    <Box h={500} display="flex" justifyContent="space-between">
      <Stack w="20%" bg="#f5fbff">
        <Heading
          as="h3"
          size="sm"
          bg="black"
          color="white"
          p="9px"
          align="center"
        >
          Category
        </Heading>
        {categoryNames.map((el, index) => {
          return (
            <Popover key={index} trigger={"hover"} placement={"right-start"}>
              <PopoverTrigger>
                <Button
                  size="sm"
                  colorScheme="yellow"
                  variant="ghost"
                  color="black"
                  display="flex"
                  justifyContent="left"
                >
                  {el.name}
                </Button>
              </PopoverTrigger>
              {el.list.length > 0 && (
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>
                    {el.list.map((elem, ind) => {
                      return (
                        <Box key={ind}>
                          <Heading size="sm">{elem.subcategory}</Heading>
                          <Flex direction="column">
                            {elem.items.map((item, i) => (
                              <Link
                                to={
                                  "/product_list/" +
                                  elem.subcategory +
                                  "/" +
                                  item
                                }
                              >
                                {item}
                              </Link>
                            ))}
                          </Flex>
                        </Box>
                      );
                    })}
                  </PopoverBody>
                </PopoverContent>
              )}
            </Popover>
          );
        })}
      </Stack>
      <Box w="80%">
        <Stack
          display="flex"
          p="9px"
          direction="row"
          bg="#ffda00"
          align="center"
          justifyContent="space-around"
        >
          <Heading as="h3" size="sm" color="white">
            SUPER DEALS
          </Heading>
          <Heading as="h3" size="sm" color="white">
            APP ONLY
          </Heading>
          <Heading as="h3" size="sm" color="white">
            NEW ARRIVAL
          </Heading>
        </Stack>
        <Carousel />
      </Box>
    </Box>
  );
};

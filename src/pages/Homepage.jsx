import React from 'react'
import { Category } from './../components/Category';
import { Stack } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { RecommendedProductsList } from './RecommendedProductsList';
export const Homepage = () => {
  return (
    <Stack>
        <Category/>
        <RecommendedProductsList/>
    </Stack>
  )
}

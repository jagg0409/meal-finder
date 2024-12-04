import {
  Image,
  Text,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import { Meal } from "../types";

type Props = {
  meal: Meal;
};

function MealCard({ meal: m }: Props) {
  return (
    <Card boxShadow="lg" key={m.idMeal}>
      <CardBody>
        <Image
          width="100%"
          borderRadius="lg"
          src={m.strMealThumb}
          alt={m.strMeal}
        />
        <Heading size="md" color="blue.400">
          <Text mt="4">{m.strMeal}</Text>
        </Heading>
      </CardBody>

      <CardFooter pt="0">
        <Button bgColor="blue.400" color="white">
          Ver receta
        </Button>
      </CardFooter>
    </Card>
  );
}

export default MealCard;

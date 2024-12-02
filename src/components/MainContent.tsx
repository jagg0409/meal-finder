import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Meal } from "../types";

type Props = {
  meals: Meal[];
  loading: boolean;
};

function MainContent({ meals, loading }: Props) {
  return (
    <SimpleGrid columns={[2, null, 3]}>
      {meals.map((m) => (
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
      ))}
    </SimpleGrid>
  );
}

export default MainContent;

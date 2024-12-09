import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { useState } from "react";
import { Category, Meal, MealDetails, searchForm } from "./types";
import useHttpData from "./hooks/useHttpData";
import axios from "axios";
import RecipieModal from "./components/RecipieModal";
import useFetch from "./hooks/useFetch";

const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

const makeMealUrl = (category: Category) =>
  `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`;

const defaultCat = {
  strCategory: "Beef",
};

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedCategory, setSelectedCategory] =
    useState<Category>(defaultCat);

  const { loading, data } = useHttpData<Category>(url);

  const {
    loading: loadingMeal,
    data: dataMeal,
    setData: setMeals,
    setLoading: setLoadingMeal,
  } = useHttpData<Meal>(makeMealUrl(defaultCat));

  const searchAPI = (searchFrom: searchForm) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFrom.search}`;
    setLoadingMeal(true);
    axios
      .get<{ meals: Meal[] }>(url)
      .then(({ data }) => setMeals(data.meals))
      .finally(() => setLoadingMeal(false));
  };
  const {
    fetch,
    loading: loadingMealDetails,
    data: MealDetailData,
  } = useFetch<MealDetails>();

  const searchMealDetails = (meal: Meal) => {
    onOpen();
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
    );
  };
  return (
    <>
      <Grid
        fontSize={14}
        templateAreas={`"header header"
                      "nav main"
                      
        `}
        gridTemplateRows={"60px 1fr"}
        gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
      >
        <GridItem
          pos="sticky"
          top={0}
          zIndex={2}
          pl="2"
          bg="white"
          boxShadow="lg"
          area={"header"}
        >
          <Header onSubmit={searchAPI} />
        </GridItem>
        <GridItem
          pos="sticky"
          left={0}
          top="60px"
          p="5"
          area={"nav"}
          height="calc(100vh - 60px)"
          overflowY="auto"
        >
          <SideNav
            categories={data}
            loading={loading}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </GridItem>
        <GridItem p="5" bg="gray.100" area={"main"}>
          <MainContent
            openRecipe={searchMealDetails}
            meals={dataMeal}
            loading={loadingMeal}
          />
        </GridItem>
      </Grid>
      <RecipieModal
        data={MealDetailData}
        loading={loadingMealDetails}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default App;

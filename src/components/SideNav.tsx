import { Heading, Link, SkeletonText, VStack } from "@chakra-ui/react";
import { Category } from "../types";

type Props = {
  categories: Category[];
  loading: boolean;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
};

const selectedProps = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold",
  px: 2,
  py: 1,
  borderRadius: "20px",
};
function SideNav({
  loading,
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return loading ? (
    <SkeletonText noOfLines={15} spacing="6" skeletonHeight="3" mt="4" />
  ) : (
    <>
      <Heading color="blue.400" fontSize={15} fontWeight="bold" mb={5}>
        CATEGORIAS
      </Heading>
      <VStack align="stretch">
        {categories.map((c) => (
          <Link
            margin={1}
            onClick={() => setSelectedCategory(c)}
            {...(selectedCategory.strCategory == c.strCategory &&
              selectedProps)}
            _hover={{ textDecoration: "none" }}
            key={c.strCategory}
          >
            {c.strCategory}{" "}
          </Link>
        ))}
      </VStack>
    </>
  );
}

export default SideNav;

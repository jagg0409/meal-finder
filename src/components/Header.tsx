import {
  Button,
  Container,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { searchForm } from "../types";

type Props = {
  onSubmit: (data: searchForm) => void;
};

function Header({ onSubmit }: Props) {
  const { register, formState, handleSubmit } = useForm<searchForm>();
  return (
    <Container maxW="5xl" mt="10px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLeftElement children={<Icon name="phone" color="gray.300" />} />
          <Input
            mr="2"
            focusBorderColor={
              !!formState.errors.search ? "crimson" : "blue.400"
            }
            isInvalid={!!formState.errors.search}
            {...register("search", { required: true })}
            type="search"
            placeholder="Try with 'chiken' or 'beans'"
          />
          <Button type="submit" color="white" bgColor="blue.400">
            Search
          </Button>
        </InputGroup>
      </form>
    </Container>
  );
}

export default Header;

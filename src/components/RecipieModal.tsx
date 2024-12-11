import {
  Button,
  Container,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import RecipeModalSkeleton from "./RecipeModalSkeleton";
import { MealDetails } from "../types";
import RecipeModalContent from "./RecipeModalContent";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  data: MealDetails | undefined;
};

function RecipieModal({ isOpen, onClose, loading, data }: Props) {
  return (
    <Container>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent maxWidth="35%">
          {loading ? (
            <RecipeModalSkeleton />
          ) : (
            data && <RecipeModalContent data={data} />
          )}

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default RecipieModal;

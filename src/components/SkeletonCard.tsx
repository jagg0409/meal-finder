import { Card, CardBody, SkeletonText } from "@chakra-ui/react";

type Props = {};

function SkeletonCard({}: Props) {
  return (
    <Card boxShadow="lg">
      <CardBody>
        <SkeletonText noOfLines={1} spacing="4" skeletonHeight="200" mt="1" />
        <SkeletonText noOfLines={2} spacing="4" skeletonHeight="2" mt="4" />
      </CardBody>
    </Card>
  );
}

export default SkeletonCard;

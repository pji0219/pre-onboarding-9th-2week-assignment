import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  Flex,
} from '@chakra-ui/react';

function ProductItem({ idx, name, image, price, category }) {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image src={image} alt={name} borderRadius='lg' />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Flex>
            <Text color='orange.700' fontSize='16' marginRight='3'>
              상품번호: {idx}
            </Text>
            <Text color='green.700' fontSize='16'>
              장소: {category}
            </Text>
          </Flex>
          <Text color='blue.600' fontSize='24' textAlign='right'>
            {price}원
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter display='flex' justify='flex-end'>
        <Button variant='solid' colorScheme='blue'>
          예약
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductItem;

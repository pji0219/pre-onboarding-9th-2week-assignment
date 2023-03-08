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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

function ProductItem({
  idx,
  name,
  image,
  price,
  category,
  description,
  maximum,
  date,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card maxW='sm' onClick={onOpen} cursor='pointer'>
        <CardBody>
          <Image src={image} alt={name} borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{name}</Heading>
            <Flex>
              <Text fontSize='16' marginRight='3'>
                상품번호: {idx}
              </Text>
              <Text fontSize='16'>장소: {category}</Text>
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>상세정보</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={image} alt={name} borderRadius='lg' w='100%' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{name}</Heading>
              <Flex>
                <Text fontSize='16' marginRight='3'>
                  상품번호: {idx}
                </Text>
                <Text fontSize='16' marginRight='3'>
                  장소: {category}
                </Text>
                <Text fontSize='16'>최대 구입 가능 수량: {maximum}</Text>
              </Flex>
              <Flex justify='space-between' alignItems='center'>
                <Text fontSize='16'>등록일: {date}</Text>
                <Text color='blue.600' fontSize='24'>
                  {price}원
                </Text>
              </Flex>
            </Stack>
            <Stack mt='6' spacing='3'>
              <Text fontSize='16'>{description}</Text>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProductItem;

import {
  Box,
  Button,
  Flex,
  Select,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useFetch } from "../../CustomHooks/FetchHook";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const WomenClothingPage = () => {
  const { data, isLoading } = useFetch("src/JSON/womenClothPage.json");
  const [sortedData, setSortedData] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "ltoh") {
      const sorted = [...data].sort(
        (a, b) => Number(a.Price) - Number(b.Price)
      );
      setSortedData(sorted);
    } else if (value === "htol") {
      const sorted = [...data].sort(
        (a, b) => Number(b.Price) - Number(a.Price)
      );
      setSortedData(sorted);
    }
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <Box>
      <Header />
      <Text fontWeight={400} fontSize={"30px"} p={[5, 5, 10, 10]}>
        Clothing for Women
      </Text>
      <Flex
        pr={20}
        pl={20}
        pt={4}
        justifyContent={"center"}
        display={["none", "none", "flex", "flex"]}
      >
        <img
          src="src\assets\MultiProductPages\mensClothingPage\d_24w08113_cat_hero_32_Degrees.jpg"
          alt=""
        />
      </Flex>

      <Flex
        pr={5}
        pl={5}
        justifyContent={"center"}
        pt={4}
        display={["flex", "flex", "none", "none"]}
      >
        <img
          src="src\assets\MultiProductPages\mensClothingPage\m_24w08113_cat_hero_32_Degrees.jpg"
          alt=""
        />
      </Flex>

      <Flex mt={5} p={10} pb={[2, 2, 2, 2]}>
        <Text fontSize={"17px"} fontWeight={400} mr={2}>
          Sort By:
        </Text>
        <Select
          variant="outline"
          placeholder="Choose"
          w={"60%"}
          outline={"1px solid rgba(0,0,0,0.4)"}
          borderRadius={"none"}
          cursor={"pointer"}
          onClick={handleChange}
        >
          <option value="ltoh">Price: Low To High</option>
          <option value="htol">Price: High To Low</option>
        </Select>
      </Flex>

      {isLoading ? (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      ) : (
        data && (
          <SimpleGrid
            gridTemplateColumns={[
              "repeat(2,1fr)",
              "repeat(2,1fr)",
              "repeat(3,1fr)",
              "repeat(4,1fr)",
            ]}
            p={[5, 5, 8, 20]}
            gap={12}
            alignItems={"end"}
          >
            {(sortedData.length ? sortedData : data).map((elem) => (
              <Link key={elem.id} to={`/women-clothing/${elem.id}`}>
                <SimpleGrid cursor={"pointer"} p={5}>
                  <img src={elem.image} alt="" />
                  <Text mt={8} fontWeight={700}>
                    ${elem.Price}
                  </Text>
                  <Text
                    mt={2}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"rgb(0, 96, 169)"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    {elem.title}
                  </Text>
                  <Button
                    _hover={{ color: "white" }}
                    mt={12}
                    bg={"#296293"}
                    color={"white"}
                  >
                    Add
                  </Button>
                </SimpleGrid>
              </Link>
            ))}
          </SimpleGrid>
        )
      )}

      <Footer />
    </Box>
  );
};

export default WomenClothingPage;

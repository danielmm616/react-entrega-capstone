import { Box, Text, Center, Flex, Stack } from "@chakra-ui/react";
import HeaderC from "../../components/HeaderC";
import { useCart } from "../../Providers/CartContext";
import ButtonC from "../../components/ButtonC";
import { useHistory } from "react-router-dom";
import CardCartC from "../../components/CardCartC";
import CartC from "../../components/CartC";

const Cart = () => {
  const history = useHistory();

  const product = {
    name: "Banana prata",
    category: "fruta",
    price: 10,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSEhUSEhUSEhISEhESEhISEhISERESGBQZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQkJCQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAACBQEGBwj/xAA4EAABAgIIBgAFBAAGAwAAAAABAAIDEQQSEyExQVFhBTJxgZGhBiKxwfAUQlLRB2Jyg5OiIzND/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAEDAgQFBv/EADARAAIBAgUBBwMEAwEAAAAAAAABAgMRBBIhMVEFEzJBYXGhsSKB4UKRwdEjJPAU/9oADAMBAAIRAxEAPwD7MooogE4mJ6qqtExPVVQDMDl7lFQoHL3KKgF6Rl3QUakZd0FAFo+Pb7plLUfHt90ygBxeU/maVTUXlP5mlUB1uI6hOpJuI6hOoCJJ2J6lOpJ2J6lAcTULlH5mlU1C5R+ZoAiWj4jomUtHxHRACRqPn2QUaj59kAwhR+XuEVCj8vcIBZWZiOoVVZmI6hAOKKKIBOudSpXOpVVEA01oIBIE5LtQaDwpDwHRXQC0UyMhcNlSudSrR+bsENAHg3znf1RKg0HhDo+fZHQAIwkJi6/JCrnUo0fAdfsUugCQ3EkAmY0KPUGg8JeDzD8yTaAo5glgEtXOpTTsD0KTQFq51KZDBoEonG4DoEByoNB4QIjiCQDIaBNJSNzH8yQHK51KLCExfffmgJiBgeqAvUGg8Ica6UruiOgUjLugBVzqVaEZmRvGhQ0SDzdigD1BoPCq5oAJAAMkVUiYHoUAtXOpUrnUqqiAZsRv5UsRv5RVEAs6IQZDAXLls7bwqxMT1VUAdrQ4TOKtYjfypA5e5RUBkcX4qyitBIc4unJrWlxuxJ0F68mPiulviAVGw4YJa+bfmuzC9B8SglzB+2R8zWBFb7XDxfUqlOrKlFbaX8djapUFJJs9hQKa2OMd5YGadsRv5Xi+HUgw3AhewotJERoIxWxgMf23+Op3l7/kwrUHDVbF3MDRMYhDtnbeEaLylKrqFAURSbtUSxG/lLtxHUJ1ACsRv5QzFIu0TKSdiepQF7Z23hEawOEziUumoXKPzNAcsRv5VHOq3DqmEtHxHRActnbeFZnzc2SCjUfPsgL2I38qrmhomMUdCj8vcIAVs7bwutiEmRwNyErMxHUIA9iN/KliN/KKogAW+3tS329oCiAPZTvnjepYb+kRmA6IFNpbYTC918hc0YuOQChtJXewLVqt2K7b7e15yJxWM902NYxt1zpudLqtWj0oPuwdotaGNoTnkjLUzdOSV2gPGBXqmWFYLDpMFehpzZsnoVjR8F53qqccVLzs/a38G/hn9CEobFoUOlGGRokA9EY5aSbTTWjNhq+jPWQaSIgEs0Sw39LzdCpRYRevSUeMHiY7r0+Ax3brLPvL3OZWo5HdbEsZXzwvUt9vaK7A9Ck10igPb7e1LGd88b0BONwHQIAVhv6XK9X5ZTlmmEpG5j+ZIAlvt7XAK9+GSCmIGB6oDlhv6XCKm8+yYQKRl3QEt9va4H1rsEFEg83YoC9hv6UspXzwvR1SJynoUAO329qW+3tAUQBbA7e1LA7e0yogACIBdfdcsLjLy+IBfVbl9VsP5j1WZSGTiOP5guV1iTWHS5kvhsvw6+r7CTGIzWEGYVnNkrMevNR3szdtwOtiB7HNPN/SwKY+S0y4i8YrO4kyfzAdltYms66jKXeWjfK8H673FCOVvhmY58kaG9JPcrwYmS10bcomm0rT4dS6pksWG9MtOYUxnKElKO6KZRUlZnrRGBGd6rYHb2sqgUucgclttcCJheqweMjiIea3RyqtNwdgNgdvavagXX3XZIySdiepW6Vh7caH0qOYXXiUjqhJqFyj8zQArA7e1Zrqtx63I6Wj4jogL240PpVca+GWqCjUfPsgOWB29rrW1LzhsmEKPyoCpjgYzHWS82PjeiupbqGXEOua2Katk55/ZOdx6rzPxr8Vc8GFJzGza8txc4YgbD7L5pHgve+u1rjXM2kDHclUqteTS25LuytFNvV+B+k7A6j2pYHb2vJ/4Z8VjRqM6FSDWiUdzWhxvLobhNs9xIjwvaq1NPYpB2rdfRUtW6+ilVFICOYSSQLjhgs6ktk8z2+i2Gco6LL4m2Tp6yXK6xG+HT4kvhr+S/D9/wCwlEKAHyKvFclnleYOhFDbXqRGBwIKBCdMJhhVi1Ri9Gebp8EscUo169NxCi2jbuYewvMxoZaVlubNOd0OQIs+qdhPWLDfJaVHih3VQyJxNFhleFrUGmyxWLDejsOamnUnTkpQdmUTipKzPUtjtInNDMMnL6LJo1KIuK1oFJDrsF6TCdRhWWWekjn1KLj6HLJ2nsIrHBokbiEUJWNzH8yXSKQ9q3X0UKIKxmLxghJiBgeqAFZO09hXh/LOtdPBMIFIy7oCzozRiQF5b4s482HCcxrgK7S0XkOOpCT41xowGxIhDnyrSYL6+QAXyuPHpFNjmI+s1puqCdVoGAb/AGuZ/wCl108ryxTab8X6F0csNZahDBdFdUYc/neBMXLchQgwNhgVi1spgYotAgiHVBaL5SDeUDM9U9wjgseNHc4ABkyaxNwbrLNUurdKEdeCp1XJ3Nz/AA8Mn0guD21bNl7XVCbyZOwJvFy93at19FZ9Eo4hw2wxeGjE5nMoy61OOWCTDdztU6HwpVOh8J1DixA1pcbgLysm7asg6wiQ6JHirZtDhkZeUNtMa4k4TJx0V3Se0gEGfo5LUqypYqlKnCSba58d17lkbwkmzFiOQHK0YyJBxFxQ5rx70Z1Y7EhvqlOw3ZrPei0eJK44LJOwkrmk1ZfFOH1gXtHUfdaDHIwVqKk2meGiMqlEgxJL0PE+FB4LmCTsS3I9F5p7CwkEEEYjRS1c2oVFJGxR44NxuKeYV56DFWnRqVLG8Kp6GMo8Gu1FY8hKwYgdgUy0qUyhodg01zdxumP1AcZ4TWaJK4C36GPr0tE7rh/9colRjI0hfgjwbhfdfmscEq9d2vsLoR6uv1Q/ZlLoeZs1hqPKRp9Ja1hIIJE8Emd1l8XpMm1Riq6vVpNfRG3q7/A7FR1bPM8aiV3VRhPyUpD4VVAdfM/VP0eDXfM4D6rReyb2tyaJ9yuaqmSyRU4uV7mQ6jSc1k5m4le2+HWAB8v4gLxzSXRyf85HYGS9hwMScBqPutjBz/2YZufnQslTyxNaR0PhSqdD4Tqi9OUEWdxZ3yBv8iPAv/pErHU+UpxETqnSf2Wn1BtYWpbi37tJmdNXmhZrFZzex1FyqxyvNeUjZq5vWsZ1PgudMgzO+axf1RY6q8EHdepIBSdO4cyIJOHQ5juktW3LUvp1EtGZ7IwKIsukUSJRzO97P5DEdQmKNSg4LFxtqWWvqjSgRpXHBPseshr5piFGLVim4lco3NQJancPbFHzi/JwucP7VoUYFMNcr4yTKWnE8nTODRId7BXZq3mHUJSHGkZG46Fe6AS9J4eyJzsaTrgfIWThctjXtpI83BjrQg0sjG9Ef8Pt/Y5zdjJwVRwV4we09QQqnTZn2lOXiMw6U07I7YrTmk4fDHjFzfaZZw+WLvAUZZlcnDkNaDULofPC9RtHa3fqu1tMFkk13mVu3gUivIG6x6TDJmTeVrvScaXlRLQwcbmXCgluCZgs+YnWX0TbYYRGQlGpHZmBQoP/AJXbOd9SvVcOue1Ywh1Yrus/N62eGsrOnk0H6LYwsXKtC3K+S2rZRv5HoFElWOp8qVjqfK9gcw4g0pk2nZaFk3T6rjoLSJSx6qutT7SnKHKsTF2aZ50mSu2JNcpLKriNCl60ivFOLpyaZ1NJK6GqyI16A1wPVdVnmiGgzoYI1WPTeCAkuh/I7Ej9p7ZLVa9XERRcRco7Hlqz4ZqvBadcj0KahxgVuxIbXiTgHDcTWfG4OMWEt2N4UON9i1VYvfQCx6ah0ghIuo0RmLaw1beusi63dblW46ktJmuykhFbFGqyWRURj1kpzRW6aNYPClcbLNERXa4ndZdtIw7MdMUKjoyC1hOyI1gG5WV5yItFHAC7HBXJkoTJKxIizjBRIvc7FiJC0rO2Q6XSP2juUOAVg9WWqNkacFNNCUgJyCJmQVkINtJeJXIzywuiODbyXSAG1y9LRaKIbCMyPmKWolGEO8XuOLv6TYeSQCbjcV6DBYHsfrn3vg06tXPotgaiasm6fVSybp9V0SkIuJe3OyludkAhxKFeXb3rLcF6Qwg4TM/mxCxKbRyx0sjynULgdUwlpdrHZ7+v5+Tcw9TTKxMGSMx87ihFVK42qNrccqrkkuyOQjsiA9VmmmYtNBA6SuHIRCk0ykBg9VexrsQD1AQ5qwKlJkFTRGfxl0JXRQ2aHyVcPXa6yUVwMz5OCA0ZD6qwVC9VL1OVEXYUlDdEQ3OQYsUNE3HsstgkEe+azaXS5fK3uUKk0suuFwSobNVuWbYtUbbkaJp2jsQYbE2wSRRJbGWFanD4cwX6SA6rLgNLiAM16GjQ5NDMsyMSur0+hmqZ3tH58DVrzsrcnFaHiOoRrAan0oYYF4ndeu8aQZRLW52UtzsgBKI36ff0p+n39IAsPAdFSkQA9paexzB1XLWrdLC5S329qJRUk09mE7ao85S4DobqruxyIQJr00aAIovwOWY3WJTeGOh/M3526jFvULgYvp7p/VT1Xuv79TdpVlLR7iTlStJcL1UuXLcDYuMMpJGN6O2kNOyz6yrWUWaDSNVrhqurKLypbO1KyUnwRlNUKLK/UO1Q3R3alTmfAyGu54GJCDEpbBnPospzzqqFLyZOVeI5Gp5Nzbko55diqgKwCZb7mWxwMRGNXAul6zykBAZK7CSQBeTcAMyqUaC6I6qwEnM5Dclen4ZwxrBPF+btNgtvDYWdZ6aLn+uSqpUjBa78FaBRagm7mP8A12WhB5uxXbDf0oGVL8V6GnTjTiox2Rz5ScndjCpEwPQodvt7UtZ3SxuWZABRG/T7+lP0+/pAMKIVsN/ClsN/CABExPVVRXQyTMYG9csXbeUAWBh3KJJBa4NEjirWw38IDO4jwtkS8fK4zvbgeoXn6VQIkO8is3+QvHcZL1zxXwyVbE7eVqVsFSq6tWfKLYVpR8zw1ooHr1tJ4TCfe9sif3MNV0+2KyaR8OyvhxJ7PbI+R/S5dTptWPdtL29jZjiIPfQyC9crIsXhkdv7C7/SQ70lItZnO1zP9Qc36rVlQqR70WvsWqUXsw1ZcLksKS3UeVLcaquyMxia4lzSmjMeQr0d5iGrDFc6MBd9FKhKWyb+xDaW4wq1lpQOAx3YgNH+Z1/gLRo/w/Db/wCxxec2tuHnErZhga8/029dPyVyrwXieeY1zzJoLicABMrXonAXGRimqMagx7nJeigQ4bBJgDRsLz3V3Cte3DBdGj02Edajv5eH9s154lvu6C0GC1jarAGgaJqj59lSxdt5VmfLjnpeuiklojWGEKPy9wpbDfwqucHCQxUgArMxHUK1idvK62GQZnAXoBlRCthv4Uthv4QCyitZnQ+FLM6HwgGYeA6K6G1wAAJGC7XGo8oAEfm7BDRYomZi8bKlmdD4QBaPn2R0CDdOd3VErjUeUBSPgOv2KXTEYzEhffkg2Z0PhAdg8w/Mky5oOIB6peG0ggkSGpR641HlALROHwXXuhQnbmGw/ZIHg9HP/wAIP/Gz+lsF4liPKWszofCATZw2A3CDBH+3D/pakJgaAGgNEsAAAl7M6HwmQ8ahAXSkbmP5kmK41HlAiNJJIExqEANMQMD1QbM6HwjQjISN1+aAMgUjLuiVxqPKHGvlK/pegAIsDm7KlmdD4V4QkZm4boBlUicp6FSuNR5XHOBBAInJAKqK1mdD4UszofCAcUUUQCcTE9VVWiYnqqoBmBy9yioUDl7lFQC9Iy7oKNSMu6CgC0fHt90ylqPj2+6ZQA4vKfzNKpqLyn8zSqA63EdQnUk3EdQnUBEk7E9SnUk7E9SgOJqFyj8zSqahco/M0ARLR8R0TKWpGPb+0AJGo+fZBRqPn2QDCFH5e4RUKPyoBZWZiOoVVZmI6hAOKKKID//Z",
  };

  const { cartProducts } = useCart();

  if (cartProducts.length === 0) {
    return (
      <Box bg="cream.100" w="100vw" h="100vh">
        <HeaderC />
        <Center fontSize="4xl">Carrinho</Center>
        <Flex direction="column" justify="center" align="center" mt="26vh">
          <Text fontSize="3xl" maxW="280px" mb="10px">
            Nada por aqui...
          </Text>
          <ButtonC
            onClick={() => history.push("/vendedor")}
            text="Ir às compras"
            bg="green.200"
          />
        </Flex>
      </Box>
    );
  } else {
    return (
      <Box bg="cream.100" w="100vw" h="100vh">
        <HeaderC />
        <Center fontSize="4xl">Carrinho</Center>
        <Flex
          direction={["column", "row"]}
          justify="center"
          align={["center", "start"]}
        >
          <Box
            bg="gray.100"
            borderRadius="20px"
            w={["90vw", "60vw"]}
            h={["50vh", "65vh"]}
            ml={["0", "50px"]}
            mt="20px"
            minW='300px'
            overflowY='auto'
            boxShadow='xl'
            sx={{
              '&::-webkit-scrollbar': {
                width: '16px',
                borderRadius: '8px',
                backgroundColor: `gray.100`,
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: `green.200`,
                borderRadius: '8px'
              },
            }}
          >
          </Box>
          <Box
            w="210px"
            borderRadius="20px"
            bg="gray.100"
            m={["20px", "60px"]}
            h="100%"
            p="10px"
            boxShadow="lg"
          >
            <Stack spacing={8}>
              <Text fontSize="2xl">Total</Text>
              <Text fontSize="2xl">R$</Text>
              <ButtonC text="Finalizar compra" bg="green.200" />
            </Stack>
          </Box>
        </Flex>
      </Box>
    );
  }
};

export default Cart;

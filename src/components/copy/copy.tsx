import { Container } from "../container";
import { Text } from "../text";

import { Colors } from "../../utils/types";
import { useTabletMediaQuery } from "../../hooks/useTabletMediaQuery";
import { useMobileMediaQuery } from "../../hooks/useMobileMediaQuery";
import { Icon } from "../icon";

export const Copy = () => {
  const isTablet = useTabletMediaQuery();
  const isMobile = useMobileMediaQuery();

  function switchPadding() {
    if (isTablet) return "0 27.34vw"
    if (isMobile) return "0 3.86vw"
    return "0"
  } 
  
  return (
    <Container
      flexDirection="column"
      alignItems="center"
      margin="20px 0 0"
      gap="14px"
    >
      <Text
        as={"p"}
        fontFamily="Roboto"
        textAlign="center"
        fontSize={14}
        fontWeight={400}
        lineHeight={24}
        textTransform="none"
        color={Colors.Navy}
        padding={switchPadding()}
      >
        {
          "Чтобы посмотреть нашу презентацию, отправьте ссылку на свой компьютер или ноутбук"
        }
      </Text>
      <Icon>
        
      </Icon>
    </Container>
  );
};

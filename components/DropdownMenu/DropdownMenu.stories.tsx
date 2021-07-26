import Box from "../Box";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuItem from "./DropdownMenuItem";
import structure from "../Menu/structure";

const imagesMenu = structure[0];
const iconsMenu = structure[1];

export default {
  component: DropdownMenu,
  subcomponents: { DropdownMenuItem },
  title: "DropdownMenu",
};

export const TabsWithIcons = () => {
  return (
    <Box mx="auto" my={5} maxWidth="500px">
      <DropdownMenu title={iconsMenu.description}>
        {iconsMenu.children.map(({ icon, title, description, href }, index) => (
          <Box as="li" key={index}>
            <DropdownMenuItem
              key={index}
              icon={icon}
              title={title}
              description={description}
              href={href}
            />
          </Box>
        ))}
      </DropdownMenu>
    </Box>
  );
};

export const TabsWithImages = () => {
  return (
    <Box mx="auto" my={5} maxWidth="500px">
      <DropdownMenu title={imagesMenu.description}>
        {imagesMenu.children.map(
          ({ image, title, description, href }, index) => (
            <Box as="li" key={index}>
              <DropdownMenuItem
                key={index}
                image={image}
                title={title}
                description={description}
                href={href}
              />
            </Box>
          )
        )}
      </DropdownMenu>
    </Box>
  );
};

export const TabsWithoutIcons = () => {
  return (
    <Box mx="auto" my={5} maxWidth="500px">
      <DropdownMenu title={imagesMenu.description}>
        {iconsMenu.children.map(({ title, description, href }, index) => (
          <Box as="li" key={index}>
            <DropdownMenuItem
              key={index}
              title={title}
              description={description}
              href={href}
            />
          </Box>
        ))}
      </DropdownMenu>
    </Box>
  );
};

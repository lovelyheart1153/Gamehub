import bullsEye from "../assets/bullseye.png";
import thumbsup from "../assets/thumbsup.png";
import meh from "../assets/meh.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
   rating: number;
}

const Emoji = ({ rating }: Props) => {
   const imojiMap: { [key: number]: ImageProps } = {
      3: { src: meh, alt: "meh" },
      4: { src: thumbsup, alt: "recommended" },
      5: { src: bullsEye, alt: "exceptional" },
   };

   if (rating < 3) return null;

   return <Image {...imojiMap[rating]} boxSize="30px" marginTop={2} />;
};

export default Emoji;

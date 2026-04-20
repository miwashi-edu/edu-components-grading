import type { Meta, StoryObj } from "@storybook/react";
import CustomCarousel from "../src/components/CustomizeTextCarousel/CustomCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


const reviewData = [
  {
    name: "John",
    message:
      "I recently visited Elite Cuts Barbershop, and I must say, it was one of the best haircut experiences I’ve had. The barbers are highly skilled and pay great attention to detail. I showed a picture of the style I wanted, and they nailed it perfectly. The shop has a clean and modern look, and the staff is super friendly. They even offer a complimentary drink while you wait! Definitely my new go-to spot. Highly recommended!",
  },
  {
    name: "Chris",
    message:
      "The barbers at Sharp Styles Barbershop are talented and know what they’re doing. I was really happy with my fade and beard trim—the results were on point. However, the wait time was longer than expected, even though I had an appointment. I would suggest they improve their scheduling system to avoid long delays. Other than that, great barbers and a chill atmosphere!",
  },
  {
    name: "Patrick",
    message:
      "I had high expectations when I walked into Precision Cuts Barbershop, but unfortunately, my experience wasn’t great. The barber seemed rushed and didn’t listen carefully to what I wanted. My haircut ended up shorter than I asked for, and the lines weren’t even. The shop itself is nice, but customer service could be better. I might give them another chance, but I’d be more specific about my request next time.",
  },
];

const meta: Meta<typeof CustomCarousel> = {
  title: "App/Custom_Text_Carousel",
  component: CustomCarousel,
  argTypes: {
    data: {
      control: {
        type: "object",
      },
    },
  },
};
export default meta;

type CarouselStory = StoryObj<typeof CustomCarousel>;
export const TextCarousel: CarouselStory = {
  name: "TextCarousel",
  args: {
    data: reviewData,
    showIndicators: true,
    showArrows: true,
    showStatus: true,
    showThumbs: true,
    emulateTouch: true,
    infiniteLoop: true,
    autoPlay: true,
  },
};

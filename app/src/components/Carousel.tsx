import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import imgCosmos1 from "D:/sandbox/site-flowers/catalogue/app/src/assets/icosmos_612x612.jpg";
import imgCosmos2 from "D:/sandbox/site-flowers/catalogue/app/src/assets/icosmos2_612x612.jpg";

export default function CarouselHome() {
   const items = [
      {
         img: imgCosmos1,
         name: "Random Name #1",
         description: "Probably the most random thing you have ever seen!",
      },

      {
         img: imgCosmos2,
         name: "Random Name #2",
         description: "Hello World!",
      },
   ];

   return (
      <Carousel duration={3000}>
         {items.map((item, i) => (
            <Item key={i} item={item} />
         ))}
      </Carousel>
   );
}

function Item(props: {
   item: { name: string; description: string; img: string };
}) {
   return (
      <Paper>
         <img src={props.item.img} />
         <h2>{props.item.name}</h2>
         <p>{props.item.description}</p>

         <Button className="CheckButton">Check it out!</Button>
      </Paper>
   );
}

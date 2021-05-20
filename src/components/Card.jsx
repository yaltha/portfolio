import classNames from "classnames";
import { Container, Image } from "./style/Card";

export function Card({ classes, childen, ...restProps }) {
  return (
    <Container
      className={classNames("card", classes)}
      {...restProps}
    ></Container>
  );
}

Card.Image = function CardImage({ src, alt, classes, ...restProps }) {
  return (
    <Image
      src={src}
      alt={alt}
      className={classNames("card-image", classes)}
      {...restProps}
    />
  );
};

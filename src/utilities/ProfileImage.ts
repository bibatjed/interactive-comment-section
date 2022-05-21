import amyrobson from "../images/avatars/image-amyrobson.png";
import maxblagun from "../images/avatars/image-maxblagun.png";
import ramsesmiron from "../images/avatars/image-ramsesmiron.png";
import juliusomo from "../images/avatars/image-juliusomo.png";

const imageObj: Record<string, any> = {
  amyrosson: amyrobson,
  maxblagun: maxblagun,
  ramsesmiron: ramsesmiron,
  juliusomo: juliusomo,
};

export default function profileImage(username: string) {
  return imageObj[username];
}

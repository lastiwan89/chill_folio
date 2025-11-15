import Image from "next/image";

const Card = ({ link, name }: { link: string; name: string }) => {
  return (
    <div>
      <Image src={link} width={300} alt={name}>
        <p>{name}</p>
      </Image>
    </div>
  );
};

export default Card;

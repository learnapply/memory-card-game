type Props = {
  id: number;
  name: string;
  imgUrl: string;
  handleClick: (id: number) => void;
}

const Card = (props: Props) => {
  const { id, name, imgUrl, handleClick } = props;
  return (
    <div className="card" onClick={() => handleClick(id)}>
    <img src={imgUrl} alt={name} />
    <p>{name}</p>
  </div>
  )
}

export default Card

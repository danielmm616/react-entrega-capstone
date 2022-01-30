import "./styles.css";

interface TeamInfo {
  name: string;
  img: string;
  role: string;
  roleInitial: string;
  description: string;
  link: string;
}

const CardTeam = ({
  name,
  img,
  role,
  roleInitial,
  description,
  link,
}: TeamInfo) => {
  return (
    <>
      <div className="flipcard">
        <div className="flipcard-inner">
          <div className="flipcard-front">
            <h1 className="title">{name}</h1>
            <img className="image" src={img} alt="img" />
            <div className="frente">
              <p className="parag">{roleInitial}</p>
            </div>
          </div>
          <div className="flipcard-back">
            <ul>
              <li className="listItem hItem">{role}</li>
              <li className="desc listItem">{description}</li>
            </ul>
            <a href={link} target="_blank" rel="noreferrer" className="Span">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTeam;

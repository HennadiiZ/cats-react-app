import axios from "axios";
import classes from "./Card.module.scss";
import DataContext from "../../_store/data-context";
import { useContext, useState, useEffect } from "react";
import Button from "../../UI/button/Button";
import { API_KEY, PICS_API } from "../../constants/constants";

function Card(props) {
//   const catsDataCtx = useContext(DataContext);
  const [pictureUrl, setPictureUrl] = useState(props.card.url);

  async function getRandomImage() {
    const { data } = await axios.get(
      `${PICS_API}${API_KEY}`
    );
    setPictureUrl(data[0].url);
    return data;
  }

  useEffect(() => {
    getRandomImage();
  }, [props.card.id]);

  return (
    <div className={classes.card}>
      <div className={classes.card__image}>
        <img src={pictureUrl} alt="A cat" />
      </div>
      <div className={classes.card__info}>
        <div>Name: {props.card.name}</div>
        <hr className={classes.card__divider} />
        <div>
          Description: {props.card.description}
        </div>
      </div>
      <div>
        <Button type="button" label="Refresh" onClick={getRandomImage} />
      </div>
    </div>
  );
}

export default Card;
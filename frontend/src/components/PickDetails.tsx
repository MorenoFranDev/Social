import style from "./PickDetail.module.css";
import {Link, useLocation} from 'react-router-dom'
export const PickDetails = () => {
  const location = useLocation().pathname.split("/").pop();

  return (<>
      <Link to='/' className="button" >Volver</Link>
    <div className={style.Container_PostDetail}>
      <div className={style.Card_img}>
        <img
          className={style.Card_imgImg}
          src={`http://localhost:3001/uploads/${location}`}
          alt={`${location}`}
        />
      </div>
      <div className={style.Card_body}>
        <div className={style.Card_header}>
          <h2>@MorenoFranDev</h2>
          <button className="button">Follow</button>
        </div>
        <div className={style.Card_comments}>
          <div className={style.inputCommnetBox}>
            <input type="text" className={style.inputCommnet} />
            <button className="button">Send </button>
          </div>
          <div className={style.comments}>
            <span>@jamito01</span>
            <p>Exelente foto mi estimado</p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

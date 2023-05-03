import style from './Pick.module.css'

export default function Pick({item}) {
  return (
    <div className={style.Card_post}>
        <div className={style.Card_header}>
          <div>
            <h2>{item.profileImg }</h2>
            <h2>{item.username}</h2>
          </div>
          <button className={style.button}>Follow</button>
        </div>
        <div className={style.Card_body}>
            <img src={item.Pick.path} alt={item.Pick.id} className={style.Card_bodyImg}  />
        </div>
    </div>
  )
}

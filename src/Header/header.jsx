import './Header.index.scss'
import { useState } from "react";

function Header() {
  const [showMore, setShowMore] = useState(true);

  function handleClick() {
    setShowMore(!showMore);
  }

  return (
    <header>
      <div className="head_left">
        <div className="district">
          <h>Knightsbridge private park – элитный район Лондона в центре</h>
        </div>
        <div className="info">
          <div className="quantity">
            <div>
              <b>156 - 636 <m>м<sup>2</sup></m></b>
              <span>Площадь квартир</span>
            </div>

            <div>
              <b>475</b>
              <span>Парковочных мест</span>
            </div>

            <div>
              <b>10 <m>мин</m></b>
              <span>До метро Фрунзенская</span>
            </div>


            {!showMore && (
              <button className="button_hidden" onClick={handleClick}>
                узнать подробнее
              </button>
            )}
            {showMore && (
              <div>
                <b>2 <m>га</m></b>
                <span>Площадь собственного парка</span>
                <button className="button_hidden" onClick={handleClick}>
                  скрыть
                </button>
              </div>
            )}
          </div>
          <div className="text">
            <p>
              Жилой комплекс из четырех клубных домов класса де-люкс в английском стиле,
              расположенный в собственном парке площадью 3 га в районе Хамовники.
              Авторы интерьеров жилого копмлекса,и дизайна частного парка – дизайнеры мировой величины.
              Так, общественные зоны оформляет Дэвид Линли, племянник королевы Великобритании и глава компании LINLEY,
              а настоящий английский парк для жителей
            </p>
          </div>
        </div>
      </div>
      <div className="head_right">
        <div className="giraffe">
          <img className='giraffe_img' src="/img/giraffe.png" alt="giraffe"></img>
        </div>
        <div className="square">
          <div>
            <img className='present_img' src="/img/present.png" alt="present"></img>
            <span>Презентация ЖК Knightsbridge Private Рark</span>
          </div>
          <div>
            <img className='type_img' src="/img/type.png" alt="type"></img>
            <span>Типы планировок апартаментов</span>
          </div>
        </div>
      </div>
    </header>
  )
}


export default Header;
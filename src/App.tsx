import './App.css';
import { YandexMap } from './YandexMap';

function App() {
  return (
    <div className="container">
      <img src="/images/background.png" className="bg" />
      <div className="mainTitle-wrap">
        <span className="title">Артем</span>
        <span className="title" style={{ marginLeft: '130px' }}>
          и
        </span>
        <span className="title" style={{ marginLeft: '30px' }}>
          Александра
        </span>
      </div>
      <div className="intro">
        <span className="title secondary">Наши дорогие и любимые</span>
        <p className="text intro-text">
          С радостью спешим Вам сообщить, что не так давно мы приняли одно очень важное для нас
          решение: стать семьёй! Если Вы читаете эту радостную новость, то это значит, что мы хотим
          разделить этот момент вместе с Вами.
        </p>
      </div>
      <div className="calendar"></div>
      <div className="place">
        <span className="title secondary">Место проведения</span>
        <div className="place-text">
          <img src="/images/placeIcon.svg" width="24px" height={'24px'} />
          <span className="text">Загородный клуб "Ильдорф"</span>
        </div>
        <div className="map">
          <YandexMap />
        </div>
        <div className='place-description'>
          <p className='text'>Свадьба пройдёт за городом. Мы организуем трансфер — все детали будут в разделе «Наш план».
Можно остановиться рядом, чтобы не тратить время на дорогу — прямо в «Ильдорфе» или в соседнем клубе «Серебро».</p>
        </div>
        
      </div>
    </div>
  );
}

export default App;

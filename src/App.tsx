
import './App.css'

function App() {

  return (
  <div className='container'>
    <img src="/images/background.png" className='bg'/>
    <div className = 'mainTitle-wrap'>
      <span className='title'>
        Артем
      </span>
      <span className='title' style={{marginLeft: '130px'}}>
        и
      </span>
      <span className='title' style={{marginLeft: '30px'}}>
        Александра
      </span>
    </div>
    <div className='intro'>
      <span className='title secondary'>Наши дорогие и любимые</span>
      <p className='text intro-text'>
        С радостью спешим Вам сообщить, что не так давно мы приняли одно очень важное для нас решение: стать семьёй!
Если Вы читаете эту радостную новость, то это значит, что мы хотим разделить этот момент вместе с Вами.
      </p>
    </div>
    <div className='calendar'></div>
  </div>
  )
}

export default App
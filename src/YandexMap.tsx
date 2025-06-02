export const YandexMap = () => {
  return (
    // <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/ildorf/1045836225/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Ильдорф</a><a href="https://yandex.ru/maps/11079/nizhny-novgorod-oblast'/category/resort/184106400/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">База, дом отдыха в Нижегородской области</a><iframe src="https://yandex.ru/map-widget/v1/org/ildorf/1045836225/?ll=42.880757%2C56.212590&z=17" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
    <div style={{position: 'relative', overflow: 'hidden'}}>
      <a href="https://yandex.ru/maps/org/ildorf/1045836225/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}>Ильдорф</a>
      <a href="https://yandex.ru/maps/11079/nizhny-novgorod-oblast'/category/resort/184106400/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>База, дом отдыха в Нижегородской области</a>
      <iframe src="https://yandex.ru/map-widget/v1/org/ildorf/1045836225/?ll=42.880757%2C56.212590&z=17" style={{width: '100%', height: "200px", position: 'relative'}} allowFullScreen></iframe>
    </div>
  );
};

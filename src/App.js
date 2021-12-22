import React from 'react';
import FavouriteProvider from './context/FavouriteContext/FavouriteProvider';
import Navigation from './navigation/navigation';

/**
 * Selamlar. Bu ödevde sizden Marvel API'nı kullanarak bir uygulama yapmanız isteniyor.
 * Uygulama içerisinde kullanıcı kahraman adına göre arama yapabilecek, Marvel çizgi romanlarının listesine
 * erişim sağlayabilecek ve ilgili çizgi romanda yer alan kahramanların listesini görebilecek. Kullanıcı eğer isterse
 * sevdiği çizgi romanı ya da kahramanı favorilerine alabilecek. Favoriye aldığı öğeyi uygulamaya geri girdiğinde de görebilecek.
 * Bu ister için AsyncStorage paketini kullanabilirsiniz. Uygulama içinde gece gündüz modu ve dil desteği de isteniyor. Bunun için
 * bir Ayarlar sayfası eklenebilir. Gece gündüz modunun default değerini telefonun ayarlarından tespit edilip belirlenmesi önemli bir ister.
 *
 * http://gateway.marvel.com/v1/public/characters?ts=1&apikey=64db28cd226245f53f4c8ab2c62bbafd&hash=07ed8cc60a3326b2ced80fe0b8056835
 *
 * Marvel API: https://developer.marvel.com/
 * AsyncStorage: https://react-native-async-storage.github.io/async-storage/docs/install/
 *
 * ## Dil desteği için opsiyonel ##
 * React i18next: https://react.i18next.com/
 *
 * Başarılar..
 */

export default function App() {
  return (
    <FavouriteProvider>
      <Navigation />
    </FavouriteProvider>
  );
}

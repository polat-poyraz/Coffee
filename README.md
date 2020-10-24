# Coffee 2.1.0
Coffee React deki karmaşıklıkları basitleştiren bir tool çantasıdır.
İçerisinde birsürü tool bulundurur.

![metin](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/htc/37/hot-beverage_2615.png)

## Toollar
1. [Query](#Query)
2. [Component](#Component)
3. [Class](#Class)
4. [State](#State)


## Kullanım
Coffee.js dosyasını github üzerinden indirebilirsiniz.
> npm e yüklenmemiştir.
```javascript
import Coffee from 'coffee.js in dosya konumu'
```
Coffee deki toolları kullanmak için
```html
<Coffee.Toolname>
</Coffee.Toolname>
```

## İçerik ve anlatım
## Query
Coffee deki toollardan birtaneside sorgu tooludur.
tekli ve template yapısındaki sorgu toolu if else yapısını HTML e taşır.
ismi query dir.
Coffee.Query sorgu için mode propsu alır.
```<Coffee.Query mode={viewMode}>```  
Coffee.Query içerisindeki query prop u verilmiş divler üzerinden işlem yapar.
```html
<Coffee.Query mode={viewMode}>
    <div query="">
    </div>
    <div query="">
    </div>
</Coffee.Query>
```
query prop u yanlızca if veya else değerine sahip olmalıdır.
kullanım;

```html
    <Coffee.Query mode={viewMode}>
        <div query="if">
            {/* viewMode değişkeni true ise görünecek kısım */}
        </div>
        <div query="else">
            {/* viewMode değişkeni false ise görünecek kısım */}
        </div>
    </Coffee.Query>
```
Bu sayede dinamik sorgulamayı daha basit ve düzenli hale getirmiş olduk.

## Component
component tool u eğer if else ile sadece bir, iki component render etmek istiyorsanız
veya text gibi küçük şeyler üzerinde sorgu yapacaksanız kullanmalısınız.
Coffee.Component ile tek satır ile hem sorgu hem render yapabiliriz.  
```<Coffee.Component mode={} if={} else={} />```
Coffee.Component yine Coffee nin sorgu yapabilmesi için mode propunu alır.  
Aldığı mode prop u üzerinde, true ise if e verilen değeri false ise else ye verilen
değeri return eder.
örneğin;

> yanlızca component render etmez

```html
<Coffee.Component mode={viewMode} if={<FirstComponent />} else={<LastComponent />} />
```

## Class
```Coffee.Class({})```  
Coffie.Class etiketlerdeki classları dinamik hale getirerek
reahat şekilde class değişimleri yapabilmenizi sağlar.  
Class bir fonkiyondur içerisine bir obje alır ve objenin içerisinde üç değer bulunur.  
```mode``` ```querys``` ```classes```
mode değişkenine kontrolu yapacağımız değişkeni veririz.  
querys değişkenine mode için sorgu yapacağımımz değerleri veririz.  
classes sorgular sonucu ortaya çıkacak class ların bulunduğu arraydir.
mode değeri querys arrayındaki ilk değerle karşılaştırılır eğer ikiside aynı ise
classes değişkenindeki ilk class return edilir sonra ikinciye geçilir yine oda anı ise classes den ikinci class return edilir.

```javascript
const TestClass = Coffee.Class({
    mode: viewMode, // kontrol değişkeni
    querys: [true, false], // sorgu itemleri
    classes: [ // classlar
        {class: 'first-class '}, // classların sonuna boşluk bırakınız.
        {class: 'last-class '}
    ]
})

<div className={`${TestClass} card-header xxs dsg`}>
    Color Control
</div>
```

## State
Coffee.State React.js de kullanılan hook yapılarında çok değişkenli state kullanmayı sağlar.
Hooklardaki state i tıpkı class yapılarındaki state gibi kullanırsınız.
Tek bir State değişkeni üzerinden tüm değişkenlerinize ulaşabilir, değiştirmek istediklerinizi
kolayca değiştirebilirsiniz. Coffee.State bir fonksiyondur ve çalıştırdığınız yerde
parametre olarak ilk state in değerlerini girersiniz ve state yanlızca bir obje gönderilmelidir tüm değişkenler bu obje içerisinde tutulamlıdır.  
Öncelikle Coffee.State i bir değişkene atayıp bu değişkenden bağzı parçalar çıkarmalıyız.
```javascript
const App = () => {
    const stateConsumer = Coffee.State({
        // state in alacığı ilk değerler
        first: 'first variable',
        last: 'last variable'
    })

    /* stateConsumer dan değişkenlere ulaşabilmek için state i,
    değişkenleri değiştirebilmek için ise updateState i alıyoruz.
    */
    const { state, updateState } = stateConsumer

    return (
        <div id="App">
            <h1>{
                // kullanmak için
                state.first
            }</h1>
        </div>
    )
}
```
Bu şekilde bir state oluşturduk ve state içerisinden bir değer aldık.
peki bu değerleri nasıl güncelleyebiliriz?  
stateConsumer değişkeninden aldığımız ``` updateState ``` fonksiyonu ile yapabiliriz.
bu örnekde first değişkenini **updateState()** ile değiştirelim
update ederken fonksiyone bir obje gönderilmeli
> React.js class yapısındaki state ve setState mantığı ile aynı kullanıma sahiptir.

```javascript
const App = () => {
    const stateConsumer = Coffee.State({
        // state in alacığı ilk değerler
        first: 'first variable',
        last: 'last variable'
    })

    /* stateConsumer dan değişkenlere ulaşabilmek için state,
    değişkenleri değiştirebilmek için ise updateState alıyoruz.
    */
    const { state, updateState } = stateConsumer

    return (
        <div id="App">
            <button
                onClick={() => updateState({first: 'Hello'})}
            >
                First variable update
            </button>
            <h1>{
                // kullanmak için
                state.first
            }</h1>
        </div>
    )
}
```
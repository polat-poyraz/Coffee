# Coffee 2.2.1
Coffee React deki karmaşıklıkları basitleştiren bir tool çantasıdır.
İçerisinde birsürü tool bulundurur.

![metin](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/htc/37/hot-beverage_2615.png)

## Toollar
>
1. [State](#State)
2. [Query](#Query)
3. [Component](#Component)
4. [Class](#Class)


## Kullanım
Coffee.js dosyasını github üzerinden indirebilirsiniz.
> npm e yüklenmemiştir.
```javascript
import Coffee from 'coffee.js in dosya konumu'
```
Coffee deki toolları kullanmak için
```javascript
<Coffee.Toolname>
</Coffee.Toolname>
```

## İçerik ve anlatım

# State
Coffee.State React.js de kullanılan hook yapılarında çok değişkenli state kullanmayı sağlar.
Hooklardaki state i tıpkı class yapılarındaki state gibi kullanırsınız.
Tek bir State değişkeni üzerinden tüm değişkenlerinize ulaşabilir, değiştirmek istediklerinizi
kolayca değiştirebilirsiniz. Coffee.State bir fonksiyondur ve çalıştırdığınız yerde
parametre olarak ilk state in değerlerini girersiniz ve state e yanlızca bir obje gönderilmelidir tüm 
değişkenler bu obje içerisinde tutulamlıdır.  
Öncelikle Coffee.State i bir değişkene atayıp bu değişkenden bağzı parçalar çıkarmalıyız.

```javascript
const App = () => {
    const stateConsumer = Coffee.State({
        // state in alacığı ilk değerler
        title: 'Hello Coffee.js',
        count: 0
    })

    /* stateConsumer dan değişkenlere ulaşabilmek için state i,
    değişkenleri değiştirebilmek için ise setState i alıyoruz.
    */

    const {
        state, // state değişkenlerini kullanabilmek için
        setState // state üzerinde değişiklik yapabilmek için
    } = stateConsumer

    return (
        <div id="App">
            <h1>{
                // kullanmak için
                state.title
            }</h1>

            <p>
            Count: {state.count}
            </p>
        </div>
    )
}
```
Bu şekilde bir state oluşturduk ve state içerisinden bir değer aldık.
peki bu değerleri nasıl güncelleyebiliriz?  
stateConsumer değişkeninden aldığımız ``` setState ``` fonksiyonu ile yapabiliriz.
aşağıdaki örnekte count değişkenini **setState()** ile arttıralım
> setState e bir obje gönderilmelidir.
Eğer setState e gönderdiğiniz objedeki değerler state de yoksa state e eklenir.  
React.js class yapısındaki state ve setState mantığı ile neredeyse aynı kullanıma sahiptir.

> **!!! her setState() de bir state değişkeni değiştirilmeli.**

```javascript
const App = () => {
    const stateConsumer = Coffee.State({
        // state in alacığı ilk değerler
        title: 'Hello Coffee.js',
        count: 0
    })

    /* stateConsumer dan değişkenlere ulaşabilmek için state,
    değişkenleri değiştirebilmek için ise setState alıyoruz.
    */
    const { state, setState } = stateConsumer

    return (
        <div id="App">
            <button onClick={() => setState({count: state.count+1})}>
                Count update
            </button>
            <h1>{
                // kullanmak için
                state.title
            }</h1>

            <p>
                Count: {state.count}
            </p>
        </div>
    )
}
```
### history
Eğer state üzerinde yapılan değişiklikleri görüntülemek isterseniz bir Coffee.State oluştururken
ikinci parametreyi true verebilirsiniz
```javascript
const stateConsumer = Coffee.State({
    title: 'Hello Coffee.js',
    count: 0
}, true)
```
history true girilirse console a değişiklikleri bir obje şeklinde bastırır
```javascript
{mode: "", variable: "", value: ""}
```
şeklinde konsola bastırılır.


# Query
Coffee.Query React.js de dinamik sorgularını daha düzenli ve etiketler ile yapabilmenizi sağlar.
Query nin aldığı mode prop u diğer içerisindeki çocukların query prop ları ile karşılaştırılır.  
İçerisine en az 2 çocuk almalıdır eğer 1 sorgu yapacaksanız [Coffee.Component](#Component) kullanmalısınız.
```javascript
<Coffee.Query mode={/*sorgu yapılcak değişken*/viewMode}>
    <div query="react" /*sorgu itemi*/>
        burası bir React.js bloğudur
    </div>
    <div query="vue" /* sorgu itemi */>
        burası bir Vue.js bloğudur
    </div>
    <div query="svelte" /* sorgu itemi */>
        burası bir Svelte.js bloğudur
    </div>
</Coffee.Query>
```
kısaca eğer mode hangi query e eşit se o çocuk ekrana bastırılır.


# Component
Component tool u eğer sadece bir, iki component render etmek istiyorsanız
veya text gibi küçük şeyler üzerinde sorgu yapacaksanız kullanmalısınız.
Coffee.Component ile tek satır da hem sorgu hem render yapabiliriz.  
```<Coffee.Component mode={} if={} else={} />```
Coffee.Component yine Coffee nin sorgu yapabilmesi için mode propunu alır.  
Aldığı mode prop u üzerinde, true ise if e verilen değeri false ise else ye verilen
değeri return eder.
örneğin;

> yanlızca component render etmez

```javascript
<Coffee.Component mode={viewMode} if={<FirstComponent />} else={<LastComponent />} />
```
> Eğer else kullanmayacaksanız else propunu yinede gönderiniz. örneğin;
```javascript
<Coffee.Component mode={viewMode} if={<FirstComponent />} else/>
```


# Class
```Coffee.Class({})```  
Coffie.Class etiketlerdeki classları dinamik hale getirerek
reahat şekilde class değişimleri yapabilmenizi sağlar.  
Class bir fonkiyondur içerisine bir obje alır ve objenin içerisinde üç değer bulunur.  
```mode``` ```querys``` ```classes```
mode değişkenine kontrolu yapacağımız değişkeni veririz.  
querys değişkenine mode için sorgu yapacağımız değerleri veririz.  
classes sorgular sonucu ortaya çıkacak class ların bulunduğu arraydir.
mode değeri querys arrayındaki ilk değerle karşılaştırılır eğer ikiside aynı ise
classes değişkenindeki ilk class return edilir sonra ikinciye geçilir yine oda aynı ise classes den ikinci class return edilir.

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
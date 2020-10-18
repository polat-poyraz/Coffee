# Coffee 1.0.0
Coffee React deki karmaşıklıkları basitleştiren bir tool çantasıdır.
İçerisinde birsürü tool bulundurur.

![metin](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/htc/37/hot-beverage_2615.png)

## Toollar
1. [Query](#Query)
2. [Component](#Component)


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
### query
Coffee deki toollardan birtaneside sorgu tooludur.
tekli ve template yapısındaki sorgu toolu if else yapısını HTML e taşır.
ismi query dir.
Coffee.Query sorgu için mode propsu alır.
```<Coffee.Query mode={viewMode}>```  
Coffee.query içerisindeki query prop u verilmiş divler üzerinden işlem yapar.
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

### component
component tool u eğer if else ile sadece bir, iki component render etmek istiyorsanız
veya text gibi küçük şeyler üzerinde sorgu yapacaksanız kullanmalısınız.
Coffee.Component ile tek satır ile hem sorgu hem render yapabiliriz.  
```<Coffee.Component mode={} if={} else={} />```
Coffee.Component yine Coffee nin sorgu yapabilmesi için mode propunu alır.  
if prop u mode true ise render edilir eğer mode false ise else içerisine gönderilen
component render edilir.
örneğin;

> yanlızca component render etmez

```html
<Coffee.Component mode={viewMode} if={<FirstComponent />} else={<LastComponent />} />
```
Bu sayede tek satır ile renderladık .
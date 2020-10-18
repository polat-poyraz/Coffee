# Coffie

### hakkında
Coffie React.js deki HTML içerisindeki sorguların karmaşıklığı
ve zorluğu basitleştirir. Kullanması oldukca kolaydır.


## Kullanım
> Not: React.js özelliklerinden bahsedilmeyecekdir.
Eğer React.js bilmiyorsanız https://tr.reactjs.org/ adresine göz atabilirsiniz.

Coffie yi github üzerinde pull edebilir veya indirebilirsiniz.

Coffie yi import edelim
```javascript
import Coffie from 'coffie.js yi sakladığınız dosya'
```

## Tutorial

### Özet
Bu tutorial da button lar ile dinamik kontroller yapdığımız
ve Coffie if else yapısını kullandığımız ufak bir app yazacağız

```javascript
// React i import ediyoruz
import React, { useState } from 'react'
// Coffie yi import ediyoruz
import Coffie from 'coffie.js yi sakladığınız dosya'

const App = () => {
    const [viewMode, viewModeSet] = useState(false)

    return (
        <div id="App">
            <button onClick={() => viewModeSet(!viewMode)}>Click</button>
            {/*bir Coffie template i oluşturduk*/}
            <Coffie mode={viewMode}>
                {/*
                    query; Coffie template i içerisindeki sorgu div
                    query alır alacağı değerler if veya else dir type ı string olmalıdır.
                */}
                <div query="if">
                    burası doğru bir coffie
                    {/* viewMode true ise görünecek kısım */}
                </div>
                <div query="else">
                    burası yanlış bit coffie
                    {/* viewMode false ise görünecek kısım */}
                </div>
            </Coffie>
        </div>
    )
}
```

Bir Coffie yapısı kullandık ve bir button sayesinde değişimini sağladık.
Bir react-app dosyasında çalıştırdığınızda uygulamayı görüntüleyebilirsiniz.

iç içe **<Coffie></Coffie>** kullanımı yapılabilir.
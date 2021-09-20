# Thermometer Algorithm

Kamu adalah seorang mahasiswa IT yang baru memulai perjalanan, kemudian kamu juga sudah belajar tentang adanya `pseudocode`. Kemudian dosenmu memmberikan sebuah tugas untuk membuat sebuah `pseudocode` tentang cara kerja sebuah _thermometer_ yang akan merubah semua jenis suhu menjadi `celcius`.

Berikut adalah 3 cara konversi suhu ke dalam celcius:

- `fahrenheit` to `celcius` = `(N - 32) * (5/9)`
- `kelvin` to `celcius` = `(N - 273.15)`
- `celcius` to `celcius` = `N`

## Declaration

```javascript
SET besarTemperatur REAL
SET tipeTemperatur STRING
SET result REAL
```

## Begin

```javascript
INPUT besarTemperatur
INPUT tipeTemperatur

IF tipeTemperatur = "Fahrenheit" THEN
  result = (besarTemperatur - 32)*(5/9)
 ELSE IF tipeTemperatur = "Kelvin" THEN
  result = besarTemperatur - 273.15
 ELSE
  result = besarTemperatur
END IF

DISPLAY result
```

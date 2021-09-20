# Grade Algorithm

Skilvul ingin memberikan penilaian terhadap siswa

- Setiap siswa akan menerima penilaian skala 0 - 100
- Nilai di bawah 70 dianggap tidak lulus

Dalam memberikan nilai ada 2 tahapan penting yaitu:

- Untuk proses pembulatan nilai kelipatan `5`, syaratnya adalah nilai tersebut harus kurang/lebih kecil dari `3` jaraknya dengan nilai pembulatan ke atas.
- Jika nilai kurang dari `68`, tidak dapat melakukan pembulatan karena tetap dianggap tidak lulus.

Input berupa `Nilai Awal`

Output berupa `Nilai Akhir` baik yang dapat dilakukan pembulatan ataupun tidak

## Declaration

```javascript
SET nilaiPeserta NUMBER
```

## Begin

```javascript
INPUT nilaiPeserta = 83

IF nilaiPeserta < 68 THEN
  DISPLAY nilaiPeserta
ELSE IF nilaiPeserta % 5 = 0 THEN
  DISPLAY nilaiPeserta
ELSE IF (nilaiPeserta+2) % 5 = 0 THEN
  nilaiPeserta = nilaiPeserta+2
  DISPLAY nilaiPeserta
ELSE IF (nilaiPeserta+1) % 5 = 0 THEN
  nilaiPeserta = nilaiPeserta+1
  DISPLAY nilaiPeserta
END IF
```

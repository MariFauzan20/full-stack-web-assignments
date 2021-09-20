# Palindrome Algorithm

Palindrome adalah adanya sebuah kata, frasa, atau angka yang dapat dibaca dengan sama baik dari depan maupun belakang.

Buatlah sebuah program untuk mengecek apakah 1 buah nilai bersifat palindrome. Jika iya program akan mengembalikan status `TRUE` jika tidak program akan mengembalikan status `FALSE`.

Input hanya dapat menerima tipe data berupa string/teks.

## Declaration

```javascript
SET sentence STRING
SET i NUMBER
SET stringLength NUMBER
```

## Begin

```javascript
INPUT sentence = "kodok"
INPUT i = 0
INPUT stringLength = length(sentence) - 1

WHILE stringLength > i DO
  IF sentence[i++] <> sentence[stringLength--] THEN
    RETURN DISPLAY "not a palindrome"
  END IF
END WHILE

DISPLAY "a palindrome"
```

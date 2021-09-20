# Fizz Buzz Algorithm

Write a program that prints the numbers from `1 to n`

- for multiples of `3` print `"Fizz"` instead of the number
- for the multiples of `5` print `"Buzz"` instead of the number
- for numbers which are multiplies of both `3` and `5` print `"FizzBuzz"`
- for numbers not divisible by, `3`, `5`, or `both`, print the number as is

## Declaration

```javascript
SET n NUMBER
SET i NUMBER
```

## Begin

```javascript
INPUT n // Input jumlah n 1-100
INPUT i = 0

WHILE i <= n DO
  IF (i % 3 = 0) AND (i % 5 = 0) THEN
    DISPLAY "FizzBuzz"
  ELSE IF i % 3 = 0 THEN
    DISPLAY "Fizz"
  ELSE IF i % 5 = 0 THEN
    DISPLAY "Buzz"
  ELSE
    DISPLAY i
  END IF
  i = i + 1
END WHILE
```

# arabicLatinConverter

TDD is a bit more difficult to use than I thought...
It is not just writing a test before the implementatoin of some bigger piece of code. Rober Martin stats, that this is more 
writing that much of a test to make it fail. So if a test uses a function, then it will fali as soon as this function is 
mentioned in test. Then I sould switch to code and implement this function. To be precise, not the whole funciton but just
a bit big enough to make the test pass. So I should just export some empty function. Then back to test. And again. Just a bit of it
big enouth to make test fail, and implementation again.

This seems to bind code and tests very tightly together. So far I was writing tests before code in really complex situations 
(calculator, ticTacToe, more complex logic), but I never tried such small iterations like discrabed in R.C.Martin books/trainings.

I decided write this code to get it. Internet is full of too simple examples. Like some passowrd validation logic. 
Conversion of latin to arabic and arabic to latin seems to have some edge cases and decisions to undertake to make code cleaner.

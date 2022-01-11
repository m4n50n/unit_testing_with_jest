# ![4Geeks Logo](http://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=4geeks,16) Unit testing with Jest

✏ *Using the [jest framework](https://jestjs.io/) to create the first code tests*.

## Instructions 📄

<u>Open repository</u>:
1. Open this repository in **Gitpod** and wait until LearnPack is loaded.
2. Follow the *LearnPack Instructions* (run **learnpack start** in the terminal if instructions are not showed).

<u>Run the exercise</u>:
1. Initialize the project (this creates a *package.json* file in the project root):
```bash
$ npm init -y
```

2. Install Jest:
```bash
$ npm install jest --save
```

3. Open the *package.json* file and write "jest" in the *scripts -> test* node (instead of "echo \"Error: no test specified\" && exit 1").

4. Run the next command to test:
```bash
$ npm run test
```

5. The exercise files are ***app.js*** and ***test.js*** (in the root directory)

## What is this exercise about ❓

We are going to be using the Jest library to build a program capable of converting numeric values from one currency to another:

| Function name     | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| fromDollarToYen   | Receives a dollar amount and returns equivalent amount in Japan Yen  |
| fromEuroToDollar  | Receives a Euro amount and returns equivalent amount in US Dollar     |
| fromYenToPound    | Reveives a Yen amount and equivalent amount in England Pound          |

## Sources 📌

<https://learn.breatheco.de/course/full-stack.v4/12/p/unit-test-with-jest>

<https://github.com/breatheco-de/exercise-unit-test-with-jest>

<https://jestjs.io/>

💻 _Jose Clemente García Rodríguez_ (<https://github.com/m4n50n>)

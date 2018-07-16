<template>
    <div>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option value="5">5x5</option>
        <option value="6">6x6</option>
        <option value="7">7x7</option>
        <option value="8">8x8</option>
        <option value="9">9x9</option>
        <option value="10">10x10</option>
      </select>
      <select v-model="maxSelectable">
        <option disabled value="">Please select one</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <button @click="startGame">Game starten</button>
      <button @click="solveGame">Game auflösen</button>
    <div class="quiz-container">
      <div class="solution" v-if="gameFinished">
        <p>Du hast {{rightSolution}} von {{selectables.length}} richtig!</p>
      </div>
      <div class="square-container">
        <div class="square" v-for="(square, index) in squares" :key="square.id" :style="square.style" :class="{'selected' : square.selected}" @click="selectSquare(index)"></div>
      </div>
    </div>
 </div>
 </template>

<script src="./squareQuiz.js">
</script>
<style src="./squareQuiz.scss" lang="scss" scoped>

</style>

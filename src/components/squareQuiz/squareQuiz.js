export default {
  name: 'squareQuiz',
  data () {
    return {
      selected: '',
      maxSelectable: '',
      selectables: [],
      squares: [],
      solutionShowing: false,
      rightSolution: '',
      gameFinished: false
    }
  },
  created () {
  },
  methods: {
    startGame () {
      this.gameFinished = false;
      this.generateSquares()
      this.generateSelectables()
    },
    generateSquares () {
      this.squares = []
      const generateSquares = this.selected * this.selected
      for (let i = 0; i < generateSquares; i++) {
        const squareStyle = 'width: ' + (100 / this.selected) + '%; height: ' + (100 / this.selected) + '%;'
        this.squares.push({id: i, selected: false, style: squareStyle})
      }
    },
    selectSquare (index) {
      if (this.solutionShowing === false) {
        switch (this.squares[index].selected) {
          case false:
            this.setTrue(index)
            break
          case true:
            this.setFalse(index)
            break
        }
      }
    },
    setFalse (index) {
      this.squares[index].selected = false
    },
    setTrue (index) {
      if (this.squares.filter(item => item.selected === true).length < this.selectables.length) {
        this.squares[index].selected = true
      }
    },
    generateSelectables () {
      this.selectables = []
      for (let i = 0; i < this.maxSelectable; i++) {
        this.selectables.push(Math.floor(Math.random() * (this.selected * this.selected - 1)) + 0)
      }
      this.showSolution()
    },
    showSolution () {
      this.solutionShowing = true
      for (let i = 0; i < this.selectables.length; i++) {
        this.squares[this.selectables[i]].selected = true
      }
      setTimeout(() => {
        this.solutionShowing = false
        this.squares.forEach(element => {
          element.selected = false
        })
      }, 2000)
    },
    solveGame () {
      this.rightSolution = 0
      for (let i = 0; i < this.selectables.length; i++) {
        if (this.squares[this.selectables[i]].selected) {
          this.rightSolution++
        }
      }
      this.gameFinished = true;
    }
  }
}

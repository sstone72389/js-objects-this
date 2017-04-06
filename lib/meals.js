'use strict'
const mealObj = {
  user: {
    name: 'John Smith',
    bornOn: '1986-02-01',
    calorieTarget: 1800,
    meals: [
      {
        title: 'breakfast',
        date: '2016-06-25',
        description: 'bourbon and waffles',
        calories: 400
      },
      {
        title: 'lunch',
        date: '2016-06-25',
        description: 'chicken salad sandwich',
        calories: 600
      },
      {
        title: 'dinner',
        date: '2016-06-26',
        description: 'steak and potatoes',
        calories: 900
      }
    ]
  },
  caloriesEatenOn: function (date) {
    let dateCalories = 0
    for (let i = 0; i < this.user.meals.length; i++) {
      if (this.user.meals[i].date === date) {
        dateCalories += this.user.meals[i].calories
      }
    }
    return dateCalories
  },
  averageDailyCalories: function () {
    let totalCal = 0
    const datesUsed = []
    for (const meal of this.user.meals) {
      if (datesUsed.indexOf(meal.date) === -1) {
        datesUsed.push(meal.date)
      }
      totalCal += meal.calories
    }
    return totalCal / datesUsed.length
  },
  onTrack: function () {
    if (this.averageDailyCalories() <= this.user.calorieTarget) {
      console.log('onTrack')
      return true
    } else {
      console.log('Not onTrack')
      return false
    }
  }
}
module.exports = mealObj

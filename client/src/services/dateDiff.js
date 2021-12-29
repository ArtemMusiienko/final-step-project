import DateDiff from 'date-diff'

const setDate = date => {
  const dateCheack = new Date(date)
  const dateNow = new Date(Date.now())
  const diff = new DateDiff(dateNow, dateCheack)
  if (diff.minutes() < 60 && diff.hours() < 1) {
    return `${Math.round(diff.minutes())} minutes ago`
  }
  if (diff.hours() < 24 && diff.days() < 1) {
    return `${Math.round(diff.hours())} hours ago`
  }
  if (diff.days() < 31 && diff.months() < 1) {
    return `${Math.round(diff.days())} days ago`
  }
  if (diff.months() >= 1 && diff.years() < 1) {
    return `${Math.round(diff.months())} months ago`
  }
  return `${diff.years()} years ago`
}

export default setDate

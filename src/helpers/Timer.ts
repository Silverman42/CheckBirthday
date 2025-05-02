export type TimeInterval = {
  minutes: number
  seconds: number
  days: number
  hours: number
  timeDiffSecs: number
  timeDiffMilSecs: number
}

export const Timer = {
  getTimeInterval(setTime: Date): TimeInterval {
    const currentTime = new Date()

    const currentTimeValue = currentTime.getTime()
    const setTimeValue = setTime.getTime()
    // Calculate time difference in milliseconds
    const timeDiffMilSecs = currentTimeValue < setTimeValue ? setTimeValue - currentTimeValue : 0

    const timeDiffSecs = Math.floor(timeDiffMilSecs / 1000)

    // Convert milliseconds to days, hours, minutes and seconds
    const days = Math.floor(timeDiffMilSecs / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeDiffMilSecs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeDiffMilSecs % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeDiffMilSecs % (1000 * 60)) / 1000)

    return {
      days,
      hours,
      minutes,
      seconds,
      timeDiffSecs,
      timeDiffMilSecs,
    }
  },

  initiateCountdown(
    setTime: Date,
    callback: (isFinished: boolean, timeInterval: TimeInterval) => void,
  ) {
    const interval = setInterval(() => {
      const timeInterval = Timer.getTimeInterval(setTime)
      const isFinished = timeInterval.timeDiffMilSecs <= 0
      callback(isFinished, timeInterval)
      if (isFinished) {
        clearInterval(interval)
      }
    }, 1000)
  },

  formatTime(interval: TimeInterval) {
    const formattedDays = String(interval.days).padStart(2, '0')
    const formattedHours = String(interval.hours).padStart(2, '0')
    const formattedMinutes = String(interval.minutes).padStart(2, '0')
    const formattedSeconds = String(interval.seconds).padStart(2, '0')
    return {
      formattedMinutes,
      formattedSeconds,
      formattedDays,
      formattedHours,
    }
  },
}

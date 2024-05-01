export const getSecond = (time: number) => { return time % 60 }

export const getMinute = (time: number) => { return Math.floor(time / 60) % 60 }

export const getHour = (time: number) => { return Math.floor(Math.floor(time / 60) / 60 ) }

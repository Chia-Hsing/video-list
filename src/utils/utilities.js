export const updateObj = (oldObj, updatedProperties) => {
    return {
        ...oldObj,
        ...updatedProperties,
    }
}

export const timeConverter = duration => {
    const time = duration.match(/(\d+)(?=[HMS])/gi)
    let timeFormat = null

    if (time.length === 3) {
        timeFormat = `${time[0].padStart(2, '00')}:${time[1].padStart(2, '00')}:${time[2].padStart(2, '00')}`
    } else if (time.length === 2) {
        timeFormat = `${time[0].padStart(2, '00')}:${time[1].padStart(2, '00')}`
    } else {
        timeFormat = `00:${time[0].padStart(2, '00')}`
    }

    return timeFormat
}

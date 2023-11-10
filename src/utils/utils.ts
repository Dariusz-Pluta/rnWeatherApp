export const getImageUrl = (icon?: string) => {
    if (icon?.length > 0) {
        return `https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
    return '';
}

export const capitalizeFirstLetter = (value: string) => {
    let result = '';

    for (let index = 0; index < value.length; index++) {
        if (index === 0) {
            result += value[index].toUpperCase();
        } else {
            result += value[index];
        }

    }

    return result;
}
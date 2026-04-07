export const getYearOfRealesed = (date) => {
    if (!date) return '';
    const year = date.split('-')[0];
    return year;
}
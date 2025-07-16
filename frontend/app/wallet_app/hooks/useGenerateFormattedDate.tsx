export const useGenerateFormattedDate = () => {
    const date = new Date();
    date.setHours(date.getHours() + 9);
    const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
    return { formattedDate }
}

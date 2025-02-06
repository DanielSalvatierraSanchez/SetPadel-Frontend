export const dateFormat = (padelMatchDate) => {
    const date = new Date(padelMatchDate);

    const dateFormatted = date.toLocaleString("es-ES", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "UTC"
    });
    return dateFormatted.replace(",", "");
};

export const dateFormat = (padelMatchDate) => {
    const date = new Date(padelMatchDate);

    const dateFormatted = new Intl.DateTimeFormat("es-ES", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }).format(date);
    return dateFormatted.replace(",", "");
};

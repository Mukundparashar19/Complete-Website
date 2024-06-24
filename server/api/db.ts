import data from "./db.json";

export default defineEventHandler(() => {
    return {
        data,
    };
});
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "static", "data", "products.json");

export const getAllData = () => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

export const getById = (id) => {
    const data = getAllData();
    return data.find(p => p.id === +id); //by default, the value of input elements in HTML forms is treated as strings
}
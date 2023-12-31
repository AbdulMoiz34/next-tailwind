import { getById } from "../../../services/products";
export default function handler(req, res) {
    if (req.method === "GET") {
        const { productId } = req.query;
        const product = getById(productId);
        if (!product) {
            res.status(404).send();
        }
        return res.status(200).json(product);
    }
    return res.status(404).send();
}
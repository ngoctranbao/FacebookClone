import { addReactService, countReactService, deleteReactService } from "../services/react.js";

export const handleCreateReact = async(req, res) => {
    try {
        const data = await addReactService(req.body)
        return res.status(200).json({data: data, message: "success create the react"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

export const handleDeleteReact = async(req, res) => {
    try {
        const result = await deleteReactService(req.body)
        return res.status(200).json({data: result, message: "success delete the react"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}


export const handleGetReact = async(req, res) => {
    try {
        const data = await countReactService({typeOf: req.query.typeOf, parentId: req.query.parentId})
        return res.status(200).json({data: data, message: "success get react"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}
import { createFriendService, deleteFriendService, getRelationship, getSuggestFriend, updateFriendService } from "../services/friends.js";

export const handleCreateFriend = async(req, res) => {
    try {
        const data = await createFriendService(req.body)
        if (data === true) {
            return res.status(200).json({message: "handle create friend success"})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

export const handleUpdateFriend = async(req, res) => {
    try {
        const data = await updateFriendService(req.body)
        if (data === true) {
            return res.status(200).json({message: "handle update friend success"})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

export const handleDeleteFriend = async(req, res) => {
    try {
        const data = await deleteFriendService(req.body)
        if (data === true) {
            return res.status(200).json({message: "handle delete friend success"})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

export const handleGetRelationship = async(req, res) => {
    try {
        const data = await getRelationship(req.query)
        return res.status(200).json({data: data, message: "get relationship success"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

export const handdleGetSuggestFriend = async(req, res) => {
    try {
        const data = await getSuggestFriend(req.query)
        return res.status(200).json({data: data})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message})
    }
}
import { Op } from "sequelize";
import db from "../models/index.js";

export const createFriendService = async(data) => {
    try {
        const relationship = await db.Relationship.findOne({
            where: { 
                [Op.or]: [{ userId: data.firstId, friendId: data.secondId }, { userId: data.secondId, friendId: data.firstId }],
            }
        })

        if(!relationship) {
            const newRls = await db.Relationship.create({
                userId : firstId,
                friendId: secondId,
                status: "pending"
            })
            return newRls
        }
        return relationship
    } catch (error) {
        throw new Error(`handle relationship service ${error}`)
    }
}

export const updateFriendService = async(data) => {
    try {
        const relationship = await db.Relationship.findOne({
            where: { 
                [Op.or]: [{ userId: data.firstId, friendId: data.secondId }, { userId: data.secondId, friendId: data.firstId }],
            }
        })

        if(relationship.status == "pending") {
            if (relationship.userId === data.secondId) {
                await relationship.update({status: "friend"})
            }
        }
    } catch (error) {
        throw new Error(`handle relationship service ${error}`)
    }
}

export const deleteFriendService = async(data) => {
    try {
        const relationship = await db.Relationship.findOne({
            where: { 
                [Op.or]: [{ userId: data.firstId, friendId: data.secondId }, { userId: data.secondId, friendId: data.firstId }],
            }
        })
        if(relationship.status === "friend" || relationship.userId === data.firstId) {
            await relationship.destroy()
        }
    } catch (error) {
        throw new Error(`handle relationship service ${error}`)
    }

}

export const getRelationship = async(data) => {
    try {
        const relationship = await db.Relationship.findOne({
            where: { 
                [Op.or]: [{ userId: data.firstId, friendId: data.secondId }, { userId: data.secondId, friendId: data.firstId }],
            }
        })
        return relationship
    } catch (error) {
        throw new Error(`get relationship service error: ${error}`)   
    }
}

export const getSuggestFriend = async(data) => {
    try {
        const suggestFriend = await db.User.findAll({
        where: {
            id: {
            [Op.ne]: data.id, // Exclude the current user
            [Op.notIn]: db.Sequelize.literal(`
                (SELECT r.friendId FROM Relationships r WHERE r.userId = ${data.id} AND r.status = 'friend'
                UNION
                SELECT r.userId FROM Relationships r WHERE r.friendId = ${data.id} AND r.status = 'friend')
            `)
            }
        }
        });
        return suggestFriend
    } catch (error) {
        throw new Error(`get suggest friend service error: ${error}`)   
    }
}
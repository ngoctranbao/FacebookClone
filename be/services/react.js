import { where } from "sequelize";
import db from "../models/index.js"

export const addReactService = async (data) => {
    console.log(data)
    const t = await db.sequelize.transaction();
    try {
        const existRecord = await db.React.findOne({
            where: {
                ownerId: data.ownerId,
                typeOf: data.typeOf,
                parentId: data.parentId
            }
        },{ transaction : t})

        
        if (!existRecord) {
            const newReact = await db.React.create({
                ownerId: data.ownerId,
                typeOf: data.typeOf,
                parentId: data.parentId
            }, {transaction: t});
            console.log(newReact)
        }
        await t.commit()
    return true;
    } catch (error) {
        t.rollback()
        throw new Error(`update react error ${error}`)
    }
}

export const deleteReactService = async (data) => {
    const t = await db.sequelize.transaction();
    try {
        const existRecord = await db.React.findOne({
            where: {
                ownerId: data.ownerId,
                typeOf: data.typeOf,
                parentId: data.parentId
            }
        },{ transaction : t})
        if(existRecord) {
            await existRecord.destroy({transaction :t});
        }
    return true
    } catch (error) {
        
    }
}

export const countReactService = async(data) => {
    try {
        const { count, rows } = await db.React.findAndCountAll({
            where: {
              typeOf: data.typeOf,
              parentId: data.parentId
            },
          });
        return {count, rows}
    } catch (error) {
        throw new Error(`count react error ${error}`)
    }
}
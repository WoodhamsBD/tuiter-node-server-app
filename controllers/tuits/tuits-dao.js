import tuitsModel from "./tuits-model.js";

export const findTuits = () => findTuits.find();
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = (tid) => tuitsModel.updateOne({_id: tid}, {$set: tuit});
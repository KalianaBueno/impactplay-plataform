import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';
import User from "../models/user.model.js";

export const test = (req, res) => {
    res.json({message: 'API está funcionando'});
};

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId){
        return next(errorHandler(403, 'não há permissão para atualizar esse usuário'));
    }
    if(req.body.password){
        if(req.body.password.length <6 ){
            return next(errorHandler(400, 'senha deve ter pelo menos 6 caracteries'));
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if (req.body.username){
        if(req.body.username.length < 7 || req.body.username.length > 20){
            return next(errorHandler(400, 'nome de usuário deve ter entre 7 e 20 catacteries'));
        }
        if (req.body.username.includes(' ')){
            return next(errorHandler(400, 'nome de usuário não deve conter espaços'));
        }
        if (req.body.username !== req.body.username.toLowerCase()){
            return next(errorHandler(400, 'Nome de usuário deve ser em letra minúscula'));
        }
        if (!req.body.username.match(/[a-zA-Z0-9]+$/)){
            return next(errorHandler(400, 'nome de usuário não deve conter caracteries especiais'));
        }
    }

        try {
            const updateUser = await User.findByIdAndUpdate(req.params.userId, {
                $set:{
                    username: req.body.username,
                    email: req.body.email,
                    profilePicture: req.body.profilePicture,
                    password: req.body.password,
                },
            }, {new: true});
            const {password, ...rest} = updateUser._doc;
            res.status(200).json(rest);
        } catch (error) {
            next(error);
        }
};

export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId){
        return next(errorHandler(403, 'você não tem permissão para deletar esta conta'));
    }
    try {
        await User.findByIdAndDelete(req.params.userId);
        res.status(200).json('usuário deletado');
    } catch (error) {
        next(error);
    }
};


export const signout = (req, res, next) => {
    try {
        res.clearCookie('access_token').status(200).json('Você saiu');
    } catch (error) {
        next(error);   
    }
};
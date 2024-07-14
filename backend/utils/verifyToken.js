
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;

    if(!token){
        return res.status(401).json({success: false, message: "Access token not found"});
    }

    //if token exists, verify it
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if(err){
            return res.status(401).json({success: false, message: "Invalid token"});
        }

        //if token is verified, set user in the request object
        req.user = user;
        next();  //to move to the next middleware
        
    });
}


export const verifyUser = (req, res, next) => {
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.role === 'user'){
            next();
        } else {
            return res.status(401).json({success: false, message: "You are not authenticated to perform this action"});
        }
    });
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, ()=>{
        if(req.user.role === 'admin'){
            next();
        } else {
            return res.status(401).json({success: false, message: "You are not authorized to perform this action"});
        }
    });
}
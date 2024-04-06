import DBconnection from "@/utils/DBConnection";
import User from "@/model/User";
import Joi from "joi";
import bcrypt from "bcrypt";

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});


function maskEmail(email) {
    const [username, domain] = email.split("@");
    const maskedUsername = `${username.slice(0, 3)}****${username.slice(-2)}`;
    return `${maskedUsername}@${domain}`;
}



export default async (req, res) => {

    await DBconnection();

    const { name, email, password } = req.body;

    const { error } = schema.validate({ name, email, password });

    if (error) {

        return res.status(401).json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') })

    }

    try {

        const findUser = await User.findOne({ where: { email } });

        if (findUser) {
            return res.status(401).json({ success: false, message: "Email already exists , Please Login" })
        }


        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);


        const user = await User.create({ name, email, password: hashPassword });

        if (user) {
            const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
            const email = maskEmail(user.email)
            return res.status(200).json({ email, success: true, message: `Account created successfully. Code is ${randomNumber}`, code: randomNumber })
        }

    }
    catch (error) {

        console.log("Error in register_user (server) => ", error);

        res.status(500).json({ success: false, message: "Something went wrong" })

    }
}
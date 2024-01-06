import mongoose from 'mongoose'
const { Schema } = mongoose

// ejemplo de schema en mongoose
const userSchema = new Schema({
    username: {
        type: String,
        required: true, // igual al 'not null'
        trim: true //
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
})

export default mongoose.model('User', userSchema);

/* 
    basicamente lo que hacemos es crear un documento que va dentro de la collecion USERS de modo que:
 
    users
    [
        {}
        ...
        {}
    ]
    algo asi
*/
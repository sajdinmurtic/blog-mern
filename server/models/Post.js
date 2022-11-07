import mongoose from 'mongoose'



const PostSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    text: {
        type: String, required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User',
    }, 
    
  
},
{timestamps: true}
);

const Post = mongoose.model('Post', PostSchema)
export default Post;

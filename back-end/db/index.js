import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        mongoose.connect
            (`mongodb+srv://test:kzXiEeOujJsMlGpU@shopplusplus.mmdrgwt.mongodb.net/?retryWrites=true&w=majority&appName=shopplusplus`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
export default connectToDB
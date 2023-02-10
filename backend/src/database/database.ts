import {connect} from 'mongoose';

export async function startConnection() {

    const MONGO_URI = 'mongodb://localhost/game-crud';

    await connect(process.env.MONGODB_URI || MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('DB is connected');
}
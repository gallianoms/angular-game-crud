import {model, Schema} from 'mongoose';

const gameSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    image: { type: String, required: true},
    created_at: { type: Date, default: Date.now}
});

export default model('Game', gameSchema);
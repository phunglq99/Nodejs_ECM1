const { default: mongoose } = require('mongoose');

const dbConnect = () => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'digitic'
    };

    try {
        const conn = mongoose.connect(process.env.MONGODB_URL, options);
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Database error');
    }
};
module.exports = dbConnect;

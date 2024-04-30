const env = process.env

export const PORT = Number(env.PORT) || 3000;
export const HOST = env.host ?? "localhost"
export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGODB_URI = env.MONGODB_URI ?? "mongodb://localhost:27017"


export default{
    PORT,
    HOST,
    SERVER_URL
};
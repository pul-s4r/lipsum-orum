import multer from 'fastify-multer';
import { GridFsStorage } from 'multer-gridfs-storage';

import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const envs = dotenv.config();
dotenvExpand.expand(envs);

const storage = new GridFsStorage({
    url: process.env.CONNECTION_URL,
    options:
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-any-name-${file.originalname}`,
        };
    },
});

export default multer({ storage });

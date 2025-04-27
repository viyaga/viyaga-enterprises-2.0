import { NextApiRequest, NextApiResponse } from 'next';
import { revalidatePath, revalidateTag } from 'next/cache';

const revalidate = async (req: NextApiRequest, res: NextApiResponse) => {
    const { tag, path, token } = req.query;

    // Check if the token is valid
    if (token !== process.env.PAYLOAD_SECRET) {
        return res.status(403).json({ message: 'Invalid token' });
    }

    try {
        if (tag) {
            revalidateTag(tag as string);
            return res.status(200).json({ message: `Revalidated by tag: ${tag}` });

        } else if (path) {
            revalidatePath(path as string);
            return res.status(200).json({ message: `Revalidated by path: ${path}` });

        } else {
            return res.status(400).json({ message: 'Missing either tag or path for revalidation' });
        }
    } catch (error) {
        console.error('Error during revalidation:', error);
        return res.status(500).json({ message: 'Error during revalidation' });
    }
};

export default revalidate;

import { CollectionBeforeChangeHook } from "payload";

export const setUploadedBy: CollectionBeforeChangeHook = async ({ req, data }) => {
    if (!req.user) {
        throw new Error('Unauthorized upload attempt.');
    }
    return {
        ...data,
        uploaded_by: req.user.id,
    };
}
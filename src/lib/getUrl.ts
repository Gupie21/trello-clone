import { storage } from '@/appwrite/config';

const getUrl = async (image: Image) => {
    const url = storage.getFilePreview(image.bucketId, image.fieldId);

    return url;
}

export default getUrl;
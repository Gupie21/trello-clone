import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
    if (!file) return;

    const fileUploaded = await storage.createFile(
        "64ddc76ae8b1bd8f2e10",
        ID.unique(),
        file
    )

    return fileUploaded;
};

export default uploadImage;
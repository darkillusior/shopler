import axios from "axios";

const uploadSinglePic = async files => {
  
  try {
    const form = new FormData();
    form.append("file", files);
    form.append("upload_preset", "debatable");
    form.append("cloud_name", "darkillisour");

    const res = await axios.post(process.env.CLOUDINARY_URL, form);
    return res.data.secure_url;
  } catch (error) {
    return;
  }
};

export default uploadSinglePic;

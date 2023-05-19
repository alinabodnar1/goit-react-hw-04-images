import axios from "axios";

export const getPictures = async (search, page) => {
 
     const params = new URLSearchParams({
        key: "34882126-23c8752d62a2e062d45efec22",
        q: search,
        image_type: "photo",
        orientation: "horizontal",
        page,
        per_page: 12,
     });
     
    const { data } = await axios.get(`https://pixabay.com/api/?${params.toString()}`);
    return data;
};


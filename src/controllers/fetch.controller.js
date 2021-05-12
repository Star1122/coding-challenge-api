import getUrlContentService from "../services/fetch.service";

const getUrlContent = async (req, res, next) => {
  try {
    const { url } = req.query;

    await res.json({ data: await getUrlContentService(url) });
  } catch (error) {
    console.log(`Error getUrlContent: \n${error}`);
    next(error);
  }
};

export default getUrlContent;

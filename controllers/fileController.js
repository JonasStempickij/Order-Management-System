import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermisions from '../utils/checkPermission.js';
import moment from 'moment';
import path from 'path';
import { fileURLToPath } from 'url';

const uploadFile = async (req, res) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  console.log(__dirname);
  const sampleFile = req.files.myFile;
  const uploadPath = __dirname + '/' + sampleFile.name;
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    res.status(200).send({ msg: 'File Uploaded' });
  });
  //   console.log(req.body);
  //   res.status(StatusCodes.ACCEPTED).json({ msg: 'FILE UPLOADED' });
};

export { uploadFile };

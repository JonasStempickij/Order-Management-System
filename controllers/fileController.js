import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermisions from '../utils/checkPermission.js';
import moment from 'moment';
import path from 'path';
import { fileURLToPath } from 'url';

const uploadFile = async (req, res) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const sampleFile = req.files.myFile;
  const jobPositions = JSON.parse(req.body.jobPositions);
  const uploadPath =
    path.resolve(__dirname, '../upload') + '/' + sampleFile.name;
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    res.status(200).send({
      msg: `file uploaded to ${path.resolve(uploadPath)}`,
      jobPositions,
    });
  });
  //   console.log(req.body);
  //   res.status(StatusCodes.ACCEPTED).json({ msg: 'FILE UPLOADED' });
};

const downloadFile = async (req, res) => {
  const { id } = req.params;
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const downloadPath =
    path.resolve(__dirname, '../upload', id) + '/CV Jonas Stempickij.pdf';
  console.log(downloadPath);
  res.status(200).download(downloadPath, 'test.pdf');
};

export { uploadFile, downloadFile };

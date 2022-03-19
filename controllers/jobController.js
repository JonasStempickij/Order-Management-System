import Job from '../models/Job.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermisions from '../utils/checkPermission.js';
import mongoose from 'mongoose';
import moment from 'moment';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const createJob = async (req, res) => {
  const { company } = req.body;
  const jobFile = req.files.jobFile;
  const user = JSON.parse(req.body.user);
  const createdBy = user._id;
  const jobPositions = JSON.parse(req.body.jobPositions);
  // console.log(req.body);
  if (!company) {
    throw new BadRequestError('Please provide all values');
  }
  console.log(
    `CreatedBy: ${createdBy}  Company: ${company} jobPositions: ${jobPositions}`
  );
  const job = await Job.create({ createdBy, company, jobPositions });
  const jobId = job._id.toString();
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const uploadFolder = path.resolve(dirname, '../upload/', jobId);
  console.log(uploadFolder);
  fs.mkdirSync(uploadFolder);
  res.status(StatusCodes.CREATED).json(job);
};

const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;

  const job = await Job.findOne({ _id: jobId });
  if (!job) {
    throw new NotFoundError(`no job with id :${jobId}`);
  }

  checkPermisions(req.user, job.createdBy);

  await job.remove();
  res.status(StatusCodes.OK).json({ msg: 'Success! Job removed' });
};

const getAllJobs = async (req, res) => {
  const { status, jobType, sort, search } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  // add stuff based on condition
  if (status !== 'all') {
    queryObject.status = status;
  }
  if (jobType !== 'all') {
    queryObject.jobType = jobType;
  }
  if (search) {
    queryObject.position = { $regex: search, $options: 'i' };
  }

  // NO AWAIT
  // console.log(queryObject);
  let result = Job.find(queryObject);

  // chain sort conditions
  if (sort === 'latest') {
    result = result.sort('-createdAt');
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt');
  }
  if (sort === 'a-z') {
    result = result.sort('position');
  }
  if (sort === 'z-a') {
    result = result.sort('-position');
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const jobs = await result;

  const totalJobs = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);

  res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages });
};

const updateJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { company, jobPositions } = req.body;
  console.log(typeof req.body.positionFile);
  if (!jobPositions || !company) {
    throw new BadRequestError('Please provide all values');
  }
  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    throw new NotFoundError(`No job with id :${jobId}`);
  }

  // check permissions

  checkPermisions(req.user, job.createdBy);

  // doesnt trigger hook
  const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ updatedJob });

  // will trigger hook
  // job.position = position;
  // job.company = company;

  // await job.save();
  // res.status(StatusCodes.OK).json({ job });
};

const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ]);

  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = moment()
        .month(month - 1)
        .year(year)
        .format('MMM Y');
      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };

import express from 'express';
import { encode, decode } from 'js-base64';
import { isEmpty, compact, toNumber, includes } from 'lodash';
import database from '../config/database';

const router = express.Router();

type ParamProps = {
  ids?: string;
  hash?: string;
  id?: string;
};

type MainRouterRequest = {
  query?: ParamProps;
  body?: ParamProps;
  ids?: string;
};

router.get('/', (request, response) => {
  response.json({ status: 'success' });
});

router.get('/ids', async (request: MainRouterRequest, response) => {
  if (isEmpty(request.query) && isEmpty(request.body)) {
    return response.json({ status: 'error' });
  }

  const params = request.query?.ids || request.body?.ids || '';
  const ids = compact(params.split(',').map(toNumber));

  const collection = (await database)
    .get('data', [])
    .filter((value) => includes(ids, value.id))
    .value();

  return response.json({
    status: 'success',
    data: collection
  });
});

router.get('/by', async (request: MainRouterRequest, response) => {
  if (isEmpty(request.query) && isEmpty(request.body)) {
    return response.json({ status: 'error' });
  }

  const params = request.query?.hash || request.body?.hash || '';
  const ids = compact(decode(params).split(',').map(toNumber));

  const collection = (await database)
    .get('data', [])
    .filter((value) => includes(ids, value.id))
    .value();

  response.json({
    status: 'success',
    data: collection
  });
});

router.get('/generate', async (request: MainRouterRequest, response) => {
  if (isEmpty(request.query) && isEmpty(request.body)) {
    return response.json({ status: 'error' });
  }

  const ids = request.query?.ids || request.body?.ids || '';

  response.json({
    status: 'success',
    data: encode(ids)
  });
});

router.get('/id', async (request: MainRouterRequest, response) => {
  if (isEmpty(request.query) && isEmpty(request.body)) {
    return response.json({ status: 'error' });
  }

  const id = request.query?.id || request.body?.id || '';

  const collection = (await database)
    .get('data', [])
    .filter((value) => toNumber(id) === value.id)
    .value();

  response.json({
    status: 'success',
    data: collection
  });
});

export default router;

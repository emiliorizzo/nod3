'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _formatters = require('../lib/formatters');
var _utils = require('../lib/utils');exports.default =

{
  getBlock(hashOrNumber, txs = false) {
    let method = 'eth_getBlockByNumber';
    let hOn = (0, _utils.isHashOrNuber)(hashOrNumber);

    if (hOn.hash) method = 'eth_getBlockByHash';else
    hashOrNumber = hOn.number;

    let params = [hashOrNumber, txs];
    return { method, params, formatter: _formatters.blockFormatter };
  },

  getTransactionByIndex(hashOrNumber, index) {
    let hOn = (0, _utils.isHashOrNuber)(hashOrNumber);
    let params = hOn.hash ? [hOn.hash] : [hOn.number];
    let method = hOn.hash ? 'eth_getTransactionByBlockHashAndIndex' : 'eth_getTransactionByBlockNumberAndIndex';
    index = (0, _utils.toHexStr)(index);
    params.push(index);
    return { method, params };
  },

  getTransactionByHash(hash) {
    let params = [hash];
    let method = 'eth_getTransactionByHash';
    return { method, params };
  },

  getTransactionReceipt(hash) {
    let method = 'eth_getTransactionReceipt';
    let params = [hash];
    return { method, params };
  },

  getBalance(address, block = 'latest') {
    block = parseBlockArg(block);
    return { method: 'eth_getBalance', params: [address] };
  },

  getCode(address, block = 'latest') {
    block = parseBlockArg(block);
    return { method: 'eth_getCode', params: [address, block] };
  } };


function parseBlockArg(block) {
  let hOn = (0, _utils.isHashOrNuber)(block);
  if (hOn.hash) block = hOn.hash;
  if (hOn.number) block = hOn.number;
  return block;
}
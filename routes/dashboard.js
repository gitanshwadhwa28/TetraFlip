const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const path = require('path');
const fs = require("fs");
var base64ToImage = require('base64-to-image');
var morgan = require('morgan')
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
var http = require('http');
var urlencode = require('urlencode');


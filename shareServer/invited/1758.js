var dbHandle = require('../file/dbHandle.js');
var utils = require('../util/utils.js');
var code = require('../util/code.js');
var signUtils = require('../util/signUtils')
var logger = require('../log.js').logger('comm');

var db = dbHandle.getHandle('channel_1758');

var channel = module.exports;

channel.checkSign = function(data) {
    var str = signUtils.signStrAndEqual(data);
    var secret = '704769cace5ea2fd5f0a984bd02ea9a1';
    return data.sign === signUtils.md5Sign(str, secret);
};

channel.saveMentor = function(data) {
    if (!data.gid) {
        logger.info('saveMentor invalid gid:', data.gid);
        return code.INVALID_GID;
    }

    if (!db.mentor) {
        db.mentor = {};
    }

    var args = {
        uid: data.uid,
        nickname: data.nickname
    };
    db.mentor[data.gid] = args;

    logger.info('saveMentor:', JSON.stringify(args));
    return code.OK;
}

channel.getMentor = function(inviteeGid) {
    if (!db.app || !db.app[inviteeGid]) {
        logger.info('getMentor unknow inviteeGid', inviteeGid);
        return code.INVALID_INVITED_GID;
    }
    var gid = db.app[inviteeGid].gid;

    if (!db.mentor || !db.mentor[gid]) {
        logger.info('getMentor unknow gid', inviteeGid, gid);
        return code.INVALID_GID;
    }
    var uid = db.mentor[gid].uid;

    if (!uid){
        logger.info('getMentor unknow uid', inviteeGid, gid, uid);
        return code.INVALID_UID;
    }

    var mentor = {};
    mentor.uid = uid;
    mentor.nickname = db.mentor[gid].nickname || "";

    logger.info('getMentor:', JSON.stringify(mentor));
    return mentor;
}


channel.saveApp = function(data) {
    if (!data.gid || !data.inviteeGid) {
        logger.info('saveApp invalid gid:', data.gid, data.inviteeGid);
        return code.INVALID_GID;
    }

    if (!db.app) {
        db.app = {};
    }

    var args = {
        gid: data.gid,
        inviteeGid: data.inviteeGid
    };
    db.app[data.inviteeGid] = args;
    logger.info('saveApp:', JSON.stringify(args));
    return code.OK;
}
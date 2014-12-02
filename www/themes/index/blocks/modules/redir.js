var  path = require('path'),
	 EventEmitter = require('events').EventEmitter;

var  redir = new EventEmitter(),
	 modCtx = {},
	 engine;

redir.setContext = function setContext(ctx)  {
	modCtx = {};
	for (var key in ctx) {
		modCtx[key] = ctx[key];
	}
	delete modCtx.basePath;
	engine = require( path.join(ctx.basePath, './api/ApiEngine.js'));
};

redir.run = function run(inData, res)  {

	// var apiPath = '/tryApp/'+'cms/page/list';
	var apiPath = '/tryApp/'+inData.path;
	var tryAppKey = '386d4e63-1044-c268-efd1-2de1b2e5b4e1';
	
	delete inData.path;
	for (var key in inData)
		modCtx[key] = inData[key];

	modCtx._key = modCtx._key || tryAppKey;
	modCtx._loc = modCtx._loc || inData._loc;

	engine.request(apiPath, modCtx, function(ctype, apiObj, isDone) {
		if (isDone) {
			redir.emit('done', apiObj);
		}
	});
};

module.exports = redir;

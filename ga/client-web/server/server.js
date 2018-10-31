Stream = require('node-rtsp-stream');
stream = new Stream({
    name: 'name',
    streamUrl: 'rtsp://localhost:8000/desktop',
    wsPort: 9004,
    //with:1920,
    with:2560,
    height:1080
});

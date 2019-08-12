
const HOST = 'http://yq01-sunbai.epc.baidu.com:8210';
const ROOT = '/home/work';

fis.match('/docs/**', {
    deploy: fis.plugin('http-push', {
        host: HOST,
        to: ROOT 
    })
});


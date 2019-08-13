
const HOST = 'http://yq01-sunbai.epc.baidu.com:8210';
const ROOT = '/home/work';

fis.match('/output/**', {
    deploy: fis.plugin('http-push', {
        host: HOST,
        to: ROOT 
    })
});

fis.set('project.ignore', [
    
]);
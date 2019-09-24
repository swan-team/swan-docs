const HOST = 'http://yq01-sunbai.epc.baidu.com:8200';
const ROOT = '/home/work';

fis.match('*', {
    deploy: fis.plugin('http-push', {
        host: HOST,
        to: ROOT 
    })
});

fis.set('project.ignore', [

]); 
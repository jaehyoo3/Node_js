import dns from 'dns/promises';

const ip = await dns.lookup('gilbut.co.kr');
console.log("lookup: ",ip);

const ip2 = await dns.resolve('gilbut.co.kr', 'A');
console.log("resolve a:",ip2);

const ip3 = await dns.resolve('gilbut.co.kr', 'MX');
console.log("resolve mx",ip3);

const ip4 = await dns.resolve('www.gilbut.co.kr','CNAME');
console.log("resolve cname", ip4);

const ip5 = await dns.resolve('gilbut.co.kr', 'ANY');
console.log("resolve any:", ip5);


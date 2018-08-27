$(function() {
	var testData = [
        {
            "id": "2c93d8d76487d955016487e067ed0000",
            "isdel": 0,
            "createtime": 1531287987000,
            "updatetime": 1531287987000,
            "phone": "17625495027",
            "name": "马家俊",
            "email": "111@qq.com",
            "registDate": "2018-07-11",
            "newLoginDate": "2018-08-23 14:57:38",
            "loginPlace": "上海",
            "passwd": "ESDavitdXJl0y47goiKcIsnIlEY7p9JbjzP6bl24OzKijZO0QSWSohmE3Qs9nKVvuhztuz9+U7ukKo8GdRiHZx/pyADxemV9kf4seG1w8K3B70i4Y1Dmd7YdXIkUZa1/frWNeo6N9EpABXP/+N8Urer9efCHccyLFck6Pe6u24Y=",
            "userStatus": 1,
            "headImage": null
        },
        {
            "id": "2c93d8d76487d955016487e067ed0001",
            "isdel": 0,
            "createtime": 1531472608000,
            "updatetime": 1531472615000,
            "phone": "13277053718",
            "name": "阳媛媛",
            "email": "mjj@qq.com",
            "registDate": "2018-07-11",
            "newLoginDate": "2018-08-14 11:58:44",
            "loginPlace": "北京",
            "passwd": "MvkYiYnWnOVCptKbxCJwAFgvSE5dFgKnSkR2Dc0mEIEPMRveUGcM3uN4M1M/KgleiZJC9ZX5BaJBF+4t6ipeUzxtJaxwno6LEBixx48nSzZkWLk9SG5YtNFvCJxVcdCrD/dvInIUYhd3PVm7UKUGdeLcfxFOoMqzmkzSvqW/tbg=",
            "userStatus": 1,
            "headImage": null
        },
        {
            "id": "2c93d8d7649314740164a37540720000",
            "isdel": 0,
            "createtime": 1531750727000,
            "updatetime": 1531750727000,
            "phone": "13000987765",
            "name": "托尔斯泰",
            "email": "ewqe@qq.com",
            "registDate": "2018-07-16 22:18:47",
            "newLoginDate": null,
            "loginPlace": "上海",
            "passwd": "wH902UezEC3GIePxume0vHgO6XS4RWHLXrP0sLkuGmAIAN95mHhyCbnK3VB0Wl/aHGruCiH0FsXuohzdkXhWWTjTnkNTJk6+HN60ssq8cNdvxPlkyXoDc6/yOAgAnvoen9WS/stwKtM3Okq9TsMKA8yy+fit7aaKCdt70Od1t4Y=",
            "userStatus": 0,
            "headImage": null
        },
        {
            "id": "2c93d8d764b213580164b549c3070000",
            "isdel": 0,
            "createtime": 1532049867000,
            "updatetime": 1532049867000,
            "phone": "18827388735",
            "name": "王林",
            "email": "1520396047@qq.com",
            "registDate": "2018-07-20 09:24:27",
            "newLoginDate": "2018-07-20 09:26:47",
            "loginPlace": "上海",
            "passwd": "gqQ9luLrcyGIhci5l1L66tAxxnvWiXEn6+otvQYl02g53I1hFBw2BD1T8YLKk07SUvWwGlQ1+C+AbtXJIj+XpvzJroZITBLbjEJNqXPTnkEzXiwfUXDIleigNEXv7pULEzLLs3mTmDTBDeHnsJk2n2MdygMqVTEP3Y8tQKmLuko=",
            "userStatus": 1,
            "headImage": null
        },
        {
            "id": "2c93d8d764d0cccc01651e044cfd0000",
            "isdel": 0,
            "createtime": 1533806922000,
            "updatetime": 1533806922000,
            "phone": "18188888888",
            "name": "朱再非",
            "email": "99999999@qq.com",
            "registDate": "2018-08-09 17:28:42",
            "newLoginDate": "2018-08-10 09:52:57",
            "loginPlace": "",
            "passwd": "PS9Y7r9iz2w9h0wNuZ63f4mO2Q0hx1xOqhWgf5D6BMkS9bVYLVrqq3pKlw21D3fSjTMvk0Fdadf2PHWoy8F70HkxsfvzYJbE8WraT7+1rfVIAv0x5xOOblkjoEj+UqQeX0vUTyFGEZkdL4pk/A2Tywqn5UzJHxWH1tGO100riFc=",
            "userStatus": 1,
            "headImage": null
        },
        {
            "id": "2c93d8d7656057b00165605b9f1c0000",
            "isdel": 0,
            "createtime": 1534919814000,
            "updatetime": 1534919814000,
            "phone": "17625495028",
            "name": "麻将机",
            "email": "mjj@123.com",
            "registDate": "2018-08-22 14:36:54",
            "newLoginDate": null,
            "loginPlace": "",
            "passwd": "IBsDOuL+e0/5Q5voVeffOIC83K7p0ZsTczD5gFVC1Ey8Q5ccFAS/WiOhxiQo3q7j2RMsZkY8JfzQo/MMbRFkg8wqq68yh+ZLbQ6nt4pQYTVhWnxos2cOywe6coQxTumP8H0eKIlpPmljdhcGjCfr9TQOsViojmr/wUiwUA9ZmLc=",
            "userStatus": 0,
            "headImage": null
        }
    ];
	
	var responseData = {};
	responseData.list=testData;//responseData.list中的list命名需要和{{if list}}，{{each list as value index}}中的list变量命名保持一致
	var dataHtml = template('dataList', responseData);//dataList需要和index.html中的模板（指的是最后的script地id）的id相同
	$('#toData').html(dataHtml);//toData需要和index.html中的tbody的id相同
})
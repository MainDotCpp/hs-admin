const { generateService } = require('@umijs/openapi');

generateService({
  schemaPath: 'http://localhost:8888/api/v3/api-docs', // 可以是.json文件，也可以是远程json地址
  requestLibPath: 'import {request} from "@/utils/request"',
  serversPath: './src',
  enumStyle: 'enum',
  apiPrefix: '"/api"',
  dataFields: ['data'],
  hook: {
    customFunctionName: (data) => {
      let path = data.path;
      path = path.replaceAll(/\/{.*?}/g, '');
      return path.split('/').at(-1);
    },
    customTypeName: (data) => {
      return data.operationId;
    },
  },
});
